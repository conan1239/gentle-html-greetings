
import { Code, Globe, Layout } from "lucide-react";

const HtmlBasics = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Linguagem de Marcação",
      description: "HTML (HyperText Markup Language) é a linguagem padrão para criar páginas web",
    },
    {
      icon: <Layout className="w-8 h-8 text-purple-500" />,
      title: "Estrutura da Página",
      description: "Define a estrutura e o conteúdo das páginas web usando elementos e tags",
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-500" />,
      title: "Base da Web",
      description: "Fundamental para o desenvolvimento web, trabalha junto com CSS e JavaScript",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            O que é HTML?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra os fundamentos da linguagem que constrói a web
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HtmlBasics;
