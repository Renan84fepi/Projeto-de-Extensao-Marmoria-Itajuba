import { useState } from 'react';
import { Menu, Phone, MapPin, Mail, Facebook, Instagram, Youtube, X } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imagemEmpresa from "@/imports/Imagem_empresa.png";
import logo from "@/imports/logo.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="size-full bg-[#f2f2f2] overflow-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f2f2f2] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-21 h-21 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Marmoraria Itajubá Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h1 className="text-xl font-bold text-[#1a1a1a]">
                  MARMORARIA ITAJUBÁ
                </h1>

                <p className="text-xs text-[#6b6b6b]">
                  123 anos de História
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-[#3a3a3a] hover:text-black transition-colors">
                Início
              </a>

              <a href="#sobre" className="text-[#3a3a3a] hover:text-black transition-colors">
                Sobre nós
              </a>

              <a href="#cozinhas" className="text-[#3a3a3a] hover:text-black transition-colors">
                Cozinhas
              </a>

              <a href="#banheiros" className="text-[#3a3a3a] hover:text-black transition-colors">
                Banheiros
              </a>

              <a href="#produtos" className="text-[#3a3a3a] hover:text-black transition-colors">
                Produtos
              </a>

              <a href="#contato" className="text-[#3a3a3a] hover:text-black transition-colors">
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#d9d9d9] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-[#d1d1d1]">
              <div className="flex flex-col gap-4">

                <a href="#inicio" className="text-[#3a3a3a] hover:text-black transition-colors py-2">
                  Início
                </a>

                <a href="#sobre" className="text-[#3a3a3a] hover:text-black transition-colors py-2">
                  Sobre nós
                </a>

                <a href="#cozinhas" className="text-[#3a3a3a] hover:text-black transition-colors py-2">
                  Cozinhas
                </a>

                <a href="#banheiros" className="text-[#3a3a3a] hover:text-black transition-colors py-2">
                  Banheiros
                </a>

                <a href="#produtos" className="text-[#3a3a3a] hover:text-black transition-colors py-2">
                  Produtos
                </a>

                <a href="#contato" className="text-[#3a3a3a] hover:text-black transition-colors py-2">
                  Contato
                </a>

              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[600px] bg-[#2b2b2b]">

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <ImageWithFallback
          src="https://img.magnific.com/fotos-premium/moderna-mesa-vacia-marmol-oscuro-sala-cocina-fondo-borroso-diseno-interior-sala-cocina-mesa-marmol-exhibicion-productos-ia-generativa_792465-117.jpg"
          alt="Marble Countertop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">

          <div className="max-w-2xl text-white">

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              SERVIÇOS DE ALTA QUALIDADE
            </h2>

            <p className="text-xl mb-8 text-[#d9d9d9]">
              Transformamos pedras naturais em obras de arte para sua casa ou empresa.
              Qualidade, elegância e durabilidade em cada projeto.
            </p>

            <button className="bg-[#bdbdbd] hover:bg-[#9f9f9f] text-black px-8 py-4 rounded-lg transition-colors">
              Solicite um orçamento
            </button>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-[#efefef]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">
                Sobre nós
              </h2>

              <p className="text-[#555] mb-4 leading-relaxed">
                A Marmoraria Itajubá é uma empresa tradicional de Itajubá e região,
                com mais de 100 anos de história. Atua na confecção de peças em
                mármores e granitos, consolidando sua presença no mercado desde 1901.
              </p>

              <p className="text-[#555] mb-4 leading-relaxed">
                Seu principal objetivo é trabalhar em conjunto com o cliente,
                participando de uma etapa importante na realização de sonhos.
                A empresa busca trazer o requinte e a sutileza da natureza em cada
                projeto desenvolvido.
              </p>

              <p className="text-[#555] leading-relaxed">
                Com preço justo, oferece as melhores formas de pagamento,
                além de contar com mão de obra especializada e equipamentos
                de ponta para atender qualquer demanda necessária.
              </p>

            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">

              <ImageWithFallback
                src={imagemEmpresa}
                alt="Marmoraria Itajubá"
                className="w-full h-full object-cover"
              />

            </div>

          </div>
        </div>
      </section>

      {/* Kitchen Section */}
      <section id="cozinhas" className="py-20 bg-[#f8f8f8]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
              Cozinhas
            </h2>

            <p className="text-[#666] max-w-2xl mx-auto">
              Bancadas de mármore e granito que combinam beleza e funcionalidade para sua cozinha
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="group relative h-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631048500354-c7b943a930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJibGUlMjBjb3VudGVydG9wJTIwa2l0Y2hlbnxlbnwxfHx8fDE3Nzc5MzM4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kitchen 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Mármore Branco
                </h3>
              </div>

            </div>

            <div className="group relative h-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">

              <ImageWithFallback
                src="https://img.magnific.com/fotos-premium/mesa-de-marmore-escura-vazia-moderna-em-uma-sala-de-cozinha-em-fundo-desfocado-sala-de-cozinha-design-de-interiores-uma-mesa-de-marmore-para-exibicao-de-produtos-ia-generativa_792465-124.jpg"
                alt="Kitchen 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Granito Escuro
                </h3>
              </div>

            </div>

            <div className="group relative h-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">

              <ImageWithFallback
                src="https://www.marmorariamultiformas.com.br/smart/modulos/blog/imagens/grande/vantagens-do-marmore-para-bancadas-de-cozinha-durabilidade-e-beleza_5-73.jpg"
                alt="Kitchen 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Cozinha Completa
                </h3>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Bathroom Section */}
      <section id="banheiros" className="py-20 bg-[#efefef]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
              Banheiros
            </h2>

            <p className="text-[#666] max-w-2xl mx-auto">
              Elegância e sofisticação em mármore para seu banheiro
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="group relative h-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1658760046471-896cbc719c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXJibGUlMjBiYXRocm9vbXxlbnwxfHx8fDE3Nzc5MzM4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bathroom 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Bancada Luxuosa
                </h3>
              </div>

            </div>

            <div className="group relative h-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtYXJibGUlMjBiYXRocm9vbXxlbnwxfHx8fDE3Nzc5MzM4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bathroom 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Dupla Cuba
                </h3>
              </div>

            </div>

            <div className="group relative h-[350px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtYXJibGUlMjBiYXRocm9vbXxlbnwxfHx8fDE3Nzc5MzM4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bathroom 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Banheiro Moderno
                </h3>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 bg-[#f8f8f8]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
              Nossos Produtos
            </h2>

            <p className="text-[#666] max-w-2xl mx-auto">
              Variedade de pedras naturais com padrões únicos
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#ffffff] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">

              <div className="h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669102046402-7c5e93766565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0ZXh0dXJlJTIwcGF0dGVybnxlbnwxfHx8fDE3Nzc5MzM4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Marble texture"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                  Mármore Carrara
                </h3>

                <p className="text-[#555]">
                  Elegância clássica com veios suaves e tons neutros
                </p>

              </div>
            </div>

            <div className="bg-[#ffffff] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">

              <div className="h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669102048091-46693d0f81cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJibGUlMjB0ZXh0dXJlJTIwcGF0dGVybnxlbnwxfHx8fDE3Nzc5MzM4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Marble texture"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                  Granito Natural
                </h3>

                <p className="text-[#555]">
                  Resistência e durabilidade com padrões exclusivos
                </p>

              </div>
            </div>

            <div className="bg-[#ffffff] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">

              <div className="h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1566305977571-5666677c6e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXJibGUlMjB0ZXh0dXJlJTIwcGF0dGVybnxlbnwxfHx8fDE3Nzc5MzM4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Marble texture"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                  Mármore Premium
                </h3>

                <p className="text-[#555]">
                  Sofisticação máxima para projetos exclusivos
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-[#2b2b2b] text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-12">

            <div>

              <h3 className="text-2xl font-bold mb-6">
                Contatos
              </h3>

              <div className="space-y-4">

                <div className="flex items-start gap-3">

                  <Phone className="w-5 h-5 mt-1 text-[#bdbdbd]" />

                  <div>
                    <p className="font-semibold">Telefone</p>

                    <p className="text-[#cfcfcf]">
                      (35) 3621-1521
                    </p>

                    <p className="text-[#cfcfcf]">
                      (35) 98831-9745
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <Mail className="w-5 h-5 mt-1 text-[#bdbdbd]" />

                  <div>

                    <p className="font-semibold">
                      E-mail
                    </p>

                    <p className="text-[#cfcfcf]">
                      contato@marmorariaitajuba.com.br
                    </p>

                  </div>

                </div>

              </div>
            </div>

            <div>

              <h3 className="text-2xl font-bold mb-6">
                Localização
              </h3>

              <div className="flex items-start gap-3">

                <MapPin className="w-5 h-5 mt-1 text-[#bdbdbd]" />

                <div>

                  <p className="font-semibold">
                    Endereço
                  </p>

                  <p className="text-[#cfcfcf]">
                    Rua Flamínio Miranda, 114
                  </p>

                  <p className="text-[#cfcfcf]">
                    Porto Velho - Itajubá, MG
                  </p>

                </div>

              </div>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-6">
                Redes Sociais
              </h3>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="w-12 h-12 bg-[#4a4a4a] hover:bg-[#bdbdbd] hover:text-black rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 bg-[#4a4a4a] hover:bg-[#bdbdbd] hover:text-black rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 bg-[#4a4a4a] hover:bg-[#bdbdbd] hover:text-black rounded-full flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>

              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-[#555] text-center text-[#a8a8a8]">

            <p>
              &copy; 2026 Marmoraria Itajubá. Todos os direitos reservados.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
