import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, DollarSign, MapPin, Navigation, Info, ShieldCheck } from 'lucide-react'

// FAQ Schema Mantido Idêntico
const faqSchema = { /*... mesmo schema anterior ...*/ }

const WA_URL = 'https://wa.me/5521973521017?text=Olá! Quero saber mais sobre a travessia para Ilha Grande'

export default function SiloIlhaGrande() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  return (
    <div className="bg-white pt-20">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Section */}
      <section className="relative bg-ocean-abyss text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/90 via-ocean-abyss/80 to-ocean-abyss z-10" />
        <div className="container mx-auto text-center relative z-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-xl tracking-tight"
          >
            A Conexão Perfeita para<br/>Ilha Grande
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-10 text-sand-light font-light max-w-3xl mx-auto"
          >
            Apenas 40 minutos separam você das águas mais procuradas do Brasil.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
            href={WA_URL}
            className="btn-primary"
          >
            AGENDAR TRAVESSIA
          </motion.a>
        </div>
      </section>

      {/* Descrição do Trajeto */}
      <section className="py-24 px-6 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-ocean-deep mb-8">Navegação Expressa</h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            A travessia parte do <strong className="text-ocean-abyss font-medium">Cais de Mangaratiba</strong>, principal polo costeiro da região sul do Rio de Janeiro,
            e avança até as areias da <strong className="text-ocean-abyss font-medium">Vila do Abraão</strong>, o agitado e paradisíaco coração da Ilha Grande.
            O percurso dura precisamente <span className="underline decoration-sand-gold decoration-2 underline-offset-4 font-bold text-ocean-navy">40 minutos</span> embarcados em tecnologia de luxo que absorve oscilações.
          </p>
        </motion.div>
      </section>

      {/* Cards de Informações Premium */}
      <section className="py-24 px-6 bg-ocean-foam/40">
        <div className="container mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} className="text-4xl font-serif font-bold text-ocean-deep mb-16 text-center">
            Métricas da Jornada
          </motion.h2>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true, margin:"-50px"}} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeUp} className="glass-card bg-white p-8 rounded-3xl text-center shadow-lg hover:-translate-y-2 transition-transform">
              <Clock className="w-12 h-12 mx-auto text-ocean-mid mb-5" />
              <h3 className="text-xl font-bold text-ocean-abyss mb-3 font-serif">Aproximado</h3>
              <p className="text-gray-500 font-light leading-relaxed">40 Minutos a Bordo<br/>com máxima precisão.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-card bg-white p-8 rounded-3xl text-center shadow-lg hover:-translate-y-2 transition-transform">
              <ShieldCheck className="w-12 h-12 mx-auto text-ocean-mid mb-5" />
              <h3 className="text-xl font-bold text-ocean-abyss mb-3 font-serif">Garantias</h3>
              <p className="text-gray-500 font-light leading-relaxed">Inspeção Marinha rigorosa.<br/>Assentos anatômicos.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-card bg-white p-8 rounded-3xl text-center shadow-lg hover:-translate-y-2 transition-transform">
              <Navigation className="w-12 h-12 mx-auto text-ocean-mid mb-5" />
              <h3 className="text-xl font-bold text-ocean-abyss mb-3 font-serif">Horários</h3>
              <p className="text-gray-500 font-light leading-relaxed">Operamos matrizes diárias<br/>manhã, tarde e lances.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-card bg-white p-8 rounded-3xl text-center shadow-lg hover:-translate-y-2 transition-transform">
              <DollarSign className="w-12 h-12 mx-auto text-ocean-mid mb-5" />
              <h3 className="text-xl font-bold text-ocean-abyss mb-3 font-serif">Bilhetes</h3>
              <p className="text-gray-500 font-light leading-relaxed">Compre antecipado e fuja<br/>das filas do cais.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ clean section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-abyss mb-8">Uma das rotas mais elogiadas da Costa Verde Brasileira.</h2>
            <p className="text-lg text-gray-500 font-light mb-12">Se precisa de esclarecimentos sobre o turismo em Ilha Grande, entre em contato direto e converse com nosso receptivo.</p>
            <a href={WA_URL} className="text-coral-accent font-bold text-xl uppercase tracking-widest hover:text-ocean-gold transition-colors border-b-2 border-coral-accent pb-2 hover:border-ocean-gold">Chat com Atendente Especializado →</a>
        </div>
      </section>
    </div>
  )
}
