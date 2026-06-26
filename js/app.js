/**
 * Resume — Static Renderer
 * Data is embedded directly so no server needed (works on double-click).
 */

const resumeData = {
  "name": "Jayaharisai Tothala",
  "location": "Hyderabad, Telangana | 500054",
  "email": "jayaharisai1212@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/jayaharisai-tothala-5a10b2252/",
    "github": "https://github.com/jayaharisai",
    "website": "https://jayaharisai.github.io/jayaharisai/"
  },
  "summary": "4.5+ years of experience in Software Engineering, Backend Development, and AI-driven Product Development. Expertise in Python, FastAPI, REST API Development, System Design, LLM Orchestration, AI Model Development, Finetuning, Quantization, MLOps and LLMOps. Leading a team of 7 engineers with experience in technical leadership, project management, and scalable solutions delivery. Mentor and trained 16+ junior developers in software development, backend engineering, and team collaboration practices. Passionate about innovation, rapid learning, problem-solving and building scalable high-performance applications.",
  "skills": [
    { "category": "Programming Languages", "items": ["Python", "SQL", "HTML5", "CSS"] },
    { "category": "Backend & Frameworks", "items": ["FastAPI", "Django", "Node.js", "REST APIs"] },
    { "category": "AI & Generative AI", "items": ["LangChain", "LangGraph", "OpenAI", "Gemini Integration", "AWS Bedrock", "Azure AI Foundry", "Hugging Face", "AI Agents", "RAG", "Fine-tuning", "Quantization"] },
    { "category": "Cloud & DevOps", "items": ["AWS (EC2, Lambda)", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD"] },
    { "category": "MLOps & Data Tools", "items": ["MLflow", "DVC", "PySpark"] },
    { "category": "Vector Databases", "items": ["Pinecone", "FAISS", "ChromaDB", "Milvus", "Qdrant"] },
    { "category": "Databases & Caching", "items": ["PostgreSQL", "Redis"] },
    { "category": "Tools & Platforms", "items": ["Git", "Azure SDK", "System Design", "Backend Architecture", "LLMOps", "MLOps"] }
  ],
  "experience": [
    {
      "company": "Cloud Angles",
      "location": "Hyderabad, Telangana",
      "period": "12/2021 — Present",
      "roles": [
        {
          "title": "Innovation Engineer / Agentic AI (Developer 2)",
          "highlights": [
            "Developing enterprise AI agents and intelligent automation platforms using Azure AI Foundry, LangChain, LangGraph, Azure SDK, and Bedrock.",
            "Automated AI Foundry agent development using code-driven workflows to improve versioning, configuration management, observability, and behavioral tracing of AI agents.",
            "Worked on the Agent Core — developing agents using LangChain, LangGraph, MCP server, and tools for web search, with tracing in Datadog using OpenTelemetry, exposing APIs via Lambda and API Gateway, integrating with Bot Service in Azure, and integrating with Teams bot for the organization, along with design and development of the architecture."
          ]
        },
        {
          "title": "Software Engineer / AI Backend Engineer",
          "highlights": [
            "Designed and developed scalable backend systems and enterprise Generative AI platforms using Python, FastAPI, AWS, and Kubernetes.",
            "Finetuned and deployed LLaMA 3.3 and Mistral models on AWS EC2 supporting 900+ concurrent AI requests with optimized low-latency performance.",
            "Built MLOps and LLMOps platforms automating fine-tuning, quantization, RAG pipelines, AI agents, and governance workflows for AI Engineers and Data Engineers.",
            "Led backend architecture, system design, database management, deployment automation, and scalable REST API development for enterprise applications.",
            "Developed AI-powered enterprise tools including HR Query Bot, Developer Debugging Assistant, Meeting Notes Automation, and Jira Retrieval Systems.",
            "Implemented advanced AI workflows using LangChain, LangGraph, RAG, and multi-technique model fine-tuning for production-grade AI solutions.",
            "Mentored and trained 13+ junior developers on backend engineering, scalable systems, MLOps practices, and Generative AI development."
          ]
        }
      ]
    }
  ],
  "education": [
    {
      "degree": "Master of Technology (M.Tech)",
      "field": "Data Science & Artificial Intelligence",
      "institution": "Indian Institute of Technology Patna",
      "status": "Pursuing"
    },
    {
      "degree": "Bachelor of Technology (B.Tech)",
      "field": "",
      "institution": "Institute of Aeronautical Engineering",
      "status": "2021"
    }
  ],
  "others": [
    "Recognized as Best Developer for outstanding technical contributions and scalable product development.",
    "Awarded Innovation Champion 3 times for delivering impactful AI and automation solutions.",
    "Passionate about exploring emerging technologies, rapid learning, and building innovative solutions.",
    "I enjoy playing badminton, traveling to new places, and listening to music during free time."
  ],
  "declaration": "I hereby declare that the information provided above is true and accurate to the best of my knowledge and belief."
};

/* ───────── Theme Toggle ───────── */

(function () {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "🌙";
  }

  btn.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark");
    btn.textContent = isDark ? "🌙" : "☀️";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
})();

/* ───────── render ───────── */

(function () {
  const root = document.getElementById("resume-root");
  if (!root) return;

  const d = resumeData;
  const wrapper = document.createElement("div");
  wrapper.className = "resume";

  /* ── Header ── */
  const header = document.createElement("div");
  header.className = "resume-header";
  header.innerHTML =
    `<h1>${d.name}</h1>` +
    `<p class="subhead">${d.location}</p>` +
    `<div class="contact-row">` +
      `<span>${d.email}</span>` +
      `<a href="${d.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` +
      `<a href="${d.links.github}" target="_blank" rel="noopener">GitHub</a>` +
      `<a href="${d.links.website}" target="_blank" rel="noopener">Website</a>` +
    `</div>`;
  wrapper.appendChild(header);

  /* ── Summary ── */
  const summary = document.createElement("p");
  summary.className = "resume-summary";
  summary.textContent = d.summary;
  wrapper.appendChild(summary);

  /* ── Skills (table) ── */
  const skillsSec = document.createElement("div");
  skillsSec.className = "section";
  let tableHtml = `<h2 class="section-title">Skills</h2><table class="skills-table">`;
  d.skills.forEach(function (g) {
    tableHtml +=
      `<tr>` +
        `<td class="skill-category">${g.category}:</td>` +
        `<td class="skill-items">${g.items.join(" | ")}</td>` +
      `</tr>`;
  });
  tableHtml += `</table>`;
  skillsSec.innerHTML = tableHtml;
  wrapper.appendChild(skillsSec);

  /* ── Experience ── */
  const expSec = document.createElement("div");
  expSec.className = "section";
  expSec.innerHTML = `<h2 class="section-title">Professional Experience</h2>`;

  d.experience.forEach(function (item) {
    item.roles.forEach(function (role, idx) {
      const wrap = document.createElement("div");
      wrap.className = "experience-item";

      const headerHtml =
        `<div class="exp-header">` +
          `<span class="exp-company">` +
            (idx === 0
              ? `<span class="exp-current-badge">Current</span> ${item.company}`
              : item.company) +
          `</span>` +
          `<span class="exp-role">${role.title}</span>` +
          (idx === 0 ? `<span class="exp-period">${item.period}</span>` : "") +
        `</div>` +
        (idx === 0 ? `<div class="exp-location">${item.location}</div>` : "");

      let highlightsHtml = `<ul class="exp-highlights">`;
      role.highlights.forEach(function (h) { highlightsHtml += `<li>${h}</li>`; });
      highlightsHtml += `</ul>`;

      wrap.innerHTML = headerHtml + highlightsHtml;
      expSec.appendChild(wrap);
    });
  });
  wrapper.appendChild(expSec);

  /* ── Education ── */
  const eduSec = document.createElement("div");
  eduSec.className = "section";
  eduSec.innerHTML = `<h2 class="section-title">Education</h2>`;
  d.education.forEach(function (item) {
    const degreeText = item.field ? item.degree + " — " + item.field : item.degree;
    eduSec.innerHTML +=
      `<div class="education-item">` +
        `<span class="edu-degree">${degreeText}</span><br>` +
        `<span class="edu-institution">${item.institution}</span>` +
        (item.status ? ` — <span class="edu-status">${item.status}</span>` : "") +
      `</div>`;
  });
  wrapper.appendChild(eduSec);

  /* ── Others ── */
  const othSec = document.createElement("div");
  othSec.className = "section";
  othSec.innerHTML = `<h2 class="section-title">Others</h2><ul class="others-list">`;
  d.others.forEach(function (o) { othSec.innerHTML += `<li>${o}</li>`; });
  othSec.innerHTML += `</ul>`;
  wrapper.appendChild(othSec);

  /* ── Declaration ── */
  const decl = document.createElement("div");
  decl.className = "declaration";
  decl.textContent = d.declaration;
  wrapper.appendChild(decl);

  root.appendChild(wrapper);
})();