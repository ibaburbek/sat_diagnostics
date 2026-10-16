import { SATDomainId, Skill } from '../types';

export interface DomainMeta {
  id: SATDomainId;
  name: {
    en: string;
    kk: string;
    ru: string;
    id: string;
  };
  shortDescription: {
    en: string;
    kk: string;
    ru: string;
    id: string;
  };
  weightPercent: number; // Official SAT weights: ~35% Algebra, ~35% Advanced Math, ~15% Problem-Solving, ~15% Geometry/Trig
  color: string;
}

export const SAT_DOMAINS: Record<SATDomainId, DomainMeta> = {
  algebra: {
    id: 'algebra',
    name: {
      en: 'Algebra',
      kk: 'Алгебра',
      ru: 'Алгебра',
      id: 'Aljabar',
    },
    shortDescription: {
      en: 'Linear equations, inequalities, systems, and linear relationships.',
      kk: 'Сызықтық теңдеулер, теңсіздіктер, жүйелер және сызықтық тәуелділіктер.',
      ru: 'Линейные уравнения, неравенства, системы и линейные функции.',
      id: 'Persamaan linear, pertidaksamaan, sistem, dan hubungan linear.',
    },
    weightPercent: 35,
    color: 'indigo',
  },
  advanced_math: {
    id: 'advanced_math',
    name: {
      en: 'Advanced Math',
      kk: 'Жоғары математика',
      ru: 'Продвинутая математика',
      id: 'Matematika Lanjutan',
    },
    shortDescription: {
      en: 'Nonlinear equations, quadratics, polynomials, and exponential functions.',
      kk: 'Сызықтық емес теңдеулер, квадраттық функциялар, көпмүшелер және дәрежелер.',
      ru: 'Нелинейные уравнения, квадратичные функции, многочлены и экспоненты.',
      id: 'Persamaan nonlinear, kuadrat, polinomial, dan fungsi eksponensial.',
    },
    weightPercent: 35,
    color: 'emerald',
  },
  problem_solving: {
    id: 'problem_solving',
    name: {
      en: 'Problem-Solving & Data Analysis',
      kk: 'Есептер шығару және деректерді талдау',
      ru: 'Решение задач и анализ данных',
      id: 'Pemecahan Masalah & Analisis Data',
    },
    shortDescription: {
      en: 'Ratios, rates, percentages, data distributions, and probability.',
      kk: 'Қатынастар, пайыздық өзгерістер, статистика және ықтималдық.',
      ru: 'Отношения, пропорции, проценты, статистика и теория вероятностей.',
      id: 'Rasio, laju, persentase, sebaran data, dan probabilitas.',
    },
    weightPercent: 15,
    color: 'amber',
  },
  geometry_trig: {
    id: 'geometry_trig',
    name: {
      en: 'Geometry & Trigonometry',
      kk: 'Геометрия және тригонометрия',
      ru: 'Геометрия и тригонометрия',
      id: 'Geometri & Trigonometri',
    },
    shortDescription: {
      en: 'Angles, triangles, trigonometry, circle equations, area, and volume.',
      kk: 'Бұрыштар, үшбұрыштар, тригонометрия, шеңберлер, аудан және көлем.',
      ru: 'Углы, треугольники, тригонометрия, уравнения окружностей и объемы.',
      id: 'Sudut, segitiga, trigonometri, persamaan lingkaran, luas, dan volume.',
    },
    weightPercent: 15,
    color: 'sky',
  },
};

export const SKILLS_TAXONOMY: Skill[] = [
  // --- DOMAIN: ALGEBRA ---
  {
    id: 'alg_linear_eq_1var',
    domainId: 'algebra',
    topic: 'Linear Equations',
    name: 'Linear Equations in One Variable',
    description: {
      en: 'Solving single-variable linear equations and determining number of solutions (one, none, infinitely many).',
      kk: 'Бір айнымалысы бар сызықтық теңдеулерді шешу және шешімдер санын анықтау.',
      ru: 'Решение линейных уравнений с одной переменной и определение числа решений.',
      id: 'Menyelesaikan persamaan linear satu variabel dan menentukan jumlah solusi.',
    },
    prerequisites: [],
    importance: 'critical',
  },
  {
    id: 'alg_linear_functions_models',
    domainId: 'algebra',
    topic: 'Linear Functions',
    name: 'Linear Functions and Rate of Change',
    description: {
      en: 'Interpreting slope as unit rate of change and y-intercept as initial value in context.',
      kk: 'Көлбеуді өзгеріс жылдамдығы, ал у-қиылысын бастапқы мән ретінде түсіндіру.',
      ru: 'Интерпретация наклона (slope) как скорости изменения и y-пересечения как начального значения.',
      id: 'Menafsirkan kemiringan (slope) sebagai laju perubahan dan perpotongan-y sebagai nilai awal.',
    },
    prerequisites: ['alg_linear_eq_1var'],
    importance: 'critical',
  },
  {
    id: 'alg_linear_systems',
    domainId: 'algebra',
    topic: 'Systems of Equations',
    name: 'Systems of Two Linear Equations',
    description: {
      en: 'Solving systems by substitution, elimination, and analyzing intersection points or parallel lines.',
      kk: 'Сызықтық теңдеулер жүйесін алмастыру, қосу әдістерімен шешу және қиылысу нүктелерін талдау.',
      ru: 'Решение систем двух уравнений методами подстановки, сложения и анализ точек пересечения.',
      id: 'Menyelesaikan sistem dua persamaan linear dengan substitusi, eliminasi, dan analisis titik potong.',
    },
    prerequisites: ['alg_linear_eq_1var', 'alg_linear_functions_models'],
    importance: 'critical',
  },
  {
    id: 'alg_linear_inequalities',
    domainId: 'algebra',
    topic: 'Linear Inequalities',
    name: 'Linear Inequalities and Systems',
    description: {
      en: 'Writing and solving single and two-variable linear inequalities and identifying solution regions.',
      kk: 'Бір және екі айнымалысы бар теңсіздіктерді жазу, шешу және шешім аймағын анықтау.',
      ru: 'Решение линейных неравенств и систем неравенств, определение областей решений на плоскости.',
      id: 'Menulis dan menyelesaikan pertidaksamaan linear serta mengidentifikasi daerah penyelesaian.',
    },
    prerequisites: ['alg_linear_eq_1var'],
    importance: 'high',
  },

  // --- DOMAIN: ADVANCED MATH ---
  {
    id: 'adv_quadratics_factoring',
    domainId: 'advanced_math',
    topic: 'Quadratic Equations',
    name: 'Quadratic Equations and Factoring',
    description: {
      en: 'Solving quadratics by factoring, quadratic formula, and completing the square; interpreting vertex and zeros.',
      kk: 'Квадрат теңдеулерді көбейткіштерге жіктеу, формула және толық квадратқа келтіру арқылы шешу.',
      ru: 'Решение квадратных уравнений через разложение на множители, формулу корней и выделение полного квадрата.',
      id: 'Menyelesaikan persamaan kuadrat dengan faktorisasi, rumus kuadrat, dan melengkapkan kuadrat.',
    },
    prerequisites: ['alg_linear_eq_1var'],
    importance: 'critical',
  },
  {
    id: 'adv_parabolas_vertex',
    domainId: 'advanced_math',
    topic: 'Quadratic Functions',
    name: 'Parabolas and Vertex Form',
    description: {
      en: 'Analyzing parabola graphs, finding vertex (maximum/minimum), axis of symmetry, and discriminant.',
      kk: 'Парабола графиктерін талдау, төбесін (максимум/минимум), симметрия осін және дискриминантты табу.',
      ru: 'Анализ графиков парабол, нахождение вершины (экстремума), оси симметрии и знака дискриминанта.',
      id: 'Menganalisis grafik parabola, menentukan titik puncak (ekstremum), sumbu simetri, dan diskriminan.',
    },
    prerequisites: ['adv_quadratics_factoring'],
    importance: 'high',
  },
  {
    id: 'adv_exponents_radicals',
    domainId: 'advanced_math',
    topic: 'Exponents & Radicals',
    name: 'Rational Exponents and Radical Expressions',
    description: {
      en: 'Simplifying rational exponent expressions, converting between radical and fractional exponent forms.',
      kk: 'Бөлшек көрсеткішті дәрежелерді ықшамдау, түбір мен бөлшек дәреже арасында түрлендіру.',
      ru: 'Упрощение выражений с рациональными степенями, переход между корнями и дробными степенями.',
      id: 'Menyederhanakan eksponen rasional dan konversi antara bentuk akar dan pecahan pangkat.',
    },
    prerequisites: [],
    importance: 'critical',
  },
  {
    id: 'adv_exponential_models',
    domainId: 'advanced_math',
    topic: 'Exponential Functions',
    name: 'Exponential Growth and Decay',
    description: {
      en: 'Modeling real-world growth and decay y = a(1 + r)^t and distinguishing linear from exponential change.',
      kk: 'Экспоненциалды өсу мен кему үлгілері y = a(1 + r)^t және сызықтық өсімнен айырмашылығы.',
      ru: 'Экспоненциальный рост и убывание y = a(1 + r)^t, отличие линейного роста от экспоненциального.',
      id: 'Memodelkan pertumbuhan dan peluruhan eksponensial y = a(1 + r)^t dan membedakannya dari linear.',
    },
    prerequisites: ['adv_exponents_radicals', 'alg_linear_functions_models'],
    importance: 'high',
  },

  // --- DOMAIN: PROBLEM-SOLVING & DATA ANALYSIS ---
  {
    id: 'ps_ratios_rates_units',
    domainId: 'problem_solving',
    topic: 'Ratios & Proportions',
    name: 'Ratios, Rates, and Unit Conversions',
    description: {
      en: 'Direct/inverse proportions, scale factors, multi-step unit conversions using dimensional analysis.',
      kk: 'Тура және кері пропорциялар, масштаб және өлшем бірліктерін көпсатылы түрлендіру.',
      ru: 'Прямая и обратная пропорциональность, масштаб и многоступенчатый перевод единиц измерения.',
      id: 'Perbandingan senilai dan berbalik nilai, faktor skala, dan konversi satuan multi-langkah.',
    },
    prerequisites: [],
    importance: 'critical',
  },
  {
    id: 'ps_percentages',
    domainId: 'problem_solving',
    topic: 'Percentages',
    name: 'Percent Change and Relative Comparison',
    description: {
      en: 'Percent increase/decrease, multi-step discounts, interest, and base comparison problems.',
      kk: 'Пайыздық өсу мен кему, көпсатылы жеңілдіктер, күрделі пайыз және базалық салыстыру.',
      ru: 'Процентное изменение (рост/убывание), цепочки скидок и правильный выбор базы сравнения.',
      id: 'Persentase kenaikan/penurunan, diskon bertingkat, dan perbandingan nilai dasar.',
    },
    prerequisites: ['ps_ratios_rates_units'],
    importance: 'critical',
  },
  {
    id: 'ps_statistics_distributions',
    domainId: 'problem_solving',
    topic: 'Statistics',
    name: 'Mean, Median, Range, and Standard Deviation',
    description: {
      en: 'Calculating and interpreting measures of center and spread, evaluating the effect of outliers.',
      kk: 'Орта мән, медиана, құлаш және стандартты ауытқуды есептеу, шеткі мәндердің (outliers) әсері.',
      ru: 'Среднее арифметическое, медиана, размах и стандартное отклонение; влияние выбросов (outliers).',
      id: 'Menghitung rata-rata (mean), median, jangkauan, dan deviasi standar serta efek pencilan (outlier).',
    },
    prerequisites: [],
    importance: 'high',
  },
  {
    id: 'ps_probability_conditional',
    domainId: 'problem_solving',
    topic: 'Probability',
    name: 'Probability and Two-Way Frequency Tables',
    description: {
      en: 'Finding simple and conditional probabilities P(A|B) from tables, charts, and sample spaces.',
      kk: 'Екі жақты жиілік кестелерінен қарапайым және шартты ықтималдықты P(A|B) табу.',
      ru: 'Нахождение простой и условной вероятности P(A|B) по двумерным таблицам сопряженности.',
      id: 'Menghitung probabilitas sederhana dan bersyarat P(A|B) dari tabel frekuensi kontingensi.',
    },
    prerequisites: ['ps_percentages'],
    importance: 'high',
  },

  // --- DOMAIN: GEOMETRY & TRIGONOMETRY ---
  {
    id: 'geom_triangles_angles',
    domainId: 'geometry_trig',
    topic: 'Lines, Angles & Triangles',
    name: 'Lines, Angles, and Similar Triangles',
    description: {
      en: 'Parallel lines with transversals, triangle sum theorem, similar triangles ratio of sides and areas.',
      kk: 'Параллель түзулер мен қиюшы, үшбұрыш бұрыштарының қосындысы және ұқсас үшбұрыштар қатынасы.',
      ru: 'Параллельные прямые и секущие, сумма углов треугольника, отношения сторон и площадей подобных треугольников.',
      id: 'Garis sejajar dan transversal, jumlah sudut segitiga, perbandingan sisi dan luas segitiga sebangun.',
    },
    prerequisites: [],
    importance: 'critical',
  },
  {
    id: 'geom_right_triangles_trig',
    domainId: 'geometry_trig',
    topic: 'Right Triangles & Trigonometry',
    name: 'Pythagorean Theorem and Basic Trigonometry',
    description: {
      en: 'Pythagorean theorem, 30-60-90 and 45-45-90 special right triangles, sin, cos, tan, and sin(x) = cos(90°-x).',
      kk: 'Пифагор теоремасы, 30-60-90 және 45-45-90 ерекше үшбұрыштар, синус, косинус, тангенс қасиеттері.',
      ru: 'Теорема Пифагора, специальные треугольники 30-60-90 и 45-45-90, тригонометрические функции sin, cos, tan.',
      id: 'Teorema Pythagoras, segitiga istimewa 30-60-90 dan 45-45-90, sin, cos, tan, dan relasi sudut komplementer.',
    },
    prerequisites: ['geom_triangles_angles'],
    importance: 'critical',
  },
  {
    id: 'geom_circles_theorems_equations',
    domainId: 'geometry_trig',
    topic: 'Circles',
    name: 'Circle Equations, Arc Length, and Sectors',
    description: {
      en: 'Standard equation (x - h)^2 + (y - k)^2 = r^2, completing square for circles, arc lengths, and sector areas.',
      kk: 'Шеңбердің стандартты теңдеуі (x - h)^2 + (y - k)^2 = r^2, доға ұзындығы және сектор ауданы.',
      ru: 'Стандартное уравнение окружности (x - h)^2 + (y - k)^2 = r^2, длина дуги и площадь сектора в радианах/градусах.',
      id: 'Persamaan lingkaran (x - h)^2 + (y - k)^2 = r^2, panjang busur, dan luas juring lingkaran.',
    },
    prerequisites: ['adv_quadratics_factoring', 'geom_triangles_angles'],
    importance: 'high',
  },
  {
    id: 'geom_area_volume',
    domainId: 'geometry_trig',
    topic: 'Area and Volume',
    name: 'Area, Surface Area, and Volume of Solids',
    description: {
      en: 'Calculating volume and surface area of prisms, cylinders, cones, and spheres using SAT formula reference.',
      kk: 'Призмалар, цилиндрлер, конустар мен шарлардың көлемі мен толық бетінің ауданын табу.',
      ru: 'Вычисление объемов и площадей поверхностей призм, цилиндров, конусов и сфер по справочным формулам SAT.',
      id: 'Menghitung volume dan luas permukaan prisma, silinder, kerucut, dan bola dengan lembar rumus SAT.',
    },
    prerequisites: ['geom_triangles_angles'],
    importance: 'medium',
  },
];

export const SKILL_MAP = new Map<string, Skill>(
  SKILLS_TAXONOMY.map((skill) => [skill.id, skill])
);
