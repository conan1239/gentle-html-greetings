
import { Heart, Code, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Continue Aprendendo
          </h3>
          <p className="text-blue-200 text-lg">
            Este é apenas o início da sua jornada no desenvolvimento web!
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-blue-200 mb-6">
          <span>Feito com</span>
          <Heart className="w-5 h-5 text-red-400" />
          <span>e</span>
          <Code className="w-5 h-5 text-blue-400" />
          <span>para iniciantes em HTML</span>
        </div>
        
        <div className="text-blue-300 text-sm mb-6">
          <p>Explore CSS, JavaScript e frameworks para expandir seus conhecimentos</p>
        </div>

        <div className="border-t border-blue-700 pt-6">
          <div className="flex items-center justify-center gap-2 text-blue-200 mb-2">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span className="font-semibold">UNIG - Centro Universitário Iguaçu</span>
          </div>
          <p className="text-blue-300 text-sm">
            Desenvolvido por <span className="font-semibold text-white">Davi Seares</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
