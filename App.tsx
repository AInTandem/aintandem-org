
import React from 'react';
import type { TranslationData } from './src/types/translations';

interface AppProps {
  translations: TranslationData;
}

const Section: React.FC<{ id: string; title: string; subtitle?: string; children: React.ReactNode; className?: string }> = ({ id, title, subtitle, children, className }) => (
  <section id={id} className={`section ${className || ''}`}>
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-accent-line"></div>
    </div>
    {children}
  </section>
);

const RoadmapCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    <ul className="card-list">
      {items.map((item, idx) => (
        <li key={idx} className="card-list-item">
          <span className="card-list-bullet">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FeatureBox: React.FC<{ number: string; title: string; children: React.ReactNode; badge?: string }> = ({ number, title, children, badge }) => (
  <div className="feature-box">
    <div className="feature-box-number-bg">
      {number}
    </div>
    <div className="feature-box-content">
      <div className="feature-box-header">
        <span className="feature-box-number">{number}</span>
        <h3 className="feature-box-title">{title}</h3>
        {badge && <span className="feature-box-badge">{badge}</span>}
      </div>
      <div className="feature-box-content-text">
        {children}
      </div>
    </div>
  </div>
);

const PhilosophyCard: React.FC<{ title: string; desc: string; status: string }> = ({ title, desc, status }) => (
  <div className="philosophy-card">
    <div className="philosophy-card-status">{status}</div>
    <h3 className="philosophy-card-title">{title}</h3>
    <p className="philosophy-card-desc">{desc}</p>
  </div>
);

const App: React.FC<AppProps> = ({ translations }) => {
  const handleHeroClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg-radial"></div>
        <div className="hero-bg-pattern"></div>

        <div className="hero-content">
          <div className="hero-tagline">
            {translations.hero.tagline}
          </div>
          <h1 className="hero-title">
            {translations.hero.title} <span className="hero-title-gradient">{translations.hero.titleGradient}</span>
          </h1>
          <p className="hero-subtitle" dangerouslySetInnerHTML={{ __html: translations.hero.subtitle }} />
          <div className="hero-cta-container">
            <a
              href="#install"
              onClick={(e) => handleHeroClick(e, '#install')}
              className="btn-primary"
            >
              {translations.hero.ctaPrimary}
            </a>
            <a
              href="#philosophy"
              onClick={(e) => handleHeroClick(e, '#philosophy')}
              className="btn-secondary"
            >
              {translations.hero.ctaSecondary}
            </a>
          </div>

          <div className="hero-credits">
            {translations.hero.credits.map((credit, idx) => (
              <React.Fragment key={idx}>
                <div className="hero-credit-item">
                  <span className="hero-credit-name">{credit}</span>
                  {idx < translations.hero.credits.length - 1 && <div className="hero-credit-divider"></div>}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <Section id="philosophy" title={translations.sections.philosophy.title} subtitle={translations.sections.philosophy.subtitle}>
        <div className="philosophy-grid">
          {translations.sections.philosophy.cards.map((card, idx) => (
            <PhilosophyCard
              key={idx}
              title={card.title}
              desc={card.desc}
              status={card.status}
            />
          ))}
        </div>
      </Section>

      {/* Roadmap Section */}
      <Section id="roadmap" title={translations.sections.roadmap.title} subtitle={translations.sections.roadmap.subtitle} className="section-bg-subtle">
        <div className="roadmap-grid">
          {translations.sections.roadmap.cards.map((card, idx) => (
            <RoadmapCard key={idx} title={card.title} items={card.items} />
          ))}
        </div>
      </Section>

      {/* Core Features */}
      <Section id="features" title={translations.sections.features.title} subtitle={translations.sections.features.subtitle}>
        <div className="features-grid">
          {translations.sections.features.items.map((item, idx) => (
            <FeatureBox
              key={idx}
              number={item.number}
              title={item.title}
              badge={item.badge}
            >
              <p dangerouslySetInnerHTML={{ __html: item.desc }} />
              {item.list && (
                <ul className="feature-list">
                  {item.list.map((listItem, listIdx) => (
                    <li key={listIdx}>{listItem}</li>
                  ))}
                </ul>
              )}
            </FeatureBox>
          ))}
        </div>
      </Section>

      {/* Philosophy Design */}
      <Section id="philosophy-design" title={translations.sections.philosophyDesign.title} subtitle={translations.sections.philosophyDesign.subtitle}>
        <div className="philosophy-design-grid">
          <div className="philosophy-design-column">
            <h3 className="philosophy-design-title philosophy-design-title-success">
              <span className="check-icon">✓</span> {translations.sections.philosophyDesign.is}
            </h3>
            <ul className="philosophy-design-list philosophy-design-list-success">
              {translations.sections.philosophyDesign.isList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="philosophy-design-column">
            <h3 className="philosophy-design-title philosophy-design-title-error">
              <span className="x-icon">×</span> {translations.sections.philosophyDesign.isNot}
            </h3>
            <ul className="philosophy-design-list philosophy-design-list-error">
              {translations.sections.philosophyDesign.isNotList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Install Section */}
      <Section id="install" title={translations.sections.install.title} subtitle={translations.sections.install.subtitle}>
        <div className="install-grid">
          <div className="install-card">
            <h3 className="install-card-title">{translations.sections.install.desktop.title}</h3>
            <p className="install-card-desc">{translations.sections.install.desktop.desc}</p>
            <a
              href="https://github.com/AInTandem/ce-desktop/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="install-button"
            >
              <svg className="install-button-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H8l4-4 4 4h-3v4h-2z"/></svg>
              <span>{translations.sections.install.desktop.button}</span>
            </a>
          </div>

          <div className="install-card">
            <h3 className="install-card-title">{translations.sections.install.docker.title}</h3>
            <p className="install-card-code" dangerouslySetInnerHTML={{ __html: translations.sections.install.docker.code }} />
            <p className="install-card-note">{translations.sections.install.docker.note}</p>
          </div>
        </div>
      </Section>

      {/* Tech Specs */}
      <Section id="specs" title={translations.sections.specs.title} subtitle={translations.sections.specs.subtitle} className="section-bg-subtle">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-header-cell">{translations.sections.specs.table.component}</th>
                <th className="table-header-cell">{translations.sections.specs.table.details}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell table-cell-bold">{translations.sections.specs.table.os.name}</td>
                <td className="table-cell">{translations.sections.specs.table.os.value}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell table-cell-bold">{translations.sections.specs.table.devTools.name}</td>
                <td className="table-cell table-cell-mono">{translations.sections.specs.table.devTools.value}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell table-cell-bold">{translations.sections.specs.table.terminal.name}</td>
                <td className="table-cell">{translations.sections.specs.table.terminal.value}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell table-cell-bold">{translations.sections.specs.table.editor.name}</td>
                <td className="table-cell">{translations.sections.specs.table.editor.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="footer-brand">{translations.footer.brand}</div>
            <p className="footer-copyright">{translations.footer.copyright}</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/AInTandem/" target="_blank" rel="noopener noreferrer" className="footer-link">{translations.footer.github}</a>
            <a href="https://discord.gg/x7RGMugJ59" target="_blank" rel="noopener noreferrer" className="footer-link">{translations.footer.discord}</a>
            <a href="https://aintandem.github.io/orchestrator-api/" target="_blank" rel="noopener noreferrer" className="footer-link">{translations.footer.documentation}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
