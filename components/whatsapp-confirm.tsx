"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Props = {
  phone: string // sin +, ni espacios
  hostName: string
}

export function WhatsappConfirm({ phone, hostName }: Props) {
  const [name, setName] = useState("")

  const buildMessage = (guestName: string) => {
    const clean = guestName.trim() || "un invitado especial"
    return (
      `Hola ${hostName}! 💌 Soy ${clean}. ` +
      `Con muchísima alegría confirmo mi asistencia a tu fiesta de XV Años. ` +
      `Gracias por incluirme en una noche tan especial — ¡no me la pierdo por nada del mundo! 🥂✨`
    )
  }

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(buildMessage(name))}`

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-left">
        <label
          htmlFor="guest-name"
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          Tu nombre
        </label>
        <input
          id="guest-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe tu nombre completo"
          className="h-12 rounded-md border border-primary/30 bg-card/80 px-4 font-serif text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <Button
        asChild
        size="lg"
        className="h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 text-base tracking-wide"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Confirmar asistencia por WhatsApp a ${hostName}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2 h-5 w-5"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.555-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l.241.383-1 3.65 3.733-.992zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          Confirmar por WhatsApp
        </a>
      </Button>

      <p className="text-xs text-muted-foreground/80 text-center text-balance">
        Al tocar el botón se abrirá WhatsApp con un mensaje listo para enviar a {hostName}.
      </p>
    </div>
  )
}
