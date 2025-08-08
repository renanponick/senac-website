import { 
  Code
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 senac-gradient rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">SENAC Hub</span>
            </div>
            <p className="text-muted-foreground">
              Transformando o futuro através da educação tecnológica em Joinville/SC.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Cursos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Graduação</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Técnicos</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Imersivos</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Certificações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Parcerias</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Joinville/SC</p>
              <p>contato@senachub.sc.senac.br</p>
              <p>(47) 3481-8800</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 SENAC Hub de Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};