export type TicketStatus = 'waiting' | 'resolved'

export interface Ticket {
  id: string
  question: string
  subject: string
  source: string
  status: TicketStatus
  studentName: string
  studentAvatar: string
  createdAt: string
}

export interface ChatMessage {
  id: string
  sender: 'student' | 'teacher' | 'ai'
  text: string
  timestamp: string
}

export interface QuestionMeta {
  question: string
  choices: { label: string; text: string; correct: boolean; selected: boolean }[]
  hint: string
  solution: string
  relatedTopics: { name: string; content: string }[]
}

export const tickets: Ticket[] = [
  {
    id: 'TK-0042',
    question: 'อยากสอบถามเรื่องการหาอนุพันธ์ของฟังก์ชัน log ครับ ตรงข้อที่ให้หา f\'(x) ของ f(x) = ln(x² + 1) ไม่เข้าใจว่าต้องใช้ chain rule ยังไง',
    subject: 'คณิตศาสตร์',
    source: 'ตั้งไข',
    status: 'waiting',
    studentName: 'สมชาย ใจดี',
    studentAvatar: 'S',
    createdAt: '5 mins ago',
  },
  {
    id: 'TK-0041',
    question: 'พี่ครับ ข้อนี้ใช้สูตรอะไรครับ? ให้หาปริมาตรของทรงกรวยที่มีรัศมีฐาน 5 cm และความสูง 12 cm',
    subject: 'คณิตศาสตร์',
    source: 'ตะลุยโจทย์',
    status: 'waiting',
    studentName: 'วิภา สว่างจิต',
    studentAvatar: 'W',
    createdAt: '12 mins ago',
  },
  {
    id: 'TK-0040',
    question: 'สอบถามเรื่อง photosynthesis ค่ะ ว่า light-dependent reactions เกิดขึ้นที่ไหนในคลอโรพลาสต์ และมีผลิตภัณฑ์อะไรบ้าง?',
    subject: 'ชีววิทยา',
    source: 'Learn',
    status: 'waiting',
    studentName: 'นภัสสร พงษ์สวัสดิ์',
    studentAvatar: 'N',
    createdAt: '23 mins ago',
  },
  {
    id: 'TK-0039',
    question: 'รบกวนสอบถามหน่อยครับ ว่า Newton\'s second law F=ma ถ้ามีแรงมากกว่า 1 ทิศทางต้องคำนวณยังไงครับ',
    subject: 'ฟิสิกส์',
    source: 'ตั้งไข',
    status: 'resolved',
    studentName: 'กิตติพงษ์ สุขใจ',
    studentAvatar: 'K',
    createdAt: '1 hr ago',
  },
  {
    id: 'TK-0038',
    question: 'พี่ค่ะ ข้อนี้ตอบ A แต่เฉลยบอก C ไม่เข้าใจว่าทำไม inert pair effect มีผลกับกลุ่ม 13 อย่างไร',
    subject: 'เคมี',
    source: 'ตะลุยโจทย์',
    status: 'resolved',
    studentName: 'ปริญญา เรียนดี',
    studentAvatar: 'P',
    createdAt: '2 hrs ago',
  },
]

export const chatMessages: Record<string, ChatMessage[]> = {
  'TK-0042': [
    { id: 'm1', sender: 'student', text: 'สวัสดีครับพี่ รบกวนถามเรื่อง chain rule หน่อยครับ', timestamp: '5:30 PM' },
    { id: 'm2', sender: 'student', text: 'ตรงข้อที่ให้หาอนุพันธ์ของ f(x) = ln(x² + 1) ไม่เข้าใจว่าต้องเริ่มยังไงครับ\n\nเหมือนจะต้องใช้ chain rule แต่ไม่แน่ใจว่าส่วนไหนคือ "inner function" ส่วนไหนคือ "outer function"', timestamp: '5:31 PM' },
    { id: 'm3', sender: 'teacher', text: 'สวัสดีครับ! เยี่ยมมากที่ลองคิดมาก่อน\n\nมาดูกันครับ — f(x) = ln(x² + 1) จริงๆ แล้วเป็น composition ของ 2 ฟังก์ชัน:\n\n1. outer function: ln(u) — คือ natural log\n2. inner function: u = x² + 1\n\nลองเขียนต่อดูไหมครับว่าขั้นต่อไปคืออะไร?', timestamp: '5:35 PM' },
    { id: 'm4', sender: 'student', text: 'อ๋อ เข้าใจแล้วครับ! แสดงว่า\nd/dx [ln(u)] = (1/u) × u\'\n= (1/(x²+1)) × 2x\n= 2x/(x²+1)\n\nใช่ไหมครับ?', timestamp: '5:38 PM' },
  ],
  'TK-0041': [
    { id: 'm1', sender: 'student', text: 'พี่ครับ ข้อนี้ใช้สูตรอะไรครับ?', timestamp: '4:50 PM' },
    { id: 'm2', sender: 'student', text: 'ให้หาปริมาตรของทรงกรวยที่มีรัศมีฐาน 5 cm และความสูง 12 cm', timestamp: '4:50 PM' },
  ],
  'TK-0040': [
    { id: 'm1', sender: 'student', text: 'สอบถามเรื่อง photosynthesis ค่ะ', timestamp: '4:20 PM' },
    { id: 'm2', sender: 'ai', text: 'สวัสดีค่ะ! light-dependent reactions เกิดขึ้นที่ thylakoid membrane ในคลอโรพลาสต์ค่ะ\n\nผลิตภัณฑ์หลักมี 3 อย่าง:\n- ATP\n- NADPH\n- O₂ (ออกซิเจน)\n\nน้องอยากรู้เพิ่มเติมส่วนไหนไหมคะ?', timestamp: '4:22 PM' },
    { id: 'm3', sender: 'student', text: 'ขอบคุณค่ะ! แล้ว thylakoid กับ stroma ต่างกันยังไงคะ?', timestamp: '4:25 PM' },
  ],
  'TK-0039': [
    { id: 'm1', sender: 'student', text: 'สอบถามเรื่อง Newton\'s second law ครับ', timestamp: '3:00 PM' },
    { id: 'm2', sender: 'teacher', text: 'ถ้ามีแรงหลายทิศทาง เราต้องแตกเวกเตอร์เป็นส่วนประกอบ x และ y ก่อนครับ แล้วค่อยหา resultant force\n\nΣF = ma โดย ΣF คือผลรวมของแรงทั้งหมด (เป็นเวกเตอร์)', timestamp: '3:10 PM' },
    { id: 'm3', sender: 'student', text: 'เข้าใจแล้วครับ ขอบคุณมากครับ!', timestamp: '3:15 PM' },
  ],
  'TK-0038': [
    { id: 'm1', sender: 'student', text: 'พี่ค่ะ ข้อนี้ตอบ A แต่เฉลยบอก C', timestamp: '2:00 PM' },
    { id: 'm2', sender: 'teacher', text: 'inert pair effect ทำให้ ns² electrons ไม่อยากร่วม bond ครับ ทำให้กลุ่ม 13 มักจะมี oxidation state +1 แทน +3', timestamp: '2:15 PM' },
  ],
}

export const questionMeta: Record<string, QuestionMeta> = {
  'TK-0042': {
    question: 'หาอนุพันธ์ของ f(x) = ln(x² + 1)',
    choices: [
      { label: 'A', text: '2x / (x² + 1)', correct: true, selected: false },
      { label: 'B', text: '2x / ln(x² + 1)', correct: false, selected: false },
      { label: 'C', text: '1 / (x² + 1)', correct: false, selected: false },
      { label: 'D', text: '2x ln(x² + 1)', correct: false, selected: false },
    ],
    hint: 'ใช้ Chain Rule: d/dx [f(g(x))] = f\'(g(x)) · g\'(x) โดยที่ f(u) = ln(u) และ g(x) = x² + 1',
    solution: 'ขั้นที่ 1: ระบุ outer function และ inner function\n• outer: f(u) = ln(u), f\'(u) = 1/u\n• inner: g(x) = x² + 1, g\'(x) = 2x\n\nขั้นที่ 2: ใช้ Chain Rule\nf\'(x) = f\'(g(x)) · g\'(x)\n= (1/(x² + 1)) · 2x\n= 2x/(x² + 1)\n\nตอบ: f\'(x) = 2x/(x² + 1)',
    relatedTopics: [
      { name: 'Chain Rule', content: 'Chain Rule ใช้หาอนุพันธ์ของฟังก์ชันประกอบ (composite function)\n\nสูตร: d/dx [f(g(x))] = f\'(g(x)) · g\'(x)\n\nตัวอย่าง:\n• d/dx [sin(x²)] = cos(x²) · 2x\n• d/dx [e^(3x)] = e^(3x) · 3\n• d/dx [ln(2x+1)] = 1/(2x+1) · 2' },
      { name: 'Derivatives of ln(x)', content: 'd/dx [ln(x)] = 1/x, x > 0\n\nd/dx [ln(|x|)] = 1/x, x ≠ 0\n\nGeneral form:\nd/dx [ln(f(x))] = f\'(x)/f(x)' },
      { name: 'Power Rule', content: 'd/dx [xⁿ] = n·xⁿ⁻¹\n\nตัวอย่าง:\n• d/dx [x²] = 2x\n• d/dx [x³] = 3x²\n• d/dx [1/x] = d/dx [x⁻¹] = -x⁻² = -1/x²' },
    ],
  },
}
