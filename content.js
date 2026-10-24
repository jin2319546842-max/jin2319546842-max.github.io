window.SITE_CONTENT = {
  zh: {
    navAbout: "关于我",
    navResearch: "研究与项目",
    navExperience: "经历",
    navBeyond: "场外",
    navContact: "联系",
    heroEyebrow: "金天乐 · 南开大学",
    heroIntro: "我是南开大学软件工程专业 2027 届本科生。研究兴趣主要包括 VLA、具身智能体与机器人，近期主要研究 Agentic Policy 加速。",
    heroCta: "看看我的研究",
    cvLabel: "下载简历",
    currentLabel: "目前在做",
    currentTitle: "中国科学院自动化研究所 · NLPR",
    currentBody: "目前在中国科学院自动化研究所新模式识别实验室科研实习，参与 Agentic Policy 加速与蒸馏项目研究，相关研究正在进行中。",
    aboutEyebrow: "关于我 / ABOUT",
    aboutTitle: "从理解世界，到在世界中行动。",
    aboutBody: "我是南开大学软件工程专业 2027 届本科生，研究兴趣主要包括视觉语言动作模型（VLA）、具身智能体与机器人。",
    eduTitle: "南开大学",
    eduSubtitle: "软件工程本科 · 2027 届 · 大四",
    eduDetail: "专业前 10% · 相关课程：机器学习、强化学习、机器人导论、自然语言处理",
    researchEyebrow: "研究与项目 / RESEARCH",
    researchTitle: "记忆、策略与行动。",
    projectMore: "展开项目细节",
    projectLess: "收起项目细节",
    experienceEyebrow: "经历 / EXPERIENCE",
    experienceTitle: "在研究与真实系统之间。",
    beyondEyebrow: "场外 / BEYOND RESEARCH",
    beyondTitle: "You'll Never Walk Alone.",
    beyondBody: "研究之外，我也是一名利物浦球迷。这里的一抹红，留给 Liverpool。",
    contactEyebrow: "联系 / CONTACT",
    contactTitle: "聊聊下一步。",
    contactBody: "欢迎交流 VLA、具身智能体与 Agent 系统相关研究。",
    copyEmail: "复制邮箱",
    mailLabel: "发送邮件",
    footerText: "金天乐 · 以好奇心前行。You'll Never Walk Alone.",
    projects: [
      {
        id: "policy-distillation",
        number: "01",
        title: "Agentic Policy 加速与蒸馏",
        subtitle: "中国科学院自动化研究所 · 新模式识别实验室（NLPR）",
        status: "研究进行中",
        tags: ["Agentic Policy", "科研实习"],
        summary: "目前在中国科学院自动化研究所新模式识别实验室开展科研实习，参与该方向的项目研究。",
        details: []
      },
      {
        id: "revem-vla",
        number: "02",
        title: "RevEM-VLA",
        subtitle: "可修订执行记忆与动作恢复 · 独立研究",
        status: "研究进行中",
        tags: ["VLA", "执行记忆", "动作恢复", "π0.5"],
        summary: "区分真实执行证据与当前解释，研究历史解释修订后，机器人如何更新有效记忆并恢复后续动作。",
        details: [
          "以共享 VLM 对新旧解释进行成对编码，使用有效记忆的 KV 与修订差异对动作专家进行条件化，探索可修订记忆如何支持动作恢复。",
          "已完成事件账本、Qwen3-VL 查询与子任务 LoRA；构建训练、开发、测试分别为 16,000 / 1,600 / 1,600 条的决策样本，并按轨迹家族隔离。",
          "基于 π0.5 与 GroundSG 推进 RoboMME 四类任务及 12 组失败重放对照，相关实验验证仍在进行。"
        ]
      },
      {
        id: "iei-tia",
        number: "03",
        title: "IEI-TIA · 机器人长程执行监测与纠错",
        subtitle: "北京航空航天大学课题组 · 方案研究与讨论",
        status: "研究讨论",
        tags: ["VLM", "执行监测", "异常反馈", "纠错指令"],
        summary: "围绕执行状态诊断、异常反馈与纠错指令生成开展研究讨论，探索视觉语言模型与机器人执行闭环的衔接方式。",
        details: [
          "参与机器人长程任务执行监测与纠错方向的研究讨论。",
          "围绕 IEI-TIA 相关方法中的执行状态诊断、异常反馈与纠错指令生成开展方案交流，探讨视觉语言模型与机器人执行闭环的衔接方式。"
        ]
      },
      {
        id: "microduck",
        number: "04",
        title: "Microduck",
        subtitle: "基于 ToF 感知的机器人导航与控制",
        status: "训练与闭环验证中",
        tags: ["MuJoCo", "8×8 ToF", "SAC", "课程学习"],
        summary: "在 MuJoCo 中结合头部扫描、时序感知与强化学习，探索局部感知下的机器人行动策略。",
        details: [
          "构建头部扫描式 8×8 ToF 感知，准备四类演示与五级课程，支持由简单到复杂的训练。",
          "对历史 ToF、掩码、目标与动作进行时序编码，结合 SAC 双 Q 与可通行空间辅助头学习策略。",
          "已完成短程管线验证，训练与闭环验证正在推进。"
        ]
      },
      {
        id: "bimanual-agent",
        number: "05",
        title: "长时序双手操作 Agent",
        subtitle: "技能图与闭环重规划",
        status: "项目研究",
        tags: ["3D MLLM", "技能图", "扩散策略", "双手操作"],
        summary: "围绕长时序双手操作，连接三维感知、技能依赖与动作策略，研究执行过程中的闭环重规划。",
        details: [
          "结合 3D MLLM、CLIP 与 PointNet 表征场景，构建包含双手角色与时序依赖的技能图。",
          "将扩散策略与物理约束、可达性检查及历史回放结合，用于执行过程中的闭环重规划。"
        ]
      }
    ],
    experiences: [
      {
        time: "目前",
        org: "中国科学院自动化研究所 · 新模式识别实验室（NLPR）",
        role: "科研实习",
        body: "目前在实验室开展科研实习，参与 Agentic Policy 加速与蒸馏项目研究，相关研究正在进行中。",
        current: true
      },
      {
        time: "2026.03 — 2026.05",
        org: "北京航空航天大学课题组",
        role: "科研实习",
        body: "参与机器人执行监测与纠错相关研究讨论，包括 IEI-TIA 方向，关注任务执行过程中的反馈与恢复。",
        current: false
      },
      {
        time: "2025.08 — 2026.01",
        org: "字节跳动",
        role: "算法实习",
        body: "参与豆包客服 Agent 的轨迹合成、规则校验、Judge 评估与去重，以及 SFT + PPO 流程；参与基于 LangGraph、Self-RAG 和混合检索的飞书知识库系统，结合人工兜底与监控。",
        current: false
      },
      {
        time: "2024.05 — 2024.08",
        org: "西安达升科技",
        role: "算法实习",
        body: "参与日立工厂移动机器人现场部署，配合运行配置、遥控定位及点位检查；复盘循线 AGV 的反馈控制、差速运动与站点状态机。",
        current: false
      }
    ],
    extras: [
      {
        title: "蚂蚁灵波具身大模型挑战赛",
        body: "基于 LingBot-VLA-v2-6B，在 RoboTwin 2.0 的 50 个任务、2,500 条轨迹上进行多卡 SFT；参与 ARX5 真机示范与部署 Demo。"
      },
      {
        title: "Soft Prompt 黑盒优化",
        body: "探索 CMA-ES、XNES、DE 与 PSO 等黑盒优化方法在 Soft Prompt 优化中的应用。"
      },
      {
        title: "多旅行商问题优化",
        body: "围绕 MTSP 开展离散 PSO 研究，相关论文被 IEEE 收录。"
      }
    ],
    skills: [
      { title: "代码与训练", items: ["Python / C++ / SQL", "PyTorch", "Linux 多 GPU", "Git", "LoRA / SFT", "PPO / SAC"] },
      { title: "具身与控制", items: ["VLA", "π0.5 / GroundSG", "RoboMME / LIBERO", "MuJoCo", "扩散策略", "机器人部署"] },
      { title: "Agent 系统", items: ["LangGraph", "RAG / Self-RAG", "FAISS", "混合检索", "轨迹合成", "评估与监控"] }
    ]
  },
  en: {
    navAbout: "About",
    navResearch: "Research",
    navExperience: "Experience",
    navBeyond: "Beyond",
    navContact: "Contact",
    heroEyebrow: "TIANLE JIN · NANKAI UNIVERSITY",
    heroIntro: "I am a Software Engineering undergraduate at Nankai University, graduating in 2027. My research interests include VLA, embodied agents, and robotics. My recent research focuses on accelerating Agentic Policy.",
    heroCta: "Explore my research",
    cvLabel: "Download CV",
    currentLabel: "CURRENTLY",
    currentTitle: "Institute of Automation, CAS · NLPR",
    currentBody: "I am currently a research intern at the New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences, working on an Agentic Policy acceleration and distillation project. The research is ongoing.",
    aboutEyebrow: "ABOUT",
    aboutTitle: "From understanding the world to acting in it.",
    aboutBody: "I am a Software Engineering undergraduate at Nankai University, graduating in 2027. My research interests include vision-language-action models (VLA), embodied agents, and robotics.",
    eduTitle: "Nankai University",
    eduSubtitle: "B.Eng. in Software Engineering · Class of 2027 · Final year",
    eduDetail: "Top 10% · Coursework: Machine Learning, Reinforcement Learning, Introduction to Robotics, Natural Language Processing",
    researchEyebrow: "RESEARCH & PROJECTS",
    researchTitle: "Memory, policies, and action.",
    projectMore: "Explore project details",
    projectLess: "Close project details",
    experienceEyebrow: "EXPERIENCE",
    experienceTitle: "Between research and real systems.",
    beyondEyebrow: "BEYOND RESEARCH",
    beyondTitle: "You'll Never Walk Alone.",
    beyondBody: "Away from research, I am a Liverpool supporter. This touch of red is for Liverpool.",
    contactEyebrow: "CONTACT",
    contactTitle: "Let's talk about what comes next.",
    contactBody: "I'd be glad to connect about VLA, embodied agents, and Agent systems research.",
    copyEmail: "Copy email",
    mailLabel: "Send an email",
    footerText: "Tianle Jin · Moving forward with curiosity. You'll Never Walk Alone.",
    projects: [
      {
        id: "policy-distillation",
        number: "01",
        title: "Agentic Policy Acceleration & Distillation",
        subtitle: "Institute of Automation, CAS · New Laboratory of Pattern Recognition (NLPR)",
        status: "Research in progress",
        tags: ["Agentic Policy", "Research Internship"],
        summary: "Currently a research intern at the New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences, contributing to research in this direction.",
        details: []
      },
      {
        id: "revem-vla",
        number: "02",
        title: "RevEM-VLA",
        subtitle: "Revisable Execution Memory & Action Recovery · Independent Research",
        status: "Research in progress",
        tags: ["VLA", "Execution Memory", "Action Recovery", "π0.5"],
        summary: "Separating execution evidence from current interpretations to study how robots update effective memory and recover actions after a historical interpretation is revised.",
        details: [
          "Using a shared VLM to jointly encode old and revised interpretations, with effective-memory KV and revision differences conditioning an action expert for recovery.",
          "Completed an event ledger, Qwen3-VL querying, and subtask LoRA. Built 16,000 / 1,600 / 1,600 decision samples for training, development, and testing, split by trajectory family.",
          "Developing experiments on four RoboMME task categories and 12 failure-replay comparisons using π0.5 and GroundSG. Validation remains in progress."
        ]
      },
      {
        id: "iei-tia",
        number: "03",
        title: "IEI-TIA · Long-Horizon Robot Execution Monitoring & Error Correction",
        subtitle: "Research Group, Beihang University · Approach Exploration & Discussion",
        status: "Research discussions",
        tags: ["VLM", "Execution Monitoring", "Anomaly Feedback", "Corrective Instructions"],
        summary: "Discussed execution-state diagnosis, anomaly feedback, and corrective-instruction generation, exploring how vision-language models can connect with a robot execution loop.",
        details: [
          "Participated in research discussions on monitoring and error correction for long-horizon robot tasks.",
          "Discussed execution-state diagnosis, anomaly feedback, and corrective-instruction generation in IEI-TIA-related methods, exploring connections between vision-language models and closed-loop robot execution."
        ]
      },
      {
        id: "microduck",
        number: "04",
        title: "Microduck",
        subtitle: "Robot Navigation & Control with ToF Perception",
        status: "Training & closed-loop validation",
        tags: ["MuJoCo", "8×8 ToF", "SAC", "Curriculum Learning"],
        summary: "Combining head scanning, temporal perception, and reinforcement learning in MuJoCo to study robot policies under local sensing.",
        details: [
          "Built head-scanning 8×8 ToF sensing with four demonstration categories and a five-level training curriculum.",
          "Temporally encoding historical ToF, masks, goals, and actions, together with SAC twin Q networks and an auxiliary traversable-space head.",
          "Completed a short-range pipeline check; training and closed-loop validation are ongoing."
        ]
      },
      {
        id: "bimanual-agent",
        number: "05",
        title: "Long-Horizon Bimanual Agent",
        subtitle: "Skill Graphs & Closed-Loop Replanning",
        status: "Research project",
        tags: ["3D MLLM", "Skill Graphs", "Diffusion Policy", "Bimanual Manipulation"],
        summary: "Connecting 3D perception, skill dependencies, and action policies to study closed-loop replanning for long-horizon bimanual manipulation.",
        details: [
          "Combining 3D MLLM, CLIP, and PointNet scene representations with skill graphs that capture hand roles and temporal dependencies.",
          "Integrating diffusion policies with physical constraints, reachability checks, and history replay for closed-loop replanning during execution."
        ]
      }
    ],
    experiences: [
      {
        time: "Present",
        org: "Institute of Automation, CAS · New Laboratory of Pattern Recognition (NLPR)",
        role: "Research Intern",
        body: "Currently a research intern at the laboratory, working on an Agentic Policy acceleration and distillation project. The research is ongoing.",
        current: true
      },
      {
        time: "Mar 2026 — May 2026",
        org: "Research Group, Beihang University",
        role: "Research Intern",
        body: "Participated in research discussions on robot execution monitoring and error correction, including IEI-TIA, with a focus on execution feedback and recovery.",
        current: false
      },
      {
        time: "Aug 2025 — Jan 2026",
        org: "ByteDance",
        role: "Algorithm Intern",
        body: "Worked on trajectory synthesis, rule validation, Judge evaluation, deduplication, and SFT + PPO for the Doubao customer-service Agent. Contributed to a Feishu knowledge-base system using LangGraph, Self-RAG, and hybrid retrieval, with human fallback and monitoring.",
        current: false
      },
      {
        time: "May 2024 — Aug 2024",
        org: "Xi'an Dasheng Technology",
        role: "Algorithm Intern",
        body: "Assisted mobile-robot deployment at a Hitachi factory, including runtime configuration, remote localization, and waypoint checks; reviewed feedback control, differential drive, and station state machines for line-following AGVs.",
        current: false
      }
    ],
    extras: [
      {
        title: "Ant Lingbo Embodied Foundation Model Challenge",
        body: "Ran multi-GPU SFT with LingBot-VLA-v2-6B on 50 RoboTwin 2.0 tasks and 2,500 trajectories; contributed to ARX5 real-robot demonstrations and a deployment demo."
      },
      {
        title: "Black-Box Soft Prompt Optimization",
        body: "Explored CMA-ES, XNES, DE, and PSO for black-box Soft Prompt optimization."
      },
      {
        title: "Multiple Traveling Salesman Optimization",
        body: "Studied discrete PSO for MTSP; the related paper was indexed by IEEE."
      }
    ],
    skills: [
      { title: "Code & Training", items: ["Python / C++ / SQL", "PyTorch", "Linux Multi-GPU", "Git", "LoRA / SFT", "PPO / SAC"] },
      { title: "Embodiment & Control", items: ["VLA", "π0.5 / GroundSG", "RoboMME / LIBERO", "MuJoCo", "Diffusion Policies", "Robot Deployment"] },
      { title: "Agent Systems", items: ["LangGraph", "RAG / Self-RAG", "FAISS", "Hybrid Retrieval", "Trajectory Synthesis", "Evaluation & Monitoring"] }
    ]
  }
};
