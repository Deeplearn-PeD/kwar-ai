import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

export function Contact() {
  const { t } = useTranslation();
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

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email.label'),
      value: t('contact.info.email.value'),
      href: 'mailto:contato@kwar-ai.com.br',
    },
    {
      icon: Phone,
      label: t('contact.info.phone.label'),
      value: t('contact.info.phone.value'),
      href: 'tel:+551100000000',
    },
    {
      icon: MapPin,
      label: t('contact.info.location.label'),
      value: t('contact.info.location.value'),
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: t('contact.info.social.linkedin'),
      href: 'https://linkedin.com/company/kwar-ai',
    },
    {
      icon: MessageCircle,
      label: t('contact.info.social.whatsapp'),
      href: 'https://wa.me/551100000000',
    },
  ];

  const interestOptions = [
    { value: 'epidbot-demo', label: t('contact.form.interestOptions.epidbotDemo') },
    { value: 'ai-solutions', label: t('contact.form.interestOptions.aiSolutions') },
    { value: 'courses', label: t('contact.form.interestOptions.courses') },
    { value: 'research', label: t('contact.form.interestOptions.research') },
    { value: 'partnerships', label: t('contact.form.interestOptions.partnerships') },
    { value: 'consulting', label: t('contact.form.interestOptions.consulting') },
    { value: 'press', label: t('contact.form.interestOptions.press') },
    { value: 'other', label: t('contact.form.interestOptions.other') },
  ];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formPayload = {
      access_key: 'ea48381c-1d61-40e6-9901-f91972740c3c',
      name: formData.name,
      email: formData.email,
      organizacao: formData.organization,
      interesse: formData.interest,
      message: formData.message,
      subject: 'Novo contato via site Kwar-AI',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
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
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
            <span className="text-sm font-medium text-kwar-electric">{t('contact.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('contact.title')}{' '}
            <span className="text-gradient">{t('contact.titleHighlight')}</span>
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
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
              <h3 className="text-xl font-bold text-white mb-6">{t('contact.info.title')}</h3>

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
                <h4 className="text-white font-semibold mb-4">{t('contact.info.social.title')}</h4>
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
                  <h3 className="text-xl font-bold text-white mb-2">{t('contact.form.success.title')}</h3>
                  <p className="text-kwar-gray">
                    {t('contact.form.success.message')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                  <input type="hidden" name="access_key" value="ea48381c-1d61-40e6-9901-f91972740c3c" />
                  <input type="hidden" name="subject" value="Novo contato via site Kwar-AI" />
                  <input type="hidden" name="organizacao" value={formData.organization} />
                  <input type="hidden" name="interesse" value={formData.interest} />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        {t('contact.form.name')} <span className="text-kwar-red">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder={t('contact.form.namePlaceholder')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray/50 focus:border-kwar-electric"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        {t('contact.form.email')} <span className="text-kwar-red">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('contact.form.emailPlaceholder')}
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
                        {t('contact.form.organization')}
                      </Label>
                      <Input
                        id="organization"
                        placeholder={t('contact.form.organizationPlaceholder')}
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        className="bg-white/5 border-white/10 text-white placeholder:text-kwar-gray/50 focus:border-kwar-electric"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-white">
                        {t('contact.form.interest')} <span className="text-kwar-red">*</span>
                      </Label>
                      <Select
                        value={formData.interest}
                        onValueChange={(value) => setFormData({ ...formData, interest: value })}
                        required
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-kwar-electric">
                          <SelectValue placeholder={t('contact.form.interestPlaceholder')} />
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
                      {t('contact.form.message')} <span className="text-kwar-red">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t('contact.form.messagePlaceholder')}
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
                    {t('contact.form.submit')}
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-xs text-kwar-gray text-center">
                    {t('contact.form.privacy')}
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
