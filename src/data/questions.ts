import { Question } from '../types';

export const QUESTION_BANK: Question[] = [
  // ==========================================
  // DOMAIN: ALGEBRA
  // ==========================================

  // --- Skill: alg_linear_eq_1var (Linear Equations in One Variable) ---
  {
    id: 'q_alg_01_f',
    skillId: 'alg_linear_eq_1var',
    domainId: 'algebra',
    subtopic: 'One-Variable Linear Equations',
    difficulty: 'foundation',
    type: 'multiple_choice',
    prompt: {
      en: 'If 4x + 7 = 31, what is the value of x?',
      kk: 'Егер 4x + 7 = 31 болса, x-тің мәні неге тең?',
      ru: 'Если 4x + 7 = 31, чему равно значение x?',
      id: 'Jika 4x + 7 = 31, berapakah nilai x?',
    },
    choices: [
      {
        id: 'A',
        text: '6',
        explanation: {
          en: 'Correct. Subtracting 7 gives 4x = 24. Dividing by 4 gives x = 6.',
          kk: 'Дұрыс. 7-ні азайтсақ 4x = 24. 4-ке бөлсек x = 6 шығады.',
          ru: 'Правильно. Вычитая 7, получаем 4x = 24. Разделив на 4, получаем x = 6.',
          id: 'Benar. Mengurangkan 7 menghasilkan 4x = 24. Membagi dengan 4 menghasilkan x = 6.',
        },
      },
      {
        id: 'B',
        text: '8',
        explanation: {
          en: 'Incorrect. Adding 7 to 31 gives 38, which is an error in operation sign.',
          kk: 'Қате. 31-ге 7-ні қосу амал таңбасынан қателесу болып табылады.',
          ru: 'Неверно. Ошибка со знаком при переносе (сложили вместо вычитания).',
          id: 'Salah. Kesalahan tanda saat memindahkan suku (menjumlahkan bukan mengurangkan).',
        },
      },
      {
        id: 'C',
        text: '9.5',
        explanation: {
          en: 'Incorrect. Divided 38 by 4 instead of subtracting 7 first.',
          kk: 'Қате. 7-ні азайтудың орнына 38-ді 4-ке бөлген.',
          ru: 'Неверно. 38 разделили на 4 вместо вычитания 7.',
          id: 'Salah. 38 dibagi 4 alih-alih mengurangkan 7 terlebih dahulu.',
        },
      },
      {
        id: 'D',
        text: '24',
        explanation: {
          en: 'Incorrect. 24 is the value of 4x, not x.',
          kk: 'Қате. 24 — x-тің емес, 4x-тің мәні.',
          ru: 'Неверно. 24 — это значение 4x, а не x.',
          id: 'Salah. 24 adalah nilai dari 4x, bukan x.',
        },
      },
    ],
    correctAnswer: 'A',
    workedSolution: {
      en: [
        'Step 1: Subtract 7 from both sides: 4x = 31 - 7 = 24.',
        'Step 2: Divide both sides by 4: x = 24 / 4 = 6.',
        'Step 3: Verification: 4(6) + 7 = 24 + 7 = 31.',
      ],
      kk: [
        '1-қадам: Екі жағынан да 7-ні азайтамыз: 4x = 31 - 7 = 24.',
        '2-қадам: Екі жағын да 4-ке бөлеміз: x = 24 / 4 = 6.',
        '3-қадам: Тексеру: 4(6) + 7 = 24 + 7 = 31.',
      ],
      ru: [
        'Шаг 1: Вычитаем 7 из обеих частей: 4x = 31 - 7 = 24.',
        'Шаг 2: Делим обе части на 4: x = 24 / 4 = 6.',
        'Шаг 3: Проверка: 4(6) + 7 = 24 + 7 = 31.',
      ],
      id: [
        'Langkah 1: Kurangkan 7 dari kedua ruas: 4x = 31 - 7 = 24.',
        'Langkah 2: Bagi kedua ruas dengan 4: x = 24 / 4 = 6.',
        'Langkah 3: Pemeriksaan: 4(6) + 7 = 24 + 7 = 31.',
      ],
    },
    conceptExplanation: {
      en: 'To isolate a variable in a linear equation, apply inverse operations in reverse order of operations.',
      kk: 'Сызықтық теңдеудегі айнымалыны бөлектеу үшін амалдарды кері ретпен орындаңыз.',
      ru: 'Для изолирования переменной используйте обратные арифметические операции в обратном порядке.',
      id: 'Untuk mengisolasi variabel dalam persamaan linear, terapkan operasi kebalikan secara terbalik.',
    },
    hints: {
      en: [
        'Start by getting the term with x all by itself on one side.',
        'Subtract 7 from both sides to find 4x.',
        'Divide the result by 4 to get x.',
      ],
      kk: [
        'Алдымен x бар мүшені бір жаққа оқшаулаңыз.',
        '4x мәнін табу үшін екі жақтан да 7-ні азайтыңыз.',
        'x-ті табу үшін нәтижені 4-ке бөліңіз.',
      ],
      ru: [
        'Сначала изолируйте слагаемое с переменной x.',
        'Вычтите 7 из обеих частей уравнения, чтобы найти 4x.',
        'Разделите полученное число на 4.',
      ],
      id: [
        'Mulailah dengan memisahkan suku yang memiliki x di satu ruas.',
        'Kurangkan 7 dari kedua ruas untuk menemukan nilai 4x.',
        'Bagi hasilnya dengan 4 untuk mendapatkan x.',
      ],
    },
    glossaryTermIds: ['equivalent_expressions'],
    estimatedSeconds: 45,
  },
  {
    id: 'q_alg_02_d',
    skillId: 'alg_linear_eq_1var',
    domainId: 'algebra',
    subtopic: 'Number of Solutions',
    difficulty: 'developing',
    type: 'multiple_choice',
    prompt: {
      en: 'For which value of constant k does the equation 3(2x - 5) = kx - 15 have infinitely many solutions?',
      kk: 'k тұрақтысының қандай мәнінде 3(2x - 5) = kx - 15 теңдеуінің шексіз көп шешімі болады?',
      ru: 'При каком значении константы k уравнение 3(2x - 5) = kx - 15 имеет бесконечно много решений?',
      id: 'Untuk nilai konstanta k berapakah persamaan 3(2x - 5) = kx - 15 memiliki tak hingga banyaknya solusi?',
    },
    choices: [
      {
        id: 'A',
        text: '2',
        explanation: {
          en: 'Incorrect. Forgot to distribute the 3 across the entire term (2x).',
          kk: 'Қате. 3-ті (2x) мүшесіне көбейтуді ұмытып кеткен.',
          ru: 'Неверно. Забыли раскрыть скобки и умножить 3 на 2x.',
          id: 'Salah. Lupa mendistribusikan angka 3 ke suku 2x.',
        },
      },
      {
        id: 'B',
        text: '3',
        explanation: {
          en: 'Incorrect. 3 is the outside factor, not the x-coefficient.',
          kk: 'Қате. 3 — жақша сыртындағы көбейткіш, x-тің коэффициенті емес.',
          ru: 'Неверно. 3 — это множитель перед скобкой.',
          id: 'Salah. 3 adalah pengali di luar kurung, bukan koefisien x.',
        },
      },
      {
        id: 'C',
        text: '6',
        explanation: {
          en: 'Correct! Distribute: 6x - 15 = kx - 15. For infinitely many solutions, coefficients must match identically: k = 6.',
          kk: 'Дұрыс! Жақшаны ашсақ: 6x - 15 = kx - 15. Шексіз шешім болуы үшін x алдындағы коэффициенттер тең болуы керек: k = 6.',
          ru: 'Правильно! Раскрываем скобки: 6x - 15 = kx - 15. Для бесконечного числа решений обе части должны быть тождественно равны: k = 6.',
          id: 'Benar! Jabarkan kurung: 6x - 15 = kx - 15. Agar bersolusi tak terhingga, kedua ruas harus identik: k = 6.',
        },
      },
      {
        id: 'D',
        text: '-6',
        explanation: {
          en: 'Incorrect. If k = -6, the equation becomes 6x - 15 = -6x - 15, which has exactly one solution (x = 0).',
          kk: 'Қате. Егер k = -6 болса, теңдеу 6x - 15 = -6x - 15 болып, жалғыз шешім (x = 0) береді.',
          ru: 'Неверно. При k = -6 уравнение имеет ровно одно решение x = 0.',
          id: 'Salah. Jika k = -6, persamaan memiliki tepat satu solusi yaitu x = 0.',
        },
      },
    ],
    correctAnswer: 'C',
    workedSolution: {
      en: [
        'Step 1: Distribute on the left side: 3(2x) - 3(5) = 6x - 15.',
        'Step 2: Compare with right side: 6x - 15 = kx - 15.',
        'Step 3: A linear equation has infinitely many solutions if both sides are identically equal (ax + b = cx + d with a = c and b = d).',
        'Step 4: Since -15 = -15 already, set 6x = kx, which gives k = 6.',
      ],
      kk: [
        '1-қадам: Сол жақты жақшадан ашамыз: 3(2x) - 3(5) = 6x - 15.',
        '2-қадам: Оң жақпен салыстырамыз: 6x - 15 = kx - 15.',
        '3-қадам: Теңдеудің шексіз көп шешімі болуы үшін екі жағы толық сәйкес келуі тиіс.',
        '4-қадам: -15 = -15 сәйкес келгендіктен, 6 = k болуы қажет.',
      ],
      ru: [
        'Шаг 1: Раскрываем скобки слева: 3(2x) - 3(5) = 6x - 15.',
        'Шаг 2: Сравниваем с правой частью: 6x - 15 = kx - 15.',
        'Шаг 3: Линейное уравнение имеет бесконечно много решений, если обе стороны тождественно равны (коэффициенты при x равны и свободные члены равны).',
        'Шаг 4: Так как -15 = -15, то k должно быть равно 6.',
      ],
      id: [
        'Langkah 1: Jabarkan ruas kiri: 3(2x) - 3(5) = 6x - 15.',
        'Langkah 2: Bandingkan dengan ruas kanan: 6x - 15 = kx - 15.',
        'Langkah 3: Persamaan linear memiliki tak hingga solusi jika kedua ruas identik.',
        'Langkah 4: Karena -15 = -15 sudah sama, maka haruslah k = 6.',
      ],
    },
    conceptExplanation: {
      en: 'Infinite solutions means an identity: the variable completely cancels out leaving a true statement like 0 = 0.',
      kk: 'Шексіз шешім дегеніміз айнымалылар толық жойылып, 0 = 0 сияқты тура теңдік қалатын жағдай.',
      ru: 'Бесконечное число решений означает тождество: переменные взаимно уничтожаются, давая 0 = 0.',
      id: 'Solusi tak terhingga berarti suatu identitas aljabar: variabel habis menyisakan pernyataan benar 0 = 0.',
    },
    hints: {
      en: [
        'First expand the left side using the distributive property.',
        'Remember that "infinitely many solutions" requires the left side to look exactly like the right side.',
        'Match the coefficient of x on the left with the coefficient of x on the right.',
      ],
      kk: [
        'Алдымен сол жақ жақшаны көбейту арқылы ашыңыз.',
        '"Шексіз шешім" болуы үшін теңдеудің екі жағы да бірдей болуы тиіс.',
        'Сол жақтағы x коэффициентін оң жақтағы k коэффициентіне теңестіріңіз.',
      ],
      ru: [
        'Сначала раскройте скобки в левой части уравнения.',
        'Помните, что для бесконечного числа решений обе части должны совпадать.',
        'Приравняйте коэффициенты перед x.',
      ],
      id: [
        'Jabarkan ruas kiri menggunakan sifat distributif.',
        'Ingat bahwa tak hingga solusi mengharuskan kedua ruas identik.',
        'Samakan koefisien x di sebelah kiri dengan nilai k di sebelah kanan.',
      ],
    },
    glossaryTermIds: ['equivalent_expressions'],
    estimatedSeconds: 60,
  },

  // --- Skill: alg_linear_functions_models (Linear Functions & Rate of Change) ---
  {
    id: 'q_alg_03_f',
    skillId: 'alg_linear_functions_models',
    domainId: 'algebra',
    subtopic: 'Interpreting Linear Models',
    difficulty: 'foundation',
    type: 'multiple_choice',
    prompt: {
      en: 'A plumber charges a base diagnostic fee plus an hourly labor rate. The total fee C in dollars for a job lasting t hours is given by C = 45t + 80. What is the meaning of the number 80 in this equation?',
      kk: 'Сантехник бастапқы диагностика ақысын және сағаттық жұмыс ақысын алады. t сағатқа созылатын жұмыстың жалпы бағасы C = 45t + 80 теңдеуімен берілген. Бұл теңдеудегі 80 саны нені білдіреді?',
      ru: 'Сантехник берет фиксированную плату за вызов плюс почасовую оплату труда. Общая стоимость C (в долларах) за работу длительностью t часов задана формулой C = 45t + 80. Что означает число 80 в этом уравнении?',
      id: 'Seorang tukang ledeng mengenakan biaya diagnosa awal ditambah tarif per jam. Total biaya C (dolar) untuk pekerjaan selama t jam diberikan oleh rumus C = 45t + 80. Apakah arti angka 80 dalam persamaan ini?',
    },
    choices: [
      {
        id: 'A',
        text: 'The total cost for working 80 hours',
        explanation: {
          en: 'Incorrect. t is the number of hours, not 80.',
          kk: 'Қате. 80 сағат жұмыс істеу ақысы емес, t — сағат саны.',
          ru: 'Неверно. 80 — это не количество отработанных часов.',
          id: 'Salah. t adalah jumlah jam kerja, bukan 80.',
        },
      },
      {
        id: 'B',
        text: 'The hourly labor rate charged by the plumber',
        explanation: {
          en: 'Incorrect. The hourly rate is 45 (the coefficient of t).',
          kk: 'Қате. Сағаттық жұмыс ақысы — 45 (t-нің көбейткіші).',
          ru: 'Неверно. Почасовая ставка равна 45 (коэффициент перед t).',
          id: 'Salah. Tarif per jam adalah 45 (koefisien dari t).',
        },
      },
      {
        id: 'C',
        text: 'The fixed base fee charged before any hours are worked',
        explanation: {
          en: 'Correct. When t = 0, C = 80. This is the y-intercept, representing the initial flat charge.',
          kk: 'Дұрыс. t = 0 болғанда C = 80. Бұл бастапқы бекітілген төлем (y-intercept).',
          ru: 'Правильно. При t = 0 значение C = 80. Это свободный член (y-пересечение), означающий базовую плату за вызов.',
          id: 'Benar. Saat t = 0, C = 80. Ini adalah nilai awal (perpotongan-y) sebelum jam kerja dihitung.',
        },
      },
      {
        id: 'D',
        text: 'The maximum total fee that can be charged',
        explanation: {
          en: 'Incorrect. There is no maximum cap in this linear model as t increases.',
          kk: 'Қате. Бұл үлгіде уақыт көбейген сайын баға шектеусіз артады.',
          ru: 'Неверно. Стоимость растет с увеличением часов, верхнего предела нет.',
          id: 'Salah. Tidak ada batas biaya maksimum dalam model linear ini.',
        },
      },
    ],
    correctAnswer: 'C',
    workedSolution: {
      en: [
        'Step 1: Identify the components of the linear equation y = mx + b.',
        'Step 2: Here C = 45t + 80, where m = 45 is the rate of change ($45 per hour) and b = 80 is the y-intercept.',
        'Step 3: The y-intercept occurs when the independent variable t = 0 hours: C = 45(0) + 80 = 80.',
        'Step 4: Therefore, 80 represents the base diagnostic fee before any hours are worked.',
      ],
      kk: [
        '1-қадам: y = mx + b сызықтық функциясының бөліктерін анықтаңыз.',
        '2-қадам: Мұнда m = 45 — өзгеріс жылдамдығы (сағатына 45 доллар), ал b = 80 — бастапқы мән.',
        '3-қадам: Бастапқы мән t = 0 болғанда шығады: C = 80.',
        '4-қадам: Демек, 80 — ешқандай сағат жұмыс істемегендегі базалық төлем.',
      ],
      ru: [
        'Шаг 1: В формуле вида y = mx + b определите наклон m и начальное значение b.',
        'Шаг 2: В C = 45t + 80 коэффициент m = 45 — это почасовая ставка, а b = 80 — y-пересечение.',
        'Шаг 3: При t = 0 получаем C = 80, то есть фиксированную сумму до начала работы.',
        'Шаг 4: Ответ — базовая фиксированная плата за вызов.',
      ],
      id: [
        'Langkah 1: Identifikasi komponen persamaan y = mx + b.',
        'Langkah 2: m = 45 adalah laju perubahan ($45/jam) dan b = 80 adalah perpotongan sumbu tegak.',
        'Langkah 3: Ketika t = 0 jam, C = 80.',
        'Langkah 4: Maka 80 adalah biaya dasar awal.',
      ],
    },
    conceptExplanation: {
      en: 'In SAT linear word problems y = mx + b, m is the rate per unit (speed, hourly wage, unit price) and b is the initial/flat starting amount.',
      kk: 'y = mx + b түріндегі SAT есептерінде m — бірлікке келетін қарқын, ал b — бастапқы тұрақты мән.',
      ru: 'В линейных текстовых задачах SAT y = mx + b: m — удельная скорость или почасовой тариф, а b — начальная фиксированная сумма.',
      id: 'Pada soal cerita SAT bentuk y = mx + b, m adalah tarif per satuan dan b adalah nilai awal tetap.',
    },
    hints: {
      en: [
        'Substitute t = 0 into the equation.',
        'Notice what the cost equals before any time has elapsed.',
        'Recall that the constant term in y = mx + b is the initial value.',
      ],
      kk: [
        'Теңдеудегі t орнына 0 мәнін қойып көріңіз.',
        'Жұмыс басталмай тұрып құны қанша болатынын байқаңыз.',
        'y = mx + b формуласындағы бос мүше бастапқы мәнді білдіреді.',
      ],
      ru: [
        'Подставьте t = 0 в формулу.',
        'Посмотрите, чему равна сумма до того, как мастер приступил к работе.',
        'Свободный член в y = mx + b всегда задает начальное значение.',
      ],
      id: [
        'Substitusikan t = 0 ke dalam persamaan.',
        'Perhatikan berapa biayanya sebelum waktu berjalan.',
        'Konstanta tanpa variabel t mewakili nilai mula-mula.',
      ],
    },
    glossaryTermIds: ['rate_of_change', 'intercept', 'slope'],
    estimatedSeconds: 40,
  },
  {
    id: 'q_alg_04_p',
    skillId: 'alg_linear_functions_models',
    domainId: 'algebra',
    subtopic: 'Perpendicular Lines',
    difficulty: 'proficient',
    type: 'multiple_choice',
    prompt: {
      en: 'Line p in the xy-plane passes through the points (2, -3) and (6, 5). Line q is perpendicular to line p. What is the slope of line q?',
      kk: 'xy-жазықтығында p түзуі (2, -3) және (6, 5) нүктелері арқылы өтеді. q түзуі p түзуіне перпендикуляр. q түзуінің көлбеулігі (slope) неге тең?',
      ru: 'Прямая p на плоскости xy проходит через точки (2, -3) и (6, 5). Прямая q перпендикулярна прямой p. Чему равен угловой коэффициент (slope) прямой q?',
      id: 'Garis p pada bidang xy melalui titik (2, -3) dan (6, 5). Garis q tegak lurus dengan garis p. Berapakah kemiringan (gradien) garis q?',
    },
    choices: [
      {
        id: 'A',
        text: '2',
        explanation: {
          en: 'Incorrect. 2 is the slope of line p, not the perpendicular line q.',
          kk: 'Қате. 2 — перпендикуляр q түзуінің емес, p түзуінің көлбеуі.',
          ru: 'Неверно. 2 — это наклон исходной прямой p, а не перпендикулярной q.',
          id: 'Salah. 2 adalah gradien garis p, bukan garis tegak lurus q.',
        },
      },
      {
        id: 'B',
        text: '-2',
        explanation: {
          en: 'Incorrect. Changed the sign but forgot to take the reciprocal.',
          kk: 'Қате. Таңбасын өзгертті, бірақ бөлшекті кері айналдыруды ұмытты.',
          ru: 'Неверно. Поменяли знак, но забыли перевернуть дробь (обратная дробь).',
          id: 'Salah. Mengubah tanda tetapi lupa membalikkan pecahan.',
        },
      },
      {
        id: 'C',
        text: '-1/2',
        explanation: {
          en: 'Correct! Slope of p is (5 - (-3))/(6 - 2) = 8/4 = 2. The perpendicular slope is the negative reciprocal: -1/2.',
          kk: 'Дұрыс! p түзуінің көлбеуі = 8/4 = 2. Оған перпендикуляр түзудің көлбеуі кері таңбалы кері сан болады: -1/2.',
          ru: 'Правильно! Наклон прямой p: (5 - (-3))/(6 - 2) = 8/4 = 2. Наклон перпендикулярной прямой — противоположный обратный: -1/2.',
          id: 'Benar! Gradien p adalah 8/4 = 2. Gradien garis tegak lurus adalah lawan kebalikannya: -1/2.',
        },
      },
      {
        id: 'D',
        text: '1/2',
        explanation: {
          en: 'Incorrect. Took the reciprocal but forgot the negative sign.',
          kk: 'Қате. Кері сан алды, бірақ минус таңбасын қоюды ұмытты.',
          ru: 'Неверно. Взяли обратную величину, но забыли минус.',
          id: 'Salah. Mengambil kebalikan tetapi lupa tanda negatif.',
        },
      },
    ],
    correctAnswer: 'C',
    workedSolution: {
      en: [
        'Step 1: Calculate the slope of line p using m = (y2 - y1) / (x2 - x1).',
        'm_p = (5 - (-3)) / (6 - 2) = (5 + 3) / 4 = 8 / 4 = 2.',
        'Step 2: Two non-vertical lines are perpendicular if and only if their slopes multiply to -1: m_p × m_q = -1.',
        'Step 3: Solve for m_q: 2 × m_q = -1 => m_q = -1/2.',
      ],
      kk: [
        '1-қадам: p түзуінің көлбеуін табамыз: m = (y2 - y1) / (x2 - x1).',
        'm_p = (5 - (-3)) / (6 - 2) = 8 / 4 = 2.',
        '2-қадам: Перпендикуляр түзулер үшін көлбеулер көбейтіндісі -1-ге тең: m_p × m_q = -1.',
        '3-қадам: m_q = -1 / 2.',
      ],
      ru: [
        'Шаг 1: Находим наклон прямой p: m = (5 - (-3)) / (6 - 2) = 8 / 4 = 2.',
        'Шаг 2: У перпендикулярных прямых произведение угловых коэффициентов равно -1: m1 × m2 = -1.',
        'Шаг 3: m_q = -1 / 2.',
      ],
      id: [
        'Langkah 1: Hitung gradien garis p: m = (5 - (-3)) / (6 - 2) = 8 / 4 = 2.',
        'Langkah 2: Dua garis tegak lurus jika hasil kali gradiennya = -1: m1 × m2 = -1.',
        'Langkah 3: m_q = -1 / 2.',
      ],
    },
    conceptExplanation: {
      en: 'Perpendicular lines have slopes that are negative reciprocals of each other (e.g., m and -1/m).',
      kk: 'Перпендикуляр түзулердің көлбеуліктері бір-біріне таңбасы қарама-қарсы және кері сан болады.',
      ru: 'Перпендикулярные прямые имеют взаимно обратные с противоположным знаком угловые коэффициенты.',
      id: 'Garis yang saling tegak lurus memiliki gradien yang saling berlawanan dan berkebalikan (m1 × m2 = -1).',
    },
    hints: {
      en: [
        'First find the slope of line p using the formula (y2 - y1) / (x2 - x1).',
        'Remember the rule for slopes of perpendicular lines: m1 × m2 = -1.',
        'Flip the fraction and change the sign.',
      ],
      kk: [
        'Алдымен (y2 - y1) / (x2 - x1) формуласымен p түзуінің көлбеуін есептеңіз.',
        'Перпендикуляр түзулердің қасиетін еске түсіріңіз: m1 × m2 = -1.',
        'Бөлшекті аударып, таңбасын қарама-қарсыға өзгертіңіз.',
      ],
      ru: [
        'Найдите наклон первой прямой по формуле (y2 - y1)/(x2 - x1).',
        'Вспомните формулу для перпендикулярных прямых: m1 × m2 = -1.',
        'Переверните число и смените знак на противоположный.',
      ],
      id: [
        'Cari gradien garis p terlebih dahulu menggunakan rumus (y2 - y1)/(x2 - x1).',
        'Gunakan sifat garis tegak lurus: m1 × m2 = -1.',
        'Balik nilainya dan ubah tandanya.',
      ],
    },
    glossaryTermIds: ['perpendicular', 'slope'],
    estimatedSeconds: 65,
  },

  // --- Skill: alg_linear_systems (Systems of Two Linear Equations) ---
  {
    id: 'q_alg_05_d',
    skillId: 'alg_linear_systems',
    domainId: 'algebra',
    subtopic: 'Systems of Equations',
    difficulty: 'developing',
    type: 'multiple_choice',
    prompt: {
      en: 'Consider the system of equations:\n2x + 3y = 19\nx - y = 2\nWhat is the value of x?',
      kk: 'Теңдеулер жүйесін қарастырыңыз:\n2x + 3y = 19\nx - y = 2\nx-тің мәні неге тең?',
      ru: 'Рассмотрите систему уравнений:\n2x + 3y = 19\nx - y = 2\nЧему равно значение x?',
      id: 'Perhatikan sistem persamaan berikut:\n2x + 3y = 19\nx - y = 2\nBerapakah nilai x?',
    },
    choices: [
      {
        id: 'A',
        text: '3',
        explanation: {
          en: 'Incorrect. 3 is the value of y, not x.',
          kk: 'Қате. 3 — x-тің емес, y-тің мәні.',
          ru: 'Неверно. 3 — это значение y, а в вопросе спрашивается x.',
          id: 'Salah. 3 adalah nilai y, bukan x.',
        },
      },
      {
        id: 'B',
        text: '5',
        explanation: {
          en: 'Correct! From the second equation, y = x - 2. Substitute into the first: 2x + 3(x - 2) = 19 => 5x - 6 = 19 => 5x = 25 => x = 5.',
          kk: 'Дұрыс! Екінші теңдеуден y = x - 2. Біріншісіне қойсақ: 2x + 3(x - 2) = 19 => 5x = 25 => x = 5.',
          ru: 'Правильно! Из второго уравнения y = x - 2. Подставляем в первое: 2x + 3(x - 2) = 19 => 5x - 6 = 19 => 5x = 25 => x = 5.',
          id: 'Benar! Dari persamaan kedua y = x - 2. Substitusikan ke persamaan pertama: 2x + 3(x - 2) = 19 => 5x = 25 => x = 5.',
        },
      },
      {
        id: 'C',
        text: '7',
        explanation: {
          en: 'Incorrect. If x = 7, y = 5, but 2(7) + 3(5) = 29 ≠ 19.',
          kk: 'Қате. Егер x = 7 болса, y = 5 болып, бірінші теңдеу 29 ≠ 19 болып қанағаттандырмайды.',
          ru: 'Неверно. При x = 7 сумма 14 + 15 = 29, а не 19.',
          id: 'Salah. Jika x = 7, persamaan pertama tidak terpenuhi.',
        },
      },
      {
        id: 'D',
        text: '8',
        explanation: {
          en: 'Incorrect calculation when resolving elimination.',
          kk: 'Қате есептеу.',
          ru: 'Неверный расчет при решении системы.',
          id: 'Salah perhitungan saat eliminasi.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Method 1 (Substitution):',
        'From equation 2: x - y = 2  =>  y = x - 2.',
        'Substitute into equation 1: 2x + 3(x - 2) = 19.',
        '2x + 3x - 6 = 19.',
        '5x = 25  =>  x = 5.',
        '(Check y: y = 5 - 2 = 3. Check eq 1: 2(5) + 3(3) = 10 + 9 = 19. Both valid!)',
      ],
      kk: [
        '1-тәсіл (Алмастыру):',
        'Екінші теңдеуден: y = x - 2.',
        'Бірінші теңдеуге қоямыз: 2x + 3(x - 2) = 19.',
        '5x - 6 = 19  =>  5x = 25  =>  x = 5.',
      ],
      ru: [
        'Способ (Подстановка):',
        'Из 2-го уравнения: y = x - 2.',
        'Подставляем в 1-е: 2x + 3(x - 2) = 19.',
        '5x - 6 = 19 => 5x = 25 => x = 5.',
      ],
      id: [
        'Metode Substitusi:',
        'Dari persamaan kedua: y = x - 2.',
        'Substitusi ke persamaan pertama: 2x + 3(x - 2) = 19.',
        '5x - 6 = 19 => 5x = 25 => x = 5.',
      ],
    },
    conceptExplanation: {
      en: 'A system of linear equations can be solved by substitution or elimination. Always check which variable the question asks for (x vs y)!',
      kk: 'Сызықтық теңдеулер жүйесін алмастыру немесе қосу тәсілімен шешуге болады. Есепте дәл қай айнымалыны (x әлде y) сұрағанын мұқият оқыңыз!',
      ru: 'Системы уравнений решаются подстановкой или сложением. Всегда проверяйте, какую переменную требует найти вопрос (x или y)!',
      id: 'Sistem persamaan dapat diselesaikan dengan substitusi atau eliminasi. Selalu periksa variabel mana yang ditanyakan!',
    },
    hints: {
      en: [
        'Express y in terms of x using the simpler second equation: y = x - 2.',
        'Replace y in the first equation with (x - 2).',
        'Solve the resulting single-variable equation for x.',
      ],
      kk: [
        'Екінші теңдеуден y-ті x арқылы өрнектеңіз: y = x - 2.',
        'Бірінші теңдеудегі y орнына (x - 2) қойыңыз.',
        'Шыққан бір айнымалысы бар теңдеуді шешіңіз.',
      ],
      ru: [
        'Выразите y через x из второго уравнения: y = x - 2.',
        'Подставьте это выражение вместо y в первое уравнение.',
        'Решите полученное уравнение относительно x.',
      ],
      id: [
        'Nyatakan y dalam x dari persamaan kedua: y = x - 2.',
        'Gantikan y pada persamaan pertama dengan (x - 2).',
        'Selesaikan persamaan satu variabel tersebut.',
      ],
    },
    glossaryTermIds: ['solution_to_system'],
    estimatedSeconds: 50,
  },
  {
    id: 'q_alg_06_a',
    skillId: 'alg_linear_systems',
    domainId: 'algebra',
    subtopic: 'Systems of Equations with No Solution',
    difficulty: 'advanced',
    type: 'student_produced',
    prompt: {
      en: 'In the system of equations below, c is a constant:\n6x - 9y = 14\n4x - cy = 5\nIf the system has no solution, what is the value of c?',
      kk: 'Төмендегі теңдеулер жүйесінде c — тұрақты сан:\n6x - 9y = 14\n4x - cy = 5\nЕгер бұл жүйенің шешімі болмаса, c-ның мәні неге тең?',
      ru: 'В системе уравнений ниже c — константа:\n6x - 9y = 14\n4x - cy = 5\nЕсли система не имеет решений, чему равно значение c?',
      id: 'Pada sistem persamaan di bawah ini, c adalah konstanta:\n6x - 9y = 14\n4x - cy = 5\nJika sistem ini tidak memiliki solusi, berapakah nilai c?',
    },
    correctAnswer: '6',
    acceptableNumericAnswers: ['6', '6.0'],
    workedSolution: {
      en: [
        'Step 1: A system of two linear equations has no solution when the lines are parallel with different y-intercepts.',
        'Step 2: Parallel lines have equal slopes: the ratio of x-coefficients must equal the ratio of y-coefficients.',
        '6 / 4 = (-9) / (-c).',
        'Step 3: Simplify 6/4 to 3/2: 3/2 = 9/c.',
        'Step 4: Cross multiply: 3c = 18 => c = 6.',
        'Step 5: Verify that the constants are not in the same ratio: 6/4 ≠ 14/5 (1.5 ≠ 2.8), so the lines never coincide. The answer is 6.',
      ],
      kk: [
        '1-қадам: Сызықтық жүйенің шешімі болмауы үшін түзулер параллель (көлбеулері тең) болуы керек.',
        '2-қадам: x және y коэффициенттерінің қатынасы тең болуы тиіс: 6 / 4 = (-9) / (-c).',
        '3-қадам: 3 / 2 = 9 / c.',
        '4-қадам: Пропорция арқылы: 3c = 18 => c = 6.',
      ],
      ru: [
        'Шаг 1: Система не имеет решений, если прямые параллельны (одинаковый наклон, но разные сдвиги).',
        'Шаг 2: Отношение коэффициентов при x должно равняться отношению при y: 6 / 4 = (-9) / (-c).',
        'Шаг 3: 3 / 2 = 9 / c => 3c = 18 => c = 6.',
        'Шаг 4: Проверяем отношение свободных членов: 14/5 ≠ 3/2, значит прямые не совпадают, решений действительно нет. Ответ: 6.',
      ],
      id: [
        'Langkah 1: Sistem tidak memiliki solusi jika kedua garis sejajar.',
        'Langkah 2: Rasio koefisien x dan y harus sama: 6/4 = (-9)/(-c).',
        'Langkah 3: 3/2 = 9/c => 3c = 18 => c = 6.',
      ],
    },
    conceptExplanation: {
      en: 'No solution in a 2x2 linear system means lines are parallel (same slope, different y-intercepts).',
      kk: '2x2 жүйесінде шешім жоқ деген сөз — түзулер параллель (көлбеулері бірдей, бірақ қиылысу нүктелері әртүрлі).',
      ru: 'Отсутствие решений в системе означает, что графики уравнений — параллельные прямые.',
      id: 'Tidak ada solusi pada sistem linear dua variabel berarti kedua garis sejajar dan tidak pernah berpotongan.',
    },
    hints: {
      en: [
        '"No solution" means the two lines are parallel and never intersect.',
        'For lines to be parallel, their slopes must be identical: ratio of x-coefficients equals ratio of y-coefficients.',
        'Set up 6 / 4 = -9 / -c and solve for c.',
      ],
      kk: [
        '"Шешімі жоқ" дегеніміз түзулер параллель және ешқашан қиылыспайды деген сөз.',
        'Параллель болу үшін көлбеуліктері бірдей: 6/4 = -9/(-c).',
        'c-ны табу үшін теңдеуді шешіңіз.',
      ],
      ru: [
        '"Нет решений" означает параллельность прямых.',
        'Приравняйте отношение коэффициентов: a1/a2 = b1/b2.',
        'Решите уравнение 6/4 = 9/c.',
      ],
      id: [
        '"Tidak ada solusi" berarti kedua garis sejajar.',
        'Samakan rasio koefisien: 6/4 = (-9)/(-c).',
        'Selesaikan untuk mencari nilai c.',
      ],
    },
    glossaryTermIds: ['solution_to_system', 'slope'],
    estimatedSeconds: 75,
  },

  // --- Skill: alg_linear_inequalities (Linear Inequalities & Systems) ---
  {
    id: 'q_alg_07_d',
    skillId: 'alg_linear_inequalities',
    domainId: 'algebra',
    subtopic: 'Inequality Word Problems',
    difficulty: 'developing',
    type: 'multiple_choice',
    prompt: {
      en: 'A student needs at least 85 points to pass an exam. She has already earned 40 points on part 1. Each correct question on part 2 is worth 5 points. If q represents the number of correct questions she gets on part 2, which inequality models this situation?',
      kk: 'Студентке емтиханнан өту үшін кемінде 85 ұпай қажет. Ол 1-бөлімде 40 ұпай жинады. 2-бөлімдегі әрбір дұрыс жауап 5 ұпай береді. Егер q 2-бөлімдегі дұрыс сұрақтар санын білдірсе, қай теңсіздік осы жағдайды сипаттайды?',
      ru: 'Студенту необходимо набрать не менее 85 баллов для сдачи экзамена. В части 1 он уже получил 40 баллов. Каждый правильный ответ в части 2 дает 5 баллов. Если q — число правильных ответов в части 2, какое неравенство моделирует эту ситуацию?',
      id: 'Seorang siswa membutuhkan setidaknya 85 poin untuk lulus ujian. Dia sudah memperoleh 40 poin pada bagian 1. Setiap soal benar di bagian 2 bernilai 5 poin. Jika q adalah jumlah soal benar di bagian 2, pertidaksamaan manakah yang memodelkan situasi ini?',
    },
    choices: [
      {
        id: 'A',
        text: '5q + 40 ≥ 85',
        explanation: {
          en: 'Correct! "At least 85" translates mathematically to ≥ 85. Total score is 5q + 40.',
          kk: 'Дұрыс! "Кемінде 85" математикалық түрде ≥ 85 деп жазылады. Жалпы ұпай: 5q + 40.',
          ru: 'Правильно! Фраза "не менее 85" переводится как знак ≥ 85. Общий балл равен 5q + 40.',
          id: 'Benar! "Setidaknya 85" diterjemahkan menjadi ≥ 85. Total poin adalah 5q + 40.',
        },
      },
      {
        id: 'B',
        text: '5q + 40 ≤ 85',
        explanation: {
          en: 'Incorrect. ≤ 85 means "at most 85", which would limit her score instead of setting a minimum passing threshold.',
          kk: 'Қате. ≤ 85 "ең көбі 85" дегенді білдіреді.',
          ru: 'Неверно. Знак ≤ означает "не более 85" (максимум), а не проходной минимум.',
          id: 'Salah. Simbol ≤ berarti "paling banyak 85".',
        },
      },
      {
        id: 'C',
        text: '40q + 5 ≥ 85',
        explanation: {
          en: 'Incorrect. Attached the variable q to the fixed 40 points instead of the 5 points per question.',
          kk: 'Қате. q айнымалысын 5-ке емес, тұрақты 40-қа көбейтіп қойған.',
          ru: 'Неверно. Перепутали коэффициенты: 40 — это фиксированный балл, а 5 дается за каждый ответ q.',
          id: 'Salah. Koefisien tertukar.',
        },
      },
      {
        id: 'D',
        text: '5q - 40 > 85',
        explanation: {
          en: 'Incorrect. Subtracted the 40 points already earned and used strict inequality >.',
          kk: 'Қате. Бұрын жиналған 40 ұпайды азайтқан және қатаң теңсіздік қойған.',
          ru: 'Неверно. Баллы складываются, а не вычитаются.',
          id: 'Salah. Poin seharusnya dijumlahkan bukan dikurangkan.',
        },
      },
    ],
    correctAnswer: 'A',
    workedSolution: {
      en: [
        'Step 1: Translate the words into mathematical expressions.',
        'Points earned from part 2: 5 points × q questions = 5q.',
        'Points already earned: +40.',
        'Total points = 5q + 40.',
        'Step 2: "At least 85" means 85 or greater, which corresponds to the symbol ≥ 85.',
        'Combined inequality: 5q + 40 ≥ 85.',
      ],
      kk: [
        '1-қадам: Сөздерді математикалық өрнекке айналдырыңыз.',
        '2-бөлімнен жиналған ұпай: 5 × q = 5q.',
        'Қолда бар ұпай: +40.',
        'Жалпы ұпай = 5q + 40.',
        '2-қадам: "Кемінде 85" — бұл 85 немесе одан көп деген сөз (≥ 85).',
        'Нәтиже: 5q + 40 ≥ 85.',
      ],
      ru: [
        'Шаг 1: Переводим условие на математический язык.',
        'Баллы за 2-ю часть: 5q.',
        'Уже набранные баллы: 40.',
        'Всего баллов: 5q + 40.',
        'Шаг 2: "Не менее 85" означает "больше или равно 85" (≥ 85).',
        'Итоговое неравенство: 5q + 40 ≥ 85.',
      ],
      id: [
        'Langkah 1: Terjemahkan kalimat soal ke bentuk matematika.',
        'Poin bagian 2: 5 × q = 5q.',
        'Poin yang sudah didapat: +40.',
        'Total poin = 5q + 40.',
        'Langkah 2: "Setidaknya 85" berarti ≥ 85.',
        'Pertidaksamaan: 5q + 40 ≥ 85.',
      ],
    },
    conceptExplanation: {
      en: '"At least" is one of the most tested phrases on the SAT Math exam. It always translates to greater than or equal to (≥).',
      kk: '"At least" (кемінде) тіркесі SAT емтиханында жиі кездеседі және әрқашан үлкен немесе тең (≥) таңбасын білдіреді.',
      ru: 'Фраза "at least" (как минимум, не менее) всегда переводится математическим знаком ≥.',
      id: 'Frasa "at least" selalu diterjemahkan menjadi tanda lebih dari atau sama dengan (≥).',
    },
    hints: {
      en: [
        'Total score = (points from part 1) + (points from part 2).',
        'What symbol represents "at least"? (Can she score exactly 85 and pass?)',
        'Since scoring exactly 85 is allowed, use ≥.',
      ],
      kk: [
        'Жалпы ұпай = (1-бөлім ұпайы) + (2-бөлім ұпайы).',
        '"Кемінде" деген сөз қандай таңбаға сәйкес келеді? (Дәл 85 ұпаймен өте ала ма?)',
        'Дәл 85 ұпай жарайтын болғандықтан, ≥ таңбасын таңдаңыз.',
      ],
      ru: [
        'Общий балл = 40 + 5q.',
        'Подумайте, может ли студент набрать ровно 85 баллов?',
        'Да, "не менее 85" включает 85, поэтому используем знак ≥.',
      ],
      id: [
        'Total skor = 40 + 5q.',
        'Apakah nilai tepat 85 diperbolehkan?',
        'Ya, maka gunakan tanda ≥.',
      ],
    },
    glossaryTermIds: ['at_least', 'no_less_than'],
    estimatedSeconds: 40,
  },

  // ==========================================
  // DOMAIN: ADVANCED MATH
  // ==========================================

  // --- Skill: adv_quadratics_factoring (Quadratic Equations & Factoring) ---
  {
    id: 'q_adv_01_f',
    skillId: 'adv_quadratics_factoring',
    domainId: 'advanced_math',
    subtopic: 'Factoring Quadratic Equations',
    difficulty: 'foundation',
    type: 'multiple_choice',
    prompt: {
      en: 'What are the solutions to the equation x² - 7x + 12 = 0?',
      kk: 'x² - 7x + 12 = 0 теңдеуінің шешімдері қандай?',
      ru: 'Каковы решения уравнения x² - 7x + 12 = 0?',
      id: 'Berapakah penyelesaian dari persamaan x² - 7x + 12 = 0?',
    },
    choices: [
      {
        id: 'A',
        text: 'x = -3 and x = -4',
        explanation: {
          en: 'Incorrect. If factored as (x + 3)(x + 4), the middle term would be +7x, not -7x.',
          kk: 'Қате. (x + 3)(x + 4) болса, ортадағы мүше +7x болар еді.',
          ru: 'Неверно. При таких корнях средний коэффициент был бы +7x, а не -7x.',
          id: 'Salah. Jika akarnya -3 dan -4, suku tengahnya adalah +7x.',
        },
      },
      {
        id: 'B',
        text: 'x = 3 and x = 4',
        explanation: {
          en: 'Correct! The equation factors as (x - 3)(x - 4) = 0, giving solutions x = 3 and x = 4.',
          kk: 'Дұрыс! Теңдеу көбейткіштерге (x - 3)(x - 4) = 0 деп жіктеліп, түбірлері x = 3 және x = 4 болады.',
          ru: 'Правильно! Раскладывается на множители: (x - 3)(x - 4) = 0, откуда x = 3 и x = 4.',
          id: 'Benar! Faktorisasi menjadi (x - 3)(x - 4) = 0, sehingga akarnya x = 3 dan x = 4.',
        },
      },
      {
        id: 'C',
        text: 'x = 2 and x = 6',
        explanation: {
          en: 'Incorrect. 2 × 6 = 12, but 2 + 6 = 8, not 7.',
          kk: 'Қате. 2 × 6 = 12 болғанымен, қосындысы 8, 7 емес.',
          ru: 'Неверно. 2 + 6 = 8, а не 7.',
          id: 'Salah. 2 + 6 = 8, bukan 7.',
        },
      },
      {
        id: 'D',
        text: 'x = -2 and x = -6',
        explanation: {
          en: 'Incorrect. Does not produce -7 as the sum.',
          kk: 'Қате. Қосындысы -7 бермейді.',
          ru: 'Неверно. Не дает нужную сумму корней.',
          id: 'Salah. Tidak menghasilkan penjumlahan yang tepat.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Step 1: Look for two numbers that multiply to +12 and add to -7.',
        'Step 2: The factor pairs of 12 are (-1, -12), (-2, -6), and (-3, -4).',
        'Step 3: Notice that (-3) + (-4) = -7, and (-3) × (-4) = +12.',
        'Step 4: Factor the quadratic: (x - 3)(x - 4) = 0.',
        'Step 5: By the zero-product property: x - 3 = 0 => x = 3, or x - 4 = 0 => x = 4.',
      ],
      kk: [
        '1-қадам: Көбейтіндісі +12, ал қосындысы -7 болатын екі санды іздейміз.',
        '2-қадам: Ол сандар: -3 және -4.',
        '3-қадам: Көбейткіштерге жіктейміз: (x - 3)(x - 4) = 0.',
        '4-қадам: Нөлге теңестіреміз: x = 3 және x = 4.',
      ],
      ru: [
        'Шаг 1: Ищем два числа, произведение которых равно +12, а сумма равна -7.',
        'Шаг 2: Это числа -3 и -4, так как (-3) + (-4) = -7 и (-3) × (-4) = 12.',
        'Шаг 3: Раскладываем: (x - 3)(x - 4) = 0.',
        'Шаг 4: Приравниваем каждую скобку к нулю: x = 3 и x = 4.',
      ],
      id: [
        'Langkah 1: Cari dua bilangan yang hasil kalinya +12 dan jumlahnya -7.',
        'Langkah 2: Bilangan tersebut adalah -3 dan -4.',
        'Langkah 3: Bentuk faktorisasi: (x - 3)(x - 4) = 0.',
        'Langkah 4: Maka akarnya x = 3 dan x = 4.',
      ],
    },
    conceptExplanation: {
      en: 'In x² + bx + c = 0, find two numbers that multiply to c and sum to b (Vieta\'s formulas).',
      kk: 'x² + bx + c = 0 түріндегі теңдеуде көбейтіндісі c, ал қосындысы -b болатын сандар түбір болады (Виет теоремасы).',
      ru: 'Для приведенного уравнения x² + bx + c = 0 сумма корней равна -b, а произведение равно c (теорема Виета).',
      id: 'Pada persamaan x² + bx + c = 0, cari dua bilangan yang jika dikalikan menghasilkan c dan jika dijumlahkan menghasilkan b.',
    },
    hints: {
      en: [
        'What two numbers multiply to +12 and add to -7?',
        'Both numbers must be negative because their product is positive and their sum is negative.',
        'Set each factor equal to 0 to solve for x.',
      ],
      kk: [
        'Көбейтіндісі +12, қосындысы -7 болатын сандарды табыңыз.',
        'Екі сан да теріс болуы керек.',
        'Әр көбейткішті 0-ге теңестіріңіз.',
      ],
      ru: [
        'Какие два числа дают в произведении +12, а в сумме -7?',
        'Оба числа должны быть отрицательными.',
        'Приравняйте каждую скобку к нулю.',
      ],
      id: [
        'Dua bilangan apa yang hasil kalinya 12 dan jumlahnya -7?',
        'Kedua bilangan pasti negatif.',
        'Samakan tiap faktor dengan 0.',
      ],
    },
    glossaryTermIds: ['greatest_common_factor', 'equivalent_expressions'],
    estimatedSeconds: 45,
  },
  {
    id: 'q_adv_02_p',
    skillId: 'adv_quadratics_factoring',
    domainId: 'advanced_math',
    subtopic: 'Quadratic Discriminant',
    difficulty: 'proficient',
    type: 'multiple_choice',
    prompt: {
      en: 'For what value of c does the quadratic equation 4x² - 12x + c = 0 have exactly one distinct real solution?',
      kk: 'c-ның қандай мәнінде 4x² - 12x + c = 0 квадрат теңдеуінің нақты бір ғана шешімі болады?',
      ru: 'При каком значении c квадратное уравнение 4x² - 12x + c = 0 имеет ровно один действительный корень?',
      id: 'Untuk nilai c berapakah persamaan kuadrat 4x² - 12x + c = 0 memiliki tepat satu solusi real?',
    },
    choices: [
      {
        id: 'A',
        text: '3',
        explanation: {
          en: 'Incorrect. If c = 3, discriminant is 144 - 4(4)(3) = 144 - 48 = 96 > 0 (two solutions).',
          kk: 'Қате. Егер c = 3 болса, дискриминант 96 > 0 болып, екі түбір болады.',
          ru: 'Неверно. При c = 3 дискриминант равен 96 > 0 (два корня).',
          id: 'Salah. Jika c = 3, diskriminan > 0 (ada dua solusi).',
        },
      },
      {
        id: 'B',
        text: '9',
        explanation: {
          en: 'Correct! Exactly one real solution means discriminant D = b² - 4ac = 0. (-12)² - 4(4)(c) = 0 => 144 - 16c = 0 => c = 9.',
          kk: 'Дұрыс! Нақты бір шешім дегеніміз D = b² - 4ac = 0. 144 - 16c = 0 => 16c = 144 => c = 9.',
          ru: 'Правильно! Ровно один корень означает, что дискриминант равен нулю: D = (-12)² - 4(4)(c) = 144 - 16c = 0, откуда c = 9.',
          id: 'Benar! Tepat satu solusi real jika diskriminan D = b² - 4ac = 0. 144 - 16c = 0 => c = 9.',
        },
      },
      {
        id: 'C',
        text: '16',
        explanation: {
          en: 'Incorrect. If c = 16, discriminant is negative (no real solutions).',
          kk: 'Қате. Егер c = 16 болса, дискриминант теріс болады.',
          ru: 'Неверно. Дискриминант будет меньше нуля.',
          id: 'Salah. Diskriminan menjadi negatif.',
        },
      },
      {
        id: 'D',
        text: '36',
        explanation: {
          en: 'Incorrect calculation.',
          kk: 'Қате есептеу.',
          ru: 'Неверный расчет.',
          id: 'Salah perhitungan.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Step 1: Identify coefficients: a = 4, b = -12, c = c.',
        'Step 2: A quadratic equation has exactly one real solution if and only if its discriminant equals zero: b² - 4ac = 0.',
        'Step 3: Substitute the known values: (-12)² - 4(4)(c) = 0.',
        '144 - 16c = 0.',
        'Step 4: Solve for c: 16c = 144 => c = 144 / 16 = 9.',
        'Alternative method: Note that 4x² - 12x + 9 = (2x - 3)², a perfect square!',
      ],
      kk: [
        '1-қадам: Коэффициенттер: a = 4, b = -12, c = c.',
        '2-қадам: Жалғыз шешім үшін дискриминант 0-ге тең болуы керек: b² - 4ac = 0.',
        '3-қадам: (-12)² - 4(4)(c) = 0  =>  144 - 16c = 0.',
        '4-қадам: 16c = 144  =>  c = 9.',
      ],
      ru: [
        'Шаг 1: Коэффициенты: a = 4, b = -12, c = c.',
        'Шаг 2: Уравнение имеет единственный корень тогда и только тогда, когда дискриминант равен 0.',
        'Шаг 3: D = (-12)² - 4(4)c = 144 - 16c = 0.',
        'Шаг 4: 16c = 144 => c = 9.',
      ],
      id: [
        'Langkah 1: Identifikasi a = 4, b = -12, c = c.',
        'Langkah 2: Tepat satu solusi mengharuskan D = b² - 4ac = 0.',
        'Langkah 3: (-12)² - 4(4)(c) = 0 => 144 - 16c = 0.',
        'Langkah 4: c = 144/16 = 9.',
      ],
    },
    conceptExplanation: {
      en: 'The discriminant b² - 4ac determines the number of real roots: > 0 gives two, = 0 gives one (double root), < 0 gives none.',
      kk: 'Дискриминант b² - 4ac түбірлер санын анықтайды: > 0 болса екі, = 0 болса бір, < 0 болса нақты түбір жоқ.',
      ru: 'Знак дискриминанта b² - 4ac определяет число действительных корней: > 0 (два), = 0 (один), < 0 (нет).',
      id: 'Diskriminan b² - 4ac menentukan banyaknya solusi real: > 0 ada 2, = 0 ada 1, < 0 tidak ada.',
    },
    hints: {
      en: [
        'Recall the quadratic formula: x = (-b ± √(b² - 4ac)) / (2a).',
        'For there to be only one solution, the value under the square root must equal 0.',
        'Set b² - 4ac = 0 and solve for c.',
      ],
      kk: [
        'Квадрат теңдеу формуласындағы түбір астын еске түсіріңіз.',
        'Бір ғана шешім болуы үшін түбір астындағы өрнек 0-ге тең болуы тиіс.',
        'b² - 4ac = 0 деп теңдеу құрыңыз.',
      ],
      ru: [
        'Вспомните подкоренное выражение в формуле корней: b² - 4ac.',
        'Чтобы знак ± не давал два разных корня, дискриминант должен быть равен нулю.',
        'Приравняйте 144 - 16c к 0.',
      ],
      id: [
        'Ingat rumus kuadrat: nilai di bawah akar adalah b² - 4ac.',
        'Agar akarnya hanya satu, nilai diskriminan harus sama dengan 0.',
        'Selesaikan 144 - 16c = 0.',
      ],
    },
    glossaryTermIds: ['discriminant', 'vertex'],
    estimatedSeconds: 60,
  },

  // --- Skill: adv_parabolas_vertex (Parabolas & Vertex Form) ---
  {
    id: 'q_adv_03_d',
    skillId: 'adv_parabolas_vertex',
    domainId: 'advanced_math',
    subtopic: 'Vertex of Parabola',
    difficulty: 'developing',
    type: 'multiple_choice',
    prompt: {
      en: 'The graph of y = -2(x - 5)² + 18 is a parabola in the xy-plane. What are the coordinates of its vertex?',
      kk: 'xy-жазықтығында y = -2(x - 5)² + 18 функциясының графигі парабола болып табылады. Осы парабола төбесінің координаттары қандай?',
      ru: 'График функции y = -2(x - 5)² + 18 представляет собой параболу на плоскости xy. Каковы координаты ее вершины?',
      id: 'Grafik dari y = -2(x - 5)² + 18 adalah parabola pada bidang xy. Berapakah koordinat titik puncaknya?',
    },
    choices: [
      {
        id: 'A',
        text: '(-5, 18)',
        explanation: {
          en: 'Incorrect. In vertex form y = a(x - h)² + k, the vertex is (h, k). Since it is (x - 5), h is +5, not -5.',
          kk: 'Қате. Төбе формуласында y = a(x - h)² + k болғандықтан, (x - 5) өрнегінен h = +5 шығады.',
          ru: 'Неверно. В формуле вершины (x - h) стоит знак минус, поэтому для (x - 5) значение h = +5.',
          id: 'Salah. Tanda minus pada (x - h) berarti untuk (x - 5), nilai h adalah +5.',
        },
      },
      {
        id: 'B',
        text: '(5, 18)',
        explanation: {
          en: 'Correct! In vertex form y = a(x - h)² + k, the vertex is directly (h, k) = (5, 18).',
          kk: 'Дұрыс! y = a(x - h)² + k түріндегі төбе координаттары тікелей (h, k) = (5, 18) болады.',
          ru: 'Правильно! В форме вершины y = a(x - h)² + k координаты вершины равны (h, k) = (5, 18).',
          id: 'Benar! Pada bentuk puncak y = a(x - h)² + k, koordinat titik puncak adalah (h, k) = (5, 18).',
        },
      },
      {
        id: 'C',
        text: '(5, -18)',
        explanation: {
          en: 'Incorrect. The constant k is +18, so the y-coordinate is positive 18.',
          kk: 'Қате. k мәні +18, сондықтан y-координатасы оң 18 болады.',
          ru: 'Неверно. Координата y равна +18.',
          id: 'Salah. Nilai k adalah +18.',
        },
      },
      {
        id: 'D',
        text: '(-2, 18)',
        explanation: {
          en: 'Incorrect. -2 is the vertical stretch and reflection factor a, not the x-coordinate of the vertex.',
          kk: 'Қате. -2 — параболаның бағытын анықтайтын а коэффициенті.',
          ru: 'Неверно. -2 — это коэффициент при квадрате, а не координата x.',
          id: 'Salah. -2 adalah koefisien pengali bentuk grafik.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Step 1: Recall the standard vertex form of a quadratic function: y = a(x - h)² + k.',
        'Step 2: The vertex is located at the point (h, k).',
        'Step 3: Compare y = -2(x - 5)² + 18 to y = a(x - h)² + k:',
        'a = -2, h = 5, and k = 18.',
        'Step 4: Therefore, the vertex coordinates are (5, 18). Since a < 0, this vertex is the maximum point of the parabola.',
      ],
      kk: [
        '1-қадам: Парабола төбесінің стандартты теңдеуі: y = a(x - h)² + k.',
        '2-қадам: Төбе нүктесі (h, k) болады.',
        '3-қадам: Берілген y = -2(x - 5)² + 18 теңдеуімен салыстырсақ: h = 5, k = 18.',
        '4-қадам: Төбе координаттары: (5, 18).',
      ],
      ru: [
        'Шаг 1: Стандартная форма вершины параболы: y = a(x - h)² + k.',
        'Шаг 2: Координаты вершины равны точке (h, k).',
        'Шаг 3: Сопоставляем: h = 5, k = 18.',
        'Шаг 4: Координаты вершины: (5, 18). Так как a = -2 < 0, ветви направлены вниз, а вершина — максимум.',
      ],
      id: [
        'Langkah 1: Bentuk umum puncak parabola: y = a(x - h)² + k.',
        'Langkah 2: Titik puncak terletak pada koordinat (h, k).',
        'Langkah 3: Dari y = -2(x - 5)² + 18, kita dapatkan h = 5 dan k = 18.',
        'Langkah 4: Maka koordinatnya adalah (5, 18).',
      ],
    },
    conceptExplanation: {
      en: 'Vertex form y = a(x - h)² + k allows you to immediately read the maximum or minimum point (h, k) without any calculus or expanding.',
      kk: 'y = a(x - h)² + k төбе түрі жақшаны ашпай-ақ (h, k) экстремум нүктесін бірден анықтауға мүмкіндік береді.',
      ru: 'Форма вершины y = a(x - h)² + k позволяет мгновенно определить координаты экстремума (h, k).',
      id: 'Bentuk puncak y = a(x - h)² + k memungkinkan Anda langsung membaca titik maksimum atau minimum (h, k).',
    },
    hints: {
      en: [
        'Compare the given equation to y = a(x - h)² + k.',
        'Be careful with the sign of h: (x - 5) means h = +5.',
        'The value of k directly gives the y-coordinate.',
      ],
      kk: [
        'Берілген өрнекті y = a(x - h)² + k формуласымен салыстырыңыз.',
        'h таңбасына мұқият болыңыз: (x - 5) болса, h = +5.',
        'k мәні тікелей y координатасын береді.',
      ],
      ru: [
        'Сравните с формулой y = a(x - h)² + k.',
        'Обратите внимание на знак: из (x - 5) следует h = 5.',
        'k задает координату y.',
      ],
      id: [
        'Bandingkan persamaan dengan bentuk y = a(x - h)² + k.',
        'Perhatikan tanda: (x - 5) berarti h = +5.',
        'Nilai k adalah koordinat y.',
      ],
    },
    glossaryTermIds: ['vertex', 'intercept'],
    estimatedSeconds: 35,
  },

  // --- Skill: adv_exponents_radicals (Rational Exponents & Radicals) ---
  {
    id: 'q_adv_04_f',
    skillId: 'adv_exponents_radicals',
    domainId: 'advanced_math',
    subtopic: 'Rational Exponents',
    difficulty: 'foundation',
    type: 'multiple_choice',
    prompt: {
      en: 'Which of the following is equivalent to x^(3/5) for all positive values of x?',
      kk: 'Барлық оң x мәндері үшін төмендегілердің қайсысы x^(3/5) өрнегіне мәндес?',
      ru: 'Какое из следующих выражений эквивалентно x^(3/5) для всех положительных значений x?',
      id: 'Manakah dari pilihan berikut yang ekuivalen dengan x^(3/5) untuk semua nilai positif x?',
    },
    choices: [
      {
        id: 'A',
        text: '⁵√(x³)',
        explanation: {
          en: 'Correct! By the definition of fractional exponents, x^(m/n) = ⁿ√(x^m). The denominator 5 is the root index and numerator 3 is the power.',
          kk: 'Дұрыс! Бөлшек көрсеткішті дәреже анықтамасы бойынша: x^(m/n) = ⁿ√(x^m). Бөліміндегі 5 — түбір көрсеткіші, алымындағы 3 — дәреже.',
          ru: 'Правильно! По определению рациональной степени: x^(m/n) = ⁿ√(x^m). Знаменатель 5 идет в степень корня, а числитель 3 — в степень под корнем.',
          id: 'Benar! Berdasarkan definisi pangkat pecahan: x^(m/n) = ⁿ√(x^m). Penyebut 5 adalah indeks akar dan pembilang 3 adalah pangkat.',
        },
      },
      {
        id: 'B',
        text: '³√(x⁵)',
        explanation: {
          en: 'Incorrect. Swapped the root index and the power.',
          kk: 'Қате. Түбір көрсеткіші мен дәреженің орнын ауыстырып алған.',
          ru: 'Неверно. Перепутаны числитель и знаменатель степени.',
          id: 'Salah. Indeks akar dan pangkat tertukar.',
        },
      },
      {
        id: 'C',
        text: '1 / (x^(5/3))',
        explanation: {
          en: 'Incorrect. A positive exponent does not place the expression in the denominator.',
          kk: 'Қате. Оң дәреже өрнекті бөлімге түсірмейді.',
          ru: 'Неверно. Степень положительная, а не отрицательная.',
          id: 'Salah. Pangkat bernilai positif, bukan negatif.',
        },
      },
      {
        id: 'D',
        text: 'x³ / x⁵',
        explanation: {
          en: 'Incorrect. x³ / x⁵ = x^(3 - 5) = x^(-2), not x^(3/5).',
          kk: 'Қате. x³ / x⁵ = x^(-2) болады.',
          ru: 'Неверно. x³ / x⁵ = x^(-2).',
          id: 'Salah. x³ / x⁵ = x^(-2).',
        },
      },
    ],
    correctAnswer: 'A',
    workedSolution: {
      en: [
        'Step 1: Recall the fundamental rule for fractional exponents:',
        'x^(power / root) = root√(x^power).',
        'Step 2: Here the exponent is 3/5, meaning the power is 3 and the root index is 5.',
        'Step 3: Therefore, x^(3/5) = ⁵√(x³).',
      ],
      kk: [
        '1-қадам: Бөлшек дәреженің ережесін еске түсіріңіз: x^(алымы / бөлімі) = бөлімі√(x^алымы).',
        '2-қадам: Дәреже көрсеткіші 3/5 болғандықтан, дәрежесі 3, түбір көрсеткіші 5.',
        '3-қадам: Демек, x^(3/5) = ⁵√(x³).',
      ],
      ru: [
        'Шаг 1: Правило рациональной степени: x^(a/b) = b-й корень из (x^a).',
        'Шаг 2: В дроби 3/5 числитель 3 — степень, а знаменатель 5 — показатель корня.',
        'Шаг 3: Получаем: ⁵√(x³).',
      ],
      id: [
        'Langkah 1: Gunakan aturan pangkat pecahan: x^(a/b) = akar pangkat b dari x^a.',
        'Langkah 2: Pembilang 3 adalah pangkat, penyebut 5 adalah indeks akar.',
        'Langkah 3: Hasilnya adalah ⁵√(x³).',
      ],
    },
    conceptExplanation: {
      en: 'In x^(a/b), the top number "a" is the exponent power and the bottom number "b" is the radical root (Flower power: roots grow at the bottom!).',
      kk: 'x^(a/b) өрнегінде жоғарғы a саны — дәреже, ал төменгі b саны — түбір (тамыр жердің астында өседі).',
      ru: 'В степени a/b: числитель — степень числа, а знаменатель — корень (корень всегда внизу).',
      id: 'Pada x^(a/b), pembilang "a" adalah pangkat dan penyebut "b" adalah indeks akar.',
    },
    hints: {
      en: [
        'Remember the mnemonic: "Power on top, Root on bottom".',
        'The denominator of the fraction is 5, so the root is the 5th root.',
        'The numerator is 3, so x is raised to the 3rd power.',
      ],
      kk: [
        'Есте сақтаңыз: "Дәреже үстінде, Түбір астында".',
        'Бөлшек бөлімі 5, демек 5-дәрежелі түбір.',
        'Алымы 3, демек x-тің кубы.',
      ],
      ru: [
        'Запомните: показатель корня всегда в знаменателе (внизу).',
        'Знаменатель 5 означает корень 5-й степени.',
        'Числитель 3 означает третью степень.',
      ],
      id: [
        'Ingat: pangkat di atas, akar di bawah.',
        'Penyebut 5 berarti akar pangkat 5.',
        'Pembilang 3 berarti x dipangkatkan 3.',
      ],
    },
    glossaryTermIds: ['equivalent_expressions'],
    estimatedSeconds: 30,
  },

  // --- Skill: adv_exponential_models (Exponential Growth & Decay) ---
  {
    id: 'q_adv_05_d',
    skillId: 'adv_exponential_models',
    domainId: 'advanced_math',
    subtopic: 'Exponential Growth',
    difficulty: 'developing',
    type: 'multiple_choice',
    prompt: {
      en: 'A bacterial culture starts with 250 bacteria and grows by 15% every hour. Which equation models the number of bacteria N after t hours?',
      kk: 'Бактерия өсіндісі 250 бактериядан басталып, сағат сайын 15%-ға өседі. t сағаттан кейінгі N бактерия санын қай теңдеу сипаттайды?',
      ru: 'Колония бактерий изначально насчитывает 250 бактерий и увеличивается на 15% каждый час. Какое уравнение задает число бактерий N через t часов?',
      id: 'Kultur bakteri awalnya berjumlah 250 bakteri dan bertambah 15% setiap jam. Persamaan manakah yang memodelkan jumlah bakteri N setelah t jam?',
    },
    choices: [
      {
        id: 'A',
        text: 'N = 250(0.15)^t',
        explanation: {
          en: 'Incorrect. 0.15 would mean the population drops to 15% of its size (an 85% decay) each hour.',
          kk: 'Қате. 0.15 бактерия саны сағат сайын 85%-ға азаяды дегенді білдіреді.',
          ru: 'Неверно. Множитель 0.15 означал бы стремительное вымирание (убывание на 85%).',
          id: 'Salah. 0.15 berarti peluruhan sebesar 85%.',
        },
      },
      {
        id: 'B',
        text: 'N = 250 + 15t',
        explanation: {
          en: 'Incorrect. This represents a linear increase of 15 bacteria per hour, not a 15% compound percent increase.',
          kk: 'Қате. Бұл 15%-дық өсім емес, сағатына тұрақты 15 бактерия қосылатын сызықтық өсім.',
          ru: 'Неверно. Это линейная модель с добавлением 15 бактерий в час, а не 15% рост.',
          id: 'Salah. Ini adalah model linear bertambah 15 per jam, bukan kenaikan persentase.',
        },
      },
      {
        id: 'C',
        text: 'N = 250(1.15)^t',
        explanation: {
          en: 'Correct! Exponential growth formula is N = a(1 + r)^t. Here a = 250 and r = 0.15, so base is 1 + 0.15 = 1.15.',
          kk: 'Дұрыс! Экспоненциалды өсу формуласы: N = a(1 + r)^t. Негізі: 1 + 0.15 = 1.15.',
          ru: 'Правильно! Формула роста: N = a(1 + r)^t. Здесь a = 250 и r = 0.15, база равна 1 + 0.15 = 1.15.',
          id: 'Benar! Rumus pertumbuhan eksponensial adalah N = a(1 + r)^t. Basis = 1 + 0.15 = 1.15.',
        },
      },
      {
        id: 'D',
        text: 'N = 250(1.015)^t',
        explanation: {
          en: 'Incorrect. 1.015 represents a 1.5% increase, not 15%.',
          kk: 'Қате. 1.015 — бұл 15% емес, 1.5% өсім.',
          ru: 'Неверно. 1.015 соответствует росту на 1.5%, а не на 15%.',
          id: 'Salah. 1.015 mewakili pertumbuhan 1.5%, bukan 15%.',
        },
      },
    ],
    correctAnswer: 'C',
    workedSolution: {
      en: [
        'Step 1: Identify initial value a = 250.',
        'Step 2: Growth rate r = 15% = 0.15.',
        'Step 3: Growth multiplier = 1 + r = 1 + 0.15 = 1.15.',
        'Step 4: Standard exponential equation: N = a(1 + r)^t = 250(1.15)^t.',
      ],
      kk: [
        '1-қадам: Бастапқы сан a = 250.',
        '2-қадам: Өсу қарқыны r = 15% = 0.15.',
        '3-қадам: Көбейткіш = 1 + r = 1.15.',
        '4-қадам: Теңдеу: N = 250(1.15)^t.',
      ],
      ru: [
        'Шаг 1: Начальное количество a = 250.',
        'Шаг 2: Прирост r = 15% = 0.15.',
        'Шаг 3: Множитель роста = 1 + r = 1.15.',
        'Шаг 4: Формула: N = 250(1.15)^t.',
      ],
      id: [
        'Langkah 1: Nilai awal a = 250.',
        'Langkah 2: Laju pertumbuhan r = 15% = 0.15.',
        'Langkah 3: Faktor pengali = 1 + r = 1.15.',
        'Langkah 4: Persamaan: N = 250(1.15)^t.',
      ],
    },
    conceptExplanation: {
      en: 'In exponential growth y = a(1 + r)^t, the base is greater than 1. A 15% increase means keeping 100% and adding 15%, giving 115% or 1.15.',
      kk: 'y = a(1 + r)^t экспоненциалды өсімінде 15% қосылғанда жалпы мән 115% болып, негіз 1.15 болады.',
      ru: 'При росте на p% основание степени равно (1 + p/100). При росте на 15% база равна 1.15.',
      id: 'Kenaikan 15% berarti mempertahankan 100% ditambah 15%, sehingga faktor pengali adalah 1.15.',
    },
    hints: {
      en: [
        'Does the culture add a fixed amount or multiply by a percent each hour?',
        'Multiplying by a percentage is exponential (exponent t).',
        '100% + 15% = 115%, which as a decimal is 1.15.',
      ],
      kk: [
        'Бактерия сағатына тұрақты сан қосыла ма, әлде пайызға көбейе ме?',
        'Пайыздық өсім дәрежелі (экспоненциалды) болады.',
        '100% + 15% = 115% = 1.15.',
      ],
      ru: [
        'Это процентный рост, значит функция показательная со степенью t.',
        'Прибавление 15% означает умножение на 100% + 15% = 115%.',
        'Переведите 115% в десятичную дробь.',
      ],
      id: [
        'Pertumbuhan dengan persentase tetap merupakan fungsi eksponensial (pangkat t).',
        '100% + 15% = 115%.',
        'Ubah 115% menjadi desimal.',
      ],
    },
    glossaryTermIds: ['percent_increase', 'rate_of_change'],
    estimatedSeconds: 40,
  },

  // ==========================================
  // DOMAIN: PROBLEM-SOLVING & DATA ANALYSIS
  // ==========================================

  // --- Skill: ps_ratios_rates_units (Ratios, Rates & Unit Conversions) ---
  {
    id: 'q_ps_01_f',
    skillId: 'ps_ratios_rates_units',
    domainId: 'problem_solving',
    subtopic: 'Unit Conversion',
    difficulty: 'foundation',
    type: 'multiple_choice',
    prompt: {
      en: 'A car travels at a constant speed of 45 miles per hour. How many miles will the car travel in 2 hours and 20 minutes?',
      kk: 'Автокөлік тұрақты 45 миль/сағат жылдамдықпен қозғалады. Ол 2 сағат 20 минутта қанша миль жол жүреді?',
      ru: 'Автомобиль движется с постоянной скоростью 45 миль в час. Сколько миль проедет автомобиль за 2 часа и 20 минут?',
      id: 'Sebuah mobil melaju dengan kecepatan konstan 45 mil per jam. Berapa mil jarak yang ditempuh mobil tersebut dalam 2 jam 20 menit?',
    },
    choices: [
      {
        id: 'A',
        text: '90',
        explanation: {
          en: 'Incorrect. 90 is only for the first 2 hours, ignoring the additional 20 minutes.',
          kk: 'Қате. 90 — тек алғашқы 2 сағаттың жолы, 20 минут ескерілмеген.',
          ru: 'Неверно. 90 миль — это расстояние только за 2 часа без учета 20 минут.',
          id: 'Salah. 90 hanya jarak untuk 2 jam, belum termasuk 20 menit.',
        },
      },
      {
        id: 'B',
        text: '105',
        explanation: {
          en: 'Correct! 20 minutes = 20/60 = 1/3 of an hour. Total time = 2 + 1/3 = 7/3 hours. Distance = 45 × (7/3) = 15 × 7 = 105 miles.',
          kk: 'Дұрыс! 20 минут = сағаттың 1/3 бөлігі. Жалпы уақыт = 7/3 сағат. Қашықтық = 45 × (7/3) = 105 миль.',
          ru: 'Правильно! 20 минут — это 1/3 часа. Общее время = 2 + 1/3 = 7/3 часа. Расстояние = 45 × 7/3 = 105 миль.',
          id: 'Benar! 20 menit = 1/3 jam. Total waktu = 7/3 jam. Jarak = 45 × (7/3) = 105 mil.',
        },
      },
      {
        id: 'C',
        text: '110',
        explanation: {
          en: 'Incorrect calculation.',
          kk: 'Қате есептеу.',
          ru: 'Неверный расчет.',
          id: 'Salah perhitungan.',
        },
      },
      {
        id: 'D',
        text: '135',
        explanation: {
          en: 'Incorrect. 135 is the distance for 3 full hours.',
          kk: 'Қате. 135 миль — 3 толық сағаттағы қашықтық.',
          ru: 'Неверно. 135 миль — это расстояние за 3 полных часа.',
          id: 'Salah. 135 adalah jarak untuk 3 jam penuh.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Step 1: Convert time into hours: 2 hours and 20 minutes.',
        'Since there are 60 minutes in 1 hour, 20 minutes = 20/60 = 1/3 hour.',
        'Total time = 2 + 1/3 = 7/3 hours (or ~2.333 hours).',
        'Step 2: Use Distance = Speed × Time.',
        'Distance = 45 miles/hour × (7/3 hours) = (45 / 3) × 7 = 15 × 7 = 105 miles.',
      ],
      kk: [
        '1-қадам: Уақытты толық сағатқа айналдырамыз: 20 минут = 20/60 = 1/3 сағат.',
        'Жалпы уақыт = 2 + 1/3 = 7/3 сағат.',
        '2-қадам: Қашықтық = Жылдамдық × Уақыт.',
        'Қашықтық = 45 × (7/3) = 15 × 7 = 105 миль.',
      ],
      ru: [
        'Шаг 1: Переводим минуты в часы: 20 минут = 20/60 = 1/3 часа.',
        'Всего времени: 2 + 1/3 = 7/3 часа.',
        'Шаг 2: Расстояние = Скорость × Время.',
        'S = 45 × (7/3) = 15 × 7 = 105 миль.',
      ],
      id: [
        'Langkah 1: Ubah 20 menit ke satuan jam: 20/60 = 1/3 jam.',
        'Total waktu = 2 1/3 = 7/3 jam.',
        'Langkah 2: Jarak = Kecepatan × Waktu.',
        'Jarak = 45 × (7/3) = 105 mil.',
      ],
    },
    conceptExplanation: {
      en: 'Always convert units so time units match before calculating distance: minutes must be expressed in hours when speed is in miles per hour.',
      kk: 'Есептеу жүргізбес бұрын өлшем бірліктерін сәйкестендіріңіз: жылдамдық сағатына берілсе, минуттарды сағатқа айналдыру керек.',
      ru: 'Перед умножением согласуйте единицы измерения: если скорость в милях в час, то минуты обязательно переводятся в доли часа.',
      id: 'Selalu samakan satuan sebelum menghitung: menit harus diubah ke jam jika kecepatan dalam satuan mil per jam.',
    },
    hints: {
      en: [
        'What fraction of an hour is 20 minutes?',
        '20 out of 60 minutes is 1/3 of an hour.',
        'Multiply 45 by (2 + 1/3).',
      ],
      kk: [
        '20 минут бір сағаттың қандай бөлігін құрайды?',
        '20/60 = 1/3 сағат.',
        '45-ті (2 + 1/3)-ге көбейтіңіз.',
      ],
      ru: [
        'Какую часть часа составляют 20 минут?',
        '20 минут = 20/60 = 1/3 часа.',
        'Умножьте 45 на (2 + 1/3).',
      ],
      id: [
        'Berapa bagian jam dari 20 menit?',
        '20 menit adalah 1/3 jam.',
        'Kalikan 45 dengan 2 1/3.',
      ],
    },
    glossaryTermIds: ['rate_of_change'],
    estimatedSeconds: 45,
  },

  // --- Skill: ps_percentages (Percentages & Percent Change) ---
  {
    id: 'q_ps_02_d',
    skillId: 'ps_percentages',
    domainId: 'problem_solving',
    subtopic: 'Percent Change',
    difficulty: 'developing',
    type: 'multiple_choice',
    prompt: {
      en: 'The price of an electronic tablet was initially $400. The store discounted the price by 20%. One week later, the discounted price was reduced by an additional 10%. What was the final price of the tablet?',
      kk: 'Электрондық планшеттің бастапқы бағасы $400 болды. Дүкен оған 20% жеңілдік жасады. Бір аптадан соң жеңілдетілген баға тағы 10%-ға арзандатылды. Планшеттің соңғы бағасы қанша болды?',
      ru: 'Начальная цена планшета составляла $400. Магазин снизил цену на 20%. Спустя неделю цена была снижена еще на 10%. Какова окончательная цена планшета?',
      id: 'Harga awal sebuah tablet adalah $400. Toko memberikan diskon sebesar 20%. Seminggu kemudian, harga setelah diskon tersebut dipotong lagi sebesar 10%. Berapakah harga akhir tablet tersebut?',
    },
    choices: [
      {
        id: 'A',
        text: '$280',
        explanation: {
          en: 'Incorrect. This mistake comes from erroneously adding percentages (20% + 10% = 30% of $400 = $120 discount => $280). Successive discounts do NOT simply add up!',
          kk: 'Қате. Бұл пайызды жай ғана қоса салғандағы қате (20% + 10% = 30%). Тізбекті жеңілдіктер бұлай қосылмайды!',
          ru: 'Неверно. Классическая ловушка: проценты скидок нельзя просто складывать (20% + 10% ≠ 30%).',
          id: 'Salah. Kesalahan umum menjumlahkan persentase langsung (20% + 10% = 30%). Diskon bertingkat tidak dijumlahkan!',
        },
      },
      {
        id: 'B',
        text: '$288',
        explanation: {
          en: 'Correct! First discount: 400 × 0.80 = $320. Second discount: 320 × 0.90 = $288. (Or 400 × 0.80 × 0.90 = $288).',
          kk: 'Дұрыс! Бірінші жеңілдік: 400 × 0.80 = $320. Екінші жеңілдік: 320 × 0.90 = $288.',
          ru: 'Правильно! Первая скидка: 400 × 0.80 = $320. Вторая скидка берется уже от $320: 320 × 0.90 = $288.',
          id: 'Benar! Diskon pertama: 400 × 0.80 = $320. Diskon kedua: 320 × 0.90 = $288.',
        },
      },
      {
        id: 'C',
        text: '$310',
        explanation: {
          en: 'Incorrect calculation.',
          kk: 'Қате есептеу.',
          ru: 'Неверный расчет.',
          id: 'Salah perhitungan.',
        },
      },
      {
        id: 'D',
        text: '$320',
        explanation: {
          en: 'Incorrect. $320 is the price after only the first 20% discount.',
          kk: 'Қате. $320 — тек бірінші 20% жеңілдіктен кейінгі бағасы.',
          ru: 'Неверно. $320 — цена после первой скидки, без учета второй.',
          id: 'Salah. $320 baru harga setelah diskon pertama.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Step 1: Calculate price after the first 20% discount.',
        'Paying 100% - 20% = 80%: Price_1 = 400 × 0.80 = $320.',
        'Step 2: The second discount of 10% applies to the NEW price ($320), NOT the original $400.',
        'Paying 100% - 10% = 90%: Price_final = 320 × 0.90 = $288.',
        'Combined single calculation: 400 × (1 - 0.20) × (1 - 0.10) = 400 × 0.80 × 0.90 = $288.',
      ],
      kk: [
        '1-қадам: Алғашқы 20% жеңілдіктен кейінгі баға: 400 × 0.80 = $320.',
        '2-қадам: Келесі 10% жеңілдік бастапқы 400-ден емес, ЖАҢА 320 доллардан алынады.',
        '3-қадам: Соңғы баға = 320 × 0.90 = $288.',
      ],
      ru: [
        'Шаг 1: Считаем цену после первой скидки 20%: 400 × 0.80 = $320.',
        'Шаг 2: Вторая скидка 10% берется от новой цены $320, а не от $400.',
        'Шаг 3: 320 × 0.90 = $288.',
        'Быстрый способ: 400 × 0.80 × 0.90 = $288.',
      ],
      id: [
        'Langkah 1: Harga setelah diskon 20%: 400 × 0.80 = $320.',
        'Langkah 2: Diskon kedua 10% dihitung dari harga baru $320, bukan dari $400.',
        'Langkah 3: 320 × 0.90 = $288.',
      ],
    },
    conceptExplanation: {
      en: 'Successive percentage changes compound: never add percentages directly. Multiply by successive decay factors (1 - r1)(1 - r2).',
      kk: 'Тізбекті пайыздық өзгерістер көбейтіледі: пайыздарды ешқашан жай қоса салмаңыз. Әр қадамдағы коэффициенттерді көбейтіңіз: (1 - r1)(1 - r2).',
      ru: 'Последовательные проценты перемножаются, а не складываются: P_кон = P_нач × (1 - d1) × (1 - d2).',
      id: 'Persentase berturut-turut dikalikan melalui faktor pengali, bukan dijumlahkan secara langsung.',
    },
    hints: {
      en: [
        'A 20% discount means you pay 80% of the price.',
        'Find the price after the first discount.',
        'Apply the 10% discount to this new intermediate price, not the original $400.',
      ],
      kk: [
        '20% жеңілдік бағаның 80%-ын төлейтініңізді білдіреді.',
        'Алдымен бірінші жеңілдіктен кейінгі бағаны табыңыз.',
        '10% жеңілдікті бастапқы 400-ге емес, шыққан жаңа бағаға қолданыңыз.',
      ],
      ru: [
        'Скидка 20% означает оплату 80% стоимости.',
        'Найдите промежуточную цену после первой скидки.',
        'Вторую скидку 10% вычитайте из полученной промежуточной цены.',
      ],
      id: [
        'Diskon 20% berarti Anda membayar 80% dari harga awal.',
        'Hitung harga setelah diskon pertama.',
        'Terapkan diskon 10% pada harga yang baru tersebut.',
      ],
    },
    glossaryTermIds: ['percent_increase'],
    estimatedSeconds: 50,
  },

  // --- Skill: ps_statistics_distributions (Mean, Median, Range & Outliers) ---
  {
    id: 'q_ps_03_p',
    skillId: 'ps_statistics_distributions',
    domainId: 'problem_solving',
    subtopic: 'Effect of Outliers',
    difficulty: 'proficient',
    type: 'multiple_choice',
    prompt: {
      en: 'A dataset consists of 9 distinct positive numbers with a mean of 50 and a median of 48. If the largest number in the dataset is increased by 100 while all other numbers remain unchanged, how will the mean and median change?',
      kk: 'Деректер жиыны 9 әртүрлі оң саннан тұрады, олардың орта мәні 50, ал медианасы 48. Егер жиындағы ең үлкен сан 100-ге арттырылып, қалған сандар өзгеріссіз қалса, орта мән (mean) мен медиана (median) қалай өзгереді?',
      ru: 'Набор данных состоит из 9 различных положительных чисел со средним арифметическим 50 и медианой 48. Если самое большое число увеличить на 100, оставив остальные числа без изменений, как изменятся среднее арифметическое и медиана?',
      id: 'Kumpulan data terdiri dari 9 bilangan positif dengan rata-rata (mean) 50 dan median 48. Jika bilangan terbesar ditambah 100 sementara bilangan lainnya tetap, bagaimanakah perubahan nilai rata-rata dan median?',
    },
    choices: [
      {
        id: 'A',
        text: 'Both the mean and the median will increase.',
        explanation: {
          en: 'Incorrect. The median depends on the middle (5th) value, which is unaffected when only the maximum value changes.',
          kk: 'Қате. Медиана 5-ші ортадағы санға байланысты, ал тек ең үлкен сан өзгергенде ол өзгермейді.',
          ru: 'Неверно. Медиана — это 5-е по порядку число, на которое изменение максимума не влияет.',
          id: 'Salah. Median adalah nilai tengah ke-5 yang posisinya tidak berubah.',
        },
      },
      {
        id: 'B',
        text: 'The mean will increase, but the median will remain unchanged.',
        explanation: {
          en: 'Correct! The mean increases by 100/9 ≈ 11.1 because the total sum increased. The median is the 5th number in sorted order, which does not change when the 9th number grows even larger.',
          kk: 'Дұрыс! Орта мән 100/9-ға өседі, ал медиана (5-орындағы сан) өзгеріссіз қалады.',
          ru: 'Правильно! Среднее увеличится (на 100/9), а медиана (5-е число при сортировке) останется прежней.',
          id: 'Benar! Rata-rata meningkat (sebesar 100/9), tetapi median tetap sama karena bilangan ke-5 tidak bergeser.',
        },
      },
      {
        id: 'C',
        text: 'The median will increase, but the mean will remain unchanged.',
        explanation: {
          en: 'Incorrect. The mean MUST change whenever any value changes because the sum changes.',
          kk: 'Қате. Сандардың біреуі өссе, қосынды өсіп, орта мән міндетті түрде өзгереді.',
          ru: 'Неверно. При изменении суммы среднее всегда меняется.',
          id: 'Salah. Jika jumlah data berubah, rata-rata pasti berubah.',
        },
      },
      {
        id: 'D',
        text: 'Neither the mean nor the median will change.',
        explanation: {
          en: 'Incorrect. The mean is sensitive to extreme values.',
          kk: 'Қате. Орта мән шеткі сандардың өзгеруіне сезімтал.',
          ru: 'Неверно. Среднее зависит от всех значений выборки.',
          id: 'Salah. Rata-rata sangat peka terhadap perubahan nilai.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Step 1: Understand the mean: Mean = (Sum of all 9 numbers) / 9.',
        'When the largest number increases by 100, the sum of the numbers increases by 100.',
        'New Mean = Old Mean + 100 / 9 = 50 + 11.11 = 61.11. Thus, the mean increases.',
        'Step 2: Understand the median: For 9 sorted numbers, the median is the 5th number.',
        'The largest number was already in 9th position. Making it even larger keeps it in 9th position.',
        'The 5th number remains completely unchanged. Thus, the median remains unchanged.',
      ],
      kk: [
        '1-қадам: Орта мән = Қосынды / 9. Ең үлкен сан 100-ге өскенде, қосынды 100-ге өседі.',
        'Жаңа орта мән = 50 + 100/9 = 61.11. Демек, орта мән өседі.',
        '2-қадам: 9 сан үшін медиана — өсу ретімен тізгенде 5-ші орындағы сан.',
        'Ең үлкен сан 9-шы орында тұрған, оны одан сайын үлкейткенде 5-ші сан еш өзгермейді.',
        'Демек, медиана өзгеріссіз қалады.',
      ],
      ru: [
        'Шаг 1: Среднее = Сумма / 9. Увеличение одного числа на 100 увеличивает общую сумму на 100, значит среднее увеличится на 100/9.',
        'Шаг 2: В упорядоченном ряду из 9 чисел медиана — это ровно 5-е число.',
        'Максимальное число стояло на 9-м месте. Его увеличение не сдвигает 5-е число.',
        'Итог: среднее вырастет, медиана не изменится.',
      ],
      id: [
        'Langkah 1: Rata-rata = Total Jumlah / 9. Total bertambah 100, maka rata-rata bertambah 100/9.',
        'Langkah 2: Median dari 9 data terurut adalah data ke-5.',
        'Data terbesar berada di urutan ke-9. Menambah nilainya tidak mengubah data ke-5.',
        'Kesimpulan: Rata-rata bertambah, median tetap.',
      ],
    },
    conceptExplanation: {
      en: 'The mean is sensitive to outliers and extreme changes. The median is resistant to outliers as long as the rank order of the middle value does not change.',
      kk: 'Орта мән шеткі мәндерге (outliers) өте сезімтал, ал медиана шеткі өзгерістерге тұрақты.',
      ru: 'Среднее арифметическое чувствительно к выбросам, тогда как медиана устойчива к изменениям крайних значений.',
      id: 'Mean sangat dipengaruhi oleh pencilan (outlier), sedangkan median bersifat kebal terhadap perubahan nilai ekstrem.',
    },
    hints: {
      en: [
        'How is the mean calculated? Does increasing a number increase the total sum?',
        'In a set of 9 numbers, which position holds the median?',
        'Does increasing the already-largest number change which number is in the 5th spot?',
      ],
      kk: [
        'Орта мән қалай есептеледі? Бір санды өсіргенде қосынды өсе ме?',
        '9 санның ішінде медиана қай орындағы сан?',
        'Ең үлкен санды үлкейткенде 5-орындағы сан өзгере ме?',
      ],
      ru: [
        'Как вычисляется среднее? Изменится ли сумма чисел?',
        'Какое место по счету занимает медиана в выборке из 9 чисел?',
        'Повлияет ли изменение 9-го числа на 5-е число?',
      ],
      id: [
        'Bagaimana rumus rata-rata? Apakah totalnya bertambah?',
        'Pada urutan 9 angka, angka ke berapakah yang menjadi median?',
        'Apakah angka ke-5 ikut berubah jika angka ke-9 diperbesar?',
      ],
    },
    glossaryTermIds: ['mean_and_median', 'standard_deviation'],
    estimatedSeconds: 45,
  },

  // --- Skill: ps_probability_conditional (Probability & Two-Way Frequency Tables) ---
  {
    id: 'q_ps_04_p',
    skillId: 'ps_probability_conditional',
    domainId: 'problem_solving',
    subtopic: 'Conditional Probability',
    difficulty: 'proficient',
    type: 'multiple_choice',
    prompt: {
      en: 'A high school surveyed 200 students about their preference for Math or Science:\n- Grade 10: 45 prefer Math, 35 prefer Science (Total: 80)\n- Grade 11: 65 prefer Math, 55 prefer Science (Total: 120)\nIf a student who prefers Science is selected at random, what is the probability that the student is in Grade 10?',
      kk: 'Мектепте 200 оқушы арасында сауалнама жүргізілді:\n- 10-сынып: 45 математиканы, 35 жаратылыстануды таңдады (Барлығы: 80)\n- 11-сынып: 65 математиканы, 55 жаратылыстануды таңдады (Барлығы: 120)\nЕгер жаратылыстануды таңдаған оқушылардың арасынан кездейсоқ бір оқушы таңдалса, оның 10-сыныпта оқу ықтималдығы қандай?',
      ru: 'В школе опросили 200 учеников о любимом предмете:\n- 10 класс: 45 выбрали математику, 35 естествознание (Всего: 80)\n- 11 класс: 65 выбрали математику, 55 естествознание (Всего: 120)\nЕсли случайным образом выбирается ученик, предпочитающий естествознание, какова вероятность того, что он учится в 10 классе?',
      id: 'Sebuah sekolah mensurvei 200 siswa mengenai minat pelajaran:\n- Kelas 10: 45 memilih Matematika, 35 Sains (Total: 80)\n- Kelas 11: 65 memilih Matematika, 55 Sains (Total: 120)\nJika seorang siswa yang memilih Sains dipilih secara acak, berapakah peluang siswa tersebut berasal dari Kelas 10?',
    },
    choices: [
      {
        id: 'A',
        text: '35 / 200',
        explanation: {
          en: 'Incorrect. 35/200 divides by ALL 200 students. The condition specifies that the student was selected ONLY from those who prefer Science.',
          kk: 'Қате. 35/200 барлық 200 оқушыға бөледі. Ал шарт тек ғылымды таңдағандар ішінен деп тұр.',
          ru: 'Неверно. 200 — это все ученики, а выборка ограничена теми, кто выбрал естествознание.',
          id: 'Salah. 35/200 membagi dengan seluruh 200 siswa, bukan dari pemilih Sains saja.',
        },
      },
      {
        id: 'B',
        text: '35 / 80',
        explanation: {
          en: 'Incorrect. 80 is the total number of Grade 10 students, but the condition was choosing from Science fans.',
          kk: 'Қате. 80 — 10-сынып оқушыларының жалпы саны.',
          ru: 'Неверно. 80 — общее число десятиклассников.',
          id: 'Salah. 80 adalah total siswa kelas 10.',
        },
      },
      {
        id: 'C',
        text: '35 / 90',
        explanation: {
          en: 'Correct! Total students preferring Science = 35 (Grade 10) + 55 (Grade 11) = 90. Grade 10 Science students = 35. Probability = 35/90 (or 7/18).',
          kk: 'Дұрыс! Жаратылыстануды таңдағандардың жалпы саны = 35 + 55 = 90. 10-сыныптағылар = 35. Ықтималдық = 35/90.',
          ru: 'Правильно! Всего выбравших естествознание: 35 + 55 = 90. Из них в 10 классе: 35. Искомая условная вероятность = 35/90.',
          id: 'Benar! Total pemilih Sains = 35 + 55 = 90. Siswa kelas 10 pemilih Sains = 35. Peluang = 35/90.',
        },
      },
      {
        id: 'D',
        text: '55 / 90',
        explanation: {
          en: 'Incorrect. 55/90 is the probability of selecting a Grade 11 student from those who prefer Science.',
          kk: 'Қате. 55/90 — 11-сынып оқушысы болу ықтималдығы.',
          ru: 'Неверно. Это вероятность того, что ученик из 11 класса.',
          id: 'Salah. 55/90 adalah peluang siswa dari kelas 11.',
        },
      },
    ],
    correctAnswer: 'C',
    workedSolution: {
      en: [
        'Step 1: Identify the condition: "If a student who prefers Science is selected at random...".',
        'This restricts the sample space (denominator) solely to students who prefer Science.',
        'Step 2: Calculate the denominator: Total preferring Science = 35 (Grade 10) + 55 (Grade 11) = 90.',
        'Step 3: Calculate the numerator: How many of those 90 are in Grade 10? Exactly 35.',
        'Step 4: Form the probability: P(Grade 10 | Science) = 35 / 90 = 7 / 18.',
      ],
      kk: [
        '1-қадам: Шартты анықтаймыз: Таңдау тек "жаратылыстануды таңдағандардың" ішінен жүреді.',
        '2-қадам: Бөлімі (жаратылыстануды таңдағандар) = 35 + 55 = 90.',
        '3-қадам: Алымы (соның ішінде 10-сыныптағылар) = 35.',
        '4-қадам: Ықтималдық = 35 / 90.',
      ],
      ru: [
        'Шаг 1: Фиксируем условие: "выбирается ученик, предпочитающий естествознание". Знаменатель ограничен этой группой.',
        'Шаг 2: Число любителей естествознания = 35 (10 класс) + 55 (11 класс) = 90.',
        'Шаг 3: Благоприятные исходы (ученики 10 класса среди них) = 35.',
        'Шаг 4: Вероятность = 35 / 90.',
      ],
      id: [
        'Langkah 1: Perhatikan syaratnya: "siswa yang memilih Sains dipilih secara acak".',
        'Penyebut dibatasi hanya untuk siswa pemilih Sains: 35 + 55 = 90.',
        'Langkah 2: Pembilang adalah siswa kelas 10 di kelompok tersebut: 35.',
        'Langkah 3: Peluang = 35/90.',
      ],
    },
    conceptExplanation: {
      en: 'In conditional probability questions on the SAT, look for words like "given that", "among", or "if a student who...". This tells you the specific subgroup to use as your denominator.',
      kk: 'SAT conditional probability сұрақтарында "given that", "among" немесе "if a student who..." сөздері бөлімге қай топты қою керектігін көрсетеді.',
      ru: 'В условной вероятности на SAT ключевые слова ("среди тех, кто", "если известно, что") указывают, какая именно подгруппа идет в знаменатель дроби.',
      id: 'Pada peluang bersyarat SAT, frasa seperti "jika seorang siswa yang..." menunjukkan kelompok yang menjadi penyebut.',
    },
    hints: {
      en: [
        'Notice who is being chosen: NOT all 200 students, only those who prefer Science!',
        'How many total students prefer Science?',
        'Of those students, how many are in Grade 10?',
      ],
      kk: [
        'Кім таңдалып жатқанына мән беріңіз: барлық 200 емес, тек жаратылыстануды таңдағандар!',
        'Жаратылыстануды таңдаған барлығы қанша оқушы?',
        'Олардың қаншасы 10-сыныпта оқиды?',
      ],
      ru: [
        'Обратите внимание: выбирают не из всех 200, а только из выбравших естествознание.',
        'Сколько всего учеников выбрали естествознание?',
        'Сколько из них учатся в 10 классе?',
      ],
      id: [
        'Perhatikan dari kelompok mana siswa dipilih: bukan dari semua 200, melainkan hanya dari pemilih Sains.',
        'Berapa jumlah total siswa yang memilih Sains?',
        'Berapa orang dari mereka yang berada di kelas 10?',
      ],
    },
    glossaryTermIds: ['solution_to_system'],
    estimatedSeconds: 50,
  },

  // ==========================================
  // DOMAIN: GEOMETRY & TRIGONOMETRY
  // ==========================================

  // --- Skill: geom_triangles_angles (Lines, Angles & Similar Triangles) ---
  {
    id: 'q_geom_01_f',
    skillId: 'geom_triangles_angles',
    domainId: 'geometry_trig',
    subtopic: 'Angles and Parallel Lines',
    difficulty: 'foundation',
    type: 'multiple_choice',
    prompt: {
      en: 'In triangle ABC, the measure of angle A is 55° and the measure of angle B is 70°. What is the measure of angle C in degrees?',
      kk: 'ABC үшбұрышында A бұрышы 55°, ал B бұрышы 70°. C бұрышының өлшемі неше градус?',
      ru: 'В треугольнике ABC угол A равен 55°, а угол B равен 70°. Какова градусная мера угла C?',
      id: 'Pada segitiga ABC, besar sudut A adalah 55° dan besar sudut B adalah 70°. Berapakah besar sudut C dalam derajat?',
    },
    choices: [
      {
        id: 'A',
        text: '55°',
        explanation: {
          en: 'Correct! The sum of interior angles in any triangle is 180°. 180° - (55° + 70°) = 180° - 125° = 55°.',
          kk: 'Дұрыс! Кез келген үшбұрыштың ішкі бұрыштарының қосындысы 180°: 180° - (55° + 70°) = 55°.',
          ru: 'Правильно! Сумма углов треугольника равна 180°: 180° - (55° + 70°) = 180° - 125° = 55°.',
          id: 'Benar! Jumlah sudut dalam segitiga adalah 180°: 180° - (55° + 70°) = 55°.',
        },
      },
      {
        id: 'B',
        text: '65°',
        explanation: {
          en: 'Incorrect arithmetic calculation.',
          kk: 'Қате есептеу.',
          ru: 'Неверный арифметический расчет.',
          id: 'Salah perhitungan aritmetika.',
        },
      },
      {
        id: 'C',
        text: '70°',
        explanation: {
          en: 'Incorrect.',
          kk: 'Қате.',
          ru: 'Неверно.',
          id: 'Salah.',
        },
      },
      {
        id: 'D',
        text: '125°',
        explanation: {
          en: 'Incorrect. 125° is the sum of angles A and B, not the remaining angle C.',
          kk: 'Қате. 125° — A және B бұрыштарының қосындысы.',
          ru: 'Неверно. 125° — это сумма углов A и B.',
          id: 'Salah. 125° adalah jumlah sudut A dan B.',
        },
      },
    ],
    correctAnswer: 'A',
    workedSolution: {
      en: [
        'Step 1: The Triangle Angle Sum Theorem states that the sum of angles in any triangle is 180°:',
        'Angle A + Angle B + Angle C = 180°.',
        'Step 2: Substitute known angles: 55° + 70° + Angle C = 180°.',
        '125° + Angle C = 180°.',
        'Step 3: Angle C = 180° - 125° = 55°.',
        '(Note: Since angle A = angle C = 55°, triangle ABC is an isosceles triangle!)',
      ],
      kk: [
        '1-қадам: Үшбұрыштың ішкі бұрыштарының қосындысы 180°:',
        'A + B + C = 180°.',
        '2-қадам: 55° + 70° + C = 180°.',
        '125° + C = 180°.',
        '3-қадам: C = 55°.',
      ],
      ru: [
        'Шаг 1: Сумма углов в треугольнике равна 180°: A + B + C = 180°.',
        'Шаг 2: 55° + 70° + C = 180°.',
        'Шаг 3: C = 180° - 125° = 55°.',
      ],
      id: [
        'Langkah 1: Jumlah sudut segitiga = 180°.',
        'Langkah 2: 55° + 70° + C = 180°.',
        'Langkah 3: C = 180° - 125° = 55°.',
      ],
    },
    conceptExplanation: {
      en: 'The interior angles of any triangle on the Euclidean plane always sum to 180 degrees.',
      kk: 'Кез келген жазық үшбұрыштың ішкі бұрыштарының қосындысы әрқашан 180 градусқа тең.',
      ru: 'Сумма внутренних углов любого треугольника на плоскости строго равна 180°.',
      id: 'Jumlah sudut dalam setiap segitiga selalu sama dengan 180 derajat.',
    },
    hints: {
      en: [
        'What is the sum of angles in a triangle?',
        'Add 55° and 70° together.',
        'Subtract this sum from 180°.',
      ],
      kk: [
        'Үшбұрыш бұрыштарының қосындысы нешеге тең?',
        '55° пен 70°-ты қосыңыз.',
        'Шыққан қосындыны 180°-тан азайтыңыз.',
      ],
      ru: [
        'Чему равна сумма углов треугольника?',
        'Сложите 55° и 70°.',
        'Вычтите результат из 180°.',
      ],
      id: [
        'Berapa jumlah sudut dalam segitiga?',
        'Jumlahkan 55° dan 70°.',
        'Kurangkan dari 180°.',
      ],
    },
    glossaryTermIds: ['hypotenuse'],
    estimatedSeconds: 30,
  },

  // --- Skill: geom_right_triangles_trig (Pythagorean Theorem & Trigonometry) ---
  {
    id: 'q_geom_02_d',
    skillId: 'geom_right_triangles_trig',
    domainId: 'geometry_trig',
    subtopic: 'Complementary Angle Trigonometric Identity',
    difficulty: 'developing',
    type: 'multiple_choice',
    prompt: {
      en: 'In a right triangle, one acute angle has measure x° where sin(x°) = 5/13. What is the value of cos(90° - x°)?',
      kk: 'Тікбұрышты үшбұрышта сүйір бұрыштардың бірі x° және sin(x°) = 5/13. cos(90° - x°) мәні неге тең?',
      ru: 'В прямоугольном треугольнике один из острых углов равен x°, причем sin(x°) = 5/13. Чему равно значение cos(90° - x°)?',
      id: 'Dalam sebuah segitiga siku-siku, salah satu sudut lancip berukuran x° dengan sin(x°) = 5/13. Berapakah nilai dari cos(90° - x°)?',
    },
    choices: [
      {
        id: 'A',
        text: '5 / 13',
        explanation: {
          en: 'Correct! By the complementary angle theorem for right triangles, sin(x°) = cos(90° - x°). Both equal 5/13.',
          kk: 'Дұрыс! Тікбұрышты үшбұрышта толықтауыш бұрыштар үшін sin(x°) = cos(90° - x°) қасиеті орындалады. Сондықтан мәні 5/13.',
          ru: 'Правильно! По тригонометрическому тождеству смежных углов sin(x) = cos(90° - x). Значение точно такое же: 5/13.',
          id: 'Benar! Berdasarkan identitas sudut berkomplemen, sin(x) = cos(90° - x). Keduanya bernilai 5/13.',
        },
      },
      {
        id: 'B',
        text: '12 / 13',
        explanation: {
          en: 'Incorrect. 12/13 is the value of cos(x°) or sin(90° - x°), not cos(90° - x°).',
          kk: 'Қате. 12/13 — бұл cos(x°) мәні.',
          ru: 'Неверно. 12/13 — это значение cos(x°).',
          id: 'Salah. 12/13 adalah nilai cos(x).',
        },
      },
      {
        id: 'C',
        text: '5 / 12',
        explanation: {
          en: 'Incorrect. 5/12 is tan(x°).',
          kk: 'Қате. 5/12 — бұл tan(x°).',
          ru: 'Неверно. 5/12 — это тангенс tan(x°).',
          id: 'Salah. 5/12 adalah nilai tan(x).',
        },
      },
      {
        id: 'D',
        text: '13 / 5',
        explanation: {
          en: 'Incorrect. Sine and cosine can never exceed 1.',
          kk: 'Қате. Синус пен косинус ешқашан 1-ден аспайды.',
          ru: 'Неверно. Синус и косинус не могут быть больше 1.',
          id: 'Salah. Nilai sin dan cos tidak pernah lebih dari 1.',
        },
      },
    ],
    correctAnswer: 'A',
    workedSolution: {
      en: [
        'Step 1: Recall the key SAT trigonometry complementary identity:',
        'sin(θ) = cos(90° - θ) and cos(θ) = sin(90° - θ).',
        'Step 2: In any right triangle, the two acute angles sum to 90°. If one angle is x°, the other is (90° - x°).',
        'Step 3: The opposite side for angle x is the adjacent side for angle (90° - x).',
        'Step 4: Therefore, cos(90° - x°) = sin(x°) = 5/13.',
      ],
      kk: [
        '1-қадам: SAT-тағы маңызды тригонометриялық теңбе-теңдік: sin(x°) = cos(90° - x°).',
        '2-қадам: Тікбұрышты үшбұрышта x бұрышына қарама-қарсы катет (90° - x) бұрышы үшін іргелес катет болып табылады.',
        '3-қадам: Сондықтан cos(90° - x°) = sin(x°) = 5/13.',
      ],
      ru: [
        'Шаг 1: Фундаментальное свойство для SAT: sin(x) = cos(90° - x).',
        'Шаг 2: Катет, противолежащий углу x, является прилежащим к углу (90° - x).',
        'Шаг 3: Значит cos(90° - x) = sin(x) = 5/13.',
      ],
      id: [
        'Langkah 1: Identitas trigonometri sudut berkomplemen: sin(x) = cos(90° - x).',
        'Langkah 2: Sisi depan sudut x adalah sisi samping bagi sudut (90° - x).',
        'Langkah 3: Maka cos(90° - x) = sin(x) = 5/13.',
      ],
    },
    conceptExplanation: {
      en: 'On the Digital SAT Math, the identity sin(x) = cos(90° - x) is frequently tested. It requires no calculation: the two values are always equal.',
      kk: 'Digital SAT-та sin(x) = cos(90° - x) тепе-теңдігі өте жиі тексеріледі. Ешқандай есептеусіз, екі мән әрқашан тең болады.',
      ru: 'Тождество sin(x) = cos(90° - x) — один из любимых вопросов составителей SAT. Значения всегда строго равны.',
      id: 'Identitas sin(x) = cos(90° - x) sangat sering muncul di SAT Math. Nilai keduanya selalu identik sama.',
    },
    hints: {
      en: [
        'Look at the two angles: x and (90 - x). What do they add up to?',
        'They are complementary angles in a right triangle.',
        'Use the identity: sin(A) = cos(90° - A).',
      ],
      kk: [
        'x пен (90 - x) бұрыштарының қосындысы 90° болады.',
        'Тікбұрышты үшбұрыштағы sin(A) = cos(90° - A) ережесін еске түсіріңіз.',
        'Мәні sin(x°)-пен бірдей болады.',
      ],
      ru: [
        'Сумма углов x и (90 - x) равна 90°.',
        'Вспомните формулу приведения: sin(x) = cos(90° - x).',
        'Вычислять ничего не нужно — они равны.',
      ],
      id: [
        'Perhatikan bahwa x + (90 - x) = 90°.',
        'Gunakan rumus relasi sudut: sin(x) = cos(90° - x).',
        'Jawabannya persis sama.',
      ],
    },
    glossaryTermIds: ['hypotenuse', 'perpendicular'],
    estimatedSeconds: 30,
  },

  // --- Skill: geom_circles_theorems_equations (Circle Equations & Arc Length) ---
  {
    id: 'q_geom_03_p',
    skillId: 'geom_circles_theorems_equations',
    domainId: 'geometry_trig',
    subtopic: 'Equation of a Circle',
    difficulty: 'proficient',
    type: 'multiple_choice',
    prompt: {
      en: 'In the xy-plane, the graph of x² + y² - 8x + 6y = 24 is a circle. What is the radius of this circle?',
      kk: 'xy-жазықтығында x² + y² - 8x + 6y = 24 теңдеуі шеңберді білдіреді. Осы шеңбердің радиусы неге тең?',
      ru: 'На плоскости xy уравнение x² + y² - 8x + 6y = 24 задает окружность. Чему равен радиус этой окружности?',
      id: 'Pada bidang xy, persamaan x² + y² - 8x + 6y = 24 merepresentasikan sebuah lingkaran. Berapakah jari-jari (radius) lingkaran tersebut?',
    },
    choices: [
      {
        id: 'A',
        text: '5',
        explanation: {
          en: 'Incorrect. 5 is √(25), which is what you would get if you forgot to add the 24 on the right side.',
          kk: 'Қате. Оң жақтағы 24-ті қосқан жоқ.',
          ru: 'Неверно. Забыли прибавить 24 из правой части.',
          id: 'Salah. Lupa menjumlahkan 24 dari ruas kanan.',
        },
      },
      {
        id: 'B',
        text: '7',
        explanation: {
          en: 'Correct! Complete the square: (x² - 8x + 16) + (y² + 6y + 9) = 24 + 16 + 9 = 49. In (x - 4)² + (y + 3)² = 49, r² = 49, so radius r = √49 = 7.',
          kk: 'Дұрыс! Толық квадратқа келтірсек: (x - 4)² + (y + 3)² = 24 + 16 + 9 = 49. r² = 49, демек радиус r = √49 = 7.',
          ru: 'Правильно! Выделяем полные квадраты: (x - 4)² + (y + 3)² = 24 + 16 + 9 = 49. r² = 49, следовательно радиус r = √49 = 7.',
          id: 'Benar! Lengkapkan kuadrat sempurna: (x - 4)² + (y + 3)² = 24 + 16 + 9 = 49. r² = 49 => r = 7.',
        },
      },
      {
        id: 'C',
        text: '24',
        explanation: {
          en: 'Incorrect. 24 is the constant before completing the square, not r or r².',
          kk: 'Қате. 24 толық квадратқа дейінгі бос мүше.',
          ru: 'Неверно. 24 — это исходное число до преобразований.',
          id: 'Salah. 24 adalah konstanta awal sebelum kuadrat disempurnakan.',
        },
      },
      {
        id: 'D',
        text: '49',
        explanation: {
          en: 'Incorrect. 49 is r², but the question asks for the radius r, which is √49 = 7.',
          kk: 'Қате. 49 — r² мәні, ал сұрақ радиус r-ді сұрап тұр (r = √49 = 7).',
          ru: 'Неверно. 49 — это r², а радиус равен √49 = 7.',
          id: 'Salah. 49 adalah nilai r², sedangkan jari-jarinya adalah √49 = 7.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Step 1: Standard circle equation is (x - h)² + (y - k)² = r².',
        'Step 2: Group the x terms and y terms: (x² - 8x) + (y² + 6y) = 24.',
        'Step 3: Complete the square for x: (-8 / 2)² = (-4)² = 16. Add 16 to both sides.',
        'Step 4: Complete the square for y: (6 / 2)² = 3² = 9. Add 9 to both sides.',
        'Step 5: (x² - 8x + 16) + (y² + 6y + 9) = 24 + 16 + 9.',
        '(x - 4)² + (y + 3)² = 49.',
        'Step 6: Since r² = 49, the radius is r = √49 = 7.',
      ],
      kk: [
        '1-қадам: Шеңбердің стандартты теңдеуі: (x - h)² + (y - k)² = r².',
        '2-қадам: x және y мүшелерін топтаймыз: (x² - 8x) + (y² + 6y) = 24.',
        '3-қадам: x үшін толық квадрат: (-8/2)² = 16 қосамыз.',
        '4-қадам: y үшін толық квадрат: (6/2)² = 9 қосамыз.',
        '5-қадам: Екі жағына да 16 + 9 қосамыз: (x - 4)² + (y + 3)² = 24 + 16 + 9 = 49.',
        '6-қадам: r² = 49 болғандықтан, r = √49 = 7.',
      ],
      ru: [
        'Шаг 1: Стандартное уравнение окружности: (x - h)² + (y - k)² = r².',
        'Шаг 2: Группируем: (x² - 8x) + (y² + 6y) = 24.',
        'Шаг 3: Дополняем до квадрата по x: прибавляем (-8/2)² = 16.',
        'Шаг 4: Дополняем до квадрата по y: прибавляем (6/2)² = 9.',
        'Шаг 5: Добавляем эти числа к обеим частям: (x - 4)² + (y + 3)² = 24 + 16 + 9 = 49.',
        'Шаг 6: r² = 49 => r = 7.',
      ],
      id: [
        'Langkah 1: Bentuk umum lingkaran: (x - h)² + (y - k)² = r².',
        'Langkah 2: Kelompokkan suku: (x² - 8x) + (y² + 6y) = 24.',
        'Langkah 3: Kuadrat sempurna untuk x: tambahkan 16.',
        'Langkah 4: Kuadrat sempurna untuk y: tambahkan 9.',
        'Langkah 5: (x - 4)² + (y + 3)² = 24 + 16 + 9 = 49.',
        'Langkah 6: r = √49 = 7.',
      ],
    },
    conceptExplanation: {
      en: 'Completing the square allows converting the expanded general form of a circle Ax² + Ay² + Bx + Cy + D = 0 into standard center-radius form.',
      kk: 'Толық квадратқа келтіру әдісі шеңбердің жалпы теңдеуін центр мен радиус анық көрінетін стандартты түрге айналдырады.',
      ru: 'Метод выделения полного квадрата переводит общее уравнение окружности в стандартный вид с центром и радиусом.',
      id: 'Melengkapkan kuadrat sempurna mengubah persamaan umum lingkaran menjadi bentuk standar pusat dan jari-jari.',
    },
    hints: {
      en: [
        'Group the x terms and y terms separately.',
        'Complete the square by taking half the coefficient and squaring it.',
        'Remember to add those same numbers to the right side of the equation.',
        'Take the square root of the right side to find r.',
      ],
      kk: [
        'x және y мүшелерін жеке-жеке топтастырыңыз.',
        'Ортаңғы коэффициенттің жартысын алып, квадратын қосыңыз.',
        'Осы сандарды теңдіктің оң жағына да қосуды ұмытпаңыз.',
        'Радиусты табу үшін оң жақтағы саннан түбір алыңыз.',
      ],
      ru: [
        'Сгруппируйте слагаемые с x и y.',
        'Выделите полные квадраты, добавив квадраты половины средних коэффициентов.',
        'Прибавьте эти же числа к правой части.',
        'Извлеките квадратный корень из полученной правой части.',
      ],
      id: [
        'Kelompokkan suku x dan y.',
        'Lengkapkan kuadrat dengan menambahkan (b/2)².',
        'Tambahkan angka yang sama pada ruas kanan.',
        'Akar kuadratkan ruas kanan untuk mendapatkan r.',
      ],
    },
    glossaryTermIds: ['intercept', 'vertex'],
    estimatedSeconds: 65,
  },

  // --- Skill: geom_area_volume (Area & Volume of Solids) ---
  {
    id: 'q_geom_04_d',
    skillId: 'geom_area_volume',
    domainId: 'geometry_trig',
    subtopic: 'Volume of a Cylinder',
    difficulty: 'developing',
    type: 'student_produced',
    prompt: {
      en: 'A right circular cylinder has a base radius of 3 and a height of 8. The volume of the cylinder is kπ. What is the value of k?',
      kk: 'Тік дөңгелек цилиндрдің табан радиусы 3, ал биіктігі 8. Цилиндрдің көлемі kπ-ге тең. k-ның мәні неге тең?',
      ru: 'Прямой круговой цилиндр имеет радиус основания 3 и высоту 8. Объем цилиндра равен kπ. Чему равно значение k?',
      id: 'Sebuah silinder lingkaran tegak memiliki jari-jari alas 3 dan tinggi 8. Volume silinder tersebut adalah kπ. Berapakah nilai k?',
    },
    correctAnswer: '72',
    acceptableNumericAnswers: ['72', '72.0'],
    workedSolution: {
      en: [
        'Step 1: The SAT reference formula for the volume of a cylinder is V = πr²h.',
        'Step 2: Given radius r = 3 and height h = 8.',
        'Step 3: Calculate base area: r² = 3² = 9.',
        'Step 4: Multiply by height: V = π(9)(8) = 72π.',
        'Step 5: The problem states that volume is kπ, so k = 72.',
      ],
      kk: [
        '1-қадам: Цилиндр көлемінің формуласы: V = πr²h.',
        '2-қадам: Радиусы r = 3, биіктігі h = 8.',
        '3-қадам: Табан ауданы: 3² = 9.',
        '4-қадам: Көлемі = π × 9 × 8 = 72π.',
        '5-қадам: Көлем kπ деп берілген, демек k = 72.',
      ],
      ru: [
        'Шаг 1: Формула объема цилиндра из справки SAT: V = πr²h.',
        'Шаг 2: Радиус r = 3, высота h = 8.',
        'Шаг 3: Площадь основания: r² = 9.',
        'Шаг 4: V = 9 × 8 × π = 72π.',
        'Шаг 5: Так как объем равен kπ, число k = 72.',
      ],
      id: [
        'Langkah 1: Rumus volume silinder pada lembar referensi SAT: V = πr²h.',
        'Langkah 2: r = 3 dan t = 8.',
        'Langkah 3: Luas alas = 3² = 9.',
        'Langkah 4: Volume = 9 × 8 × π = 72π.',
        'Langkah 5: Maka k = 72.',
      ],
    },
    conceptExplanation: {
      en: 'The volume of any right prism or cylinder is (Base Area) × (Height): V = (πr²)h.',
      kk: 'Кез келген тік цилиндрдің көлемі табан ауданы мен биіктігінің көбейтіндісіне тең: V = πr²h.',
      ru: 'Объем прямого цилиндра равен площади круга в основании, умноженной на высоту: V = πr²h.',
      id: 'Volume silinder tegak adalah luas alas lingkaran dikali tinggi: V = πr²h.',
    },
    hints: {
      en: [
        'What is the formula for the volume of a cylinder? Check the SAT reference sheet: V = πr²h.',
        'Square the radius 3 to find the area factor.',
        'Multiply 9 by height 8.',
      ],
      kk: [
        'Цилиндр көлемінің формуласы: V = πr²h.',
        'Радиус 3-ті квадраттаңыз.',
        'Шыққан 9-ды биіктік 8-ге көбейтіңіз.',
      ],
      ru: [
        'Формула объема цилиндра: V = πr²h.',
        'Возведите радиус 3 в квадрат.',
        'Умножьте 9 на 8.',
      ],
      id: [
        'Rumus volume tabung adalah V = πr²h.',
        'Kuadratkan jari-jari 3.',
        'Kalikan 9 dengan tinggi 8.',
      ],
    },
    glossaryTermIds: ['rate_of_change'],
    estimatedSeconds: 35,
  },

  // ==========================================
  // ADDITIONAL ADAPTIVE CALIBRATION QUESTIONS
  // ==========================================
  {
    id: 'q_alg_08_p',
    skillId: 'alg_linear_eq_1var',
    domainId: 'algebra',
    subtopic: 'Literal Equations and Manipulations',
    difficulty: 'proficient',
    type: 'multiple_choice',
    prompt: {
      en: 'If (3x + 5) / 2 = (2x - 1) / 3, what is the value of x?',
      kk: 'Егер (3x + 5) / 2 = (2x - 1) / 3 болса, x-тің мәні неге тең?',
      ru: 'Если (3x + 5) / 2 = (2x - 1) / 3, чему равно значение x?',
      id: 'Jika (3x + 5) / 2 = (2x - 1) / 3, berapakah nilai x?',
    },
    choices: [
      {
        id: 'A',
        text: '-3.4',
        explanation: {
          en: 'Correct! Cross multiply: 3(3x + 5) = 2(2x - 1) => 9x + 15 = 4x - 2 => 5x = -17 => x = -17/5 = -3.4.',
          kk: 'Дұрыс! Айқастыра көбейтсек: 3(3x + 5) = 2(2x - 1) => 9x + 15 = 4x - 2 => 5x = -17 => x = -3.4.',
          ru: 'Правильно! Перекрестное умножение: 3(3x + 5) = 2(2x - 1) => 9x + 15 = 4x - 2 => 5x = -17 => x = -3.4.',
          id: 'Benar! Perkalian silang: 3(3x + 5) = 2(2x - 1) => 9x + 15 = 4x - 2 => 5x = -17 => x = -3.4.',
        },
      },
      {
        id: 'B',
        text: '-2.6',
        explanation: {
          en: 'Incorrect sign arithmetic error.',
          kk: 'Қате таңба есебі.',
          ru: 'Ошибка в знаках слагаемых.',
          id: 'Salah tanda perhitungan.',
        },
      },
      {
        id: 'C',
        text: '3.4',
        explanation: {
          en: 'Incorrect sign (+3.4 instead of -3.4).',
          kk: 'Қате таңба (-3.4 орнына +3.4).',
          ru: 'Неверный знак (положительное вместо отрицательного).',
          id: 'Salah tanda positif/negatif.',
        },
      },
      {
        id: 'D',
        text: '-1.5',
        explanation: {
          en: 'Incorrect.',
          kk: 'Қате.',
          ru: 'Неверно.',
          id: 'Salah.',
        },
      },
    ],
    correctAnswer: 'A',
    workedSolution: {
      en: [
        'Step 1: Cross-multiply the proportions: 3(3x + 5) = 2(2x - 1).',
        'Step 2: Distribute both sides: 9x + 15 = 4x - 2.',
        'Step 3: Collect like terms: 9x - 4x = -2 - 15.',
        '5x = -17.',
        'Step 4: Divide by 5: x = -17 / 5 = -3.4.',
      ],
      kk: [
        '1-қадам: Пропорция бойынша айқастыра көбейтеміз: 3(3x + 5) = 2(2x - 1).',
        '2-қадам: Жақшаны ашамыз: 9x + 15 = 4x - 2.',
        '3-қадам: 9x - 4x = -2 - 15  =>  5x = -17.',
        '4-қадам: x = -17 / 5 = -3.4.',
      ],
      ru: [
        'Шаг 1: Умножаем крест-накрест: 3(3x + 5) = 2(2x - 1).',
        'Шаг 2: Раскрываем скобки: 9x + 15 = 4x - 2.',
        'Шаг 3: 5x = -17.',
        'Шаг 4: x = -17 / 5 = -3.4.',
      ],
      id: [
        'Langkah 1: Kalikan silang: 3(3x + 5) = 2(2x - 1).',
        'Langkah 2: Jabarkan: 9x + 15 = 4x - 2.',
        'Langkah 3: 5x = -17 => x = -3.4.',
      ],
    },
    conceptExplanation: {
      en: 'When two fractions are set equal a/b = c/d, cross multiplication ad = bc quickly eliminates denominators.',
      kk: 'a/b = c/d бөлшектері тең болғанда, айқас көбейту ad = bc бөлімдерден жылдам құтылуға мүмкіндік береді.',
      ru: 'Для пропорции a/b = c/d перекрестное умножение a·d = b·c позволяет избавиться от дробей.',
      id: 'Perkalian silang ad = bc mempermudah penyelesaian persamaan pecahan.',
    },
    hints: {
      en: [
        'Cross-multiply to get rid of the denominators 2 and 3.',
        'Distribute carefully on both sides: 3(3x + 5) = 2(2x - 1).',
        'Isolate x on one side.',
      ],
      kk: [
        'Бөлімдегі 2 мен 3-тен құтылу үшін айқастыра көбейтіңіз.',
        'Жақшаларды мұқият ашыңыз.',
        'x-ті бір жаққа жинақтаңыз.',
      ],
      ru: [
        'Умножьте крест-накрест.',
        'Раскройте скобки: 9x + 15 = 4x - 2.',
        'Сгруппируйте и выразите x.',
      ],
      id: [
        'Lakukan perkalian silang.',
        'Jabarkan kurung di kedua ruas.',
        'Kumpulkan variabel x di satu ruas.',
      ],
    },
    glossaryTermIds: ['equivalent_expressions'],
    estimatedSeconds: 50,
  },
  {
    id: 'q_adv_06_a',
    skillId: 'adv_parabolas_vertex',
    domainId: 'advanced_math',
    subtopic: 'Maximum / Minimum Word Problems',
    difficulty: 'advanced',
    type: 'student_produced',
    prompt: {
      en: 'A projectile is launched vertically upwards. Its height h in meters above the ground t seconds after launch is modeled by the function h(t) = -5t² + 40t + 10. What is the maximum height, in meters, reached by the projectile?',
      kk: 'Зымыран тігінен жоғары атылды. Оның ұшырылғаннан кейінгі t секундтағы жерден биіктігі h(t) = -5t² + 40t + 10 функциясымен сипатталады. Зымыран жететін ең жоғары биіктік неше метр?',
      ru: 'Снаряд запущен вертикально вверх. Его высота h (в метрах) над землей через t секунд задается функцией h(t) = -5t² + 40t + 10. Какова максимальная высота (в метрах), которой достигнет снаряд?',
      id: 'Sebuah proyektil ditembakkan vertikal ke atas. Ketinggiannya h dalam meter t detik setelah peluncuran dimodelkan oleh h(t) = -5t² + 40t + 10. Berapakah ketinggian maksimum, dalam meter, yang dicapai proyektil?',
    },
    correctAnswer: '90',
    acceptableNumericAnswers: ['90', '90.0'],
    workedSolution: {
      en: [
        'Step 1: The maximum height occurs at the vertex of the downward-opening parabola h(t) = at² + bt + c.',
        'Step 2: Find the time t at the vertex using t = -b / (2a):',
        't = -40 / (2 × -5) = -40 / -10 = 4 seconds.',
        'Step 3: Plug t = 4 into the height function to find the maximum height:',
        'h(4) = -5(4)² + 40(4) + 10 = -5(16) + 160 + 10 = -80 + 160 + 10 = 90 meters.',
      ],
      kk: [
        '1-қадам: Ең жоғарғы биіктік параболаның төбесінде болады.',
        '2-қадам: Төбенің уақытын t = -b / (2a) формуласымен табамыз: t = -40 / (2 × -5) = 4 секунд.',
        '3-қадам: t = 4 мәнін функцияға қоямыз:',
        'h(4) = -5(16) + 160 + 10 = 90 метр.',
      ],
      ru: [
        'Шаг 1: Максимум достигается в вершине параболы t = -b / (2a).',
        'Шаг 2: t = -40 / (2 × (-5)) = 4 секунды.',
        'Шаг 3: Подставляем t = 4 в формулу h(t):',
        'h(4) = -5(16) + 40(4) + 10 = -80 + 160 + 10 = 90 метров.',
      ],
      id: [
        'Langkah 1: Tinggi maksimum dicapai pada titik puncak t = -b / (2a).',
        'Langkah 2: t = -40 / (2 × -5) = 4 detik.',
        'Langkah 3: Substitusikan t = 4: h(4) = -5(16) + 160 + 10 = 90 meter.',
      ],
    },
    conceptExplanation: {
      en: 'The vertex formula for a parabola in standard form y = ax² + bx + c is x = -b/(2a). Substitute that x-value back into the function to obtain the extreme value.',
      kk: 'y = ax² + bx + c парабола төбесінің x координатасы x = -b/(2a) формуласымен табылады. Максималды мәнді табу үшін оны функцияға қайта қоямыз.',
      ru: 'Координата x вершины параболы ax² + bx + c находится по формуле -b/(2a). Значение функции в этой точке дает максимум или минимум.',
      id: 'Titik puncak kurva parabola ax² + bx + c memiliki absis t = -b/(2a). Nilai fungsi di titik tersebut adalah nilai ekstremnya.',
    },
    hints: {
      en: [
        'The maximum occurs at the vertex of the parabola.',
        'Find the time t using the formula t = -b / (2a).',
        'Once you know t = 4, evaluate h(4).',
      ],
      kk: [
        'Ең үлкен мән парабола төбесінде орналасады.',
        'Уақытты t = -b / (2a) формуласымен есептеңіз.',
        't = 4 болғандағы h(4) мәнін табыңыз.',
      ],
      ru: [
        'Максимум находится в вершине параболы.',
        'Вычислите момент времени по формуле t = -b/(2a).',
        'Подставьте t = 4 в исходную функцию.',
      ],
      id: [
        'Nilai maksimum terletak di titik puncak.',
        'Gunakan t = -b / (2a).',
        'Hitung nilai h(4).',
      ],
    },
    glossaryTermIds: ['vertex', 'rate_of_change'],
    estimatedSeconds: 65,
  },
  {
    id: 'q_ps_05_a',
    skillId: 'ps_percentages',
    domainId: 'problem_solving',
    subtopic: 'Reverse Percentages',
    difficulty: 'advanced',
    type: 'multiple_choice',
    prompt: {
      en: 'After a 25% price increase, a textbook costs $150. What was the original price of the textbook before the price increase?',
      kk: 'Бағасы 25%-ға қымбаттаған соң оқулық $150 тұратын болды. Бағасы қымбаттағанға дейін оқулықтың бастапқы бағасы қанша болды?',
      ru: 'После повышения цены на 25% учебник стоит $150. Какова была первоначальная цена учебника до подорожания?',
      id: 'Setelah mengalami kenaikan harga sebesar 25%, harga sebuah buku teks menjadi $150. Berapakah harga awal buku teks tersebut sebelum dinaikkan?',
    },
    choices: [
      {
        id: 'A',
        text: '$112.50',
        explanation: {
          en: 'Incorrect. This mistake calculates 25% of the NEW $150 price ($37.50) and subtracts it: 150 - 37.50 = 112.50. The 25% was based on the ORIGINAL price, not the new price!',
          kk: 'Қате. Бұл 25%-ды жаңа 150 доллардан есептеп азайтқандағы кең таралған қате.',
          ru: 'Неверно. Классическая ловушка: вычли 25% от новой цены ($37.50), но процент считался от исходной!',
          id: 'Salah. Kesalahan umum mengurangkan 25% dari harga baru $150.',
        },
      },
      {
        id: 'B',
        text: '$120',
        explanation: {
          en: 'Correct! Original Price × 1.25 = $150 => Original Price = 150 / 1.25 = $120. (Check: 120 + 25% of 120 = 120 + 30 = 150).',
          kk: 'Дұрыс! Бастапқы баға × 1.25 = 150 => Бастапқы баға = 150 / 1.25 = $120.',
          ru: 'Правильно! Исходная цена × 1.25 = 150 => Исходная цена = 150 / 1.25 = $120.',
          id: 'Benar! Harga awal × 1.25 = 150 => Harga awal = 150 / 1.25 = $120.',
        },
      },
      {
        id: 'C',
        text: '$125',
        explanation: {
          en: 'Incorrect arithmetic.',
          kk: 'Қате есептеу.',
          ru: 'Неверный расчет.',
          id: 'Salah perhitungan.',
        },
      },
      {
        id: 'D',
        text: '$187.50',
        explanation: {
          en: 'Incorrect. Increased 150 by 25% instead of finding the lower original price.',
          kk: 'Қате. Бастапқы бағаны табудың орнына 150-ді тағы арттырып жіберген.',
          ru: 'Неверно. Увеличили 150 на 25% вместо поиска цены до подорожания.',
          id: 'Salah. Malah menaikkan $150 sebesar 25%.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Step 1: Let P be the original price of the textbook.',
        'Step 2: A 25% increase means the new price is 100% + 25% = 125% of P.',
        '1.25 × P = 150.',
        'Step 3: Solve for P by dividing by 1.25:',
        'P = 150 / 1.25 = 150 / (5/4) = 150 × (4/5) = 30 × 4 = $120.',
        'Step 4: Verify: 25% of $120 is $30. $120 + $30 = $150.',
      ],
      kk: [
        '1-қадам: Бастапқы бағаны P деп алайық.',
        '2-қадам: 25% өсімнен кейін жаңа баға P-нің 125%-ын құрайды: 1.25 × P = 150.',
        '3-қадам: P = 150 / 1.25 = $120.',
        '4-қадам: Тексеру: 120-ның 25%-ы 30 доллар. 120 + 30 = 150 доллар.',
      ],
      ru: [
        'Шаг 1: Пусть исходная цена равна P.',
        'Шаг 2: Увеличение на 25% дает 125% от исходной цены: 1.25 × P = 150.',
        'Шаг 3: P = 150 / 1.25 = 150 × (4/5) = $120.',
        'Шаг 4: Проверка: 120 + 0.25(120) = 120 + 30 = $150.',
      ],
      id: [
        'Langkah 1: Misalkan harga awal adalah P.',
        'Langkah 2: Kenaikan 25% berarti harga baru 125%: 1.25 × P = 150.',
        'Langkah 3: P = 150 / 1.25 = $120.',
        'Langkah 4: Pemeriksaan: 120 + 30 = 150.',
      ],
    },
    conceptExplanation: {
      en: 'In reverse percent problems ("original price before a change"), NEVER calculate the percentage of the final price. Set up the equation (Original) × (Multiplier) = Final.',
      kk: 'Бастапқы бағаны кері табу есептерінде ешқашан соңғы бағаның пайызын шегермеңіз. (Бастапқы баға) × (1 + r) = Соңғы баға теңдеуін құрыңыз.',
      ru: 'В задачах на нахождение начальной цены никогда не вычитайте проценты из конечной суммы. Решайте уравнение P × (1 + r) = Конечная цена.',
      id: 'Pada soal mencari harga awal, jangan pernah mengurangkan persentase dari harga akhir. Gunakan persamaan: Harga Awal × (1 + r) = Harga Akhir.',
    },
    hints: {
      en: [
        'The $150 represents 125% of the original price.',
        'Write an equation: 1.25 × (Original Price) = 150.',
        'Divide 150 by 1.25 to find the answer.',
      ],
      kk: [
        '$150 бастапқы бағаның 125%-ын құрайды.',
        'Теңдеу құрыңыз: 1.25 × P = 150.',
        '150-ді 1.25-ке бөліңіз.',
      ],
      ru: [
        '$150 составляют 125% от начальной цены.',
        'Составьте уравнение: 1.25 × P = 150.',
        'Разделите 150 на 1.25.',
      ],
      id: [
        '$150 adalah 125% dari harga mula-mula.',
        'Buat persamaan: 1.25 × P = 150.',
        'Bagi 150 dengan 1.25.',
      ],
    },
    glossaryTermIds: ['percent_increase'],
    estimatedSeconds: 50,
  },
  {
    id: 'q_geom_05_a',
    skillId: 'geom_right_triangles_trig',
    domainId: 'geometry_trig',
    subtopic: 'Special Right Triangles',
    difficulty: 'advanced',
    type: 'multiple_choice',
    prompt: {
      en: 'In a 30°-60°-90° right triangle, the length of the side opposite the 30° angle is 6. What is the length of the side opposite the 60° angle?',
      kk: '30°-60°-90° тікбұрышты үшбұрышта 30° бұрышқа қарама-қарсы жатқан катеттің ұзындығы 6-ға тең. 60° бұрышқа қарама-қарсы жатқан қабырғаның ұзындығы неге тең?',
      ru: 'В прямоугольном треугольнике с углами 30°-60°-90° катет, лежащий против угла 30°, равен 6. Чему равна длина катета, лежащего против угла 60°?',
      id: 'Pada segitiga siku-siku 30°-60°-90°, panjang sisi di depan sudut 30° adalah 6. Berapakah panjang sisi di depan sudut 60°?',
    },
    choices: [
      {
        id: 'A',
        text: '6√2',
        explanation: {
          en: 'Incorrect. √2 is the ratio factor for 45°-45°-90° isosceles right triangles.',
          kk: 'Қате. √2 коэффициенті 45°-45°-90° үшбұрыштарына тиесілі.',
          ru: 'Неверно. Множитель √2 используется для треугольника 45°-45°-90°.',
          id: 'Salah. Pengali √2 berlaku untuk segitiga 45°-45°-90°.',
        },
      },
      {
        id: 'B',
        text: '6√3',
        explanation: {
          en: 'Correct! In a 30°-60°-90° triangle with sides x : x√3 : 2x, the short leg is x = 6, so the long leg is 6√3.',
          kk: 'Дұрыс! 30°-60°-90° үшбұрышының қабырғалары x : x√3 : 2x қатынасында болады. Қысқа катет x = 6 болса, ұзын катет 6√3 болады.',
          ru: 'Правильно! В треугольнике 30°-60°-90° стороны соотносятся как x : x√3 : 2x. Короткий катет x = 6, значит длинный равен 6√3.',
          id: 'Benar! Pada segitiga 30°-60°-90°, perbandingan sisinya adalah x : x√3 : 2x. Sisi di depan 60° adalah 6√3.',
        },
      },
      {
        id: 'C',
        text: '12',
        explanation: {
          en: 'Incorrect. 12 is the length of the hypotenuse (2x = 2(6) = 12).',
          kk: 'Қате. 12 — гипотенузаның ұзындығы.',
          ru: 'Неверно. 12 — это гипотенуза (удвоенный короткий катет).',
          id: 'Salah. 12 adalah panjang hipotenusa.',
        },
      },
      {
        id: 'D',
        text: '12√3',
        explanation: {
          en: 'Incorrect.',
          kk: 'Қате.',
          ru: 'Неверно.',
          id: 'Salah.',
        },
      },
    ],
    correctAnswer: 'B',
    workedSolution: {
      en: [
        'Step 1: Check the official SAT Reference Sheet for Special Right Triangles.',
        'For a 30°-60°-90° triangle, the side lengths are in ratio: x (opposite 30°), x√3 (opposite 60°), and 2x (hypotenuse).',
        'Step 2: Given the short leg opposite 30° is x = 6.',
        'Step 3: The side opposite 60° is x√3 = 6√3.',
      ],
      kk: [
        '1-қадам: SAT анықтамалығындағы 30°-60°-90° ерекше үшбұрыш қатынасы: x, x√3, 2x.',
        '2-қадам: 30°-қа қарама-қарсы қысқа катет x = 6.',
        '3-қадам: 60°-қа қарама-қарсы қабырға: x√3 = 6√3.',
      ],
      ru: [
        'Шаг 1: Согласно справочнику формул SAT, соотношение сторон в треугольнике 30°-60°-90°: x : x√3 : 2x.',
        'Шаг 2: Короткий катет x = 6.',
        'Шаг 3: Катет против 60° равен x√3 = 6√3.',
      ],
      id: [
        'Langkah 1: Perbandingan sisi segitiga 30°-60°-90° adalah x : x√3 : 2x.',
        'Langkah 2: Sisi pendek di depan 30° adalah x = 6.',
        'Langkah 3: Sisi di depan 60° adalah x√3 = 6√3.',
      ],
    },
    conceptExplanation: {
      en: 'The 30°-60°-90° triangle ratio x : x√3 : 2x is provided directly on the SAT reference sheet. Memorizing it saves precious test time.',
      kk: '30°-60°-90° үшбұрышының x : x√3 : 2x қатынасы SAT емтиханының ресми формулалар парағында беріледі.',
      ru: 'Соотношение x : x√3 : 2x есть в официальной шпаргалке SAT Math. Быстрое его применение экономит время.',
      id: 'Rasio sisi segitiga istimewa 30°-60°-90° adalah x : x√3 : 2x dan tertera pada lembar rumus SAT.',
    },
    hints: {
      en: [
        'What is the special ratio for a 30-60-90 triangle? x, x√3, 2x.',
        'The side opposite 30° is the shortest leg (x = 6).',
        'Multiply x by √3 to find the side opposite 60°.',
      ],
      kk: [
        '30-60-90 үшбұрышының қатынасын еске түсіріңіз: x, x√3, 2x.',
        '30° бұрышқа қарама-қарсы катет ең қысқасы (x = 6).',
        '60° бұрышқа қарама-қарсы жағын табу үшін 6-ны √3-ке көбейтіңіз.',
      ],
      ru: [
        'Отношение сторон: короткий катет x, длинный x√3, гипотенуза 2x.',
        'Катет против 30° равен x = 6.',
        'Умножьте 6 на √3.',
      ],
      id: [
        'Rasio sisi adalah x, x√3, dan 2x.',
        'Sisi terpendek di depan 30° adalah x = 6.',
        'Kalikan 6 dengan √3.',
      ],
    },
    glossaryTermIds: ['hypotenuse'],
    estimatedSeconds: 35,
  },
];

export const QUESTION_MAP = new Map<string, Question>(
  QUESTION_BANK.map((q) => [q.id, q])
);
