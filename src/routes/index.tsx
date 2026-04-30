import { motion } from 'framer-motion'
import { Anchor, Shield, Clock, Ship, Palmtree, Compass, Navigation } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => { emblaApi.scrollNext() }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  return (
    <div>
      {/* Cinematic Hero */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-ocean-abyss overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-abyss/80 via-ocean-deep/70 to-ocean-abyss/95 z-10" />
          <img src="https://images.unsplash.com/photo-1544558231-50e50cedeb3c?q=80&w=2070" className="w-full h-full object-cover scale-105 animate-[pulse_24s_ease-in-out_infinite]" alt="Oceano" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl tracking-tight leading-tight"
          >
            A Travessia Mais<br/>Segura do Rio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-sand-light font-light mb-12 max-w-3xl leading-relaxed"
          >
            Sinta a brisa oceânica saindo do Centro de Mangaratiba diretamente para os cenários paradisíacos da Ilha Grande.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            href="#reserva" className="btn-primary"
          >
            PLANEJAR ROTA <Navigation className="inline-block w-4 h-4 ml-2 mb-1" />
          </motion.a>
        </div>

        <div className="absolute bottom-[-2px] w-full overflow-hidden leading-none z-30">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#fafbfc" />
          </svg>
        </div>
      </section>

      {/* Services Sub-hero */}
      <section className="py-20 px-6 bg-[color:var(--white-soft)] bg-white">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-100px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8 relative mt-[-100px] z-40">
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="glass-card bg-white p-10 rounded-2xl service-card group cursor-default shadow-xl">
              <div className="bg-ocean-surface/10 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:bg-sand-gold/20 transition-all duration-300">
                <Palmtree className="w-10 h-10 text-ocean-deep group-hover:text-coral-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ocean-abyss mb-4">Ilha Grande</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">Travessia direta para o coração turístico do Rio. 40 minutos nas águas mais calmas da Baía de Sepetiba.</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div variants={fadeUp} className="glass-card bg-white p-10 rounded-2xl service-card group cursor-default shadow-xl">
              <div className="bg-ocean-surface/10 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:bg-sand-gold/20 transition-all duration-300">
                <Anchor className="w-10 h-10 text-ocean-deep group-hover:text-coral-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ocean-abyss mb-4">Itacuruçá</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">Passeios paradisíacos pelas ilhas da Costa Verde. Mar cristalino, diversão e natureza intocada que impressiona.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="glass-card bg-white p-10 rounded-2xl service-card group cursor-default shadow-xl">
              <div className="bg-ocean-surface/10 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:bg-sand-gold/20 transition-all duration-300">
                <Compass className="w-10 h-10 text-ocean-deep group-hover:text-coral-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ocean-abyss mb-4">Escunas Exclusivas</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">Fretamentos sob medida, translados VIP e rotas turísticas exclusivas na deslumbrante região de Mangaratiba.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="relative py-32 px-6 bg-ocean-abyss text-white">
        <div className="absolute top-[-2px] w-full overflow-hidden leading-none rotate-180 z-10 scale-x-[-1]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#ffffff" />
          </svg>
        </div>
        
        <div className="container mx-auto pt-16 relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-lg">Por que a Ocean Express?</h2>
            <p className="text-ocean-surface font-semibold uppercase tracking-[0.2em] text-sm">O Padrão Ouro da Navegação Costeira</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <motion.div variants={fadeUp} className="text-center group">
              <Shield className="w-16 h-16 mx-auto mb-6 text-sand-gold group-hover:-translate-y-3 transition-transform duration-500 drop-shadow-md" />
              <h4 className="text-2xl font-serif font-bold mb-3">Segurança Total</h4>
              <p className="text-ocean-foam opacity-80 font-light">Embarcações rigorosamente reguladas pela Marinha do Brasil.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center group">
              <Clock className="w-16 h-16 mx-auto mb-6 text-sand-gold group-hover:-translate-y-3 transition-transform duration-500 drop-shadow-md" />
              <h4 className="text-2xl font-serif font-bold mb-3">Pontualidade</h4>
              <p className="text-ocean-foam opacity-80 font-light">Cronograma imbatível para suas conexões e traslados.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center group">
              <Ship className="w-16 h-16 mx-auto mb-6 text-sand-gold group-hover:-translate-y-3 transition-transform duration-500 drop-shadow-md" />
              <h4 className="text-2xl font-serif font-bold mb-3">Conforto Executivo</h4>
              <p className="text-ocean-foam opacity-80 font-light">Poltronas premium, ventilação avançada e som ambiente.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center group">
              <Navigation className="w-16 h-16 mx-auto mb-6 text-sand-gold group-hover:-translate-y-3 transition-transform duration-500 drop-shadow-md" />
              <h4 className="text-2xl font-serif font-bold mb-3">Linhas Expressas</h4>
              <p className="text-ocean-foam opacity-80 font-light">Deslocamento veloz cruzando os caminhos mais limpos.</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-[-2px] w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#e8f4f8" />
          </svg>
        </div>
      </section>

      {/* Embla Testimonials Section */}
      <section className="py-24 px-6 bg-ocean-foam">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep">Experiências Inesquecíveis</h2>
          </motion.div>
          
          <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {/* Slide 1 */}
              <div className="flex-[0_0_100%] min-w-0 px-4 md:px-12">
                <div className="bg-white p-12 rounded-3xl shadow-xl text-center border border-ocean-surface/10">
                  <div className="text-coral-accent text-7xl font-serif mb-6 leading-none h-10">"</div>
                  <p className="text-2xl md:text-3xl italic text-ocean-navy mb-8 font-serif leading-relaxed px-4">
                    Sensacional! As outras lanchas batiam muito. A embarcação da Ocean Express rasgou o mar de forma super suave. Minha família amou do início ao fim!
                  </p>
                  <h5 className="font-bold text-gray-800 tracking-wide">— Roberto Medeiros, SP</h5>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="flex-[0_0_100%] min-w-0 px-4 md:px-12">
                <div className="bg-white p-12 rounded-3xl shadow-xl text-center border border-ocean-surface/10">
                  <div className="text-coral-accent text-7xl font-serif mb-6 leading-none h-10">"</div>
                  <p className="text-2xl md:text-3xl italic text-ocean-navy mb-8 font-serif leading-relaxed px-4">
                    Chegamos na Ilha Grande extremamente rápido e em segurança. Pontualide britânica na saída do porto. O staff atencioso torna tudo indescritível.
                  </p>
                  <h5 className="font-bold text-gray-800 tracking-wide">— Carolina Souza, RJ</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="reserva" className="py-32 px-6 bg-white text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="max-w-3xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-ocean-abyss">O mar não espera, nem a sua aventura.</h2>
          <p className="text-xl text-gray-600 font-light mb-12">Tire suas dúvidas ou reserve seu assento de forma imediata conversando com nossa equipe.</p>
          <a
             href="https://wa.me/5521973521017?text=Olá! Vim pelo site incrível e quero saber disponibilidade para Ilha Grande"
             className="btn-primary"
          >
             FALAR NO WHATSAPP AGORA
          </a>
        </motion.div>
      </section>
    </div>
  )
}
