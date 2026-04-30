export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-navy to-blue-900 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚢 Travessias Seguras para Ilha Grande
          </h2>
          <p className="text-xl mb-8 text-ocean-gold">
            Do Centro de Mangaratiba direto para o paraíso
          </p>
          <a
            href="https://wa.me/5521973521017?text=Olá! Quero saber mais sobre a travessia para Ilha Grande"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Reserve sua Travessia 🚀
          </a>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-ocean-navy mb-6 text-center">Sobre a Ocean Express</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
            Com anos de experiência em travessias náuticas, a Ocean Express oferece 
            transporte seguro, confortável e pontual do Centro de Mangaratiba até 
            a paradisíaca Ilha Grande.
          </p>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-ocean-navy mb-8 text-center">Nossos Serviços</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border-2 border-ocean-navy rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-4xl mb-4 block">🏝️</span>
              <h4 className="text-xl font-bold text-ocean-navy mb-2">Ilha Grande</h4>
              <p className="text-gray-600">
                Travessia direta do centro de Mangaratiba para a Ilha Grande. 
                Aventure-se nas praias mais bonitas do Brasil!
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white border-2 border-ocean-navy rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-4xl mb-4 block">⚓</span>
              <h4 className="text-xl font-bold text-ocean-navy mb-2">Itacuruçá</h4>
              <p className="text-gray-600">
                Explore as belezas de Itacuruçá e suas ilhas próximas. 
                Perfeito para passeios de um dia.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white border-2 border-ocean-navy rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-4xl mb-4 block">🌊</span>
              <h4 className="text-xl font-bold text-ocean-navy mb-2">Passeios Locais</h4>
              <p className="text-gray-600">
                Descubra os pontos turísticos escondidos da região de Mangaratiba. 
                Experiências únicas等待着 você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 px-6 bg-ocean-navy text-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Por que nos escolher?</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-4xl mb-2 block">🛡️</span>
              <h4 className="font-bold">Segurança</h4>
              <p className="text-sm opacity-75">Embarcações certificadas</p>
            </div>
            <div>
              <span className="text-4xl mb-2 block">⏰</span>
              <h4 className="font-bold">Pontualidade</h4>
              <p className="text-sm opacity-75">Horários cumpridos</p>
            </div>
            <div>
              <span className="text-4xl mb-2 block">💺</span>
              <h4 className="font-bold">Conforto</h4>
              <p className="text-sm opacity-75">Assentos seguros</p>
            </div>
            <div>
              <span className="text-4xl mb-2 block">🚀</span>
              <h4 className="font-bold">Frota</h4>
              <p className="text-sm opacity-75">Embarcações modernas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-ocean-navy mb-8 text-center">O que dizem nossos clientes</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic mb-4">
                "Travessia incrível! Chegamos rápido e com segurança. Recomendo demais!"
              </p>
              <p className="font-bold text-ocean-navy">— Maria S.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic mb-4">
                "Melhor experiência na Ilha Grande. Equipe muito atenciosa."
              </p>
              <p className="font-bold text-ocean-navy">— João P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-gradient-to-br from-ocean-gold to-orange-500 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Pronto para a sua próxima aventura?</h3>
        <p className="text-lg mb-8">Entre em contato agora mesmo!</p>
        <a
          href="https://wa.me/5521973521017?text=Olá! Quero saber mais sobre as travessias"
          className="inline-block bg-ocean-navy hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:scale-105"
        >
          Reservar via WhatsApp 🚢
        </a>
      </section>
    </div>
  )
}
