---
version: alpha
name: Clear
description: Clear is a chat-first academic support platform where teachers answer students' questions and make complex content genuinely clear. Every design decision serves one goal — removing friction between a confused student and a clear answer.

colors:
  # Light mode palette
  primary: "#4F46E5"
  primary-hover: "#4338CA"
  secondary: "#6B7280"
  tertiary: "#10B981"
  neutral-50: "#F9FAFB"
  neutral-100: "#F3F4F6"
  neutral-200: "#E5E7EB"
  neutral-300: "#D1D5DB"
  neutral-400: "#9CA3AF"
  neutral-700: "#374151"
  neutral-900: "#111827"
  surface: "#FFFFFF"
  surface-raised: "#F9FAFB"
  on-surface: "#111827"
  on-surface-subtle: "#6B7280"
  error: "#EF4444"
  warning: "#F59E0B"
  success: "#10B981"
  # Role-specific accent colors
  teacher: "#4F46E5"
  student: "#10B981"
  # Dark mode palette
  dark-bg: "#0F1117"
  dark-surface: "#1A1D27"
  dark-surface-raised: "#22263A"
  dark-border: "#2D3148"
  dark-on-surface: "#E5E7EB"
  dark-on-surface-subtle: "#9CA3AF"
  dark-primary: "#6366F1"
  dark-primary-hover: "#818CF8"

typography:
  display:
    fontFamily: Sarabun
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Sarabun
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sarabun
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
  headline-sm:
    fontFamily: Sarabun
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: Sarabun
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Sarabun
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Sarabun
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
  label-lg:
    fontFamily: Sarabun
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
  label-md:
    fontFamily: Sarabun
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Sarabun
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.02em
  caption:
    fontFamily: Sarabun
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.01em

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  base: 16px
  gutter: 24px
  panel-sidebar: 240px
  panel-list: 320px
  panel-chat: 1fr
  panel-detail: 300px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 20px
  bubble: 18px
  full: 9999px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: 36px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: 36px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  bubble-teacher:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.body-md}"
    rounded: "{rounded.bubble}"
    padding: "10px 14px"
  bubble-student:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.bubble}"
    padding: "10px 14px"
  bubble-teacher-dark:
    backgroundColor: "{colors.dark-primary}"
    textColor: "#FFFFFF"
    typography: "{typography.body-md}"
    rounded: "{rounded.bubble}"
    padding: "10px 14px"
  bubble-student-dark:
    backgroundColor: "{colors.dark-surface-raised}"
    textColor: "{colors.dark-on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.bubble}"
    padding: "10px 14px"
  input-reply:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
    height: 48px
  sidebar-item:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-subtle}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  sidebar-item-active:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.primary}"
  conversation-list-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  conversation-list-item-active:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.on-surface}"
  badge-teacher:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
  badge-student:
    backgroundColor: "{colors.tertiary}"
    textColor: "#FFFFFF"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
  tag-topic:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# Clear — Academic Q&A Platform

A collaborative, chat-first platform for academic support. Students can ask questions, clarify exam topics, and get guidance from teachers in real time. The design borrows the proven three-panel inbox pattern from Intercom and adapts it for an educational context: warm, focused, and welcoming to both Thai and English speakers.

## Overview

**Clear** is a chat-first platform built around one idea: every student deserves a clear answer. Teachers use it to respond to questions, explain difficult concepts, and help students prepare for exams — all in one focused inbox.

The name drives the design. Everything that doesn't serve clarity is removed. No decorations, no gamification, no distractions — just a clean space where understanding happens.

The personality is **calm, honest, and direct**. Teachers feel organised and in control. Students feel safe to ask anything, no matter how basic. The three-panel inbox layout (borrowed from Intercom) makes it immediately familiar — zero learning curve.

Role identity is expressed through colour: **indigo for teachers** (authority, depth, trust) and **emerald for students** (fresh, open, growing). Both light and dark modes are first-class. Light is the default for daytime classroom or office use; dark reduces eye strain during late-night study sessions.

Sarabun (Google Fonts) is used throughout — chosen specifically because it renders Thai script and Latin characters at the same optical weight, making Clear feel native for Thai-speaking students and teachers.

## Colors

Two semantic accent colors drive role identity throughout the interface:

- **Primary / Teacher (#4F46E5):** Indigo — conveys authority, calm expertise, and academic depth. Used for teacher chat bubbles, action buttons, and active navigation states.
- **Student / Tertiary (#10B981):** Emerald — fresh, energetic, and approachable. Used for student bubble accents, online presence indicators, and student-specific badges.
- **Secondary (#6B7280):** Cool slate for metadata, timestamps, captions, and supporting UI text. Keeps the interface from feeling cluttered.
- **Surface (#FFFFFF / Dark: #1A1D27):** The main panel background. Pure white in light mode; a deep blue-grey in dark mode — warmer than pure black, reducing eye strain during long study sessions.
- **Neutral scale:** A full grey ramp (50–900) for borders, dividers, hover states, and subtle backgrounds.
- **Error (#EF4444):** Used sparingly for form validation and destructive actions only.
- **Warning (#F59E0B):** For deadline nudges and flagged content.
- **Success (#10B981):** Shared with the student accent; used for submission confirmations and correct-answer feedback.

## Surface & Layering

EduChat uses a **three-level tonal surface system** to separate the four panels of the inbox layout. This pattern is standard in productivity UIs (Intercom, Linear, Notion) and gives depth without relying on heavy shadows.

| Layer | Token | Light value | Dark value | Used on |
|---|---|---|---|---|
| Layer 0 | `background` | `#F3F4F6` | `#0F1117` | App shell — visible as the "gap" colour between panels |
| Layer 1 | `surface` | `#FFFFFF` | `#1A1D27` | Sidebar + Conversation list panels |
| Layer 2 | `surface-raised` | `#FFFFFF` | `#22263A` | Chat panel + Detail/metadata panel |

In light mode, Layer 1 and Layer 2 share the same white value — depth is expressed purely through **borders**, not colour. In dark mode, the three layers are tonally distinct, creating clear depth without needing borders.

### Panel border rules

- **Between panels** (sidebar ↔ list ↔ chat ↔ detail): `1px solid border-default` (`#E5E7EB` / dark: `#2D3148`)
- **List item separators**: `1px solid border-subtle` (`#F3F4F6` / dark: `#1E2235`)
- **Input fields at rest**: `1px solid border-default`; on focus: `2px solid primary`
- **No border** between the app shell (Layer 0) and panels — panels sit flush, the background colour shows through panel gaps only on mobile/tablet when panels are separated

### Tailwind usage

```html
<!-- App shell -->
<div class="bg-background dark:bg-dark-background">

  <!-- Sidebar: Layer 1 -->
  <aside class="bg-surface dark:bg-dark-surface border-r border-border-default dark:border-dark-border-default">

  <!-- Chat panel: Layer 2 -->
  <main class="bg-surface-raised dark:bg-dark-surface-raised">
```


## Typography

**Sarabun** (Google Fonts) is the sole typeface across the entire system. It was chosen because:

1. It renders Thai script and Latin characters at the same optical size and weight — critical for a bilingual Thai education context.
2. Its geometric but humanist letterforms feel modern without being sterile.
3. It covers the full weight range (100–800), giving the system ample typographic contrast without mixing typefaces.

- **Display (32px / 700):** Splash screens, empty states, and onboarding headlines.
- **Headline LG–SM (24px–15px / 600–700):** Section titles, conversation headers, panel headings.
- **Body LG–SM (16px–13px / 400):** All message bubble content and reading text. Line-height is deliberately generous (1.55–1.65) to support mixed Thai/English text and long-form explanation.
- **Labels (11px–14px / 500):** Navigation items, metadata chips, button labels, timestamps.
- **Caption (11px / 400):** Read receipts, message status indicators, fine-print.

## Layout

The desktop layout follows a **three-panel inbox model** — identical in spirit to Intercom:

1. **Left Sidebar (240px fixed):** Navigation — subject channels, role filter (All / Teachers / Students), settings.
2. **Conversation List (320px fixed):** Scrollable list of active chat threads, sorted by last activity. Shows student name, snippet, unread badge, and timestamp.
3. **Chat Panel (flexible, min 480px):** The main message thread with reply composer at the bottom.
4. **Detail Panel (300px, collapsible):** Student profile, exam topic tags, linked resources, and conversation attributes. Can be hidden to give more space to the chat.

**Responsive behaviour:**

| Breakpoint | Layout |
|---|---|
| Desktop (≥1280px) | All four panels visible |
| iPad Horizontal (≥1024px) | Sidebar + Chat + Detail (list collapses to icon rail) |
| iPad Vertical (≥768px) | Sidebar icon rail + List + Chat (Detail hidden, accessible via drawer) |
| Mobile (<768px) | Single panel at a time; bottom nav replaces sidebar; back-navigation between list ↔ chat |

Spacing follows an **8px base grid**. Component padding uses multiples of 4px for micro-spacing and 8px+ for structural rhythm.

## Elevation & Depth

Depth is conveyed through **tonal layering**, not heavy shadows — consistent with both Intercom's aesthetic and good OLED performance on mobile.

- **Light mode:** Background (#F9FAFB) → Panel surface (#FFFFFF) → Raised cards/popovers (#FFFFFF + 1px border `#E5E7EB`)
- **Dark mode:** Background (#0F1117) → Panel surface (#1A1D27) → Raised cards (#22263A)
- Subtle `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` is used only on the reply composer and floating action elements.
- Modals and drawers use a `rgba(0,0,0,0.4)` scrim.

## Shapes

The shape language is **softly rounded** — friendly and modern, never bubbly or childish.

- Navigation items and list items: `rounded-md` (8px)
- Chat bubbles: `rounded-bubble` (18px) with the corner nearest the avatar squared to 4px, following the standard messenger convention
- Input fields and reply composer: `rounded-lg` (12px)
- Badges and role chips: `rounded-full` (9999px)
- Cards and panels: `rounded-xl` (16px) on mobile; square edges on desktop panels (flush to screen edges)
- Buttons: `rounded-md` (8px)

## Components

### Buttons
- **Primary:** Indigo fill, white text — used for "Send", "Assign", "Submit answer"
- **Secondary:** Light grey fill, dark text — used for "Cancel", "Later"
- **Ghost:** No background, slate text — used for icon-adjacent actions in toolbars

### Chat Bubbles
- Teacher bubbles align **right**, indigo background, white text
- Student bubbles align **left**, neutral-100 background, dark text
- Dark mode swaps to `dark-primary` (indigo-400) for teacher and `dark-surface-raised` for student
- Consecutive bubbles from the same sender collapse the avatar; only the last in a sequence shows the timestamp

### Reply Composer
- Full-width input at the bottom of the chat panel
- Supports markdown-lite shortcuts (bold, code block) for teachers sharing code or formulas
- Attachment icon (left) and Send button (right)
- In dark mode, background shifts to `dark-surface-raised` to float above the panel

### Conversation List Items
- Avatar (initial or photo) + Name + Snippet + Timestamp
- Unread count badge in indigo
- Active state: `neutral-100` background with left-border accent in primary

### Role Badges
- "Teacher" badge: indigo pill
- "Student" badge: emerald pill
- Displayed next to names in the detail panel and conversation list

### Topic Tags
- Neutral pill chips for subject/exam topic labelling (e.g. "Biology Ch.5", "Midterm 2025")
- Clickable for filtering the conversation list

### Sidebar Navigation Items
- Icon + label, 36px height
- Active: primary text + neutral-100 background
- Hover: neutral-100 background

## Tailwind v4 Implementation

This design system maps directly to Tailwind v4's CSS-first configuration. Paste the following into your main CSS file (e.g. `app.css` or `global.css`) as your `@theme` block. All design tokens above are expressed as CSS custom properties that Tailwind v4 consumes natively.

```css
@import "tailwindcss";
@import url("https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap");

@theme {
  /* ── Fonts ── */
  --font-sans: "Sarabun", system-ui, sans-serif;

  /* ── Colors: Light mode ── */
  --color-primary:            #4F46E5;
  --color-primary-hover:      #4338CA;
  --color-secondary:          #6B7280;
  --color-tertiary:           #10B981;
  --color-neutral-50:         #F9FAFB;
  --color-neutral-100:        #F3F4F6;
  --color-neutral-200:        #E5E7EB;
  --color-neutral-300:        #D1D5DB;
  --color-neutral-400:        #9CA3AF;
  --color-neutral-700:        #374151;
  --color-neutral-900:        #111827;
  --color-background:          #F3F4F6;
  --color-surface:             #FFFFFF;
  --color-surface-raised:      #FFFFFF;
  --color-border-default:      #E5E7EB;
  --color-border-subtle:       #F3F4F6;
  --color-on-surface:         #111827;
  --color-on-surface-subtle:  #6B7280;
  --color-error:              #EF4444;
  --color-warning:            #F59E0B;
  --color-success:            #10B981;
  --color-teacher:            #4F46E5;
  --color-student:            #10B981;

  /* ── Colors: Dark mode ── */
  --color-dark-background:       #0F1117;
  --color-dark-surface:          #1A1D27;
  --color-dark-surface-raised:   #22263A;
  --color-dark-border-default:   #2D3148;
  --color-dark-border-subtle:    #1E2235;
  --color-dark-on-surface:       #E5E7EB;
  --color-dark-on-surface-subtle:#9CA3AF;
  --color-dark-primary:          #6366F1;
  --color-dark-primary-hover:    #818CF8;

  /* ── Border Radius ── */
  --radius-none:   0px;
  --radius-sm:     4px;
  --radius-md:     8px;
  --radius-lg:     12px;
  --radius-xl:     16px;
  --radius-2xl:    20px;
  --radius-bubble: 18px;
  --radius-full:   9999px;

  /* ── Spacing ── */
  --spacing-xs:   4px;
  --spacing-sm:   8px;
  --spacing-md:   16px;
  --spacing-lg:   24px;
  --spacing-xl:   32px;
  --spacing-2xl:  48px;
  --spacing-3xl:  64px;
  --spacing-gutter:       24px;
  --spacing-panel-sidebar: 240px;
  --spacing-panel-list:    320px;
  --spacing-panel-detail:  300px;

  /* ── Font Sizes & Line Heights ── */
  --text-display:     32px;
  --text-headline-lg: 24px;
  --text-headline-md: 18px;
  --text-headline-sm: 15px;
  --text-body-lg:     16px;
  --text-body-md:     14px;
  --text-body-sm:     13px;
  --text-label-lg:    14px;
  --text-label-md:    12px;
  --text-label-sm:    11px;
  --text-caption:     11px;

  --leading-display:     1.2;
  --leading-headline:    1.35;
  --leading-body-lg:     1.65;
  --leading-body-md:     1.6;
  --leading-body-sm:     1.55;
  --leading-label:       1.4;
  --leading-caption:     1.3;

  /* ── Breakpoints ── */
  --breakpoint-mobile: 375px;
  --breakpoint-tablet: 768px;
  --breakpoint-tablet-h: 1024px;
  --breakpoint-desktop: 1280px;
}

/* ── Dark mode: swap surface tokens ── */
@variant dark (&:where(.dark, .dark *));

.dark {
  --color-background:          #0F1117;
  --color-surface:             #1A1D27;
  --color-surface-raised:      #22263A;
  --color-border-default:      #2D3148;
  --color-border-subtle:       #1E2235;
  --color-on-surface:          #E5E7EB;
  --color-on-surface-subtle:   #9CA3AF;
  --color-primary:             #6366F1;
  --color-primary-hover:       #818CF8;
  --color-neutral-100:         #22263A;
  --color-neutral-200:         #2D3148;
}
```

### Usage Reference for AI Agents

When generating components for this design system, use these Tailwind utility mappings:

| Design Token | Tailwind Class |
|---|---|
| `colors.primary` | `bg-primary`, `text-primary`, `border-primary` |
| `colors.tertiary` (student) | `bg-tertiary`, `text-tertiary` |
| `colors.surface` | `bg-surface` |
| `colors.on-surface` | `text-on-surface` |
| `colors.on-surface-subtle` | `text-on-surface-subtle` |
| `colors.neutral-100` | `bg-neutral-100` |
| `colors.neutral-200` | `border-neutral-200` |
| `rounded.md` | `rounded-md` |
| `rounded.bubble` | `rounded-[18px]` |
| `rounded.full` | `rounded-full` |
| `spacing.sm` | `p-sm`, `gap-sm`, `m-sm` |
| `spacing.lg` | `p-lg`, `gap-lg` |
| `spacing.panel-sidebar` | `w-[240px]` |
| `spacing.panel-list` | `w-[320px]` |
| `spacing.panel-detail` | `w-[300px]` |
| `typography.body-md` | `text-body-md leading-body-md font-sans` |
| `typography.headline-lg` | `text-headline-lg leading-headline font-semibold font-sans` |

### Layout Skeleton (Tailwind classes)

```html
<!-- Root shell -->
<div class="flex h-screen bg-surface text-on-surface font-sans dark:bg-dark-bg">

  <!-- Panel 1: Sidebar (desktop only) -->
  <aside class="hidden lg:flex flex-col w-[240px] border-r border-neutral-200 dark:border-dark-border bg-surface shrink-0">
  </aside>

  <!-- Panel 2: Conversation list -->
  <div class="hidden md:flex flex-col w-[320px] border-r border-neutral-200 dark:border-dark-border shrink-0">
  </div>

  <!-- Panel 3: Chat -->
  <main class="flex flex-col flex-1 min-w-0">
  </main>

  <!-- Panel 4: Detail (collapsible) -->
  <aside class="hidden xl:flex flex-col w-[300px] border-l border-neutral-200 dark:border-dark-border shrink-0">
  </aside>

</div>
```

### Key Component Classes

**Teacher bubble (right-aligned):**
```html
<div class="flex justify-end">
  <div class="bg-primary text-white rounded-[18px] rounded-br-[4px] px-[14px] py-[10px] max-w-[70%] text-body-md leading-body-md">
  </div>
</div>
```

**Student bubble (left-aligned):**
```html
<div class="flex justify-start gap-sm">
  <div class="bg-neutral-100 dark:bg-dark-surface-raised text-on-surface rounded-[18px] rounded-bl-[4px] px-[14px] py-[10px] max-w-[70%] text-body-md leading-body-md">
  </div>
</div>
```

**Primary button:**
```html
<button class="bg-primary hover:bg-primary-hover text-white rounded-md px-[16px] py-[8px] text-label-lg leading-label font-medium transition-colors">
</button>
```

**Role badge — Teacher:**
```html
<span class="bg-primary text-white rounded-full px-[8px] py-[2px] text-label-sm leading-caption font-medium">Teacher</span>
```

**Role badge — Student:**
```html
<span class="bg-tertiary text-white rounded-full px-[8px] py-[2px] text-label-sm leading-caption font-medium">Student</span>
```

## Do's and Don'ts

- **Do** use Sarabun for all text — never substitute a system font, as Thai rendering will break
- **Do** maintain a minimum 4.5:1 contrast ratio for all body text (WCAG AA)
- **Do** use the indigo/emerald role color system consistently — indigo = teacher authority, emerald = student freshness
- **Do** collapse the detail panel on iPad vertical and mobile to prioritise the conversation
- **Don't** use red except for errors and destructive actions — it conflicts with the warning-free educational tone
- **Don't** mix bubble alignment — teacher is always right-aligned, student always left-aligned
- **Don't** use more than two font weights on a single screen surface (e.g., 400 + 600 is fine; 400 + 500 + 700 is too many)
- **Don't** add decorative illustrations or mascots to the main chat interface — keep focus on the content
- **Don't** show more than one primary (indigo fill) button per panel at a time
- **Don't** use letter-spacing on body text or Thai script — it breaks Thai glyph clusters
