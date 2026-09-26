import { useEffect, useState } from "react";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 400);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    document.getElementById("intro-title")?.focus({ preventScroll: true });
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <>
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "0",
          height: "0",
          overflow: "hidden",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <symbol id="arrow" viewBox="0 0 24 24">
            <path d="M7 17 17 7M7 7h10v10" />
          </symbol>
          <symbol id="code" viewBox="0 0 24 24">
            <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 22" />
          </symbol>
          <symbol id="book" viewBox="0 0 24 24">
            <path d="M12 7v14m0-14C8 4 5 4 2 5v14c3-1 6-1 10 2 4-3 7-3 10-2V5c-3-1-6-1-10 2Z" />
          </symbol>
          <symbol id="box" viewBox="0 0 24 24">
            <path d="m12 3 9 5v9l-9 5-9-5V8l9-5Zm0 10 9-5M12 13 3 8m9 5v9M7.5 5.5l9 5" />
          </symbol>
          <symbol id="coffee" viewBox="0 0 24 24">
            <path d="M4 8h13v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm13 1h1a3 3 0 1 1 0 6h-1M7 2v2m4-2v2m4-2v2M2 22h19" />
          </symbol>
          <symbol id="heart" viewBox="0 0 24 24">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
          </symbol>
          <symbol id="mail" viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="m3 7 9 6 9-6" />
          </symbol>
          <symbol id="chat" viewBox="0 0 24 24">
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
            <path d="M8 11h.01M12 11h.01M16 11h.01" />
          </symbol>
          <symbol id="bolt" viewBox="0 0 24 24">
            <path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z" />
          </symbol>
          <symbol id="download" viewBox="0 0 24 24">
            <path d="M12 3v12m-5-5 5 5 5-5M5 16v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4" />
          </symbol>
          <symbol id="github" viewBox="0 0 24 24">
            <path
              d="M9 19c-4.3 1.3-4.3-2-6-2m12 5v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.9a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C5.1.6 3.9 1 3.9 1a5 5 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.2 6.6 6.2 6.9a3.4 3.4 0 0 0-.9 2.6V22"
              transform="translate(1 0) scale(.95)"
            />
          </symbol>
          <symbol id="circle" viewBox="0 0 24 24">
            <circle cx="14" cy="9" r="6" />
            <path d="M4 3v18" />
          </symbol>
          <symbol id="game" viewBox="0 0 24 24">
            <path d="M6 7h12a3 3 0 0 1 3 2l2 8a3 3 0 0 1-5 3l-3-3H9l-3 3a3 3 0 0 1-5-3l2-8a3 3 0 0 1 3-2Z" />
            <path d="M7 10v6m-3-3h6m7-2h.01M20 14h.01" />
          </symbol>
        </defs>
      </svg>
      <a href="#links" className="skip">
        Skip to links
      </a>
      <div className="shell">
        <header className="topbar" id="top">
          <a href="./" className="wordmark" aria-label="Despical home">
            <img
              className="mark"
              src="favicon.svg"
              width="52"
              height="52"
              alt=""
            />
            Despical
          </a>
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#links">Projects</a>
            <a href="#tech-stack">Tech Stack</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <main className="layout">
          <section className="intro entry" aria-labelledby="intro-title">
            <h1 id="intro-title" tabIndex={-1}>
              <span>BERKE</span> <span>AKÇEN</span>
            </h1>
            <div className="education">
              <p className="education-title">Computer Engineer</p>
              <p className="education-detail">
                4th-year student <span aria-hidden="true">·</span> 2023-2027
              </p>
            </div>
            <p className="intro-copy">
              Hey there! I build web applications and backend services with Java
              and Spring. I enjoy working across APIs, databases, and the
              interfaces that bring them together. I also create open-source
              libraries, Minecraft plugins, and game mods.
            </p>
            <div className="intro-line" aria-hidden="true"></div>
            <div className="small-links">
              <a
                className="pill"
                href="https://discord.gg/uXVU8jmtpU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="pill-brand"
                  src="icons/discord.svg"
                  width="32"
                  height="32"
                  alt=""
                />
                Join my Discord
              </a>
              <a className="pill" href="mailto:contact@despical.dev">
                <svg className="icon" aria-hidden="true">
                  <use href="#mail" />
                </svg>
                Get in touch
              </a>
            </div>
            <section
              className="tech-stack"
              id="tech-stack"
              aria-labelledby="stack-title"
            >
              <h2 id="stack-title" className="sr-only">
                Technologies
              </h2>
              <div className="stack-group">
                <h3>Languages</h3>
                <div className="tech-tags">
                  <span>Java</span>
                  <span>Python</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>Groovy</span>
                </div>
              </div>
              <div className="stack-group">
                <h3>Backend &amp; APIs</h3>
                <div className="tech-tags">
                  <span>Spring Boot</span>
                  <span>Spring MVC</span>
                  <span>Spring Security</span>
                  <span>Hibernate / JPA</span>
                  <span>REST APIs</span>
                  <span>JWT</span>
                  <span>OpenAPI / Swagger</span>
                  <span>SMTP / IMAP</span>
                </div>
              </div>
              <div className="stack-group">
                <h3>Web &amp; UI</h3>
                <div className="tech-tags">
                  <span>Thymeleaf</span>
                  <span>Tailwind CSS</span>
                  <span>Vite</span>
                </div>
              </div>
              <div className="stack-group">
                <h3>Databases &amp; Caching</h3>
                <div className="tech-tags">
                  <span>MySQL</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                  <span>Flyway</span>
                </div>
              </div>
              <div className="stack-group">
                <h3>DevOps</h3>
                <div className="tech-tags">
                  <span>Docker</span>
                  <span>Linux</span>
                  <span>Nginx</span>
                  <span>Git</span>
                  <span>GitHub Actions</span>
                  <span>Mail Server Administration</span>
                  <span>SPF / DKIM / DMARC</span>
                </div>
              </div>
              <div className="stack-group">
                <h3>Observability</h3>
                <div className="tech-tags">
                  <span>Prometheus</span>
                  <span>Grafana</span>
                </div>
              </div>
              <div className="stack-group">
                <h3>Build &amp; Testing</h3>
                <div className="tech-tags">
                  <span>Gradle</span>
                  <span>Maven</span>
                  <span>JUnit</span>
                  <span>Mockito</span>
                  <span>Cucumber</span>
                  <span>Postman</span>
                </div>
              </div>
              <div className="stack-group">
                <h3>Also Worked With</h3>
                <div className="tech-tags">
                  <span>Django</span>
                  <span>Kotlin</span>
                  <span>C# / .NET</span>
                  <span>C++</span>
                </div>
              </div>
            </section>
          </section>
          <div id="links" className="links entry">
            <section className="link-section" aria-labelledby="projects-title">
              <div className="section-heading">
                <h2 id="projects-title">Some of the things I've built</h2>
              </div>
              <a
                className="featured"
                href="https://mail.despical.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="featured-top">
                  <span className="brand-icon">
                    <img
                      className="site-icon"
                      src="icons/dispatch.svg"
                      width="32"
                      height="32"
                      alt=""
                    />
                  </span>
                  <span className="featured-label">Featured project</span>
                </div>
                <div className="featured-bottom">
                  <div>
                    <h3>Dispatch</h3>
                    <p>
                      A focused workspace for your email accounts. Read, reply,
                      search, and organize messages across the providers you
                      already use, all from one inbox.
                    </p>
                  </div>
                  <span className="arrow-disc">
                    <svg className="icon" aria-hidden="true">
                      <use href="#arrow" />
                    </svg>
                  </span>
                </div>
              </a>
              <div className="project-pair">
                <a
                  className="project-card"
                  href="https://hub.despical.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-top">
                    <img
                      className="site-icon"
                      src="icons/hub.svg"
                      width="32"
                      height="32"
                      alt=""
                    />
                    <svg className="icon" aria-hidden="true">
                      <use href="#arrow" />
                    </svg>
                  </div>
                  <h3>Plugin Hub</h3>
                  <p>
                    The home of my Minecraft plugins. Explore releases, download
                    the plugins you own, and manage your licenses and source
                    access in one place.
                  </p>
                  <span className="project-domain">hub.despical.dev</span>
                </a>
                <a
                  className="project-card"
                  href="https://tikfetch.despical.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-top">
                    <img
                      className="site-icon"
                      src="icons/tikfetch.svg"
                      width="32"
                      height="32"
                      alt=""
                    />
                    <svg className="icon" aria-hidden="true">
                      <use href="#arrow" />
                    </svg>
                  </div>
                  <h3>TikFetch</h3>
                  <p>
                    Save public TikTok videos, photo galleries, and MP3 audio
                    without watermarks or ads. Paste a link and download what
                    you need.
                  </p>
                  <span className="project-domain">tikfetch.despical.dev</span>
                </a>
              </div>
              <div className="resource-grid">
                <a
                  className="resource"
                  href="https://docs.despical.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="site-icon"
                    src="icons/docs.svg"
                    width="32"
                    height="32"
                    alt=""
                  />
                  <div>
                    <span className="resource-name">Documentation</span>
                    <span className="resource-sub">
                      Setup guides, configuration examples, and practical
                      references for my plugins, tools, and frameworks. Start
                      here when you want to get something running.
                    </span>
                  </div>
                  <svg className="icon" aria-hidden="true">
                    <use href="#arrow" />
                  </svg>
                </a>
                <a
                  className="resource"
                  href="https://libs.despical.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="site-icon"
                    src="icons/libraries.svg"
                    width="32"
                    height="32"
                    alt=""
                  />
                  <div>
                    <span className="resource-name">Despical’s Libraries</span>
                    <span className="resource-sub">
                      Reusable libraries for Java applications and Minecraft
                      development. Find general-purpose utilities in Commons,
                      plus specialized tools for plugins, with Maven and Gradle
                      dependency snippets.
                    </span>
                  </div>
                  <svg className="icon" aria-hidden="true">
                    <use href="#arrow" />
                  </svg>
                </a>
                <a
                  className="resource"
                  href="https://javadoc.despical.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="site-icon"
                    src="icons/javadoc.svg"
                    width="32"
                    height="32"
                    alt=""
                  />
                  <div>
                    <span className="resource-name">JavaDoc</span>
                    <span className="resource-sub">
                      Generated API references for my open-source projects.
                      Explore classes, methods, and implementation details when
                      integrating a library or building on top of it.
                    </span>
                  </div>
                  <svg className="icon" aria-hidden="true">
                    <use href="#arrow" />
                  </svg>
                </a>
              </div>
            </section>
            <section className="link-section" aria-labelledby="profiles-title">
              <div className="section-heading">
                <h2 id="profiles-title">Find me around</h2>
              </div>
              <div className="profile-list">
                <a
                  className="profile-link"
                  href="https://github.com/Despical"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="brand ">
                    <img
                      className="site-icon mono-logo"
                      src="icons/github.svg"
                      width="32"
                      height="32"
                      alt=""
                    />
                  </span>
                  <span className="profile-copy">
                    <span className="profile-name">GitHub</span>
                    <span className="profile-description">
                      The code behind my web applications, backend services,
                      Java libraries, and plugins. Browse the source, explore
                      how things work, or contribute to an open-source project.
                    </span>
                  </span>
                  <svg className="icon" aria-hidden="true">
                    <use href="#arrow" />
                  </svg>
                </a>
                <a
                  className="profile-link"
                  href="https://www.spigotmc.org/resources/authors/615094"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="brand spigot">
                    <img
                      className="site-icon"
                      src="icons/spigot.svg"
                      width="32"
                      height="32"
                      alt=""
                    />
                  </span>
                  <span className="profile-copy">
                    <span className="profile-name">SpigotMC</span>
                    <span className="profile-description">
                      Minecraft minigames and server plugins, with downloads,
                      release notes, and community reviews. Find something new
                      for your server and keep your favorites up to date.
                    </span>
                  </span>
                  <svg className="icon" aria-hidden="true">
                    <use href="#arrow" />
                  </svg>
                </a>
                <a
                  className="profile-link"
                  href="https://builtbybit.com/creators/257098"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="brand bbb">
                    <img
                      className="site-icon"
                      src="icons/builtbybit.svg"
                      width="32"
                      height="32"
                      alt=""
                    />
                  </span>
                  <span className="profile-copy">
                    <span className="profile-name">BuiltByBit</span>
                    <span className="profile-description">
                      Another home for my Minecraft work, with a focus on
                      premium plugins. Explore resources built for server owners
                      looking to add something special to their communities.
                    </span>
                  </span>
                  <svg className="icon" aria-hidden="true">
                    <use href="#arrow" />
                  </svg>
                </a>
                <a
                  className="profile-link"
                  href="https://modrinth.com/user/Despical"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="brand modrinth">
                    <img
                      className="site-icon"
                      src="modrinth.svg"
                      width="32"
                      height="32"
                      alt=""
                    />
                  </span>
                  <span className="profile-copy">
                    <span className="profile-name">Modrinth</span>
                    <span className="profile-description">
                      Free plugins for the Minecraft community, with
                      straightforward downloads and current releases. An easy
                      place to discover my work and try it on your server.
                    </span>
                  </span>
                  <svg className="icon" aria-hidden="true">
                    <use href="#arrow" />
                  </svg>
                </a>
                <a
                  className="profile-link"
                  href="https://www.nexusmods.com/profile/Despical"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="brand nexus">
                    <img
                      className="site-icon"
                      src="nexus-mods.svg"
                      width="32"
                      height="32"
                      alt=""
                    />
                  </span>
                  <span className="profile-copy">
                    <span className="profile-name">Nexus Mods</span>
                    <span className="profile-description">
                      Mods for games I enjoy, from quality-of-life improvements
                      to handy in-game tools. Small projects that make everyday
                      gameplay a little more enjoyable.
                    </span>
                  </span>
                  <svg className="icon" aria-hidden="true">
                    <use href="#arrow" />
                  </svg>
                </a>
              </div>
            </section>
            <section className="link-section" aria-labelledby="support-title">
              <div className="section-heading">
                <h2 id="support-title">Support my work</h2>
              </div>
              <div className="support-row">
                <a
                  className="support-link"
                  href="https://github.com/sponsors/Despical"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="support-brand mono-logo"
                    src="icons/github.svg"
                    width="32"
                    height="32"
                    alt=""
                  />
                  GitHub Sponsors
                </a>
                <a
                  className="support-link"
                  href="https://buymeacoffee.com/despical"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="support-brand"
                    src="icons/coffee.svg"
                    width="32"
                    height="32"
                    alt=""
                  />
                  Buy me a coffee
                </a>
                <a
                  className="support-link"
                  href="https://patreon.com/despical"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="support-brand"
                    src="icons/patreon.svg"
                    width="32"
                    height="32"
                    alt=""
                  />
                  Patreon
                </a>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer" id="contact">
          <span>© 2026 Berke Akçen</span>
          <a className="email" href="mailto:contact@despical.dev">
            contact@despical.dev
          </a>
        </footer>
      </div>
      <button
        className={`back-to-top${showBackToTop ? " is-visible" : ""}`}
        onClick={scrollToTop}
        type="button"
        aria-label="Back to top"
      >
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5m-6 6 6-6 6 6" />
        </svg>
      </button>
    </>
  );
}

export default App;
