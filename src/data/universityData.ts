
export const student = {
  name: 'Мақсатқызы Айдын',
  id: 'ALT-2025-0142',
  group: 'ПИ-25-1к',
  specialty: 'Ақпараттық жүйелер',
  university: 'ALT University',
  year: '2 курс',
  gpa: '3.45',
};

export const schedule = [
  { day: 'Дүйсенбі', time: '09:00 - 10:30', subject: 'Web бағдарламалау', room: '305', teacher: 'Серік А.' },
  { day: 'Дүйсенбі', time: '10:45 - 12:15', subject: 'Деректер қоры', room: '212', teacher: 'Қасымова Г.' },
  { day: 'Сейсенбі', time: '09:00 - 10:30', subject: 'React Native', room: '410', teacher: 'Иванов Д.' },
  { day: 'Сейсенбі', time: '10:45 - 12:15', subject: 'Математика', room: '201', teacher: 'Ахметова Л.' },
  { day: 'Сәрсенбі', time: '11:00 - 12:30', subject: 'Python бағдарламалау', room: '308', teacher: 'Сағындық Б.' },
  { day: 'Бейсенбі', time: '09:00 - 10:30', subject: 'Ақпараттық қауіпсіздік', room: '215', teacher: 'Омаров Е.' },
  { day: 'Жұма', time: '10:00 - 11:30', subject: 'Ағылшын тілі', room: '102', teacher: 'Brown M.' },
];

export const subjects = [
  { name: 'Web бағдарламалау', teacher: 'Серік А.', credits: 5, grade: 92 },
  { name: 'Деректер қоры', teacher: 'Қасымова Г.', credits: 5, grade: 88 },
  { name: 'React Native', teacher: 'Иванов Д.', credits: 5, grade: 95 },
  { name: 'Математика', teacher: 'Ахметова Л.', credits: 4, grade: 85 },
  { name: 'Python бағдарламалау', teacher: 'Сағындық Б.', credits: 5, grade: 90 },
  { name: 'Ақпараттық қауіпсіздік', teacher: 'Омаров Е.', credits: 4, grade: 87 },
];

export const attendance = [
  { subject: 'Web бағдарламалау', attended: 14, missed: 1 },
  { subject: 'Деректер қоры', attended: 12, missed: 2 },
  { subject: 'React Native', attended: 15, missed: 0 },
  { subject: 'Математика', attended: 13, missed: 2 },
  { subject: 'Python бағдарламалау', attended: 14, missed: 1 },
];

export const news = [
  { title: 'Студенттерге арналған жаңа мүмкіндіктер', date: '15 қараша 2026', description: 'Университетте студенттерге арналған жаңа білім беру бағдарламалары іске қосылды.' },
  { title: 'IT Hackathon 2026', date: '12 қараша 2026', description: 'Студенттер арасында бағдарламалау бойынша жарыс ұйымдастырылады.' },
  { title: 'Күзгі семестр жаңалықтары', date: '10 қараша 2026', description: 'Семестрдің оқу кестесіне қатысты маңызды ақпарат жарияланды.' },
];

export const events = [
  { title: 'IT Hackathon', date: '20 қараша', place: 'Бас ғимарат', time: '10:00' },
  { title: 'Студенттер күні', date: '25 қараша', place: 'Акт залы', time: '14:00' },
  { title: 'Ғылыми конференция', date: '28 қараша', place: 'Конференция залы', time: '11:00' },
];

export const books = [
  { title: 'Python бағдарламалау негіздері', author: 'А. Сәрсенов', category: 'Бағдарламалау' },
  { title: 'Деректер қоры жүйелері', author: 'К. Иванов', category: 'IT' },
  { title: 'React Native практикумы', author: 'М. Ахметов', category: 'Мобильді әзірлеу' },
  { title: 'Ақпараттық қауіпсіздік', author: 'Д. Омаров', category: 'Қауіпсіздік' },
];

export const payments = [
  { title: 'Оқу ақысы', amount: '250 000 ₸', status: 'Төленді', date: '01.09.2026' },
  { title: 'Қосымша төлем', amount: '15 000 ₸', status: 'Күтілуде', date: '10.11.2026' },
];

export const notifications = [
  { title: 'Жаңа баға қойылды', message: 'React Native пәнінен 95 балл алдыңыз.', date: 'Бүгін, 10:30' },
  { title: 'Сабақ кестесі жаңартылды', message: 'Сейсенбі күнгі сабақ аудиториясы өзгерді.', date: 'Кеше, 15:20' },
  { title: 'Университет жаңалығы', message: 'IT Hackathon тіркелуі басталды.', date: '14 қараша' },
];
