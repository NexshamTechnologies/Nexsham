const categories = [
    {
      id: "uiux", label: "UI/UX", icon: "🎨",
      title: "UI/UX Design Tools",
      desc: "Design tools we use to craft intuitive interfaces and pixel-perfect user experiences before a single line of code is written.",
      items: [
        { name: "Figma", icon: "🎨" },
        { name: "Adobe XD", icon: "◈" },
        { name: "Photoshop", icon: "🖌" },
        { name: "Illustrator", icon: "✏️" },
      ]
    },
    {
      id: "frontend", label: "Frontend", icon: "💻",
      title: "Frontend Technologies",
      desc: "Modern frontend frameworks and libraries for building responsive, fast and scalable web applications.",
      items: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "JS" },
        { name: "TypeScript", icon: "TS" },
        { name: "React", icon: "⚛" },
        { name: "Next.js", icon: "▲" },
        { name: "Bootstrap", icon: "🅱" },
        { name: "Tailwind CSS", icon: "〰" },
      ]
    },
    {
      id: "backend", label: "Backend", icon: "⚙",
      title: "Backend Technologies",
      desc: "Robust server-side frameworks and languages that power reliable APIs and business logic.",
      items: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "Spring Boot", icon: "🌱" },
        { name: "PHP", icon: "🐘" },
        { name: "FastAPI", icon: "⚡" },
      ]
    },
    {
      id: "mobile", label: "Mobile", icon: "📱",
      title: "Mobile Development",
      desc: "Cross-platform and native tools we use to ship polished mobile apps on iOS and Android.",
      items: [
        { name: "Flutter", icon: "🦋" },
        { name: "React Native", icon: "⚛" },
        { name: "Android", icon: "🤖" },
        { name: "Kotlin", icon: "🎯" },
        { name: "Swift", icon: "🐦" },
      ]
    },
    {
      id: "database", label: "Database", icon: "🗄",
      title: "Database Technologies",
      desc: "Relational and NoSQL databases chosen to fit the shape and scale of your data.",
      items: [
        { name: "MySQL", icon: "🐬" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Firebase", icon: "🔥" },
        { name: "Redis", icon: "🔴" },
      ]
    },
    {
      id: "cloud", label: "Cloud", icon: "☁",
      title: "Cloud Infrastructure",
      desc: "Cloud platforms and hosting services we rely on for scalable, always-on deployments.",
      items: [
        { name: "AWS", icon: "☁" },
        { name: "Azure", icon: "🔷" },
        { name: "Google Cloud", icon: "☁" },
        { name: "Vercel", icon: "▲" },
        { name: "Render", icon: "🅁" },
        { name: "Netlify", icon: "🌐" },
      ]
    },
    {
      id: "devops", label: "DevOps", icon: "🚀",
      title: "DevOps & Deployment",
      desc: "Tools that automate builds, deployments, and infrastructure so releases stay fast and reliable.",
      items: [
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸" },
        { name: "GitHub Actions", icon: "🐙" },
        { name: "Jenkins", icon: "🎩" },
        { name: "Nginx", icon: "🌐" },
      ]
    },
    {
      id: "aiml", label: "AI / ML", icon: "🤖",
      title: "AI & Machine Learning",
      desc: "Frameworks and platforms we use to build intelligent features, from chatbots to predictive models.",
      items: [
        { name: "OpenAI", icon: "🧠" },
        { name: "Python", icon: "🐍" },
        { name: "TensorFlow", icon: "🔶" },
        { name: "PyTorch", icon: "🔥" },
        { name: "LangChain", icon: "🔗" },
        { name: "Hugging Face", icon: "🤗" },
      ]
    },
    {
      id: "security", label: "Security", icon: "🔒",
      title: "Security & Compliance",
      desc: "Standards and tools we build in from day one to keep applications and data protected.",
      items: [
        { name: "JWT", icon: "🔑" },
        { name: "OAuth", icon: "🔐" },
        { name: "SSL", icon: "🔒" },
        { name: "Cloudflare", icon: "☁" },
        { name: "OWASP", icon: "🛡" },
      ]
    },
    {
      id: "crmerp", label: "CRM/ERP", icon: "🏢",
      title: "CRM & ERP Systems",
      desc: "Business platforms we integrate with to connect your software to sales, ops, and finance.",
      items: [
        { name: "Salesforce", icon: "☁" },
        { name: "Zoho", icon: "📊" },
        { name: "Odoo", icon: "🟣" },
        { name: "SAP", icon: "🔷" },
      ]
    },
    {
      id: "automation", label: "Automation", icon: "⚡",
      title: "Automation Tools",
      desc: "Workflow automation platforms that connect your tools and remove repetitive manual work.",
      items: [
        { name: "n8n", icon: "🔀" },
        { name: "Zapier", icon: "⚡" },
        { name: "Power Automate", icon: "🔄" },
        { name: "Make", icon: "⚙" },
        { name: "Apache Airflow", icon: "🌬" },
      ]
    },
  ];

  const pillRail = document.getElementById("pillRail");
  const catTitle = document.getElementById("catTitle");
  const catDesc = document.getElementById("catDesc");
  const cardGrid = document.getElementById("cardGrid");

  let activeId = categories[1].id; // default to Frontend, matches spec's default example

  function renderPills(){
    pillRail.innerHTML = categories.map(cat => `
      <button class="pill ${cat.id === activeId ? 'active' : ''}" data-id="${cat.id}">
        <span class="ico">${cat.icon}</span>
        <span>${cat.label}</span>
      </button>
    `).join("");

    pillRail.querySelectorAll(".pill").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        if (id === activeId) return;
        switchCategory(id);
      });
    });
  }

  function renderContent(cat){
    catTitle.textContent = cat.title;
    catDesc.textContent = cat.desc;
    cardGrid.innerHTML = cat.items.map(item => `
      <div class="tech-card">
        <span class="glyph">${item.icon}</span>
        <span class="name">${item.name}</span>
      </div>
    `).join("");
  }

  function switchCategory(id){
    activeId = id;
    renderPills();
    cardGrid.classList.add("is-animating");
    setTimeout(() => {
      const cat = categories.find(c => c.id === id);
      renderContent(cat);
      cardGrid.classList.remove("is-animating");
    }, 300);
  }

  renderPills();
  renderContent(categories.find(c => c.id === activeId));
