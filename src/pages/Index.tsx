
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#742774]">Power Platform</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-gray-900 hover:text-[#742774]">
              Visão Geral
            </Link>
            <div className="relative group">
              <button className="font-medium text-gray-900 hover:text-[#742774] flex items-center">
                Plataformas
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 hidden group-hover:block">
                <Link to="/power-apps" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                  Power Apps
                </Link>
                <Link to="/power-automate" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                  Power Automate
                </Link>
                <Link to="/power-bi" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                  Power BI
                </Link>
                <Link to="/power-virtual-agents" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                  Power Virtual Agents
                </Link>
              </div>
            </div>
            <Link to="/api-integration" className="font-medium text-gray-900 hover:text-[#742774]">
              API & Integrações
            </Link>
            <Link to="/development" className="font-medium text-gray-900 hover:text-[#742774]">
              Desenvolvimento
            </Link>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#742774] to-[#0078d4] text-white py-24 overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Microsoft
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Power Platform</h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                Transformando o Bradesco com inovação de baixo código
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-md">
                Uma plataforma completa que permitirá ao Bradesco criar soluções
                personalizadas, automatizar processos e analisar dados de forma
                inteligente sem depender de desenvolvimento tradicional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-[#742774] hover:bg-white/90">
                  Explorar Plataformas
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ver Exemplos
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src="https://via.placeholder.com/800x600/7B83EB/FFFFFF?text=Power+Platform+Bradesco"
                alt="Power Platform"
                className="rounded-lg shadow-2xl transform rotate-2 z-10 relative"
              />
            </div>
          </div>
          <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,192C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-[#742774]/10 text-[#742774] px-4 py-1 rounded-full text-sm font-medium mb-4">
                Visão Geral
              </span>
              <h2 className="text-4xl font-bold text-[#742774] mb-4">
                Uma plataforma completa para a transformação digital do Bradesco
              </h2>
              <p className="text-lg text-gray-600">
                A Power Platform unifica tecnologias para criar um ecossistema potente 
                e versátil para as operações do Bradesco.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#5c2d91] rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                  PA
                </div>
                <h3 className="text-xl font-bold text-[#742774] text-center mb-4">Power Apps</h3>
                <p className="text-gray-600 text-center mb-4">
                  Crie aplicativos personalizados sem código para resolver desafios específicos do Bradesco.
                </p>
                <div className="text-center">
                  <Link to="/power-apps" className="text-[#742774] font-semibold flex items-center justify-center">
                    Saiba mais <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#0078d4] rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                  PA
                </div>
                <h3 className="text-xl font-bold text-[#742774] text-center mb-4">Power Automate</h3>
                <p className="text-gray-600 text-center mb-4">
                  Automatize fluxos de trabalho entre sistemas internos e serviços do Bradesco.
                </p>
                <div className="text-center">
                  <Link to="/power-automate" className="text-[#742774] font-semibold flex items-center justify-center">
                    Saiba mais <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#f2c811] rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                  BI
                </div>
                <h3 className="text-xl font-bold text-[#742774] text-center mb-4">Power BI</h3>
                <p className="text-gray-600 text-center mb-4">
                  Transforme dados do Bradesco em insights acionáveis com análises visuais interativas.
                </p>
                <div className="text-center">
                  <Link to="/power-bi" className="text-[#742774] font-semibold flex items-center justify-center">
                    Saiba mais <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#11a844] rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                  PVA
                </div>
                <h3 className="text-xl font-bold text-[#742774] text-center mb-4">Power Virtual Agents</h3>
                <p className="text-gray-600 text-center mb-4">
                  Crie chatbots inteligentes para atendimento aos clientes do Bradesco.
                </p>
                <div className="text-center">
                  <Link to="/power-virtual-agents" className="text-[#742774] font-semibold flex items-center justify-center">
                    Saiba mais <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-[#742774]/10 text-[#742774] px-4 py-1 rounded-full text-sm font-medium mb-4">
                Integrações
              </span>
              <h2 className="text-4xl font-bold text-[#742774] mb-4">
                Conecte-se aos sistemas do Bradesco e centenas de serviços
              </h2>
              <p className="text-lg text-gray-600">
                Amplie o poder da plataforma com integrações nativas e conectores personalizados para os sistemas existentes.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#d83b01] rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4 mx-auto">
                  365
                </div>
                <h4 className="text-center font-medium">Microsoft 365</h4>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#002050] rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4 mx-auto">
                  D365
                </div>
                <h4 className="text-center font-medium">Dynamics 365</h4>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#0078d4] rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4 mx-auto">
                  AZ
                </div>
                <h4 className="text-center font-medium">Azure</h4>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#006633] rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4 mx-auto">
                  BR
                </div>
                <h4 className="text-center font-medium">Bradesco Core</h4>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#0077C8] rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4 mx-auto">
                  SAP
                </div>
                <h4 className="text-center font-medium">SAP</h4>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#181717] rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4 mx-auto">
                  API
                </div>
                <h4 className="text-center font-medium">APIs Bradesco</h4>
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" className="border-[#742774] text-[#742774] hover:bg-[#742774]/10">
                Ver todas as integrações
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-[#742774]/10 text-[#742774] px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Benefícios
                </span>
                <h2 className="text-4xl font-bold text-[#742774] mb-6">
                  Por que o Bradesco deve escolher a Power Platform?
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                  Descubra como a Power Platform pode ajudar o Bradesco a resolver desafios complexos de negócios de forma ágil.
                </p>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#742774]/10 rounded-full flex items-center justify-center text-[#742774] mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Desenvolvimento rápido</h4>
                      <p className="text-gray-600">Reduza o tempo de implementação com ferramentas visuais e modelos pré-construídos adaptados para o setor financeiro.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#742774]/10 rounded-full flex items-center justify-center text-[#742774] mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Redução de custos</h4>
                      <p className="text-gray-600">Economize recursos permitindo que equipes de negócio do Bradesco desenvolvam soluções com mínima dependência de TI.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#742774]/10 rounded-full flex items-center justify-center text-[#742774] mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Integração com sistemas legados</h4>
                      <p className="text-gray-600">Conexão perfeita com os sistemas bancários existentes do Bradesco e centenas de outros serviços.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#742774]/10 rounded-full flex items-center justify-center text-[#742774] mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Segurança bancária</h4>
                      <p className="text-gray-600">Aproveite os recursos avançados de segurança da Microsoft, em conformidade com as regulamentações financeiras brasileiras.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src="https://via.placeholder.com/600x800/7B83EB/FFFFFF?text=Bradesco+Power+Platform" 
                  alt="Power Platform Benefits" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#742774] to-[#0078d4] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Pronto para transformar o Bradesco?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">
              Descubra como a equipe de Low Code do Bradesco pode ajudar seu departamento a inovar mais rapidamente com a Power Platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#742774] hover:bg-white/90">
                Começar agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ver exemplos
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Microsoft Power Platform</h3>
              <p className="text-gray-400 mb-6">
                Ferramentas para inovação, análise e automação para o Bradesco
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#50e6ff]">Produtos</h4>
              <ul className="space-y-2">
                <li><Link to="/power-apps" className="text-gray-400 hover:text-white">Power Apps</Link></li>
                <li><Link to="/power-automate" className="text-gray-400 hover:text-white">Power Automate</Link></li>
                <li><Link to="/power-bi" className="text-gray-400 hover:text-white">Power BI</Link></li>
                <li><Link to="/power-virtual-agents" className="text-gray-400 hover:text-white">Power Virtual Agents</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#50e6ff]">Recursos</h4>
              <ul className="space-y-2">
                <li><Link to="/api-integration" className="text-gray-400 hover:text-white">APIs e Integrações</Link></li>
                <li><Link to="/development" className="text-gray-400 hover:text-white">Guia de Desenvolvimento</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentação</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Comunidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#50e6ff]">Suporte Bradesco</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Treinamento</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Status do Serviço</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; 2023 Microsoft. Todos os direitos reservados.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
