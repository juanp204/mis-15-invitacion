import Image from "next/image"
import { Countdown } from "@/components/countdown"
import { WhatsappConfirm } from "@/components/whatsapp-confirm"
import { FloralDivider } from "@/components/floral-divider"

const HOST_NAME = "Melissa"
const EVENT_DATE_ISO = "2026-06-14T18:00:00-05:00" // 14 Junio 2026, 6:00 PM (Colombia)
const EVENT_LOCATION = "Hacienda La Esperanza"
const WHATSAPP_PHONE = "573015181018" // +57 301 518 1018

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={`text-primary/50 ${className}`}
      aria-hidden="true"
    >
      <path d="M10 10 Q 40 10 50 30 Q 55 50 35 55 Q 15 50 10 30 Z" fill="currentColor" opacity="0.18" />
      <path d="M10 10 Q 60 10 80 30" />
      <path d="M10 10 Q 10 60 30 80" />
      <circle cx="50" cy="30" r="2" fill="currentColor" />
      <circle cx="30" cy="50" r="2" fill="currentColor" />
      <path d="M70 25 Q 75 30 70 35 Q 65 30 70 25 Z" fill="currentColor" opacity="0.4" />
      <path d="M25 70 Q 30 75 35 70 Q 30 65 25 70 Z" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export default function InvitationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        {/* Fondo suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-background to-background" aria-hidden="true" />

        {/* Ornamentos en esquinas */}
        <CornerOrnament className="absolute top-4 left-4 h-20 w-20 sm:h-28 sm:w-28" />
        <CornerOrnament className="absolute top-4 right-4 h-20 w-20 sm:h-28 sm:w-28 -scale-x-100" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-20 pb-12 text-center sm:pt-24">
          <p className="font-display text-xs sm:text-sm tracking-[0.5em] uppercase text-primary/80">
            Mis Quince Años
          </p>

          <div className="mt-6 mb-4">
            <span className="font-script text-7xl sm:text-9xl text-primary leading-none">
              {HOST_NAME}
            </span>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-muted-foreground max-w-md text-balance leading-relaxed">
            Hay momentos en la vida que merecen celebrarse en grande, y este es uno de ellos.
          </p>

          <FloralDivider className="mt-8" />

          {/* Retrato */}
          <div className="relative mt-10 w-full max-w-sm">
            {/* Marco decorativo */}
            <div className="absolute -inset-3 rounded-[2rem] border border-primary/30" aria-hidden="true" />
            <div className="absolute -inset-1 rounded-[1.6rem] border border-accent/40" aria-hidden="true" />

            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem] shadow-xl shadow-primary/20">
              <Image
                src="/melissa-portrait.png"
                alt="Vestido de XV años color lila"
                fill
                priority
                sizes="(max-width: 640px) 90vw, 380px"
                className="object-cover"
              />
              {/* Velo lila sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </div>

          <p className="mt-10 font-display text-2xl sm:text-3xl text-foreground tracking-wide">
            14 <span className="text-primary">·</span> Junio <span className="text-primary">·</span> 2026
          </p>
        </div>
      </section>

      {/* ===================== CARTA ===================== */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="relative rounded-2xl border border-primary/20 bg-card/80 px-6 py-12 sm:px-12 sm:py-16 shadow-lg shadow-primary/5">
            <CornerOrnament className="absolute -top-6 -left-6 h-16 w-16 hidden sm:block" />
            <CornerOrnament className="absolute -bottom-6 -right-6 h-16 w-16 -scale-100 hidden sm:block" />

            <p className="text-center text-xs uppercase tracking-[0.4em] text-primary/80">
              Carta de Invitación
            </p>

            <h2 className="mt-4 text-center font-display text-3xl sm:text-4xl text-foreground text-balance">
              Para ti, que eres parte de mi historia
            </h2>

            <FloralDivider className="my-8" />

            <div className="space-y-5 font-serif text-lg leading-relaxed text-foreground/90">
              <p className="first-letter:font-display first-letter:text-5xl first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                Hoy quiero invitarte a uno de los días más especiales de mi vida: la celebración
                de mis Quince Años, ese momento en el que dejo atrás la niñez para abrirle la
                puerta a una nueva etapa llena de sueños, ilusiones y promesas.
              </p>

              <p>
                Quiero que este recuerdo sea inolvidable, y por eso no podía imaginarlo
                sin ti. Tu presencia es el regalo más bonito que podría pedir, porque
                las personas importantes de mi vida son las que hacen que esta noche
                tenga sentido.
              </p>

              <p>
                Te espero con el corazón lleno de alegría, lista para bailar, reír y
                escribir juntos un capítulo que recordaremos para siempre.
              </p>

              <p className="text-right pt-4">
                <span className="font-script text-4xl text-primary">Con cariño, {HOST_NAME}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== COUNTDOWN ===================== */}
      <section className="relative overflow-hidden px-6 py-16 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Falta poco</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-foreground text-balance">
            Cuenta regresiva para mi gran noche
          </h2>
          <p className="mt-3 font-serif italic text-muted-foreground">
            Sábado 14 de Junio · 6:00 PM
          </p>

          <div className="mt-10">
            <Countdown targetDate={EVENT_DATE_ISO} />
          </div>
        </div>
      </section>

      {/* ===================== DETALLES ===================== */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Detalles del Evento</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-foreground">
              ¿Cuándo y dónde?
            </h2>
            <FloralDivider className="my-8" />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <DetailCard
              label="Fecha"
              title="14 de Junio"
              subtitle="Sábado · 2026"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M8 3v4M16 3v4M3 10h18" />
                  <circle cx="12" cy="15" r="1.5" fill="currentColor" />
                </svg>
              }
            />
            <DetailCard
              label="Hora"
              title="6:00 PM"
              subtitle="Recepción a las 5:30 PM"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              }
            />
            <DetailCard
              label="Lugar"
              title={EVENT_LOCATION}
              subtitle="Te esperamos"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                  <path d="M12 22s7-7.58 7-13a7 7 0 0 0-14 0c0 5.42 7 13 7 13z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ===================== LLUVIA DE SOBRES ===================== */}
      <section className="px-6 py-16 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Acerca del Regalo</p>

          <div className="mt-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-shimmer rounded-full bg-primary/20 blur-2xl" aria-hidden="true" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-card shadow-lg shadow-primary/10 animate-float-slow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-11 w-11 text-primary"
                  aria-hidden="true"
                >
                  <rect x="3" y="6" width="18" height="13" rx="1.5" />
                  <path d="M3 7l9 7 9-7" />
                  <path d="M12 14l-2 3M12 14l2 3" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="mt-8 font-display text-3xl sm:text-4xl text-foreground">
            Lluvia de Sobres
          </h2>

          <p className="mt-5 font-serif text-lg leading-relaxed text-foreground/80 text-pretty">
            Si deseas regalarme algo, lo mejor es un sobre con tu cariño dentro.
            Será de gran ayuda para seguir construyendo mis sueños, y cada gesto
            lo guardaré en el corazón.
          </p>

          <p className="mt-6 font-script text-3xl text-primary">¡Gracias de corazón!</p>
        </div>
      </section>

      {/* ===================== CONFIRMACIÓN ===================== */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-b from-card to-secondary/40 px-6 py-12 sm:px-12 sm:py-16 text-center shadow-xl shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Confirma tu Asistencia</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-foreground text-balance">
              Hazme saber que estarás ahí
            </h2>
            <p className="mt-4 font-serif italic text-muted-foreground max-w-md mx-auto text-balance">
              Escribe tu nombre y al tocar el botón se abrirá WhatsApp con un
              mensaje listo para enviarme.
            </p>

            <FloralDivider className="my-8" />

            <WhatsappConfirm phone={WHATSAPP_PHONE} hostName={HOST_NAME} />
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="px-6 py-16 text-center">
        <FloralDivider className="mb-8" />
        <p className="font-script text-5xl sm:text-6xl text-primary">Te espero</p>
        <p className="mt-4 font-display tracking-[0.4em] text-sm uppercase text-muted-foreground">
          {HOST_NAME} · XV Años
        </p>
        <p className="mt-2 font-serif italic text-sm text-muted-foreground/80">
          14 · 06 · 2026
        </p>
      </footer>
    </main>
  )
}

function DetailCard({
  label,
  title,
  subtitle,
  icon,
}: {
  label: string
  title: string
  subtitle: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-primary/20 bg-card/70 px-6 py-8 text-center shadow-sm transition-shadow hover:shadow-md hover:shadow-primary/10">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-secondary/50 text-primary">
        {icon}
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-display text-xl text-foreground">{title}</p>
      <p className="mt-1 font-serif italic text-sm text-muted-foreground">{subtitle}</p>
    </div>
  )
}
