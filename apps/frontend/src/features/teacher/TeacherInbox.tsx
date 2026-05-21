import { useState } from 'react'
import {
  faCheck,
  faCircleQuestion,
  faClipboardList,
  faComments,
  faImages,
  faPaperPlane,
  faPaperclip,
  faSquareRootVariable,
  faUser,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { tickets, chatMessages, questionMeta, type Ticket, type ChatMessage } from '../shared/mock-data'

export function TeacherInbox() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  return (
    <div className="h-screen overflow-hidden bg-[#F3F4F6] p-2 dark:bg-[#0F1117] font-['Sarabun',sans-serif]">
      <div className="flex h-full gap-2">
        <aside className="hidden lg:flex w-16 shrink-0 flex-col items-center gap-2 py-3">
          <div className="text-sm font-bold text-indigo-600 mb-6">Clear</div>
          <NavIcon active icon="chat" label="Chat" />
          <NavIcon icon="help" label="Help" />
          <div className="flex-1" />
          <NavIcon icon="user" label="Account" />
        </aside>

        <div className="flex min-h-0 w-60 lg:w-75 shrink-0 flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm dark:border-[#2D3148] dark:bg-[#1A1D27]">
          <div className="flex items-center justify-between border-b border-[#E5E7EB] px-4 py-3 dark:border-[#2D3148]">
            <span className="text-sm font-semibold text-[#111827] dark:text-[#E5E7EB]">คำถาม</span>
            <span className="text-xs text-[#6B7280]">{tickets.filter((t) => t.status === 'waiting').length} รอตอบ</span>
          </div>
          <div className="flex-1 overflow-y-auto">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                active={selectedTicket?.id === ticket.id}
                onClick={() => setSelectedTicket(ticket)}
              />
            ))}
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm dark:border-[#2D3148] dark:bg-[#22263A]">
          {selectedTicket ? (
            <>
              <ChatHead ticket={selectedTicket} />
              <ChatBody messages={chatMessages[selectedTicket.id] ?? []} />
              <ReplyComposer />
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center text-[#9CA3AF]">
              <div className="text-center">
                <div className="mb-2 text-4xl">
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <div className="text-sm">เลือกคำถามเพื่อเริ่มตอบ</div>
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:flex w-64 lg:w-80 shrink-0 flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm dark:border-[#2D3148] dark:bg-[#1A1D27]">
          {selectedTicket && questionMeta[selectedTicket.id] ? (
            <MetadataPanel meta={questionMeta[selectedTicket.id]} />
          ) : (
            <MetadataEmptyState />
          )}
        </div>
      </div>
    </div>
  )
}

function NavIcon({ icon, label, active }: { icon: 'chat' | 'help' | 'user'; label: string; active?: boolean }) {
  const icons = { chat: faComments, help: faCircleQuestion, user: faUser } as const

  return (
    <button className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg text-xs ${active ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10' : 'text-[#6B7280] hover:bg-[#F3F4F6] dark:hover:bg-[#22263A]'}`}>
      <span className="text-base leading-none">
        <FontAwesomeIcon icon={icons[icon]} />
      </span>
      <span>{label}</span>
    </button>
  )
}

function TicketCard({ ticket, active, onClick }: { ticket: Ticket; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 border-b border-[#F3F4F6] dark:border-[#2D3148] transition-colors ${active ? 'bg-indigo-50 dark:bg-indigo-500/10 border-l-2 border-l-indigo-600' : 'hover:bg-[#F9FAFB] dark:hover:bg-[#22263A] border-l-2 border-l-transparent'}`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-[#6B7280]">#{ticket.id}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${ticket.status === 'waiting' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
          {ticket.status === 'waiting' ? 'รอตอบ' : 'ตอบแล้ว'}
        </span>
      </div>
      <p className="text-sm text-[#111827] dark:text-[#E5E7EB] line-clamp-2 leading-relaxed">{ticket.question}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-[#9CA3AF]">{ticket.subject} · {ticket.source}</span>
        <span className="text-xs text-[#9CA3AF]">{ticket.createdAt}</span>
      </div>
    </button>
  )
}

function ChatHead({ ticket }: { ticket: Ticket }) {
  const [resolved, setResolved] = useState(false)
  return (
    <div className="flex items-center justify-between border-b border-[#E5E7EB] px-4 py-3 dark:border-[#2D3148]">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-medium shrink-0">{ticket.studentAvatar}</div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-[#111827] dark:text-[#E5E7EB] truncate">{ticket.studentName}</div>
          <div className="text-xs text-[#6B7280]">{ticket.subject} · {ticket.source} · #{ticket.id}</div>
        </div>
      </div>
      <button
        onClick={() => setResolved(true)}
        disabled={resolved}
        className={`text-xs px-3 py-1.5 rounded-md border ${resolved ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'border-emerald-300 text-emerald-600 hover:bg-emerald-50'}`}
      >
        <span className="inline-flex items-center gap-1.5">
          <FontAwesomeIcon icon={faCheck} />
          {resolved ? 'ปิดแล้ว' : 'ปิดคำถาม'}
        </span>
      </button>
    </div>
  )
}

function ChatBody({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
      {messages.map((msg) => {
        const isTeacher = msg.sender === 'teacher'
        const isAI = msg.sender === 'ai'
        const isRight = isTeacher || isAI
        return (
          <div key={msg.id} className={`flex ${isRight ? 'justify-end' : 'justify-start'} gap-2`}>
            {!isRight && <div className="w-7 h-7 shrink-0" />}
            <div className="max-w-[70%]">
              <div className={`px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${isRight ? 'bg-indigo-600 text-white rounded-2xl rounded-br-sm' : 'bg-[#F3F4F6] dark:bg-[#2D3148] text-[#111827] dark:text-[#E5E7EB] rounded-2xl rounded-bl-sm'}`}>
                {isAI && <span className="inline-block text-[10px] bg-indigo-500 text-white px-1.5 py-0.5 rounded-full mr-1.5 mb-1">AI</span>}
                {msg.text}
              </div>
              <div className={`text-[10px] text-[#9CA3AF] mt-1 ${isRight ? 'text-right' : 'text-left'}`}>{msg.timestamp}</div>
            </div>
            {isRight && (
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${isAI ? 'bg-indigo-500/10 text-indigo-600' : 'bg-indigo-100 text-indigo-600'}`}>
                <FontAwesomeIcon icon={isAI ? faWandMagicSparkles : faUser} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function ReplyComposer() {
  return (
    <div className="border-t border-[#E5E7EB] dark:border-[#2D3148] p-3">
      <div className="flex gap-2 mb-2">
        <textarea className="flex-1 resize-none rounded-lg border border-[#E5E7EB] dark:border-[#2D3148] bg-white dark:bg-[#1A1D27] text-sm p-3 text-[#111827] dark:text-[#E5E7EB] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={1} placeholder="พิมพ์ข้อความตอบน้อง..." />
        <button className="self-end w-9 h-9 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-700 shrink-0">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[faPaperclip, faWandMagicSparkles, faSquareRootVariable, faImages].map((icon, i) => (
            <button key={i} className="w-7 h-7 rounded-md text-[#6B7280] hover:bg-[#F3F4F6] dark:hover:bg-[#2D3148] flex items-center justify-center text-xs">
              <FontAwesomeIcon icon={icon} />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 bg-[#F3F4F6] dark:bg-[#2D3148] rounded-full p-0.5">
          <button className="text-[10px] px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 font-medium inline-flex items-center gap-1">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            AI Auto
          </button>
          <button className="text-[10px] px-2.5 py-1 rounded-full text-[#6B7280] inline-flex items-center gap-1">
            <FontAwesomeIcon icon={faUser} />
            Staff
          </button>
        </div>
      </div>
    </div>
  )
}

function MetadataPanel({ meta }: { meta: NonNullable<(typeof questionMeta)[string]> }) {
  const [tab, setTab] = useState<'content' | 'ai'>('content')
  const [expandedSolution, setExpandedSolution] = useState(false)
  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b border-[#E5E7EB] dark:border-[#2D3148]">
        <button onClick={() => setTab('content')} className={`flex-1 py-2.5 text-xs font-medium text-center ${tab === 'content' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-[#6B7280]'}`}>เนื้อหา</button>
        <button onClick={() => setTab('ai')} className={`flex-1 py-2.5 text-xs font-medium text-center ${tab === 'ai' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-[#6B7280]'}`}>Clear AI</button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {tab === 'content' ? (
          <>
            <Section title="โจทย์">
              <p className="text-sm text-[#111827] dark:text-[#E5E7EB] leading-relaxed">{meta.question}</p>
            </Section>
            <Section title="ตัวเลือก">
              <div className="space-y-1.5">
                {meta.choices.map((c) => (
                  <div key={c.label} className={`text-xs px-3 py-2 rounded-lg border ${c.correct ? 'bg-emerald-50 border-emerald-300 text-emerald-700' : 'border-[#E5E7EB] dark:border-[#2D3148] text-[#374151] dark:text-[#9CA3AF]'}`}>
                    <span className="font-medium">{c.label}.</span> {c.text} {c.correct && '✓'}
                  </div>
                ))}
              </div>
            </Section>
            <Section title="คำใบ้">
              <p className="text-sm text-[#374151] dark:text-[#9CA3AF] leading-relaxed">{meta.hint}</p>
            </Section>
            <Section title="เฉลย">
              <div className={`text-sm text-[#374151] dark:text-[#9CA3AF] leading-relaxed whitespace-pre-wrap ${!expandedSolution ? 'line-clamp-3' : ''}`}>{meta.solution}</div>
              {!expandedSolution && <button onClick={() => setExpandedSolution(true)} className="text-xs text-indigo-600 mt-1">แสดงเพิ่มเติม ▾</button>}
            </Section>
            <Section title="ความรู้ที่เกี่ยวข้อง">
              <div className="flex flex-wrap gap-1.5">
                {meta.relatedTopics.map((t) => (
                  <span key={t.name} className="text-xs px-2.5 py-1 rounded-full bg-[#F3F4F6] dark:bg-[#2D3148] text-[#6B7280]">{t.name}</span>
                ))}
              </div>
            </Section>
          </>
        ) : (
          <div className="space-y-3">
            <button className="w-full text-xs px-3 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#2D3148] text-[#6B7280] hover:bg-[#F9FAFB] dark:hover:bg-[#2D3148] inline-flex items-center justify-center gap-1.5">
              <FontAwesomeIcon icon={faClipboardList} />
              Copy จากคำถามน้อง
            </button>
            <textarea className="w-full resize-none rounded-lg border border-[#E5E7EB] dark:border-[#2D3148] bg-white dark:bg-[#1A1D27] text-sm p-3 text-[#111827] dark:text-[#E5E7EB] placeholder:text-[#9CA3AF]" rows={3} placeholder="พิมพ์ prompt ให้ AI..." />
            <button className="w-full bg-indigo-600 text-white text-sm py-2 rounded-lg hover:bg-indigo-700">ถาม AI</button>
          </div>
        )}
      </div>
    </div>
  )
}

function MetadataEmptyState() {
  return (
    <div className="flex h-full items-center justify-center p-6 text-center text-[#9CA3AF]">
      <div>
        <div className="mb-2 text-3xl">
          <FontAwesomeIcon icon={faClipboardList} />
        </div>
        <div className="text-sm">เลือกคำถามเพื่อดูเนื้อหา</div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <div><div className="text-xs font-semibold text-[#6B7280] mb-1.5">{title}</div>{children}</div>
}
