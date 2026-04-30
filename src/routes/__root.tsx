import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Ship, MapPin, Phone, Mail, MessageCircle, Menu, X } from 'lucide-react'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ocean Express Navegação',
  description: 'A travessia marítima de alto luxo de Mangaratiba para Ilha Grande',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cais, Centro',
    addressLocality: 'Mangaratiba',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
  telephone: '+5521973521017',
  url: 'https://oceanexpressnavegacao.com.br',
  priceRange: '$$$',
}

export default function RootLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white relative overflow-x-hidden">
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>

      {/* Navbar Glass */}
      <header className="fixed top-0 w-full z-[100] backdrop-blur-md bg-ocean-abyss/85 border-b border-white/5 shadow-md">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
            <Ship className="w-7 h-7 md:w-8 md:h-8 text-sand-gold group-hover:rotate-12 transition-transform duration-500" strokeWidth={1.5} />
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wide text-sand-gold drop-shadow-md">Ocean Express</h1>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10">
            <Link to="/" className="text-sand-gold hover:text-white text-[13px] font-bold uppercase tracking-[0.15em] transition-colors drop-shadow-sm">Início</Link>
            <Link to="/siloses/travessia-ilha-grande" className="text-sand-gold hover:text-white text-[13px] font-bold uppercase tracking-[0.15em] transition-colors drop-shadow-sm">Ilha Grande</Link>
            <Link to="/sobre" className="text-sand-gold hover:text-white text-[13px] font-bold uppercase tracking-[0.15em] transition-colors drop-shadow-sm">Sobre</Link>
            <Link to="/galeria" className="text-sand-gold hover:text-white text-[13px] font-bold uppercase tracking-[0.15em] transition-colors drop-shadow-sm">Galeria</Link>
            <Link to="/blog" className="text-sand-gold hover:text-white text-[13px] font-bold uppercase tracking-[0.15em] transition-colors drop-shadow-sm">Blog</Link>
            <Link to="/contato" className="text-sand-gold hover:text-white text-[13px] font-bold uppercase tracking-[0.15em] transition-colors drop-shadow-sm">Contato</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-sand-gold p-2 active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 w-full bg-ocean-abyss border-b border-ocean-surface/20 flex flex-col py-6 px-8 gap-8 shadow-xl overflow-y-auto max-h-[80vh]">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-sand-gold hover:text-white text-[15px] font-bold uppercase tracking-[0.15em] transition-colors w-full border-b border-white/5 pb-4">Início</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/siloses/travessia-ilha-grande" className="text-sand-gold hover:text-white text-[15px] font-bold uppercase tracking-[0.15em] transition-colors w-full border-b border-white/5 pb-4">Ilha Grande Express</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/sobre" className="text-sand-gold hover:text-white text-[15px] font-bold uppercase tracking-[0.15em] transition-colors w-full border-b border-white/5 pb-4">Sobre Nós</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/galeria" className="text-sand-gold hover:text-white text-[15px] font-bold uppercase tracking-[0.15em] transition-colors w-full border-b border-white/5 pb-4">Galeria Embarcações</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/blog" className="text-sand-gold hover:text-white text-[15px] font-bold uppercase tracking-[0.15em] transition-colors w-full border-b border-white/5 pb-4">Blog / Guias</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/contato" className="text-sand-gold hover:text-white text-[15px] font-bold uppercase tracking-[0.15em] transition-colors w-full">Atendimento e Contato</Link>
          </nav>
        )}
      </header>

      {/* Main Block takes over after fixed top */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Premium Multi-column */}
      <footer className="bg-ocean-abyss text-white pt-24 pb-12 md:pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sand-gold/30 to-transparent"></div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12 border-b border-ocean-surface/20 pb-12">
          {/* Col 1 */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <Ship className="w-8 h-8 lg:w-10 lg:h-10 text-sand-gold" strokeWidth={1.5} />
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white">Ocean Express</h2>
            </div>
            <p className="text-gray-300 text-[14px] lg:text-[15px] leading-loose font-light">
              A travessia marítima de alto luxo e segurança operando do continente diretamente para os encantos da Costa Verde Brasileira.
            </p>
          </div>
          {/* Col 2 */}
          <div>
            <h3 className="font-bold text-[14px] lg:text-[15px] mb-6 lg:mb-8 tracking-[0.2em] uppercase text-sand-gold font-serif">Serviços</h3>
            <ul className="space-y-4 lg:space-y-5 text-gray-300 text-[14px] lg:text-[15px] font-light">
              <li><Link to="/siloses/travessia-ilha-grande" className="hover:text-sand-gold transition-colors">Ilha Grande Express</Link></li>
              <li><Link to="/" className="hover:text-sand-gold transition-colors">Passeios Locais</Link></li>
              <li><Link to="/" className="hover:text-sand-gold transition-colors">Fretamento VIP</Link></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h3 className="font-bold text-[14px] lg:text-[15px] mb-6 lg:mb-8 tracking-[0.2em] uppercase text-sand-gold font-serif">Contato</h3>
            <ul className="space-y-5 lg:space-y-6 text-gray-300 text-[14px] lg:text-[15px] font-light">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-ocean-surface mt-1" strokeWidth={1.5} /> 
                <span className="leading-relaxed">Base Cais, Centro<br/>Mangaratiba — RJ</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-ocean-surface" strokeWidth={1.5} /> 
                <span>+55 21 97352-1017</span>
              </li>
              <li className="flex items-center gap-4 break-all">
                <Mail className="w-5 h-5 shrink-0 text-ocean-surface" strokeWidth={1.5} /> 
                <span>sac@oceanexpress.com</span>
              </li>
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <h3 className="font-bold text-[14px] lg:text-[15px] mb-6 lg:mb-8 tracking-[0.2em] uppercase text-sand-gold font-serif">Redes</h3>
            <div className="flex gap-4 lg:gap-5">
              <a href="#" className="bg-ocean-deep p-3 lg:p-4 rounded-full hover:bg-coral-accent transition-colors hover:scale-110 duration-300 shadow-md">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"/></svg>
              </a>
              <a href="#" className="bg-ocean-deep p-3 lg:p-4 rounded-full hover:bg-coral-accent transition-colors hover:scale-110 duration-300 shadow-md">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.598 0 0 .598 0 1.326v21.348C0 23.402.598 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.598 1.323-1.326V1.326C24 .598 23.402 0 22.675 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-[10px] lg:text-[11px] text-gray-500 uppercase tracking-[0.2em] lg:tracking-[0.25em]">&copy; {new Date().getFullYear()} Ocean Express Navegação. Projetado ao mar com perfeição.</p>
      </footer>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/5521973521017?text=Olá! Quero saber mais sobre as travessias"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] transition-all hover:scale-110 hover:-translate-y-2 z-50 flex items-center justify-center glow-effect"
        aria-label="Atendimento WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-9 md:h-9" strokeWidth={2} />
      </a>
    </div>
  )
}
