"use client"

import { useEffect, useState } from "react"
import { Menu, X, Download } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiência" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#education", label: "Formação" },
  { href: "#contact", label: "Contato" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo principal
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border/70 bg-background/70 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Principal">
          <a href="#" className="group flex items-center gap-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary font-mono text-sm font-semibold text-primary">
              CS
            </span>
            <span className="text-sm font-semibold tracking-tight">Cristiano Santos</span>
          </a>

          {/* Links Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* CORREÇÃO DO BOTÃO: Começa com hidden (escondido) e ganha inline-flex em telas grandes (md:) */}
            <a
              href="/documentos/Currículo - Cristiano Pereira Santos.pdf"
              download="cristiano-pereira-santos-resume.pdf"
              className="group hidden items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-8px_var(--primary)] transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background md:inline-flex"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Currículo
            </a>

            {/* Menu Hambúrguer */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Menu Mobile */}
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      
                      // Executa a rolagem após fechar o menu com um pequeno atraso (timeout)
                      setTimeout(() => {
                        const target = document.querySelector(link.href)
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                      }, 250)
                    }}
                    className="rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Botão de Currículo interno do Menu Hambúrguer */}
                <a
                  href="/documentos/Currículo - Cristiano Pereira Santos.pdf"
                  download="cristiano-pereira-santos-resume.pdf"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-medium text-primary-foreground shadow-sm"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Baixar Currículo
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  )
}
