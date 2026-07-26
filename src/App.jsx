import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Menu, X } from 'lucide-react';

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

const services = [
  ['01', 'Identidade visual', 'Logo, paleta, tipografia e sistema visual aplicável no digital.'],
  ['02', 'Brand book completo', 'Diretrizes claras para manter consistência em todos os canais.'],
  ['03', 'Templates editáveis', 'Peças profissionais para feed, stories, destaques e campanhas.'],
  ['04', 'Posicionamento estratégico', 'Bio, conteúdo, estrutura e presença preparados para atrair e converter.'],
];

const packages = [
  ['Perfil Express', '49', ['Bio reorganizada', 'Paleta e tipografia', '3 templates de feed', '3 capas de destaques']],
  ['Identidade Social', '149', ['Tudo do Perfil Express', 'Logo tipográfico', '6 templates de feed', '6 templates de stories', 'Mini manual da marca']],
  ['Marca Social Completa', '349', ['Briefing estratégico', 'Logo e variações', 'Brand book completo', '20 templates', 'Pilares de conteúdo']],
];

const faqs = [
  ['Quanto tempo leva a entrega?', 'O Perfil Express é entregue em até 24 horas úteis. Os demais pacotes levam de 2 a 5 dias úteis.'],
  ['Os templates ficam editáveis?', 'Sim. Você recebe os links do Canva e pode trocar textos, fotos, cores e informações.'],
  ['Vocês também publicam os posts?', 'A gestão mensal e a publicação podem ser contratadas separadamente.'],
  ['Preciso já ter um logo?', 'Não. Podemos organizar o atual ou criar uma solução tipográfica nova.'],
];

function Brand({ light = false }) {
  return (
    <a className="brand" href="#top" aria-label="LAB8 Social Media Design — início">
      <img src={light ? '/lab8-logo-light.svg' : '/lab8-logo.svg'} alt="LAB8 Social Media Design" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Serviços', 'servicos'], ['Processo', 'processo'], ['Portfólio', 'portfolio'], ['Pacotes', 'pacotes'], ['FAQ', 'faq']];

  return <header>
    <div className="container header-inner">
      <Brand />
      <nav aria-label="Navegação principal">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a className="button" href={wa('Olá! Quero transformar meu Instagram com a LAB8.')} target="_blank" rel="noreferrer">Orçamento <ArrowRight size={16}/></a>
      <button className="menu" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu /></button>
    </div>
    <div className={`mobile ${open ? 'open' : ''}`}>
      <button onClick={() => setOpen(false)} aria-label="Fechar menu"><X /></button>
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
    </div>
  </header>;
}

function DigitalVisual() {
  return <div className="visual-shell" aria-label="Exemplo visual de uma presença digital estruturada">
    <div className="screen screen-main">
      <div className="screen-bar"><img src="/lab8-icon.svg" alt=""/><span>LAB8</span><i/><i/><i/></div>
      <div className="dashboard-title">Conteúdo e performance</div>
      <div className="metrics"><b>85,2K<small>alcance</small></b><b>7,8%<small>engajamento</small></b><b>34K<small>cliques</small></b></div>
      <div className="chart"><i/><i/><i/><i/><i/><i/><i/></div>
    </div>
    <div className="phone"><div className="phone-head">@lab8.md</div><div className="grid">{Array.from({length:9},(_,i)=><i key={i}/>)}</div></div>
    <div className="screen-card"><span>LAB8 BRAND SYSTEM</span><strong>Aa</strong><div><i/><i/><i/></div></div>
  </div>;
}

function App() {
  const [faq, setFaq] = useState(0);

  return <>
    <Header />
    <main id="top">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">LAB8 · SOCIAL MEDIA DESIGN</span>
            <h1>Transformamos o seu Instagram <em>em uma marca</em> que se destaca.</h1>
            <p>Reestruturação completa de perfis profissionais com estratégia, identidade visual e conteúdo que geram resultado.</p>
            <div className="actions"><a className="button" href={wa('Olá! Quero transformar meu perfil com a LAB8.')} target="_blank" rel="noreferrer">Quero transformar meu perfil <ArrowRight size={17}/></a><a className="link" href="#portfolio">Ver portfólio <ArrowRight size={15}/></a></div>
          </div>
          <DigitalVisual />
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="container service-grid">
          <div><span className="eyebrow">MAIS DO QUE DESIGN</span><h2>Estratégia, identidade e presença digital.</h2></div>
          {services.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="section" id="processo">
        <div className="container split">
          <div><span className="eyebrow">PROCESSO LAB8</span><h2>Um sistema digital que sua empresa consegue manter.</h2></div>
          <div className="steps">{['Diagnóstico do perfil e posicionamento','Direção visual e sistema da marca','Templates, conteúdo e organização','Entrega editável e orientação de uso'].map((x,i)=><div key={x}><b>0{i+1}</b><p>{x}</p></div>)}</div>
        </div>
      </section>

      <section className="section dark" id="portfolio">
        <div className="container">
          <span className="eyebrow">PORTFÓLIO</span><h2>Resultados que falam por si só.</h2>
          <div className="portfolio-grid">
            {['Beleza','Saúde','Moda','Serviços'].map((x,i)=><article key={x} className={`project p${i}`}><span>{x}</span><div className="project-phone"><div className="grid">{Array.from({length:9},(_,j)=><i key={j}/>)}</div></div><h3>{['Clínica Vitale','Nutri Balance','Voga Clothing','Nexo Serviços'][i]}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="pacotes">
        <div className="container"><span className="eyebrow">PACOTES</span><h2>Comece pelo nível certo para sua marca.</h2>
          <div className="pricing">{packages.map(([name,price,items],i)=><article className={i===1?'featured':''} key={name}><span>0{i+1}</span><h3>{name}</h3><div className="price"><small>R$</small>{price}</div><ul>{items.map(x=><li key={x}><Check size={15}/>{x}</li>)}</ul><a href={wa(`Olá! Quero saber mais sobre o pacote ${name} da LAB8.`)} target="_blank" rel="noreferrer">Escolher pacote <ArrowRight size={16}/></a></article>)}</div>
        </div>
      </section>

      <section className="section faq" id="faq"><div className="container split"><div><span className="eyebrow">FAQ</span><h2>Dúvidas frequentes.</h2></div><div>{faqs.map(([q,a],i)=><article className={faq===i?'active':''} key={q}><button onClick={()=>setFaq(faq===i?-1:i)} aria-expanded={faq===i}><span>{q}</span><ChevronDown size={20}/></button><p>{a}</p></article>)}</div></div></section>

      <section className="cta"><div className="container"><span className="eyebrow">PRONTO PARA MUDAR?</span><h2>Seu Instagram pode começar a parecer uma empresa hoje.</h2><a className="button light" href={wa('Olá! Quero começar meu projeto com a LAB8.')} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowRight size={17}/></a></div></section>
    </main>
    <footer><div className="container"><Brand light/><p>Infinite creativity • Strategic design • Social impact</p><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label={`Abrir Instagram ${INSTAGRAM_HANDLE}`}><InstagramMark size={18}/> {INSTAGRAM_HANDLE}</a></div></footer>
  </>;
}

export default App;
