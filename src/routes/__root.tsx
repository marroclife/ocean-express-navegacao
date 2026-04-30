import { Outlet, Link } from 'react-router-dom'
import { Ship, MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ocean Express Navegação',
  description: 'Travessias seguras de Mangaratiba para Ilha Grande',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Centro',
    addressLocality: 'Mangaratiba',
    addressRegion: 'RJ',
    addressCountry: 'BR',
  },
  telephone: '+5521973521017',
  url: 'https://oceanexpressnavegacao.com.br',
  priceRange: '$$',
}

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>

      {/* Navbar Glass */}
      <header className="fixed top-0 w-full z-[100] glass-card border-t-0 border-r-0 border-l-0 border-b border-white/10 shadow-sm transition-all duration-300 bg-ocean-abyss/80">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-white group">
            <Ship className="w-8 h-8 text-sand-gold group-hover:scale-110 transition-transform" />
            <h1 className="text-xl font-serif font-bold tracking-wide">Ocean Express</h1>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-200 hover:text-sand-gold text-sm font-bold uppercase tracking-widest transition-colors">Início</Link>
            <Link to="/siloses/travessia-ilha-grande" className="text-gray-200 hover:text-sand-gold text-sm font-bold uppercase tracking-widest transition-colors">Ilha Grande</Link>
            <Link to="/sobre" className="text-gray-200 hover:text-sand-gold text-sm font-bold uppercase tracking-widest transition-colors">Sobre</Link>
            <Link to="/galeria" className="text-gray-200 hover:text-sand-gold text-sm font-bold uppercase tracking-widest transition-colors">Galeria</Link>
            <Link to="/blog" className="text-gray-200 hover:text-sand-gold text-sm font-bold uppercase tracking-widest transition-colors">Blog</Link>
            <Link to="/contato" className="text-gray-200 hover:text-sand-gold text-sm font-bold uppercase tracking-widest transition-colors">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Main Block takes over after fixed top */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Premium Multi-column */}
      <footer className="bg-ocean-abyss text-white pt-20 pb-8 px-6 border-t-[8px] border-ocean-deep">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-ocean-surface/20 pb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Ship className="w-8 h-8 text-sand-gold" />
              <h2 className="text-2xl font-serif font-bold">Ocean Express</h2>
            </div>
            <p className="text-ocean-foam opacity-75 text-sm leading-relaxed max-w-xs font-light">
              A travessia marítima de alto luxo e segurança operando do continente diretamente para os encantos da Costa Verde Brasileira.
            </p>
          </div>
          {/* Col 2 */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-widest uppercase text-sand-gold">Serviços</h3>
            <ul className="space-y-4 text-ocean-foam opacity-80 text-sm">
              <li><Link to="/siloses/travessia-ilha-grande" className="hover:text-white transition-colors">Ilha Grande Express</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Passeios Locais</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Itacuruçá</Link></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-widest uppercase text-sand-gold">Contato</h3>
            <ul className="space-y-4 text-ocean-foam opacity-80 text-sm">
              <li className="flex items-start gap-4"><MapPin className="w-5 h-5 shrink-0 text-ocean-surface" /> <span className="font-light">Centro, Mangaratiba — RJ</span></li>
              <li className="flex items-center gap-4"><Phone className="w-5 h-5 text-ocean-surface" /> <span className="font-light">+55 21 97352-1017</span></li>
              <li className="flex items-center gap-4"><Mail className="w-5 h-5 text-ocean-surface" /> <span className="font-light">sac@oceanexpress.com</span></li>
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-widest uppercase text-sand-gold">Redes</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-ocean-deep p-3 rounded-full hover:bg-coral-accent transition-colors"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"/></svg></a>
              <a href="#" className="bg-ocean-deep p-3 rounded-full hover:bg-coral-accent transition-colors"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.598 0 0 .598 0 1.326v21.348C0 23.402.598 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.598 1.323-1.326V1.326C24 .598 23.402 0 22.675 0z"/></svg></a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-ocean-surface uppercase tracking-widest opacity-60">&copy; 2026 Ocean Express Navegação. Todos os direitos reservados.</p>
      </footer>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/5521973521017?text=Olá! Quero saber mais sobre as travessias"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] transition-all hover:scale-110 hover:-translate-y-2 z-50 flex items-center justify-center glow-effect"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  )
}
