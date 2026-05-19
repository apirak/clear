# Clear — Product Requirements Description
## Teacher View (Prototype Scope)

---

## 1. Product Overview

**Clear** คือ platform สำหรับให้อาจารย์ตอบคำถามน้องๆ นักเรียนในรูปแบบ chat ชื่อ "Clear" สื่อถึง intention หลักของ product: ทำให้น้องเข้าใจเนื้อหาได้อย่างชัดเจน

น้องถามมาจากระบบอื่น (เช่น ตั้งไข, ตะลุยโจทย์, Learn) เมื่อทำโจทย์แล้วสงสัย คำถามจะวิ่งเข้ามาเป็น Ticket ใน Clear อาจารย์เปิด ticket นั้น เห็น context ของโจทย์ข้อนั้นทันที แล้วตอบกลับผ่าน chat

Prototype นี้ build **Teacher View** เท่านั้น โดยใช้ mock data + simulated async (loading states) เพื่อให้เห็น interaction ครบก่อนต่อ API จริง

---

## 2. Overall Layout

หน้าจอแบ่งเป็น 2 ส่วนหลักที่วางอยู่คู่กันตลอดเวลา:

**ส่วนที่ 1 — Tab Bar (Navigation)**
- Desktop: อยู่ด้านซ้าย วางแนวตั้ง
- Mobile: อยู่ด้านล่าง วางแนวนอน

**ส่วนที่ 2 — Content Area**
- Desktop: แสดง 3 column พร้อมกัน
- Mobile/Tablet: แสดงทีละ column พร้อม navigation ย้อนกลับ

---

## 3. Tab Bar

Tab Bar มี 3 menu items เรียงตามลำดับ: **Chat**, **Help**, **Account**

แต่ละ item ใช้ Font Awesome icon อยู่บน และ text label อยู่ล่าง รูปแบบนี้เหมือนกันทั้ง Desktop และ Mobile

**Desktop layout:**
- อยู่ด้านซ้ายสุด fixed width ~64px
- Logo "Clear" (text, font-bold, สี indigo) อยู่บนสุดเหนือ menu items
- Chat และ Help อยู่ตรงกลาง
- Account อยู่ล่างสุด (ชิด bottom)

**Mobile layout:**
- อยู่ด้านล่างสุด full width
- 3 items กระจายเท่าๆ กัน

**Active state:** icon + label เปลี่ยนเป็นสี primary (indigo)

**Account Menu:**
เมื่อกด Account จะมี dropdown/popover ขึ้นมา ประกอบด้วย:
- **Settings** — ตั้งค่า
- **Set Theme** — toggle light/dark mode
- **Logout** — สีแดง เพื่อ distinguish จาก action อื่น

---

## 4. Content Area — 3 Columns

```
┌──────────────────┬────────────────────────────┬────────────────┐
│   Column 1       │        Column 2             │   Column 3     │
│   Ticket List    │        Chat Panel           │   Metadata     │
│   ~300px fixed   │        flex-1               │   ~320px fixed │
└──────────────────┴────────────────────────────┴────────────────┘
```

ทุก column คั่นด้วย border 1px สี `border-default`

**Surface layering:**
- Column 1 และ 3: `surface` (Layer 1)
- Column 2: `surface-raised` (Layer 2)
- ใน light mode สีเหมือนกันทั้งหมด — ความลึกมาจาก border ไม่ใช่สี
- ใน dark mode: Column 2 สว่างกว่า Column 1 และ 3 เล็กน้อย

**Responsive:**
- ≥1280px (Desktop): แสดงครบ 3 column
- 768–1279px (Tablet): แสดง Column 1 + 2, Column 3 ซ่อนอยู่เป็น slide-over drawer เรียกได้จากปุ่มใน Column 2 Head
- <768px (Mobile): แสดงทีละ column, ไล่จาก Column 1 → กด ticket → Column 2 → ปุ่ม → Column 3 drawer, มี back button เพื่อย้อนกลับ

---

## 5. Column 1 — Ticket List

### 5.1 Head (Filter Bar)

Filter bar ต้องออกแบบให้ **minimal และ compact** เพื่อไม่กินพื้นที่แสดงคำถาม ความสูงรวม padding ไม่ควรเกิน 40px

มี 2 controls:
- **Status filter:** dropdown เลือกระหว่าง "ทั้งหมด / รอตอบ / ตอบแล้ว"
- **Sort order:** dropdown เลือกระหว่าง "ใหม่สุด / เก่าสุด"

**Default state:** แสดง "รอตอบ" ก่อน (unanswered tickets ขึ้นก่อนเสมอ)

### 5.2 Body (Ticket Cards)

**Default sort logic:**
1. Unanswered tickets ก่อน (เรียง newest first ภายในกลุ่ม)
2. ตามด้วย Resolved tickets (เรียง newest first ภายในกลุ่ม)

**แต่ละ Ticket Card แสดง:**
- Ticket ID เช่น `#TK-0042` (ซ้าย) + Status badge (ขวา)
- Preview ของคำถามที่น้องถาม ตัดออกมา 2 บรรทัด มี `...` ถ้ายาวเกิน
- วิชา + ระบบที่มา (เช่น "คณิตศาสตร์ · ตั้งไข") ซ้าย + เวลาสัมพัทธ์ (เช่น "5 mins ago") ขวา

**Status badge:**
- รอตอบ: สีส้ม/amber, text "รอตอบ"
- ตอบแล้ว: สีเขียว, text "ตอบแล้ว"

**Active ticket:** มี left border accent สี primary + background neutral เล็กน้อย

**Loading state:** skeleton 4 cards animate-pulse

---

## 6. Column 2 — Chat Panel

### 6.1 Head

แสดงข้อมูล context ของ ticket ที่เลือดอยู่:
- **ซ้าย:** avatar ของน้อง + ชื่อน้อง (headline) + บรรทัดที่สอง: วิชา · ระบบที่มา · ticket ID (text เล็ก สี subtle)
- **ขวา:** ปุ่ม **"ปิดคำถาม"** (Mark as Resolved)
  - Style: outline สีเขียว `border-success text-success`
  - Icon: `fa-check` นำหน้า
  - เมื่อกดแล้ว: เปลี่ยนเป็น "ปิดแล้ว ✓" disabled state, ticket status ใน Column 1 เปลี่ยนเป็น resolved ด้วย

### 6.2 Body (Chat Thread)

**Bubble alignment (Teacher View):**
- Student bubbles: **ซ้าย**
- Teacher bubbles: **ขวา**
- AI bubbles: **ขวา** (ใช้ avatar ต่างกันจาก teacher)

**Avatar rules:**
- Student: ไม่มี avatar เลย
- Teacher (คนตอบเอง, รวมถึงกรณีที่ AI draft แล้วคนกด send): avatar รูปคน
- AI (ตอบอัตโนมัติโดยไม่ผ่านคน): avatar เป็น icon magic wand (`fa-wand-magic-sparkles`) สีindigo บน background วงกลม `bg-primary/10` แทน avatar รูปคน

**Bubble grouping:**
- ถ้า sender คนเดียวกันส่งหลาย message ติดกัน (ภายใน 2 นาที) → collapse avatar แสดงเฉพาะ message แรกของกลุ่มที่มี avatar, message ถัดไปไม่มี avatar
- Timestamp แสดงเฉพาะ message สุดท้ายของแต่ละกลุ่ม

**Bubble styles:**
- Student: พื้นหลัง neutral-100, text สีเข้ม, มุมซ้ายบนเหลี่ยมกว่า (บ่งบอกทิศทาง bubble)
- Teacher: พื้นหลัง primary (indigo), text สีขาว, มุมขวาบนเหลี่ยมกว่า
- AI: พื้นหลัง primary เช่นเดียวกัน แต่มี small "AI" badge ติดมุมบน bubble เพื่อ distinguish

**Scroll behavior:**
- Auto-scroll to bottom เมื่อ: เปิด ticket ใหม่, ส่งข้อความใหม่
- ถ้า user scroll ขึ้นไปดูข้อความเก่า แล้วมีข้อความใหม่เข้ามา → แสดง floating pill button "↓ ข้อความใหม่" ด้านล่าง กดแล้ว scroll to bottom

**Loading state:** 3 skeleton bubbles (2 ซ้าย, 1 ขวา)

**Empty state (ยังไม่เลือก ticket):**
icon ขนาดใหญ่ + text "เลือกคำถามเพื่อเริ่มตอบ" / "Select a ticket to start replying" แสดงกลาง panel

### 6.3 Post (Reply Composer)

Composer แบ่งเป็น 2 แถว:

**แถวที่ 1 — Textarea + Send:**
- Textarea: placeholder "พิมพ์ข้อความตอบน้อง...", เริ่มต้น 1 แถว, auto-resize ได้สูงสุด 4 แถวแล้วมี scrollbar ภายใน
- ปุ่ม Send: ขวาสุด, icon `fa-paper-plane`, พื้นหลัง primary
  - Shortcut: `Cmd+Enter` / `Ctrl+Enter`
  - ขณะ pending: disabled + spinner แทน icon

**แถวที่ 2 — Action Bar:**
- ซ้าย (4 icon buttons, hover มี background):
  - `fa-paperclip` — Upload รูป
  - `fa-wand-magic-sparkles` — ให้ AI ช่วยร่างคำตอบ (กดแล้วสลับไป Tab "Clear AI" ใน Column 3 อัตโนมัติ)
  - `fa-square-root-variable` — LaTeX helper
  - `fa-images` — ค้นหารูปจากคลัง

- ขวา — **AI Mode Toggle** (pill toggle 2 states):
  - **AI Auto** (icon magic wand): AI ตอบอัตโนมัติ — pill สี indigo อ่อน
  - **Staff** (icon user): พี่ตอบเอง — pill สีเทา neutral
  - กดสลับระหว่างสอง state ได้

---

## 7. Column 3 — Metadata Panel

มี 2 tabs ด้านบนสุด:

### 7.1 Tab "Content"

แสดง metadata ของโจทย์ข้อที่น้องถาม เรียงจากบนลงล่าง:

**1. ตัวโจทย์**
- Section label "โจทย์" + question text
- Support LaTeX rendering (เช่น `$f(x) = x^2 + 3x$`)

**2. ตัวเลือก (Choices A–D)**
- แสดง 4 choices
- Highlight ข้อที่ถูกต้อง: สีเขียว `bg-success/10 border-success`
- Highlight ข้อที่น้องเลือก (ถ้าผิด): สีแดง `bg-error/10 border-error`

**3. คำใบ้ (Hint)**
- Section label "คำใบ้" + hint text

**4. เฉลยละเอียด (Solution)**
- Section label "เฉลย" + solution text
- ถ้ายาวให้ collapse ได้ มีปุ่ม "แสดงเพิ่มเติม ▾"

**5. ความรู้ที่เกี่ยวข้อง (Related Knowledge)**
- แสดงเป็น chip list ชื่อหัวข้อความรู้แต่ละอัน
- กดแต่ละ chip → Dialog popup แสดงเนื้อหาความรู้นั้นแบบละเอียด (scrollable)
- Dialog มีปุ่ม Close

### 7.2 Tab "Clear AI" (Teacher View เท่านั้น)

หน้านี้ช่วยให้อาจารย์ใช้ AI ร่างคำตอบ ก่อนส่งให้น้อง

**ส่วนบน — Input:**
- ปุ่ม "Copy จากคำถามน้อง" — กดแล้ว auto-fill textarea ด้วย message ล่าสุดของน้อง
- Textarea สำหรับพิมพ์ prompt ให้ AI (3 rows default)
- ปุ่ม "ถาม AI" — primary button, ขณะ loading แสดง spinner

**ส่วนล่าง — AI Draft Bubbles (แสดงหลัง AI ตอบ):**

AI response แบ่งเป็น bubbles ตาม paragraph:
- 1 paragraph = 1 bubble
- ถ้า AI ตอบมา 1 paragraph → 1 bubble
- ถ้า AI ตอบมาหลาย paragraph → หลาย bubble แยกกัน

**Style ของ AI draft bubble:** สีเทา neutral (preview mode, ยังไม่ได้ส่ง) แตกต่างจาก bubble ใน chat

แต่ละ bubble มี 3 action icons:
- **Send** (`fa-paper-plane`): ส่ง bubble นี้ไปที่ Column 2 Chat เลยทันที (append เป็น teacher bubble ใหม่, sender = teacher ไม่ใช่ AI)
- **Copy** (`fa-copy`): copy ข้อความใส่ clipboard + วางลง textarea ใน Reply Composer เพื่อให้อาจารย์รีวิวแก้ไขก่อนส่งเอง
- **Delete** (`fa-trash`): ลบ bubble นี้ออกจาก draft

**Action row ด้านล่าง:**
- **"ส่งทั้งหมด"** — ส่งทุก bubble ไปที่ Column 2 Chat ทีเดียว
- **"เริ่มใหม่"** — ล้าง AI draft ทั้งหมด กลับไป input เปล่า

---

## 8. Bilingual Support (TH/EN)

- UI ทุก label, placeholder, button text ต้องรองรับ 2 ภาษา: **ไทย** และ **อังกฤษ**
- มี toggle สลับภาษาได้ (อยู่ใน Account menu หรือ bottom ของ Tab Bar)
- เนื้อหาข้อความจาก user (ข้อความ chat, โจทย์) ไม่ได้ translate — เป็น user-generated content
- Default language: ไทย

---

## 9. Dark Mode

- Toggle ได้จาก Account menu (Set Theme)
- ใช้ CSS class `.dark` บน `<html>` element
- Dark mode ทุก surface ต้องเปลี่ยนตาม token ที่กำหนดใน Design System
- Default: Light mode

---

## 10. Loading & Empty States

| Component | Loading State | Empty State |
|---|---|---|
| Ticket List | 4 skeleton cards (animate-pulse) | "ไม่มีคำถาม" text กลาง column |
| Chat Thread | 3 skeleton bubbles | Icon + "เลือกคำถามเพื่อเริ่มตอบ" |
| Send button | Spinner + disabled | — |
| Ask AI button | Spinner + disabled | — |
| Clear AI draft | Streaming effect (ตัวอักษรทยอยปรากฏ) | — |

---

## 11. Key Interactions Summary

| Action | Result |
|---|---|
| กด Ticket Card ใน Column 1 | โหลด messages ใน Column 2, highlight ticket ที่เลือก |
| กด "ปิดคำถาม" ใน Column 2 Head | Ticket status → resolved, button → disabled "ปิดแล้ว ✓" |
| พิมพ์ + กด Send / Cmd+Enter | Optimistic update: append bubble ทันที, spinner ระหว่าง pending |
| Scroll ขึ้นแล้วมีข้อความใหม่ | Floating "↓ ข้อความใหม่" pill ปรากฏ |
| กด magic wand icon ใน Composer | สลับไป Tab "Clear AI" ใน Column 3 |
| กด "Copy จากคำถามน้อง" | Auto-fill textarea ใน Clear AI ด้วย latest student message |
| กด Send บน AI draft bubble | Append bubble นั้นไปที่ chat ทันที (sender = teacher) |
| กด Copy บน AI draft bubble | Copy to clipboard + วางลง Reply Composer textarea |
| กด chip ความรู้ใน Content tab | Dialog popup เนื้อหาละเอียด |
| กด AI Mode Toggle | สลับระหว่าง "AI Auto" และ "Staff" |
| Toggle Theme | สลับ .dark class, UI ทุกอย่างเปลี่ยนทันที |
| Toggle Language | UI labels ทุกจุดเปลี่ยน TH ↔ EN ทันที |
