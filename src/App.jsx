import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CircleDashed,
  HelpCircle,
  Menu,
  Plus,
  X,
} from 'lucide-react';

const WHATSAPP = '5511921801361';
const INSTAGRAM_HANDLE = '@LAB8.md';
const INSTAGRAM_URL = 'https://www.instagram.com/lab8.md/';
const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

function InstagramMark({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const navigation = [
  ['Manifesto', 'manifesto'],
  ['Serviços', 'servicos'],
  ['Método', 'metodo'],
  ['Projetos', 'portfolio'],
  ['Planos', 'pacotes'],
];

const services = [
  ['01', 'Reestruturação de Instagram', 'Organização completa do perfil para comunicar valor, clareza e confiança.'],
  ['02', 'Identidade visual', 'Paleta, tipografia e sistema gráfico preparados para funcionar no digital.'],
  ['03', 'Criação e redesign de logo', 'Soluções visuais coerentes com a estratégia e o posicionamento da marca.'],
  ['04', 'Brand book completo', 'Diretrizes objetivas para preservar consistência em todos os pontos de contato.'],
  ['05', 'Templates no Canva', 'Peças editáveis para feed, stories, destaques, campanhas e lançamentos.'],
  ['06', 'Direção visual', 'Critérios claros para imagens, composição, ritmo, grid e linguagem de conteúdo.'],
  ['07', 'Bio e posicionamento', 'Mensagem direta para explicar o que você faz, para quem e por que escolher você.'],
  ['08', 'Planejamento de conteúdo', 'Pilares, pautas e estrutura editorial alinhados aos objetivos comerciais.'],
  ['09', 'Kits mensais', 'Manutenção visual contínua para marcas que precisam publicar sem perder padrão.'],
];

const method = [
  ['01', 'Diagnóstico', 'Leitura do perfil, mercado, público e percepção atual da marca.'],
  ['02', 'Posicionamento', 'Definição da mensagem, diferenciais, bio e direção estratégica.'],
  ['03', 'Sistema visual', 'Construção da identidade, grid, templates e regras de aplicação.'],
  ['04', 'Conteúdo', 'Organização de pilares, formatos e ritmo editorial para as redes.'],
  ['05', 'Entrega editável', 'Arquivos no Canva, orientação de uso e estrutura pronta para continuar.'],
];

const packages = [
  {
    label: 'Start',
    name: 'Perfil Express',
    price: '49',
    items: ['Bio reorganizada', 'Paleta e tipografia', '3 templates de feed', '3 capas de destaques'],
  },
  {
    label: 'Standard',
    name: 'Identidade Social',
    price: '149',
    featured: true,
    items: ['Tudo do Perfil Express', 'Logo tipográfico', '6 templates de feed', '6 templates de stories', 'Mini manual da marca'],
  },
  {
    label: 'Full',
    name: 'Marca Social Completa',
    price: '349',
    items: ['Briefing estratégico', 'Logo e variações', 'Brand book completo', '20 templates', 'Pilares de conteúdo'],
  },
];

const benefits = [
  ['01', 'Percepção profissional', 'Seu perfil passa a sustentar o nível do seu trabalho e do seu preço.'],
  ['02', 'Consistência', 'Cada peça parece parte da mesma marca, mesmo quando o conteúdo muda.'],
  ['03', 'Velocidade', 'Templates editáveis reduzem o tempo entre a ideia e a publicação.'],
  ['04', 'Clareza estratégica', 'Bio, mensagem e conteúdo trabalham na mesma direção.'],
  ['05', 'Autonomia', 'Você recebe um sistema aplicável, não arquivos que dependem para sempre de terceiros.'],
  ['06', 'Pronto para vender', 'A presença visual deixa de gerar dúvida e começa a reforçar confiança.'],
];

const faqs = [
  ['Quanto tempo leva a entrega?', 'O Perfil Express é entregue em até 24 horas úteis. Os demais pacotes levam de 2 a 5 dias úteis, conforme o escopo aprovado.'],
  ['Os templates ficam editáveis?', 'Sim. Você recebe os links do Canva e pode trocar textos, fotos, cores e informações mantendo a estrutura estratégica.'],
  ['Vocês também publicam os posts?', 'A gestão mensal e a publicação podem ser contratadas separadamente. Os pacotes desta página são focados em estratégia, identidade e sistema visual.'],
  ['Preciso já ter um logo?', 'Não. Podemos reorganizar o atual ou criar uma solução nova conforme o pacote escolhido.'],
];

function Wordmark({ compact = false }) {
  return (
    <span className={`wordmark ${compact ? 'wordmark--compact' : ''}`}>
      <strong>LAB8</strong>
      {!compact && <small>Social Media Design</small>}
    </span>
  );
}

function OriginalMark() {
  return (
    <span className="original-mark" aria-hidden="true">
      <img src="/lab8-original-logo.jpg" alt="" />
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-frame">
        <div className="nav-shell">
          <a href="#top" className="nav-wordmark" aria-label="LAB8 — início">
            <OriginalMark />
            <Wordmark compact />
          </a>
          <span className="nav-divider" aria-hidden="true" />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <button
            className="menu-trigger"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-controls="mobile-navigation"
            aria-expanded={open}
          >
            <Menu size={20} />
          </button>
        </div>
        <a className="header-cta" href={wa('Olá! Quero transformar meu Instagram com a LAB8.')} target="_blank" rel="noreferrer">
          <span className="header-cta-label header-cta-label--full">Orçamento</span>
          <span className="header-cta-label header-cta-label--short">Falar</span>
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div id="mobile-navigation" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <button onClick={() => setOpen(false)} aria-label="Fechar menu"><X size={28} /></button>
        <img className="mobile-logo-original" src="/lab8-original-logo.jpg" alt="LAB8 Social Media Design" />
        <nav aria-label="Navegação móvel">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a href={wa('Olá! Quero um orçamento da LAB8.')} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
      </div>
    </header>
  );
}

function Marquee() {
  const text = 'Design que organiza • Estratégia que posiciona • Venda com credibilidade •';
  return (
    <div className="marquee" aria-label={text}>
      <div className="marquee-track">
        <span>{text}</span><span>{text}</span>
      </div>
      <div className="marquee-track" aria-hidden="true">
        <span>{text}</span><span>{text}</span>
      </div>
    </div>
  );
}

function ProfilePreview({ after = false }) {
  return (
    <div className={`profile-preview ${after ? 'profile-preview--after' : ''}`} aria-label={after ? 'Exemplo de perfil organizado' : 'Exemplo de perfil desorganizado'}>
      <div className="profile-top">
        <span className="profile-avatar" />
        <span />
        <span />
      </div>
      <div className="profile-copy"><i /><i /><i /></div>
      <div className="profile-grid">
        {Array.from({ length: 9 }, (_, index) => <i key={index} />)}
      </div>
      <b>{after ? 'TRANSFORMAÇÃO LAB8' : 'PERFIL SEM SISTEMA'}</b>
    </div>
  );
}

function PortfolioVisual({ variant }) {
  return (
    <div className={`project-visual project-visual--${variant}`} aria-hidden="true">
      <span className="project-orbit" />
      <span className="project-panel project-panel--one" />
      <span className="project-panel project-panel--two" />
      <strong>LAB8</strong>
    </div>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />

      <main id="conteudo">
        <section className="hero" id="top">
          <div className="hero-ghost" aria-hidden="true">
            <CircleDashed />
          </div>
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow eyebrow--light">Social Media Design Studio</span>
              <h1>
                <span>Transforma</span>
                <span>presença em</span>
                <span>percepção.</span>
              </h1>
            </div>
            <div className="hero-side">
              <p>Seu Instagram não precisa parecer improvisado. Transformamos perfis fracos em marcas profissionais, estratégicas e prontas para vender.</p>
              <div className="scroll-cue">
                <a href="#manifesto" aria-label="Ir para o manifesto"><ArrowDown /></a>
                <span><small>Role para explorar</small>Nossa metodologia</span>
              </div>
            </div>
          </div>
        </section>

        <section className="manifesto" id="manifesto">
          <Marquee />
          <div className="wide-grid manifesto-grid">
            <div className="manifesto-title">
              <span aria-hidden="true">WHY</span>
              <h2>Perfis fracos<br />perdem<br />valor.</h2>
            </div>
            <div className="manifesto-copy">
              <p>A maioria dos negócios falha no Instagram não por falta de produto, mas por falta de autoridade visual. Se o perfil parece amador, o preço sempre será questionado.</p>
              <blockquote>“Não é só feed bonito. É sistema de marca estratégico.”</blockquote>
            </div>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="section-lead">
            <h2>Ecossistema<br />LAB8</h2>
            <span>Full Stack Visual Solutions</span>
          </div>
          <div className="service-grid">
            {services.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="transformation" aria-labelledby="transformation-title">
          <h2 className="sr-only" id="transformation-title">Transformação visual antes e depois</h2>
          <article className="before">
            <span>Antes</span>
            <h3>O caos visual.</h3>
            <p>Perfil sem padrão, cores conflitantes, bio confusa e ausência de direção. O cliente entra, se perde e sai sem comprar.</p>
            <ProfilePreview />
          </article>
          <article className="after">
            <span>Depois</span>
            <h3>A marca LAB8.</h3>
            <p>Organização estratégica, autoridade visual imediata e um sistema pronto para crescer. Credibilidade que transforma atenção em oportunidade.</p>
            <ProfilePreview after />
          </article>
        </section>

        <section className="method" id="metodo">
          <div className="method-heading">
            <span>Processo / 05 etapas</span>
            <h2>Do diagnóstico<br />ao sistema.</h2>
            <p>A transformação não começa pela cor. Começa pelo que sua marca precisa comunicar e termina em uma estrutura que você consegue usar.</p>
          </div>
          <div className="method-list">
            {method.map(([number, title, description]) => (
              <article key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowUpRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio" id="portfolio">
          <div className="portfolio-heading">
            <div>
              <h2>Projetos</h2>
              <p>Direções visuais para marcas em movimento.</p>
            </div>
            <span>Portfólio demonstrativo — inserir cases oficiais</span>
          </div>
          <div className="project-grid">
            <article>
              <PortfolioVisual variant="blue" />
              <h3>Clinical Brand System</h3>
              <span>Saúde & Estética / Direção visual</span>
            </article>
            <article>
              <PortfolioVisual variant="white" />
              <h3>Fashion Identity</h3>
              <span>Moda & Lifestyle / Identidade</span>
            </article>
            <article>
              <PortfolioVisual variant="black" />
              <h3>Creative Portfolio</h3>
              <span>Serviços & Estratégia / Social</span>
            </article>
          </div>
        </section>

        <section className="pricing" id="pacotes">
          <div className="pricing-heading">
            <span>Escolha o nível certo</span>
            <h2>Investimento</h2>
          </div>
          <div className="pricing-grid">
            {packages.map((item) => (
              <article className={item.featured ? 'featured' : ''} key={item.name}>
                {item.featured && <span className="popular">Mais escolhido</span>}
                <div>
                  <span className="plan-label">{item.label}</span>
                  <h3>{item.name}</h3>
                  <ul>{item.items.map((entry) => <li key={entry}>{entry}</li>)}</ul>
                </div>
                <div className="plan-bottom">
                  <strong><small>R$</small>{item.price}</strong>
                  <a href={wa(`Olá! Quero saber mais sobre o pacote ${item.name} da LAB8.`)} target="_blank" rel="noreferrer">
                    Escolher pacote <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits" id="beneficios">
          <div className="benefits-intro">
            <span>O que muda</span>
            <h2>Bonito é pouco.<br />Precisa funcionar.</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="faq-intro">
            <h2>Dúvidas<br />frequentes.</h2>
            <p>Tudo o que você precisa saber antes de transformar sua presença digital.</p>
            <span><HelpCircle /></span>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary><span>{question}</span><Plus /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta" id="contato">
          <span className="cta-watermark" aria-hidden="true">LAB8</span>
          <div>
            <span>Próximo passo</span>
            <h2>Quer mudar<br />seu perfil<br />hoje?</h2>
            <a href={wa('Olá! Quero começar meu projeto com a LAB8.')} target="_blank" rel="noreferrer">
              Falar no WhatsApp <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <Wordmark />
            <p>Especialistas em Social Media Design. Transformamos negócios em marcas autorais e organizadas.</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label={`Abrir Instagram ${INSTAGRAM_HANDLE}`}>
              <InstagramMark size={18} /> {INSTAGRAM_HANDLE}
            </a>
          </div>
          <nav aria-label="Navegação do rodapé">
            <span>Navegação</span>
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-contact">
            <span>Contato</span>
            <a href={wa('Olá! Vim pelo site da LAB8.')} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">{INSTAGRAM_HANDLE}</a>
            <p>São Paulo, Brasil</p>
          </div>
          <div className="official-logo-zone">
            <span>Identidade original LAB8</span>
            <div>
              <img src="/lab8-original-logo.jpg" alt="Logo original LAB8 Social Media Design" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 LAB8 Social Media Design</p>
          <p>Todos os direitos reservados · {INSTAGRAM_HANDLE}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
