import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/siloses/travessia-ilha-grande')({
  component: SiloIlhaGrande,
  head: () => ({
    meta: [
      { title: 'Travessia para Ilha Grande saindo de Mangaratiba | Ocean Express' },
      { name: 'description', content: 'Travessia segura de Mangaratiba para Ilha Grande. Embarcações modernas, horários diários. Reserve pelo WhatsApp!' },
    ],
  }),
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto tempo leva a travessia para Ilha Grande?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A travessia de Mangaratiba para Ilha Grande leva aproximadamente 40 minutos, dependendo das condições do mar.',
      },
    },
    {
      '@type': 'Question',
      name: 'De onde sai a travessia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A travessia parte do centro de Mangaratiba, no Rio de Janeiro, com embarque próximo à orla.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o preço da travessia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Consulte no WhatsApp para valores atualizados e promoções especiais.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso fazer reserva antecipada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recomendamos reservar com antecedência, especialmente em alta temporada e feriados.',
      },
    },
    {
      '@type': 'Question',
      name: 'A travessia é segura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! Todas as embarcações são certificadas e operadas por equipe experiente e treinada.',
      },
    },
  ],
}

const WA_URL =
  'https://wa.me/5521973521017?text=Olá! Quero saber mais sobre a travessia para Ilha Grande'

function SiloIlhaGrande() {
  return (
    <div>
      {/* SEO / FAQ Schema */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-navy to-blue-900 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🚢 Travessia Segura para Ilha Grande
          </h1>
          <p className="text-xl mb-8 text-ocean-gold">
            Saia do centro de Mangaratiba e chegue ao paraíso em apenas 40 minutos
          </p>
          <a
            href={WA_URL}
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Reserve pelo WhatsApp 🚀
          </a>
        </div>
      </section>

      {/* Descrição do Trajeto */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-ocean-navy mb-6">
            Sobre o Trajeto
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A travessia parte do <strong>centro de Mangaratiba</strong>, no litoral sul do Rio de Janeiro,
            e segue em direção à <strong>Vila do Abraão</strong>, principal vilarejo da Ilha Grande.
            O percurso dura cerca de <strong>40 minutos</strong> em embarcações modernas e confortáveis,
            oferecendo uma viagem segura com vista privilegiada para o mar e as montanhas da região.
            É a forma mais prática e rápida de chegar ao paraíso!
          </p>
        </div>
      </section>

      {/* Cards de Informações */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-ocean-navy mb-10 text-center">
            Informações da Travessia
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Horários */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <span className="text-4xl mb-3 block">⏰</span>
              <h3 className="text-xl font-bold text-ocean-navy mb-2">Horários</h3>
              <p className="text-gray-600">
                Saídas diárias de manhã e tarde. Consulte disponibilidade pelo WhatsApp.
              </p>
              <a
                href="/siloses/horarios-ilha-grande"
                className="inline-block mt-3 text-ocean-navy font-semibold hover:underline"
              >
                Ver horários →
              </a>
            </div>
            {/* Preço */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <span className="text-4xl mb-3 block">💰</span>
              <h3 className="text-xl font-bold text-ocean-navy mb-2">Preço</h3>
              <p className="text-gray-600">
                Valores acessíveis e justos. Entre em contato para orçamento atualizado.
              </p>
              <a
                href="/siloses/precos-ilha-grande"
                className="inline-block mt-3 text-ocean-navy font-semibold hover:underline"
              >
                Ver preços →
              </a>
            </div>
            {/* Duração */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <span className="text-4xl mb-3 block">🕐</span>
              <h3 className="text-xl font-bold text-ocean-navy mb-2">Duração</h3>
              <p className="text-gray-600">
                Aproximadamente 40 minutos de travessia direta e confortável.
              </p>
            </div>
            {/* Local de Embarque */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <span className="text-4xl mb-3 block">📍</span>
              <h3 className="text-xl font-bold text-ocean-navy mb-2">Embarque</h3>
              <p className="text-gray-600">
                Centro de Mangaratiba, RJ. Fácil acesso e estacionamento próximo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-ocean-navy mb-10 text-center">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-ocean-navy mb-2">{item.name}</h3>
                <p className="text-gray-700">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp grande */}
      <section className="py-16 px-6 bg-gradient-to-br from-ocean-gold to-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Garanta sua vaga agora!
        </h2>
        <p className="text-lg mb-8">
          Reserve pelo WhatsApp e embarque com segurança e conforto.
        </p>
        <a
          href={WA_URL}
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105"
        >
          Falar no WhatsApp 🚢
        </a>
      </section>

      {/* Internal links */}
      <section className="py-10 px-6 bg-ocean-navy text-white">
        <div className="container mx-auto text-center">
          <p className="mb-4 opacity-75">Explore mais sobre a travessia:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/siloses/horarios-ilha-grande"
              className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              Horários
            </a>
            <a
              href="/siloses/precos-ilha-grande"
              className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              Preços
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
