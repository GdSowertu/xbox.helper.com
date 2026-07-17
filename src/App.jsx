import { useState } from "react";

function Header({ dark, onToggleTheme }) {
  return (
    <header className="header">
      <div className="logoBlock">
        <div className="logo">⚡</div>
        <div>
          <h1>БОСС картеля</h1>
          <p>trade v kripte + work in Unity + famous youtuber and tiktoker</p>
        </div>
      </div>

      <nav className="nav">
        <a href="#about">О себе</a>
        <a href="#skills">Навыки</a>
        <a href="#projects">Проекты</a>
        <button className="themeButton" onClick={onToggleTheme}>
          {dark ? "☀️ Светлая" : "🌙 Тёмная"}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <p className="badge">React + Vite</p>
        <h2>убил картеля,я как декстер морган,булим детей вместе с другом</h2>
        <p>
          Это сайт-визитка, собранный из React-компонентов. Здесь можно показать
          навыки, проекты и свой стиль разработки.
        </p>
        <div className="heroButtons">
          <a className="primaryButton" href="#projects">Смотреть проекты</a>
          <a className="ghostButton" href="#contacts">Связаться</a>
        </div>
      </div>

      <div className="heroCard">
        <div className="avatar">👨‍💻</div>
        <h3>Frontend Developer</h3>
        <p>HTML • CSS • JavaScript • React</p>
        <div className="status">Готов к новым проектам</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section glass">
      <h2>О себе</h2>
      <p>
        Я учусь делать современные сайты и приложения. Мне нравится превращать
        идеи в работающие проекты: от простых страниц до интерактивных интерфейсов.
      </p>
    </section>
  );
}

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Git",
    "UI-дизайн",
    "Анимации"
  ];

  return (
    <section id="skills" className="section">
      <h2>Навыки</h2>
      <div className="skillsGrid">
        {skills.map((skill) => (
          <div className="skillCard" key={skill}>
            <span>✓</span>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Сайт-визитка",
      description: "Первая React-страница с компонентами, карточками и темой.",
      tag: "React"
    },
    {
      title: "HTML Tycoon",
      description: "Мини-игра с деньгами, покупками, генераторами и базой.",
      tag: "Game"
    },
    {
      title: "Будущий проект",
      description: "Место для нового проекта: бот, игра, сайт или приложение.",
      tag: "Idea"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Проекты</h2>
      <div className="projectGrid">
        {projects.map((project) => (
          <article className="projectCard" key={project.title}>
            <div className="projectTag">{project.tag}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button>Подробнее</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="section glass contactSection">
      <h2>Контакты</h2>
      <p>Здесь можно указать почту, Telegram, GitHub или ссылку на портфолио.</p>
      <div className="contactCards">
        <div className="contactCard">📧 email@example.com</div>
        <div className="contactCard">💬 @username</div>
        <div className="contactCard">🌐 github.com/username</div>
      </div>
    </section>
  );
}
function CoolTerminalSection() {
  const commands = [
    {
      command: "npm create vite@latest react-portfolio-starter",
      result: "Создан новый React-проект",
    },
    {
      command: "cd react-portfolio-starter",
      result: "Переход в папку проекта",
    },
    {
      command: "npm install",
      result: "Зависимости успешно установлены",
    },
    {
      command: "npm run dev",
      result: "Сайт запущен на localhost:5173",
    },
    {
      command: "git init",
      result: "Git начал отслеживать проект",
    },
    {
      command: "git add .",
      result: "Файлы добавлены к сохранению",
    },
    {
      command: 'git commit -m "Первое сохранение сайта"',
      result: "Версия проекта сохранена",
    },
  ];
return (
    <section className="section">
      <div className="terminalHeaderText">
        <p className="badge">Console + Git</p>
        <h2>Моя консоль разработчика</h2>
        <p>
          Здесь показаны команды, которые используются для запуска сайта,
          установки зависимостей и сохранения проекта через Git.
        </p>
      </div>

      <div className="coolTerminal">
        <div className="terminalGlow"></div>

        <div className="terminalWindowTop">
          <div className="terminalButtons">
            <span className="redButton"></span>
            <span className="yellowButton"></span>
            <span className="greenButton"></span>
          </div>

          <p className="terminalTitle">developer-console.exe</p>
        </div>

        <div className="terminalScreen">
          <div className="terminalIntro">
            <span className="terminalUser">student@portfolio</span>
            <span className="terminalPath"> ~/react-site</span>
          </div>

          {commands.map((item, index) => (
            <div
              className="terminalLine"
              style={{ animationDelay: '${index * 0.35}s' }}
              key={item.command}
            >
              <p className="commandText">
                <span className="terminalArrow">&gt;</span> {item.command}
              </p>
              <p className="resultText">{item.result}</p>
            </div>
          ))}

          <div className="activeCommand">
            <span className="terminalArrow">&gt;</span>
            <span className="typingText">Готов к новым командам</span>
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <div className="backgroundGlow glowOne"></div>
      <div className="backgroundGlow glowTwo"></div>

      <Header dark={dark} onToggleTheme={() => setDark(!dark)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GameSection />
        <CoolTerminalSection />
        <Contacts />
      </main>
    </div>
  );
}
function GameSection() {
  return (
    <section className="section">
      <h2>Моя HTML-игра</h2>
      <p>Это игра, созданная в одном HTML-файле и вставленная на React-сайт.</p>

      <div className="gameBox">
        <iframe src="/game.html" title="HTML игра"></iframe>
      </div>
    </section>
  );
}
export default App;
