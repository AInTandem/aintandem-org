
import React from 'react';

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

const App: React.FC = () => {
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
            AInTandem.org 理想宣言 V1
          </div>
          <h1 className="hero-title">
            人與 AI 的 <span className="hero-title-gradient">共生創作場</span>
          </h1>
          <p className="hero-subtitle">
            致力於本地化及專屬化 AI<br/>實現人與 AI 無縫共享知識及經驗的次世代工作場域。
          </p>
          <div className="hero-cta-container">
            <a
              href="#install"
              onClick={(e) => handleHeroClick(e, '#install')}
              className="btn-primary"
            >
              開始使用 AInTandem
            </a>
            <a
              href="#philosophy"
              onClick={(e) => handleHeroClick(e, '#philosophy')}
              className="btn-secondary"
            >
              閱讀宣言內容
            </a>
          </div>

          <div className="hero-credits">
            <div className="hero-credit-item"><span className="hero-credit-name">Lex Yang</span><div className="hero-credit-divider"></div></div>
            <div className="hero-credit-item"><span className="hero-credit-name">aka unclemon</span><div className="hero-credit-divider"></div></div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <Section id="philosophy" title="理念與目標" subtitle="建立每個人專屬的 AI 合作體系，並在保有主權的基礎上相互協作。">
        <div className="philosophy-grid">
          <PhilosophyCard title="AI 共創" desc="現在進行式。人與 AI 並行操作，共享同一個工作環境。" status="Active" />
          <PhilosophyCard title="開源共享" desc="進程階段。成立 aintandem.org 的核心目的。" status="In Progress" />
          <PhilosophyCard title="社群共治" desc="未來發展目標。基於個人知識及經驗主權的網路合作。" status="Vision" />
        </div>
      </Section>

      {/* Roadmap Section */}
      <Section id="roadmap" title="發展藍圖" subtitle="從基礎設施到智能工作流的完整系統架構。" className="section-bg-subtle">
        <div className="roadmap-grid">
          <RoadmapCard title="Sandboxes" items={["實體檔案系統", "隔離工作環境", "即時可觀測性"]} />
          <RoadmapCard title="Workspace" items={["Network Proxy", "Port Forwarding", "Code Server & Docker"]} />
          <RoadmapCard title="AI Coder / Agent" items={["Qwen / Claude", "Gemini / Codex", "Configurable Agents"]} />
          <RoadmapCard title="Context / Workflow" items={["Sharable Knowledge", "Project Specs", "Human In-The-Loop"]} />
        </div>
      </Section>

      {/* Core Features */}
      <Section id="features" title="核心功能解析" subtitle="AInTandem 如何重定義「與 AI 協作」？">
        <div className="features-grid">
          <FeatureBox number="01" title="沙盒並行工作場">
            <p>每個沙盒是獨立工作環境，具備<b>真實檔案系統</b>與專案環境，而非雲端臨時生成的 demo。</p>
            <ul className="feature-list">
              <li>實體沙盒：獨立工作空間</li>
              <li>多端接入：本地、筆電或瀏覽器連線</li>
              <li>並行性：人與 AI 同時操作、同步觀測</li>
            </ul>
          </FeatureBox>

          <FeatureBox number="02" title="AI Coder / Agent">
            <p>AI 在系統中是<b>「並行主體，但非主權主體」</b>。不是全自動黑盒，而是受控的協作伙伴。</p>
            <ul className="feature-list">
              <li>自主行動：可持續運作 30-60 分鐘完成具體任務</li>
              <li>可回收/可監控：人擁有最終決策與中斷權</li>
              <li>目標導向：專注於完成特定工程任務</li>
            </ul>
          </FeatureBox>

          <FeatureBox number="03" title="同步視野與上下文" badge="開發中">
            <p>解決「你跟 AI 看不同世界」的問題。透過 <b>Context Manager</b> 模組，人與 AI 保持完全同步的開發語境。</p>
          </FeatureBox>

          <FeatureBox number="04" title="Codebase 理解與逆向" badge="開發中">
            <p>深入分析既有代碼庫。自動產生架構文件、心智模型、Call Graph 以及 DOM ↔ React Component 的精準對應。</p>
          </FeatureBox>
        </div>
      </Section>

      {/* Philosophy Design */}
      <Section id="philosophy-design" title="系統設計哲學" subtitle="我們堅持什麼，我們不是什麼。">
        <div className="philosophy-design-grid">
          <div className="philosophy-design-column">
            <h3 className="philosophy-design-title philosophy-design-title-success">
              <span className="check-icon">✓</span> AInTandem 是...
            </h3>
            <ul className="philosophy-design-list philosophy-design-list-success">
              <li>人主導的並行協作系統</li>
              <li>模型無關 (Model Agnostic) 的架構</li>
              <li>真實環境、真實專案、真實檔案</li>
              <li>長時間自主行動但可隨時回收</li>
            </ul>
          </div>
          <div className="philosophy-design-column">
            <h3 className="philosophy-design-title philosophy-design-title-error">
              <span className="x-icon">×</span> AInTandem 不是...
            </h3>
            <ul className="philosophy-design-list philosophy-design-list-error">
              <li>一句話生成 App 的炫技 Demo</li>
              <li>無人監控、擁有破壞性權限的黑盒代理</li>
              <li>綁定特定單一模型的產品</li>
              <li>雲端拋棄式的暫時環境</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Install Section */}
      <Section id="install" title="安裝與開始" subtitle="快速部署您的 AInTandem 環境。">
        <div className="install-grid">
          <div className="install-card">
            <h3 className="install-card-title">AInTandem Desktop</h3>
            <p className="install-card-desc">推薦一般開發者使用。提供直觀的 GUI 管理 Workspace、Sandbox 與 AI Agent。</p>
            <a
              href="https://github.com/AInTandem/ce-desktop/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="install-button"
            >
              <svg className="install-button-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H8l4-4 4 4h-3v4h-2z"/></svg>
              <span>下載 Desktop (macOS/Win/Ubuntu)</span>
            </a>
          </div>

          <div className="install-card">
            <h3 className="install-card-title">Docker Compose</h3>
            <p className="install-card-code">
              git clone https://github.com/AInTandem/deploy.git<br/>
              cd deploy && docker compose up -d
            </p>
            <p className="install-card-note">適合伺服器部署或進階用戶。請確保 Docker 環境已安裝。</p>
          </div>
        </div>
      </Section>

      {/* Tech Specs */}
      <Section id="specs" title="Flexy Sandbox 規格" subtitle="標準化且可自訂的沙盒環境。" className="section-bg-subtle">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-header-cell">元件</th>
                <th className="table-header-cell">詳情</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell table-cell-bold">作業系統</td>
                <td className="table-cell">Ubuntu 22.04 LTS</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell table-cell-bold">開發工具</td>
                <td className="table-cell table-cell-mono">Node.js (LTS), Python 3, Git, GitHub CLI (gh)</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell table-cell-bold">終端管理</td>
                <td className="table-cell">ttyd + tmux (網頁終端和多會話管理)</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell table-cell-bold">AI 編輯器</td>
                <td className="table-cell">CoSpec AI (Markdown Driven Editor)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="footer-brand">AInTandem.org</div>
            <p className="footer-copyright">© 2025 Lex Yang (unclemon). Built for the future of human-AI collaboration.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/AInTandem/" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://discord.gg/x7RGMugJ59" target="_blank" rel="noopener noreferrer" className="footer-link">Discord</a>
            <a href="https://aintandem.github.io/orchestrator-api/" target="_blank" rel="noopener noreferrer" className="footer-link">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
