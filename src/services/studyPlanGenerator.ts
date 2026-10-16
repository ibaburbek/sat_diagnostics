import { SKILL_MAP, SKILLS_TAXONOMY } from '../data/skills';
import {
  DiagnosticReport,
  StudentProfile,
  StudyPlan,
  StudyPlanItem,
} from '../types';

/**
 * Generates an individualized, prioritized weekly study plan.
 */
export function generateStudyPlan(
  report: DiagnosticReport,
  profile: StudentProfile
): StudyPlan {
  const weeklyHours = Math.max(2, profile.weeklyStudyHours || 4);
  const minutesPerWeek = weeklyHours * 60;
  const items: StudyPlanItem[] = [];

  // Categorize skills by priority:
  // Priority 1: Skills with status 'needs_attention', especially foundational prerequisites
  // Priority 2: Skills with status 'developing' or critical importance with medium accuracy
  // Priority 3: Skills with status 'insufficient_evidence' or 'strong' requiring advanced refinement

  const p1Skills: string[] = [];
  const p2Skills: string[] = [];
  const p3Skills: string[] = [];

  for (const skill of SKILLS_TAXONOMY) {
    const mastery = report.skillMasteries[skill.id];
    const status = mastery ? mastery.status : 'insufficient_evidence';

    if (status === 'needs_attention') {
      // Check if it's a prerequisite of other skills
      const isPrereq = SKILLS_TAXONOMY.some((s) => s.prerequisites.includes(skill.id));
      if (isPrereq || skill.importance === 'critical') {
        p1Skills.unshift(skill.id); // Highest urgency
      } else {
        p1Skills.push(skill.id);
      }
    } else if (status === 'developing') {
      p2Skills.push(skill.id);
    } else if (status === 'insufficient_evidence') {
      p2Skills.push(skill.id);
    } else {
      // Strong
      p3Skills.push(skill.id);
    }
  }

  // Helper to create StudyPlanItem
  let scheduledMinutesAccumulator = 0;
  let currentWeek = 1;

  const addItem = (skillId: string, priority: 1 | 2 | 3) => {
    const skill = SKILL_MAP.get(skillId);
    if (!skill) return;

    const mastery = report.skillMasteries[skillId];
    const status = mastery ? mastery.status : 'insufficient_evidence';
    const estimatedMinutes = priority === 1 ? 40 : priority === 2 ? 30 : 25;

    // Check week threshold
    if (scheduledMinutesAccumulator + estimatedMinutes > minutesPerWeek) {
      currentWeek += 1;
      scheduledMinutesAccumulator = 0;
    }
    scheduledMinutesAccumulator += estimatedMinutes;

    let whyNeeded = '';
    if (priority === 1) {
      whyNeeded = `Essential diagnostic gap. Direct prerequisite for multiple higher-level SAT problem types.`;
    } else if (priority === 2) {
      whyNeeded = `High-yield skill frequently tested on Digital SAT Module 1 and Module 2.`;
    } else {
      whyNeeded = `Refine pacing, eliminate careless errors, and secure top-bracket accuracy.`;
    }

    items.push({
      id: `item_${skill.id}_${Date.now()}_${items.length}`,
      skillId: skill.id,
      domainId: skill.domainId,
      priority,
      title: skill.name,
      learningObjective: skill.description.en,
      whyNeeded,
      estimatedMinutes,
      scheduledWeek: currentWeek,
      isCompleted: false,
    });
  };

  // Add Priority 1 items
  for (const sId of p1Skills) addItem(sId, 1);
  // Add Priority 2 items
  for (const sId of p2Skills) addItem(sId, 2);
  // Add Priority 3 items
  for (const sId of p3Skills) addItem(sId, 3);

  // If no items were added (e.g. perfect score), add all skills as refinement
  if (items.length === 0) {
    for (const skill of SKILLS_TAXONOMY) {
      addItem(skill.id, 3);
    }
  }

  return {
    id: `plan_${Date.now()}`,
    generatedAt: new Date().toISOString(),
    weeklyTargetHours: weeklyHours,
    totalWeeks: Math.max(currentWeek, 2),
    items,
  };
}
