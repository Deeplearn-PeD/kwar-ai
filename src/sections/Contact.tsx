import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contato@kwar-ai.com.br',
    href: 'mailto:contato@kwar-ai.com.br',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 (21) 0000-0000',
    href: 'tel:+551100000000',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Rio de Janeiro, RJ - Brasil',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/kwar-ai',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/551100000000',
  },
];

const interestOptions = [
  { value: 'api-partner', label: 'API de Saúde - Plano Partner' },
  { value: 'api-enterprise', label: 'API de Saúde - Plano Enterprise' },
  { value: 'course-closed', label: 'Curso de IA - Turma Fechada' },
  { value: 'course-open', label: 'Curso de IA - Turma Aberta' },
  { value: 'platform', label: 'Assinatura da Plataforma' },
  { value: 'partnership', label: 'Parceria Estratégica' },
  { value: 'other', label: 'Outro Assunto' },
];

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: '',
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        interest: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-kwar-electric/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-kwar-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kwar-electric/10 border border-kwar-electric/30 mb-6">
            <Mail className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">Contato</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos{' '}
            <span className="text-gradient">conversar</span>
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            Entre em contato para saber mais sobre nossas soluções ou agendar uma demonstração.
            Estamos prontos para iluminar o futuro da saúde pública junto com você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="card-glass p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-kwar-electric/10 flex items-center justify-center group-hover:bg-kwar-electric/20 transition-colors">
                      <item.icon className="w-5 h-5 text-kwar-electric" />
                    </div>
                    <div>
                      <p className="text-kwar-gray text-sm">{item.label}</p>
                      <p className="text-white group-hover:text-kwar-electric transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-kwar-electric/20 transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-kwar-gray group-hover:text-kwar-electric transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 rounded-xl bg-kwar-electric/5 border border-kwar-electric/20">
                <p className="text-white italic text-sm leading-relaxed mb-4">
                  "O sol nasce para todos. Mas quem tem KWAR-AI vê a luz 21 dias antes."
                </p>
                <p className="text-kwar-electric text-xs">— Manifesto Kwar-AI</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="card-glass p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-kwar-green/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-kwar-green" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                  <p className="text-kwar-gray">
                    Agradecemos seu contato. Retornaremos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Nome <span className="text-kwar-red">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray/50 focus:border-kwar-electric"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email <span className="text-kwar-red">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray/50 focus:border-kwar-electric"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-white">
                        Organização
                      </Label>
                      <Input
                        id="organization"
                        placeholder="Nome da instituição"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray/50 focus:border-kwar-electric"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-white">
                        Interesse <span className="text-kwar-red">*</span>
                      </Label>
                      <Select
                        value={formData.interest}
                        onValueChange={(value) => setFormData({ ...formData, interest: value })}
                        required
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-kwar-electric">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent className="bg-kwar-deep border-white/10">
                          {interestOptions.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={option.value}
                              className="text-white hover:bg-kwar-electric/20 focus:bg-kwar-electric/20"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Mensagem <span className="text-kwar-red">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos sobre suas necessidades..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray/50 focus:border-kwar-electric resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 group"
                  >
                    Enviar Mensagem
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-xs text-kwar-gray text-center">
                    Ao enviar, você concorda com nossa política de privacidade e LGPD.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
