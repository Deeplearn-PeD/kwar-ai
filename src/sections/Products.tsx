import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  GraduationCap,
  MessageCircle,
  Download,
  Database,
  BarChart3,
  Upload,
  BookOpen,
  Building2,
  Clock,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Award,
  Gift,
  Sparkles,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Products() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const TARGET_TEXT = 'EPIDBOT';
  const CHARS = '01アイウエオカキクケコABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [displayText, setDisplayText] = useState(' '.repeat(TARGET_TEXT.length));
  const [isDecoding, setIsDecoding] = useState(true);

  const epidbotFeatures = [
    {
      icon: MessageCircle,
      title: t('products.epidbot.features.naturalLanguage.title'),
      description: t('products.epidbot.features.naturalLanguage.description'),
    },
    {
      icon: Download,
      title: t('products.epidbot.features.datasusDownload.title'),
      description: t('products.epidbot.features.datasusDownload.description'),
    },
    {
      icon: Database,
      title: t('products.epidbot.features.duckdbAnalysis.title'),
      description: t('products.epidbot.features.duckdbAnalysis.description'),
    },
    {
      icon: BarChart3,
      title: t('products.epidbot.features.visualizations.title'),
      description: t('products.epidbot.features.visualizations.description'),
    },
    {
      icon: Upload,
      title: t('products.epidbot.features.localData.title'),
      description: t('products.epidbot.features.localData.description'),
    },
    {
      icon: BookOpen,
      title: t('products.epidbot.features.knowledgeBase.title'),
      description: t('products.epidbot.features.knowledgeBase.description'),
    },
  ];

  const epidbotCapabilities = [
    t('products.epidbot.capabilities.items.0'),
    t('products.epidbot.capabilities.items.1'),
    t('products.epidbot.capabilities.items.2'),
    t('products.epidbot.capabilities.items.3'),
    t('products.epidbot.capabilities.items.4'),
    t('products.epidbot.capabilities.items.5'),
  ];

  const trainingModalities = [
    {
      type: 'individual',
      icon: GraduationCap,
      color: 'kwar-electric',
      title: t('products.training.individual.title'),
      subtitle: t('products.training.individual.subtitle'),
      badges: [
        { icon: Clock, text: t('products.training.individual.badges.duration') },
        { icon: Monitor, text: t('products.training.individual.badges.format') },
        { icon: Award, text: t('products.training.individual.badges.certification') },
      ],
      features: [
        t('products.training.individual.features.0'),
        t('products.training.individual.features.1'),
        t('products.training.individual.features.2'),
        t('products.training.individual.features.3'),
        t('products.training.individual.features.4'),
      ],
      bonus: t('products.training.individual.bonus'),
      price: t('products.training.individual.price'),
      priceDetail: t('products.training.individual.priceDetail'),
      cta: t('products.training.individual.cta'),
      note: t('products.training.individual.note'),
      highlighted: false,
    },
    {
      type: 'institutional',
      icon: Building2,
      color: 'kwar-gold',
      title: t('products.training.institutional.title'),
      subtitle: t('products.training.institutional.subtitle'),
      badges: [],
      features: [
        t('products.training.institutional.features.0'),
        t('products.training.institutional.features.1'),
        t('products.training.institutional.features.2'),
        t('products.training.institutional.features.3'),
        t('products.training.institutional.features.4'),
      ],
      bonus: t('products.training.institutional.bonus'),
      price: t('products.training.institutional.price'),
      priceDetail: t('products.training.institutional.priceDetail'),
      cta: t('products.training.institutional.cta'),
      note: '',
      highlighted: true,
    },
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

  useEffect(() => {
    if (!isVisible) return;
    
    setDisplayText(' '.repeat(TARGET_TEXT.length));
    setIsDecoding(true);
    
    let iteration = 0;
    const maxIterations = TARGET_TEXT.length * 8;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return TARGET_TEXT.split('')
          .map((_, index) => {
            if (index < iteration / 8) {
              return TARGET_TEXT[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
      });

      iteration += 1;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(TARGET_TEXT);
        setIsDecoding(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="products"
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
            <Sparkles className="w-4 h-4 text-kwar-electric" />
            <span className="text-sm font-medium text-kwar-electric">{t('products.badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('products.title')}{' '}
            <span className="text-gradient">{t('products.titleHighlight')}</span>
          </h2>

          <p className="text-kwar-gray max-w-2xl mx-auto text-lg">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Tabs */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Tabs defaultValue="epidbot" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-kwar-deep border border-kwar-electric/20">
              <TabsTrigger
                value="epidbot"
                className="data-[state=active]:bg-kwar-electric data-[state=active]:text-kwar-deep"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t('products.tabs.epidbot')}
              </TabsTrigger>
              <TabsTrigger
                value="training"
                className="data-[state=active]:bg-kwar-gold data-[state=active]:text-kwar-deep"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                {t('products.tabs.training')}
              </TabsTrigger>
            </TabsList>

            {/* EpidBot Product */}
            <TabsContent value="epidbot" className="mt-0">
              {/* Animated Header */}
              <div className="text-center mb-12">
                <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold leading-none tracking-tighter mb-2">
                  <span className={`${isDecoding ? 'text-glow-teal' : ''} transition-all duration-300 bg-gradient-to-r from-[#00d4c8] via-[#00f5e8] to-[#ffd700] bg-clip-text text-transparent`}>
                    {displayText}
                  </span>
                </h1>
                <p className="text-kwar-gray text-lg">{t('products.epidbot.subtitle')}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left - Info */}
                <div>
                  <p className="text-kwar-gray mb-8 leading-relaxed text-lg">
                    {t('products.epidbot.description')}
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {epidbotFeatures.map((feature) => (
                      <div key={feature.title} className="card-glass p-4">
                        <feature.icon className="w-5 h-5 text-kwar-electric mb-2" />
                        <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                        <p className="text-kwar-gray text-xs">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities List */}
                  <div className="card-glass p-6">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-kwar-electric" />
                      {t('products.epidbot.capabilities.title')}
                    </h4>
                    <ul className="space-y-2">
                      {epidbotCapabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-sm text-kwar-gray">
                          <ArrowRight className="w-4 h-4 text-kwar-electric mt-0.5 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right - Chat Mockup */}
                <div className="relative">
                  <div className="card-glass overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-kwar-red" />
                        <div className="w-3 h-3 rounded-full bg-kwar-amber" />
                        <div className="w-3 h-3 rounded-full bg-kwar-green" />
                      </div>
                      <span className="text-xs text-kwar-gray ml-2">EpidBot - Chat</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                        <div className="w-10 h-10 rounded-full bg-kwar-electric/20 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-kwar-electric" />
                        </div>
                        <div>
                          <p className="text-white font-medium">EpidBot</p>
                          <p className="text-white/40 text-xs">Assistente de IA</p>
                        </div>
                        <div className="ml-auto flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-kwar-electric" />
                          <div className="w-3 h-3 rounded-full bg-kwar-gold" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-white/60">U</span>
                          </div>
                          <div className="bg-white/10 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                            <p className="text-white/80 text-sm">
                              {t('products.epidbot.chatMock.userQuestion')}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3 justify-end">
                          <div className="bg-kwar-electric/20 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                            <p className="text-white text-sm">
                              {t('products.epidbot.chatMock.botResponse')}
                            </p>
                            <div className="mt-3 p-3 bg-white/5 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-white/60 text-xs">{t('products.epidbot.chatMock.totalCases')}</span>
                                <span className="text-kwar-electric font-mono">45.892</span>
                              </div>
                              <div className="h-16 flex items-end gap-1">
                                {[40, 65, 45, 80, 95, 70].map((h, i) => (
                                  <div
                                    key={i}
                                    className="flex-1 bg-gradient-to-t from-kwar-electric to-kwar-electric/60 rounded-t"
                                    style={{ height: `${h}%` }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-kwar-electric/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-kwar-electric">E</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3 p-3 rounded-full bg-white/5 border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-kwar-electric animate-pulse" />
                          <span className="text-white/40 text-sm">{t('products.epidbot.chatMock.placeholder')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="card-glass p-4 text-center">
                      <p className="text-2xl font-bold text-kwar-electric">3</p>
                      <p className="text-xs text-kwar-gray">{t('products.epidbot.stats.languages')}</p>
                    </div>
                    <div className="card-glass p-4 text-center">
                      <p className="text-2xl font-bold text-kwar-gold">PySUS</p>
                      <p className="text-xs text-kwar-gray">{t('products.epidbot.stats.pysus')}</p>
                    </div>
                    <div className="card-glass p-4 text-center">
                      <p className="text-2xl font-bold text-kwar-green">24/7</p>
                      <p className="text-xs text-kwar-gray">{t('products.epidbot.stats.availability')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Training Product */}
            <TabsContent value="training" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8">
                {trainingModalities.map((modality) => (
                  <div
                    key={modality.type}
                    className={`relative card-glass p-8 transition-all duration-500 hover:scale-[1.02] ${
                      modality.highlighted
                        ? 'border-kwar-gold/50 shadow-glow-gold'
                        : 'border-white/10'
                    }`}
                  >
                    {modality.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 bg-kwar-gold text-kwar-deep text-xs font-bold rounded-full">
                          {t('products.training.institutional.highlighted')}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-${modality.color}/20 flex items-center justify-center`}>
                        <modality.icon className={`w-7 h-7 text-${modality.color}`} />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-white">{modality.title}</h3>
                        <p className={`text-${modality.color} text-sm`}>{modality.subtitle}</p>
                      </div>
                    </div>

                    {/* Info badges */}
                    {modality.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {modality.badges.map((badge, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5">
                            <badge.icon className="w-4 h-4 text-kwar-gold" />
                            <span className="text-white/70 text-sm">{badge.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Features */}
                    <div className="mb-6">
                      <p className="text-kwar-gray text-sm mb-3">
                        {modality.type === 'individual' ? 'O que inclui:' : 'Formato:'}
                      </p>
                      <ul className="space-y-2">
                        {modality.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full bg-${modality.color}/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <CheckCircle2 className={`w-3 h-3 text-${modality.color}`} />
                            </div>
                            <span className="text-white/70 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bonus */}
                    <div className="flex items-center gap-2 p-4 rounded-xl bg-kwar-gold/10 border border-kwar-gold/20 mb-6">
                      <Gift className="w-5 h-5 text-kwar-gold" />
                      <span className="text-white text-sm">{modality.bonus}</span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-3xl text-white">{modality.price}</span>
                        <span className="text-white/50 text-sm">{modality.priceDetail}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                        modality.highlighted
                          ? 'bg-kwar-gold text-kwar-deep hover:bg-kwar-gold/90'
                          : 'bg-kwar-electric text-kwar-deep hover:bg-kwar-electric/90'
                      }`}
                    >
                      {modality.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    {modality.note && (
                      <p className="text-white/40 text-xs text-center mt-3">{modality.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Products;
