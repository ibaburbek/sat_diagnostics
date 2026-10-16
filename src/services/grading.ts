import { ErrorCategory, Question } from '../types';

/**
 * Parses numeric input string into a number.
 * Supports:
 * - standard decimals e.g. "0.75", ".75", "-3.4"
 * - fractions e.g. "3/4", "-17/5"
 */
export function parseNumericAnswer(input: string): number | null {
  if (!input) return null;
  const cleaned = input.trim();
  
  // Check for fraction: "a/b"
  if (cleaned.includes('/')) {
    const parts = cleaned.split('/');
    if (parts.length === 2) {
      const num = parseFloat(parts[0].trim());
      const den = parseFloat(parts[1].trim());
      if (!isNaN(num) && !isNaN(den) && den !== 0) {
        return num / den;
      }
    }
    return null;
  }

  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}

/**
 * Validates a student's answer against a question.
 */
export function gradeAnswer(
  question: Question,
  submittedAnswer: string
): { isCorrect: boolean; errorCategory?: ErrorCategory } {
  const trimmed = submittedAnswer.trim();
  if (!trimmed) {
    return { isCorrect: false, errorCategory: 'careless_error' };
  }

  // Case 1: Multiple Choice Question
  if (question.type === 'multiple_choice') {
    const isCorrect = trimmed.toUpperCase() === question.correctAnswer.toUpperCase();
    if (isCorrect) {
      return { isCorrect: true };
    }

    // Infer common distractor patterns
    let category: ErrorCategory = 'conceptual_misunderstanding';
    const choice = question.choices?.find((c) => c.id.toUpperCase() === trimmed.toUpperCase());
    if (choice) {
      const exp = choice.explanation.en.toLowerCase();
      if (exp.includes('sign') || exp.includes('arithmetic') || exp.includes('calculation')) {
        category = 'arithmetic_calculation';
      } else if (exp.includes('formula') || exp.includes('pythagorean') || exp.includes('vertex')) {
        category = 'incorrect_formula';
      } else if (exp.includes('vocabulary') || exp.includes('at least') || exp.includes('at most')) {
        category = 'english_vocabulary';
      } else if (exp.includes('distribute') || exp.includes('factor') || exp.includes('elimination')) {
        category = 'algebraic_manipulation';
      }
    }

    return { isCorrect: false, errorCategory: category };
  }

  // Case 2: Student Produced Numeric (Grid-in)
  // Check direct string match against acceptable answers
  const allAcceptable = [
    question.correctAnswer,
    ...(question.acceptableNumericAnswers || []),
  ].map((a) => a.trim().toLowerCase());

  if (allAcceptable.includes(trimmed.toLowerCase())) {
    return { isCorrect: true };
  }

  // Numerical comparison with float tolerance
  const studentVal = parseNumericAnswer(trimmed);
  const correctVal = parseNumericAnswer(question.correctAnswer);

  if (studentVal !== null && correctVal !== null) {
    const diff = Math.abs(studentVal - correctVal);
    // SAT standard allows 0.001 precision or exact match
    if (diff < 0.001) {
      return { isCorrect: true };
    }
  }

  return { isCorrect: false, errorCategory: 'arithmetic_calculation' };
}
