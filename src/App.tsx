import React, { useState } from 'react';
import { ArrowRight, Code, Layout, ShoppingBag, Search, Users, Star, MessageSquare, Terminal, Cpu, Wifi, Hexagon, ChevronRight, Globe, Smartphone, ShieldCheck, Zap, Database, LineChart, Plus, Minus } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentSection(sectionId);
  };

  const renderSection = () => {
    switch(currentSection) {
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="https://i.imgur.com/F1eGVRg.png" alt="NexusTech Logo" className="h-10" />
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`hover-neon ${currentSection === 'home' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`hover-neon ${currentSection === 'projects' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`hover-neon ${currentSection === 'about' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Sobre nós
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`hover-neon ${currentSection === 'services' ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                Serviços
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {renderSection()}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="https://i.imgur.com/F1eGVRg.png" alt="NexusTech Logo" className="h-8" />
              </div>
              <p className="text-gray-400">
                Pioneiros em soluções tecnológicas inovadoras para transformar o futuro digital.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Serviços</h3>
              <ul className="space-y-2">
                <li className="hover-neon">Desenvolvimento Web</li>
                <li className="hover-neon">Landing Pages</li>
                <li className="hover-neon">E-commerce</li>
                <li className="hover-neon">Consultoria Tech</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Contato</h3>
              <ul className="space-y-2">
                <li className="hover-neon">nexustechcode@gmail.com</li>
                <li className="hover-neon">(32) 98858-6172</li>
                <li className="hover-neon">Muriaé, MG</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Social</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/nexus_techweb/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover-neon">
                  Instagram
                </a>
                <a href="https://github.com/KaylanWindryksson" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover-neon">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NexusTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeContent() {
  const [currentProject, setCurrentProject] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const projects = [
    {
      title: "CleanPower",
      image: "https://i.imgur.com/KF1rlnL.png",
      description: "Desenvolvemos um site completo com formulário de orçamento, persuasão para captação de clientes, dashboard personalizado e mais...",
      client: "CleanPower"
    },
    {
      title: "Cris Pires",
      image: "https://i.imgur.com/OlRfMzN.png",
      description: "Criamos uma site de alta conversão para a Cris Pires, aumentando em 300% o número de leads qualificados.",
      client: "Cris Pires"
    },
    {
      title: "DoctorCare",
      image: "https://i.imgur.com/6tdabDj.png",
      description: "Desenvolvimento de uma landing page de uma clinica médica ficticia para treinamento de desenvolvimento web, mas com experiência de página real.",
      client: "DoctorCare"
    }
  ];

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "Trabalhamos com prazos curtos, normalmente os projetos são finalizado em até 14 dias úteis após recebimento de todas as informações, mas esse prazo pode variar de acordo com a estrutura do projeto."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Oferecemos diversas opções de pagamento, incluindo parcelamento em até 6x, PIX e transferência bancária, sendo 50% de entrada no fechamento e 50% após a aprovação do projeto ou receba um desconto diferenciado para pagamentos 100% na entrada."
    },
    {
      question: "Qual segurança eu tenho ao contratar vocês?",
      answer: "Como forma de formalização, segurança e garantia, trabalhamos com CONTRATO DE PRESTAÇÃO DE SERVIÇOS para assegurar tanto a questão de desenvolvimento do site, quanto prazos e pagamentos, direitos e obrigações referentes ao serviço de criação de layout de páginas."
    },
    {
      question: "O site será responsivo?",
      answer: "Sim! Todos os nossos sites são desenvolvidos com responsividade, garantindo uma experiência perfeita em qualquer dispositivo."
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim, oferecemos suporte técnico especializado por 3 meses após a entrega do projeto, garantindo que tudo funcione perfeitamente."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        id = 'home'
        className="relative min-h-screen bg-[#020817] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.imgur.com/HQSHtcc.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] to-transparent"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            <div className="relative z-10 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="gradient-text">Tenha hoje um site</span>
                <br />
                <span className="text-white">bonito,</span>
                <span className="text-cyan-400"> rápido </span>
                <span className="text-white"> e que </span>
                <span className="text-white">te gere vendas</span>
              </h1>
              <p className="text-lg text-gray-300">
                Vamos aumentar as vendas do seu negócio? Preencha o formulário e entre em contato com nossa equipe diretamente pelo WhatsApp.
              </p>
              <div className="space-y-6">
                <button 
                  onClick={() => window.open("http://wa.me/32988586172", "_blank", "noopener noreferrer")}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center">
                  <span>Solicitar Orçamento Grátis</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </button>
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-800 flex items-center justify-center overflow-hidden">
                        <img 
                          src={`https://i.pravatar.cc/150?img=${i + 1}`} 
                          alt="Cliente satisfeito" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-300">+10 clientes satisfeitos</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 hidden md:block">
              <img 
                src="https://i.imgur.com/utaoiE3.png" 
                alt="Web Development Illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Carousel */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Nossos Projetos</h2>
          <div className="relative">
            <div className="flex items-center justify-between gap-8">
              <button 
                onClick={() => setCurrentProject((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
                className="p-2 rounded-full bg-gray-900 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 transform rotate-180" />
              </button>
              
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px] overflow-hidden rounded-lg">
                    <img 
                      src={projects[currentProject].image} 
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-cyan-400">{projects[currentProject].title}</h3>
                    <p className="text-gray-300">{projects[currentProject].description}</p>
                    <p className="text-cyan-400 font-semibold">Cliente: {projects[currentProject].client}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setCurrentProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded-full bg-gray-900 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Nossa Metodologia Exclusiva</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-400 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Design Estratégico</h3>
              <p className="text-gray-300">Layout pensado para converter visitantes em clientes.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-400 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Copy Persuasiva</h3>
              <p className="text-gray-300">Textos que engajam e convencem seu público-alvo.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-400 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Carregamento Rápido</h3>
              <p className="text-gray-300">Performance otimizada para melhor experiência.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-cyan-400 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Responsividade</h3>
              <p className="text-gray-300">Adaptação perfeita para todos os dispositivos.</p>
            </div>
          </div>
          <p className="text-center text-gray-300 max-w-4xl mx-auto">
            Sem esses 4 pilares desenvolvidos por profissionais qualificados, você continuará gastando rios de dinheiro em anúncios, direcionando as pessoas para uma estrutura que não influência o visitante na tomada de decisão, impedindo assim que obtenha o máximo de resultado para seu negócio.
          </p>
        </div>
      </section>

      {/* About Agency Section */}
      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 gradient-text">A Nexus Tech</h2>
              <p className="text-gray-300 mb-6">
              Na nossa agência de desenvolvimento web, acreditamos que um site de qualidade vai além do design e da programação – o suporte e o atendimento fazem toda a diferença. Criamos soluções digitais sob medida para o seu negócio, com um compromisso real em oferecer um serviço eficiente e um suporte sempre presente. Sabemos que muitos profissionais falham nesse aspecto, e é por isso que estamos aqui: para garantir que sua experiência seja tão impecável quanto o seu site. 🚀
              </p>
              <p className="text-gray-300">
                Nossa missão é transformar a presença digital dos nossos clientes através de estratégias inovadoras e tecnologias de ponta, sempre com foco em ROI e satisfação do cliente.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://i.imgur.com/6OO7YTs.png" 
                alt="Equipe Nexus Tech"
                className="relative z-10 rounded-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Seus serviços aqui... */}
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
              <Globe className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Desenvolvimento de Sites</h3>
              <p className="text-gray-300">
                Sites profissionais e otimizados para converter visitantes em clientes. Design moderno e experiência do usuário excepcional.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
              <Layout className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Landing Pages</h3>
              <p className="text-gray-300">
                Páginas de alta conversão focadas em resultados. Copy persuasiva e design estratégico para maximizar suas vendas.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
              <ShoppingBag className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Lojas Online</h3>
              <p className="text-gray-300">
                E-commerces completos e intuitivos. Gestão simplificada e experiência de compra otimizada para seus clientes.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
              <Database className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Hospedagem de sites</h3>
              <p className="text-gray-300">
                Garanta estabilidade, velocidade e segurança para o seu site com nossa hospedagem de alto desempenho!
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Google Meu Négocio</h3>
              <p className="text-gray-300">
                Otimizamos sua ficha do Google para melhorar a visibilidade da sua empresa nas buscas locais e atrair mais clientes.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
              <Star className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Tráfego Pago</h3>
              <p className="text-gray-300">
                Criação de campanhas no Google e Facebook Ads para fazer com que sua empresa decole.
              </p>
            </div>
            <div className="grid place-content-center col-span-full"> {/* Adicionado col-span-full */}
              <button
                onClick={() => window.open("http://wa.me/32988586172", "_blank", "noopener noreferrer")}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>Solicitar Orçamento Grátis</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Perguntas */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Perguntas Frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-lg transform -translate-x-2 translate-y-2"></div>
              <img 
                src="https://i.imgur.com/JZHr63M.png" 
                alt="FAQ"
                className="relative z-10 rounded-lg w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    className="w-full p-4 text-left flex justify-between items-center bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-cyan-400 font-semibold">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-cyan-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-gray-800">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-cyan-400">
      <div className="inline-block p-4 bg-gray-800 rounded-full mb-6 text-cyan-400">
        {React.cloneElement(icon, { className: "w-8 h-8" })}
      </div>
      <h3 className="text-xl font-bold mb-4 text-cyan-400">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;