import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Anchor, MapPin, Phone, Mail, MessageCircle, Menu, X } from 'lucide-react'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Âncora Tour',
  description: 'Receptivo local em Mangaratiba para guias e agências de turismo. Seu grupo chega. A gente resolve.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cais, Centro',
    addressLocality: 'Mangaratiba',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
  telephone: '+5521973521017',
  email: 'therezaoliveirasantana@gmail.com',
  url: 'https://oceanexpressnavegacao.com.br',
  priceRange: '$$',
}

export default function RootLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white relative overflow-x-hidden">
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>

      {/* Navbar Glass */}
      <header className="fixed top-0 w-full z-[100] backdrop-blur-md bg-ocean-abyss/90 border-b border-white/5 shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
            <Anchor className="w-7 h-7 md:w-8 md:h-8 text-[#8B0000] group-hover:rotate-12 transition-transform duration-500" strokeWidth={1.8} />
            <div className="flex flex-col leading-none">
              <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white font-sans">Âncora Tour</h1>
              <span className="text-[10px] tracking-[0.18em] uppercase text-gray-400 hidden md:block">Receptivo · Mangaratiba</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 items-center">
            <Link to="/" className="text-gray-300 hover:text-white text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors">Início</Link>
            <Link to="/contato" className="text-gray-300 hover:text-white text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors">Contato</Link>
            <a
              href="https://wa.me/5521973521017?text=Olá! Quero ser parceiro da Âncora Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ancora text-[12px] px-6 py-3"
            >
              QUERO SER PARCEIRO
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 w-full bg-ocean-abyss border-b border-white/10 flex flex-col py-6 px-8 gap-8 shadow-xl overflow-y-auto max-h-[80vh]">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-gray-200 hover:text-white text-[15px] font-semibold uppercase tracking-[0.15em] transition-colors w-full border-b border-white/5 pb-4">Início</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/contato" className="text-gray-200 hover:text-white text-[15px] font-semibold uppercase tracking-[0.15em] transition-colors w-full border-b border-white/5 pb-4">Contato</Link>
            <a
              href="https://wa.me/5521973521017?text=Olá! Quero ser parceiro da Âncora Tour."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-ancora text-center text-[14px]"
            >
              QUERO SER PARCEIRO
            </a>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Âncora Tour */}
      <footer className="bg-ocean-abyss text-white pt-20 pb-10 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8B0000]/50 to-transparent"></div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          {/* Col 1 — Brand */}
          <div className="md:pr-8">
            <div className="flex items-center gap-3 mb-5">
              <Anchor className="w-8 h-8 text-[#8B0000]" strokeWidth={1.8} />
              <h2 className="text-2xl font-bold text-white font-sans">Âncora Tour</h2>
            </div>
            <p className="text-gray-400 text-[14px] leading-loose font-light italic mb-4">
              "Seu grupo chega. A gente resolve."
            </p>
            <p className="text-gray-500 text-[13px] leading-relaxed font-light">
              Receptivo local em Mangaratiba para guias e agências de turismo. Operamos para o trade turístico com segurança, agilidade e parceiros homologados.
            </p>
          </div>

          {/* Col 2 — Serviços */}
          <div>
            <h3 className="font-bold text-[13px] mb-6 tracking-[0.2em] uppercase text-[#8B0000] font-sans">Serviços B2B</h3>
            <ul className="space-y-4 text-gray-400 text-[14px] font-light">
              <li className="hover:text-white transition-colors cursor-default">🚍 Selo de Entrada de Veículo</li>
              <li className="hover:text-white transition-colors cursor-default">🚨 Logística Sem Multa</li>
              <li className="hover:text-white transition-colors cursor-default">🤝 Rede de Parceiros Homologados</li>
              <li className="hover:text-white transition-colors cursor-default">🌴 Produtos Turísticos Locais</li>
              <li className="hover:text-white transition-colors cursor-default">📲 Suporte Imediato</li>
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <h3 className="font-bold text-[13px] mb-6 tracking-[0.2em] uppercase text-[#8B0000] font-sans">Contato Direto</h3>
            <ul className="space-y-5 text-gray-400 text-[14px] font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 text-[#8B0000] mt-0.5" strokeWidth={1.5} />
                <span>Mangaratiba — RJ<br /><span className="text-gray-500">Atendimento exclusivo ao trade</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8B0000]" strokeWidth={1.5} />
                <a href="tel:+5521973521017" className="hover:text-white transition-colors">+55 21 97352-1017</a>
              </li>
              <li className="flex items-center gap-3 break-all">
                <Mail className="w-4 h-4 shrink-0 text-[#8B0000]" strokeWidth={1.5} />
                <a href="mailto:therezaoliveirasantana@gmail.com" className="hover:text-white transition-colors">therezaoliveirasantana@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-[11px] text-gray-600 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Âncora Tour — Receptivo Local em Mangaratiba. Todos os direitos reservados.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5521973521017?text=Olá! Quero ser parceiro da Âncora Tour."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] transition-all hover:scale-110 hover:-translate-y-2 z-50 flex items-center justify-center"
        aria-label="WhatsApp — Falar com o Receptivo"
      >
        <MessageCircle className="w-7 h-7 md:w-9 md:h-9" strokeWidth={2} />
      </a>
    </div>
  )
}
