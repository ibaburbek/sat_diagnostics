import { LessonContent } from '../types';

export const LESSONS_DATA: LessonContent[] = [
  // --- LESSON 1: Linear Equations in One Variable ---
  {
    skillId: 'alg_linear_eq_1var',
    title: {
      en: 'Mastering Linear Equations in One Variable',
      kk: 'Бір айнымалысы бар сызықтық теңдеулерді меңгеру',
      ru: 'Линейные уравнения с одной переменной: стратегии SAT',
      id: 'Menguasai Persamaan Linear Satu Variabel',
    },
    learningObjective: {
      en: 'Solve multi-step linear equations, handle fractional coefficients, and immediately identify when equations have one, zero, or infinitely many solutions.',
      kk: 'Көпсатылы сызықтық теңдеулерді шешу, бөлшек коэффициенттермен жұмыс істеу және шешімдер санын (бір, жоқ, шексіз) анықтау.',
      ru: 'Решать многошаговые уравнения, работать с дробями и определять число решений (одно, нет решений, бесконечно много).',
      id: 'Menyelesaikan persamaan linear multi-langkah, pecahan koefisien, dan mengenali apakah solusinya satu, nol, atau tak terhingga.',
    },
    conceptSummary: {
      en: [
        'An equation has ONE solution if the coefficients of x on both sides are different (e.g. 3x + 4 = 5x - 2).',
        'An equation has NO solution if the coefficients of x are equal but the constants are different (e.g. 4x + 7 = 4x - 1 => 7 = -1, impossible!). Lines are parallel.',
        'An equation has INFINITELY MANY solutions if both sides simplify to the exact same expression (e.g. 2(3x + 1) = 6x + 2 => 0 = 0).',
        'Pro-tip for the Digital SAT: Eliminate fractions immediately by multiplying the entire equation by the common denominator.',
      ],
      kk: [
        'Екі жақтағы x алдындағы коэффициенттер әртүрлі болса, теңдеудің ЖАЛҒЫЗ шешімі болады.',
        'x коэффициенттері тең, бірақ бос мүшелер әртүрлі болса, ШЕШІМІ БОЛМАЙДЫ (мысалы, 4x + 7 = 4x - 1 => 7 = -1 мүмкін емес).',
        'Екі жағы да толық бірдей болса, ШЕКСІЗ КӨП шешімі болады (мысалы, 6x + 2 = 6x + 2).',
        'Digital SAT кеңесі: Теңдеудің барлық мүшелерін ортақ бөлімге көбейтіп, бөлшектерден бірден құтылыңыз.',
      ],
      ru: [
        'Уравнение имеет РОВНО ОДНО решение, если коэффициенты при x в обеих частях различаются.',
        'Уравнение НЕ ИМЕЕТ решений, если коэффициенты при x равны, а свободные члены различны (например, 4x + 7 = 4x - 1 приводит к ложному 7 = -1).',
        'Уравнение имеет БЕСКОНЕЧНО МНОГО решений, если обе части тождественно равны (ax + b = ax + b).',
        'Совет для SAT: умножайте все члены на общий знаменатель, чтобы сразу избавиться от дробей.',
      ],
      id: [
        'Persamaan memiliki SATU solusi jika koefisien x di kedua ruas berbeda.',
        'Persamaan TIDAK MEMILIKI solusi jika koefisien x sama tetapi konstantanya berbeda (garis sejajar).',
        'Persamaan memiliki TAK HINGGA solusi jika kedua ruas identik sama.',
        'Tips SAT: Kalikan seluruh persamaan dengan KPK penyebut untuk mengeliminasi pecahan.',
      ],
    },
    keyFormulas: [
      'ax + b = cx + d',
      'One solution: a ≠ c',
      'No solution: a = c and b ≠ d',
      'Infinitely many solutions: a = c and b = d',
    ],
    glossaryTermIds: ['equivalent_expressions', 'consecutive_integers'],
    workedExample: {
      problemText: {
        en: 'For which value of a does the equation 5(2x - 3) = ax - 15 have infinitely many solutions?',
        kk: 'a-ның қандай мәнінде 5(2x - 3) = ax - 15 теңдеуінің шексіз көп шешімі болады?',
        ru: 'При каком значении a уравнение 5(2x - 3) = ax - 15 имеет бесконечно много решений?',
        id: 'Untuk nilai a berapakah persamaan 5(2x - 3) = ax - 15 memiliki tak hingga solusi?',
      },
      steps: {
        en: [
          'Step 1: Distribute 5 on the left-hand side: 5(2x) - 5(3) = 10x - 15.',
          'Step 2: Set the expanded expression equal to the right side: 10x - 15 = ax - 15.',
          'Step 3: For infinitely many solutions, the expressions on both sides must be identical identities.',
          'Step 4: The constant terms already match (-15 = -15). Equate the x-coefficients: 10 = a.',
          'Final Answer: a = 10.',
        ],
        kk: [
          '1-қадам: Сол жақты жақшадан ашамыз: 5(2x) - 5(3) = 10x - 15.',
          '2-қадам: Оң жақпен теңестіреміз: 10x - 15 = ax - 15.',
          '3-қадам: Шексіз шешім болуы үшін теңдеудің екі жағы да толық бірдей болуы керек.',
          '4-қадам: -15 = -15 сәйкес келіп тұр, ендеше x алдындағы 10 = a болуы қажет.',
          'Жауап: a = 10.',
        ],
        ru: [
          'Шаг 1: Раскрываем скобки: 5(2x) - 5(3) = 10x - 15.',
          'Шаг 2: Приравниваем к правой части: 10x - 15 = ax - 15.',
          'Шаг 3: Для бесконечного числа решений обе части должны быть тождественно равны.',
          'Шаг 4: Свободные члены равны (-15 = -15), значит приравниваем коэффициенты при x: a = 10.',
          'Ответ: a = 10.',
        ],
        id: [
          'Langkah 1: Jabarkan ruas kiri: 5(2x) - 5(3) = 10x - 15.',
          'Langkah 2: Samakan dengan ruas kanan: 10x - 15 = ax - 15.',
          'Langkah 3: Agar solusinya tak terhingga, kedua ruas harus identik.',
          'Langkah 4: Karena -15 = -15, maka haruslah a = 10.',
          'Jawaban Akhir: a = 10.',
        ],
      },
      finalAnswer: '10',
      strategyTakeaway: {
        en: 'Whenever you see "infinitely many solutions" on the SAT, expand both sides and match the coefficients directly!',
        kk: 'SAT-та "infinitely many solutions" көргенде, екі жақты жақшадан ашып, коэффициенттерді тікелей теңестіріңіз!',
        ru: 'Видя на SAT фразу "infinitely many solutions", сразу раскройте скобки и приравняйте соответствующие коэффициенты.',
        id: 'Jika menemukan "infinitely many solutions" di SAT, segera jabarkan kedua ruas dan samakan koefisiennya!',
      },
    },
    guidedPracticeQuestionId: 'q_alg_02_d',
    independentPracticeQuestionIds: ['q_alg_01_f', 'q_alg_08_p'],
  },

  // --- LESSON 2: Linear Functions and Rate of Change ---
  {
    skillId: 'alg_linear_functions_models',
    title: {
      en: 'Linear Models, Slope, and Contextual Interpretation',
      kk: 'Сызықтық үлгілер, көлбеулік және мағыналық түсіндіру',
      ru: 'Линейные функции, наклон (slope) и текстовые задачи SAT',
      id: 'Model Linear, Gradien, dan Interpretasi Kontekstual',
    },
    learningObjective: {
      en: 'Decode SAT word problems involving y = mx + b, interpret slope as a rate of change, and recognize relationships between parallel and perpendicular lines.',
      kk: 'y = mx + b түріндегі SAT есептерін талдау, көлбеулікті өзгеріс жылдамдығы ретінде түсіндіру және перпендикуляр түзулер қасиетін қолдану.',
      ru: 'Интерпретировать y = mx + b в контексте, связывать наклон с физической скоростью изменения и использовать свойства перпендикулярных прямых.',
      id: 'Menganalisis soal cerita y = mx + b, menafsirkan kemiringan sebagai laju perubahan, dan memahami relasi garis tegak lurus.',
    },
    conceptSummary: {
      en: [
        'Slope m = (y2 - y1) / (x2 - x1) = Rise / Run. In word problems, look for keywords like "per", "each", "rate", or "hourly".',
        'y-intercept b is the starting value when the input x = 0 (e.g. flat deposit, entry fee, initial temperature).',
        'Parallel lines have identical slopes: m1 = m2.',
        'Perpendicular lines have negative reciprocal slopes: m1 × m2 = -1 (e.g., 3/4 becomes -4/3).',
      ],
      kk: [
        'Көлбеулік m = (y2 - y1) / (x2 - x1). Сөздік есептерде "әрбір", "сағатына", "бірлікке" сөздері кездеседі.',
        'у-қиылысы b — x = 0 болғандағы бастапқы мән (бастапқы жарна, негізгі ақы).',
        'Параллель түзулердің көлбеулері бірдей: m1 = m2.',
        'Перпендикуляр түзулердің көлбеулері кері таңбалы кері сандар: m1 × m2 = -1 (мысалы, 3/4 және -4/3).',
      ],
      ru: [
        'Наклон m = Δy / Δx. В текстовых задачах ищите маркеры: "каждый", "в час", "за единицу", "скорость".',
        'y-пересечение b — это исходное значение при x = 0 (стартовый взнос, начальная температура).',
        'У параллельных прямых угловые коэффициенты одинаковы: m1 = m2.',
        'У перпендикулярных прямых наклон отрицательный и обратный: m1 × m2 = -1.',
      ],
      id: [
        'Gradien m = Δy / Δx. Kata kunci: "per", "setiap", "laju", "tarif per jam".',
        'Perpotongan-y b adalah nilai awal saat x = 0.',
        'Garis sejajar memiliki gradien sama: m1 = m2.',
        'Garis tegak lurus memiliki gradien lawan kebalikan: m1 × m2 = -1.',
      ],
    },
    keyFormulas: [
      'Slope-Intercept Form: y = mx + b',
      'Point-Slope Form: y - y1 = m(x - x1)',
      'Perpendicular Slopes: m_perp = -1 / m',
    ],
    glossaryTermIds: ['rate_of_change', 'slope', 'intercept', 'perpendicular'],
    workedExample: {
      problemText: {
        en: 'A rental company charges a $50 reservation fee plus $25 per day. If total cost is $225, how many days was the car rented?',
        kk: 'Жалға беру компаниясы $50 брондау ақысын және күніне $25 алады. Жалпы сома $225 болса, көлік неше күнге жалға алынған?',
        ru: 'Прокат берет $50 за бронь плюс $25 за каждый день аренды. Если общая сумма составила $225, на сколько дней был взят автомобиль?',
        id: 'Perusahaan rental mengenakan biaya reservasi $50 ditambah $25 per hari. Jika total biaya $225, berapa harikah mobil disewa?',
      },
      steps: {
        en: [
          'Step 1: Set up the linear equation: Total Cost C = 25d + 50, where d is the number of days.',
          'Step 2: Plug in the known total cost: 225 = 25d + 50.',
          'Step 3: Subtract 50 from both sides: 175 = 25d.',
          'Step 4: Divide by 25: d = 175 / 25 = 7 days.',
        ],
        kk: [
          '1-қадам: Теңдеу құрамыз: C = 25d + 50, мұндағы d — күндер саны.',
          '2-қадам: Жалпы бағаны қоямыз: 225 = 25d + 50.',
          '3-қадам: 50-ді азайтамыз: 175 = 25d.',
          '4-қадам: 25-ке бөлеміз: d = 7 күн.',
        ],
        ru: [
          'Шаг 1: Составляем уравнение: C = 25d + 50.',
          'Шаг 2: Подставляем общую сумму: 225 = 25d + 50.',
          'Шаг 3: 175 = 25d.',
          'Шаг 4: d = 175 / 25 = 7 дней.',
        ],
        id: [
          'Langkah 1: Bentuk persamaan linear: C = 25d + 50.',
          'Langkah 2: Masukkan nilai total biaya: 225 = 25d + 50.',
          'Langkah 3: 175 = 25d.',
          'Langkah 4: d = 7 hari.',
        ],
      },
      finalAnswer: '7',
      strategyTakeaway: {
        en: 'Always separate the fixed one-time fee (intercept) from the recurring rate (slope) when forming linear models.',
        kk: 'Сызықтық үлгілер құрғанда тұрақты бір реттік төлем мен қайталанатын қарқынды әрқашан ажыратып алыңыз.',
        ru: 'Всегда отделяйте разовый фиксированный платеж от повторяющейся ставки при моделировании.',
        id: 'Selalu pisahkan biaya tetap satu kali dengan tarif berulang saat membuat model aljabar.',
      },
    },
    guidedPracticeQuestionId: 'q_alg_03_f',
    independentPracticeQuestionIds: ['q_alg_04_p'],
  },

  // --- LESSON 3: Quadratic Equations & Parabolas ---
  {
    skillId: 'adv_quadratics_factoring',
    title: {
      en: 'Quadratic Equations, Factoring & Discriminant',
      kk: 'Квадрат теңдеулер, көбейткіштерге жіктеу және дискриминант',
      ru: 'Квадратные уравнения, факторизация и дискриминант',
      id: 'Persamaan Kuadrat, Faktorisasi, dan Diskriminan',
    },
    learningObjective: {
      en: 'Master factoring quadratics, applying Vieta\'s relations, utilizing the discriminant b² - 4ac, and finding vertex coordinates.',
      kk: 'Квадрат үшмүшені жіктеу, Виет формулаларын қолдану, b² - 4ac дискриминантын және парабола төбесін табуды үйрену.',
      ru: 'Освоить факторизацию, теорему Виета, дискриминант b² - 4ac и координаты вершины параболы.',
      id: 'Menguasai faktorisasi persamaan kuadrat, rumus Vieta, diskriminan b² - 4ac, dan titik puncak kurva.',
    },
    conceptSummary: {
      en: [
        'Standard form: ax² + bx + c = 0.',
        'Discriminant D = b² - 4ac determines number of real solutions: D > 0 (2 solutions), D = 0 (1 solution, tangent), D < 0 (0 real solutions).',
        'Vertex form: y = a(x - h)² + k gives vertex at (h, k).',
        'Vertex x-coordinate from standard form: x_v = -b / (2a).',
      ],
      kk: [
        'Стандартты түр: ax² + bx + c = 0.',
        'Дискриминант D = b² - 4ac: D > 0 (екі түбір), D = 0 (бір түбір), D < 0 (нақты түбірі жоқ).',
        'Төбе түрі: y = a(x - h)² + k нүктесі (h, k) болады.',
        'Стандартты түрден төбенің x-і: x_v = -b / (2a).',
      ],
      ru: [
        'Стандартный вид: ax² + bx + c = 0.',
        'Дискриминант D = b² - 4ac: D > 0 (2 корня), D = 0 (1 корень), D < 0 (нет действительных корней).',
        'Форма вершины: y = a(x - h)² + k задает вершину в (h, k).',
        'Координата вершины по x: x_v = -b / (2a).',
      ],
      id: [
        'Bentuk umum: ax² + bx + c = 0.',
        'Diskriminan D = b² - 4ac: D > 0 (2 akar), D = 0 (1 akar), D < 0 (tidak ada akar real).',
        'Bentuk puncak: y = a(x - h)² + k memiliki titik puncak (h, k).',
        'Absis puncak: x_v = -b / (2a).',
      ],
    },
    keyFormulas: [
      'Quadratic Formula: x = (-b ± √(b² - 4ac)) / (2a)',
      'Discriminant: D = b² - 4ac',
      'Vertex x: x = -b / (2a)',
    ],
    glossaryTermIds: ['discriminant', 'vertex'],
    workedExample: {
      problemText: {
        en: 'What is the sum of the solutions to x² - 9x + 14 = 0?',
        kk: 'x² - 9x + 14 = 0 теңдеуі шешімдерінің қосындысы неге тең?',
        ru: 'Чему равна сумма корней уравнения x² - 9x + 14 = 0?',
        id: 'Berapakah jumlah dari akar-akar persamaan x² - 9x + 14 = 0?',
      },
      steps: {
        en: [
          'Method 1 (Factoring): (x - 2)(x - 7) = 0 => x = 2 and x = 7. Sum = 2 + 7 = 9.',
          'Method 2 (Vieta\'s Formula, faster!): For ax² + bx + c = 0, sum of roots is -b/a.',
          'Here a = 1, b = -9. Sum = -(-9) / 1 = 9.',
        ],
        kk: [
          '1-тәсіл: (x - 2)(x - 7) = 0 => x = 2 және x = 7. Қосынды = 2 + 7 = 9.',
          '2-тәсіл (Виет теоремасы, жылдамырақ!): Түбірлер қосындысы = -b/a.',
          'a = 1, b = -9. Қосынды = -(-9) / 1 = 9.',
        ],
        ru: [
          'Способ 1: (x - 2)(x - 7) = 0 => x = 2 и x = 7. Сумма = 9.',
          'Способ 2 (Теорема Виета, быстрее!): Сумма корней равна -b/a.',
          'a = 1, b = -9 => Сумма = -(-9)/1 = 9.',
        ],
        id: [
          'Metode 1: (x - 2)(x - 7) = 0 => x = 2 dan x = 7. Jumlah = 9.',
          'Metode 2 (Rumus Vieta, lebih cepat!): Jumlah akar = -b/a.',
          'a = 1, b = -9 => Jumlah = -(-9)/1 = 9.',
        ],
      },
      finalAnswer: '9',
      strategyTakeaway: {
        en: 'Vieta\'s formula (Sum = -b/a) solves "sum of solutions" questions in 5 seconds without ever factoring!',
        kk: 'Виет формуласы (Қосынды = -b/a) көбейткіштерге жіктемей-ақ түбірлер қосындысын 5 секундта табуға мүмкіндік береді!',
        ru: 'Теорема Виета (Сумма = -b/a) позволяет решить вопрос о сумме корней за секунды без разложения.',
        id: 'Rumus Vieta (Jumlah = -b/a) menyelesaikan pertanyaan jumlah akar dalam 5 detik tanpa perlu faktorisasi!',
      },
    },
    guidedPracticeQuestionId: 'q_adv_01_f',
    independentPracticeQuestionIds: ['q_adv_02_p', 'q_adv_03_d', 'q_adv_06_a'],
  },

  // --- LESSON 4: Percentages, Ratios & Statistics ---
  {
    skillId: 'ps_percentages',
    title: {
      en: 'Percentages, Proportions & Data Analysis',
      kk: 'Пайыздар, пропорциялар және деректерді талдау',
      ru: 'Проценты, пропорции и анализ статистических данных',
      id: 'Persentase, Proporsi, dan Analisis Data',
    },
    learningObjective: {
      en: 'Calculate percent change accurately, solve multi-step discounts and reverse percentage problems, and understand how outliers affect mean vs median.',
      kk: 'Пайыздық өзгерісті дұрыс есептеу, көпсатылы жеңілдіктер мен кері есептерді шешу және орта мән мен медиана айырмашылығын түсіну.',
      ru: 'Вычислять процентные изменения, решать задачи на последовательные скидки и понимать влияние выбросов на среднее и медиану.',
      id: 'Menghitung persentase perubahan, menyelesaikan diskon bertingkat dan persentase terbalik, serta memahami dampak pencilan pada mean dan median.',
    },
    conceptSummary: {
      en: [
        'Percent Change Formula: (Difference / Original Starting Value) × 100%. Always divide by the starting value!',
        'A 20% increase is multiplying by 1.20; a 20% decrease is multiplying by 0.80.',
        'Never add successive discounts: a 20% discount followed by a 10% discount is 0.80 × 0.90 = 0.72 (a 28% total discount, not 30%!).',
        'Mean is pulled heavily towards extreme outliers. Median remains stable and unaffected by single extreme values.',
      ],
      kk: [
        'Пайыздық өзгеріс: (Айырма / Бастапқы мән) × 100%. Әрқашан бастапқы мәнге бөліңіз!',
        '20% өсім — 1.20-ге көбейту; 20% төмендеу — 0.80-ге көбейту.',
        'Тізбекті жеңілдіктерді қоспаңыз: 20% сосын 10% жеңілдік 0.80 × 0.90 = 0.72 (жалпы 28% жеңілдік).',
        'Орта мән шеткі сандарға (outliers) өте сезімтал, ал медиана тұрақты қалады.',
      ],
      ru: [
        'Формула процентного изменения: (Разница / Исходное значение) × 100%. Делить всегда на первоначальное!',
        'Увеличение на 20% — это умножение на 1.20; снижение на 20% — умножение на 0.80.',
        'Последовательные скидки перемножаются: 0.80 × 0.90 = 0.72 (общая скидка 28%, а не 30%).',
        'Среднее арифметическое сильно смещается выбросами, медиана устойчива.',
      ],
      id: [
        'Rumus Persentase Perubahan: (Selisih / Nilai Awal) × 100%.',
        'Kenaikan 20% = kalikan 1.20; penurunan 20% = kalikan 0.80.',
        'Diskon bertingkat dikalikan: 0.80 × 0.90 = 0.72 (total diskon 28%).',
        'Mean sangat dipengaruhi pencilan, sedangkan median tetap kokoh.',
      ],
    },
    keyFormulas: [
      'Percent Change = ((New - Old) / Old) × 100%',
      'Multiplier = (1 ± r)',
      'Probability = Desired Outcomes / Total Possible Outcomes',
    ],
    glossaryTermIds: ['percent_increase', 'mean_and_median', 'standard_deviation'],
    workedExample: {
      problemText: {
        en: 'A shirt originally costing $80 is marked up by 25%. During a weekend sale, it is discounted by 20%. What is the final price of the shirt?',
        kk: 'Бастапқы бағасы $80 көйлек 25%-ға қымбаттады. Демалыс күнгі жеңілдікте ол 20%-ға арзандатылды. Көйлектің соңғы бағасы қанша?',
        ru: 'Рубашка стоимостью $80 подорожала на 25%. На распродаже выходного дня ее уценили на 20%. Какова итоговая цена рубашки?',
        id: 'Sebuah kemeja berharga $80 dinaikkan harganya sebesar 25%. Saat obral akhir pekan, harganya didiskon 20%. Berapakah harga akhir kemeja tersebut?',
      },
      steps: {
        en: [
          'Step 1: Increase $80 by 25%: 80 × 1.25 = $100.',
          'Step 2: Discount $100 by 20%: 100 × 0.80 = $80.',
          'Step 3: Notice that 1.25 × 0.80 = 1.00, returning the price exactly to its starting value.',
          'Final Answer: $80.',
        ],
        kk: [
          '1-қадам: 80 долларды 25%-ға көбейтеміз: 80 × 1.25 = $100.',
          '2-қадам: 100 доллардан 20%-ды шегереміз: 100 × 0.80 = $80.',
          '3-қадам: 1.25 × 0.80 = 1.00 болғандықтан, баға бастапқы қалпына оралды.',
          'Жауап: $80.',
        ],
        ru: [
          'Шаг 1: Повышение на 25%: 80 × 1.25 = $100.',
          'Шаг 2: Скидка 20%: 100 × 0.80 = $80.',
          'Шаг 3: Так как 1.25 × 0.80 = 1.00, цена вернулась к исходной.',
          'Ответ: $80.',
        ],
        id: [
          'Langkah 1: Naik 25%: 80 × 1.25 = $100.',
          'Langkah 2: Diskon 20%: 100 × 0.80 = $80.',
          'Langkah 3: Karena 1.25 × 0.80 = 1.00, harga kembali seperti semula.',
          'Jawaban Akhir: $80.',
        ],
      },
      finalAnswer: '$80',
      strategyTakeaway: {
        en: 'A 25% increase (+1/4) is cancelled out by a 20% decrease (-1/5) because (5/4) × (4/5) = 1!',
        kk: '25% өсім (+1/4) 20% төмендеумен (-1/5) толық жойылады, себебі (5/4) × (4/5) = 1!',
        ru: 'Рост на 25% компенсируется снижением на 20%, так как 5/4 × 4/5 = 1.',
        id: 'Kenaikan 25% (+1/4) diimbangi dengan penurunan 20% (-1/5) karena (5/4) × (4/5) = 1.',
      },
    },
    guidedPracticeQuestionId: 'q_ps_02_d',
    independentPracticeQuestionIds: ['q_ps_01_f', 'q_ps_03_p', 'q_ps_04_p', 'q_ps_05_a'],
  },

  // --- LESSON 5: Geometry & Trigonometry ---
  {
    skillId: 'geom_right_triangles_trig',
    title: {
      en: 'Right Triangles, SOH CAH TOA & Circle Theorems',
      kk: 'Тікбұрышты үшбұрыштар, тригонометрия және шеңберлер',
      ru: 'Прямоугольные треугольники, тригонометрия и уравнения окружностей',
      id: 'Segitiga Siku-Siku, Trigonometri, dan Persamaan Lingkaran',
    },
    learningObjective: {
      en: 'Apply the Pythagorean theorem, special right triangle ratios (30-60-90, 45-45-90), trigonometric identities sin(x) = cos(90-x), and circle equations (x-h)² + (y-k)² = r².',
      kk: 'Пифагор теоремасын, ерекше үшбұрыштар қатынасын, sin(x) = cos(90-x) теңдігін және шеңбер теңдеуін толық меңгеру.',
      ru: 'Применять теорему Пифагора, специальные треугольники 30-60-90 и 45-45-90, тождество sin(x) = cos(90-x) и выделение полного квадрата для окружностей.',
      id: 'Menerapkan teorema Pythagoras, segitiga istimewa, identitas sudut komplemen sin(x) = cos(90-x), dan persamaan lingkaran.',
    },
    conceptSummary: {
      en: [
        'Pythagorean Theorem: a² + b² = c² (where c is the hypotenuse). Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.',
        'Special Triangles: 45-45-90 has sides x : x : x√2. 30-60-90 has sides x : x√3 : 2x.',
        'Trig Identity: sin(x°) = cos(90° - x°). Opposite of one acute angle is the adjacent of the other.',
        'Circle Standard Equation: (x - h)² + (y - k)² = r² has center (h, k) and radius r = √(r²).',
      ],
      kk: [
        'Пифагор теоремасы: a² + b² = c² (мұнда c — гипотенуза). Негізгі үштіктер: 3-4-5, 5-12-13.',
        'Ерекше үшбұрыштар: 45-45-90 қатынасы x : x : x√2; 30-60-90 қатынасы x : x√3 : 2x.',
        'Негізгі тепе-теңдік: sin(x°) = cos(90° - x°).',
        'Шеңбер теңдеуі: (x - h)² + (y - k)² = r² центрі (h, k), радиусы r болады.',
      ],
      ru: [
        'Теорема Пифагора: a² + b² = c². Популярные пифагоровы тройки: 3-4-5, 5-12-13.',
        'Особые треугольники: 45-45-90 (x : x : x√2) и 30-60-90 (x : x√3 : 2x).',
        'Ключевое тождество: sin(x) = cos(90° - x).',
        'Уравнение окружности: (x - h)² + (y - k)² = r² с центром в (h, k) и радиусом r.',
      ],
      id: [
        'Teorema Pythagoras: a² + b² = c². Tripel populer: 3-4-5, 5-12-13.',
        'Segitiga istimewa: 45-45-90 (x : x : x√2) dan 30-60-90 (x : x√3 : 2x).',
        'Identitas komplemen: sin(x) = cos(90° - x).',
        'Persamaan lingkaran: (x - h)² + (y - k)² = r² dengan pusat (h, k) dan jari-jari r.',
      ],
    },
    keyFormulas: [
      'a² + b² = c²',
      'sin(θ) = Opposite / Hypotenuse',
      'cos(θ) = Adjacent / Hypotenuse',
      '(x - h)² + (y - k)² = r²',
    ],
    glossaryTermIds: ['hypotenuse', 'perpendicular'],
    workedExample: {
      problemText: {
        en: 'In a right triangle with legs of length 7 and 24, what is the length of the hypotenuse?',
        kk: 'Катеттері 7 және 24 болатын тікбұрышты үшбұрыштың гипотенузасы неге тең?',
        ru: 'В прямоугольном треугольнике катеты равны 7 и 24. Чему равна длина гипотенузы?',
        id: 'Pada segitiga siku-siku dengan sisi siku-siku 7 dan 24, berapakah panjang sisi miringnya (hipotenusa)?',
      },
      steps: {
        en: [
          'Step 1: Apply Pythagorean theorem: a² + b² = c².',
          'Step 2: 7² + 24² = 49 + 576 = 625.',
          'Step 3: Take square root: c = √625 = 25.',
          '(Recognizing the standard Pythagorean triple 7-24-25 solves this in 1 second!)',
        ],
        kk: [
          '1-қадам: Пифагор теоремасы: a² + b² = c².',
          '2-қадам: 7² + 24² = 49 + 576 = 625.',
          '3-қадам: c = √625 = 25.',
          '(7-24-25 стандартты Пифагор үштігін білу есепті 1 секундта шығарады!)',
        ],
        ru: [
          'Шаг 1: Теорема Пифагора: c² = 7² + 24².',
          'Шаг 2: c² = 49 + 576 = 625.',
          'Шаг 3: c = √625 = 25.',
          '(Пифагорова тройка 7-24-25 дает ответ мгновенно!)',
        ],
        id: [
          'Langkah 1: Teorema Pythagoras: c² = 7² + 24².',
          'Langkah 2: c² = 49 + 576 = 625.',
          'Langkah 3: c = √625 = 25.',
          '(Tripel Pythagoras 7-24-25 langsung memberikan jawaban!)',
        ],
      },
      finalAnswer: '25',
      strategyTakeaway: {
        en: 'Memorize the core Pythagorean triples (3-4-5, 5-12-13, 7-24-25, 8-15-17) to eliminate lengthy root calculations on test day.',
        kk: 'Негізгі Пифагор үштіктерін (3-4-5, 5-12-13, 7-24-25, 8-15-17) есте сақтау емтиханда уақытты үнемдейді.',
        ru: 'Запомните тройки 3-4-5, 5-12-13, 7-24-25, 8-15-17 для мгновенного нахождения сторон.',
        id: 'Hafalkan tripel Pythagoras dasar untuk menghemat waktu berharga saat ujian.',
      },
    },
    guidedPracticeQuestionId: 'q_geom_02_d',
    independentPracticeQuestionIds: ['q_geom_01_f', 'q_geom_03_p', 'q_geom_04_d', 'q_geom_05_a'],
  },
];

export const LESSONS_MAP = new Map<string, LessonContent>(
  LESSONS_DATA.map((l) => [l.skillId, l])
);
