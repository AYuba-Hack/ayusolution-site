'use strict';
/* AYU Solution V14: safe per-page behaviour */
const translations = {
            pt: {
                "nav.home": "Início",
                "nav.services": "Serviços",
                "nav.about": "Sobre",
                "nav.projects": "Projectos",
                "nav.academic": "Académico",
                "nav.guides": "Guias",
                "guides.kicker": "GUIAS DE TECNOLOGIA",
                "guides.heading": "Dicas úteis antes de pedir assistência.",
                "guides.intro": "Conteúdos práticos para cuidar dos seus equipamentos, proteger os seus dados e melhorar a rede.",
                "nav.contact": "Contactos",
                "nav.cta": "Iniciar um Projecto",
                "nav.install": "Instalar App",
                "quick.explore": "Explorar",
                "quick.details": "Detalhes",
                "panel.services.title": "Todos os serviços em detalhe",
                "panel.services.sub": "7 especialidades de informática e soluções digitais",
                "panel.projects.title": "Projectos e galeria",
                "panel.projects.sub": "Sistemas, soluções técnicas e exemplos visuais",
                "panel.academic.title": "Apoio académico",
                "panel.academic.sub": "Estruturação, revisão e documentos",
                "panel.process.title": "Como trabalhamos",
                "panel.process.sub": "O nosso processo e acompanhamento",
                "panel.faq.title": "Perguntas frequentes",
                "panel.faq.sub": "Orçamentos, atendimento e outras dúvidas",
                
                "hero.title": "TECNOLOGIA QUE RESOLVE PROBLEMAS REAIS.",
                "hero.subtitle": "Soluções profissionais em informática, desenvolvimento digital, equipamentos, redes, segurança e apoio académico.",
                "hero.btn1": "Conhecer os nossos serviços",
                "hero.btn2": "Falar connosco",
                "hero.status": "Soluções digitais e suporte técnico",
                "hero.location": "Quelimane, Moçambique · Atendimento presencial e remoto",
                "hero.open": "Pedidos de orçamento abertos",
                "hero.focus1": "Tecnologia",
                "hero.focus2": "Sistemas",
                "hero.focus3": "Suporte",
                "hero.quote": "Pedir orçamento",
                "hero.specialty": "Especialidades:",

                "popular.title": "SERVIÇOS MAIS PROCURADOS",
                "popular.heading": "Comece rapidamente pelo serviço que precisa.",
                "popular.p1.title": "Reparação de computadores",
                "popular.p1.desc": "Diagnóstico, manutenção, formatação, Windows, drivers, RAM e SSD.",
                "popular.p2.title": "Criação de websites",
                "popular.p2.desc": "Websites empresariais, pessoais, landing pages, portfólios e sistemas web.",
                "popular.p3.title": "Apoio académico",
                "popular.p3.desc": "Estruturação, revisão, formatação, referências e preparação de apresentações.",
                "popular.ideal": "Ideal para:",
                "popular.p1.ideal": "computadores lentos, avarias e upgrades.",
                "popular.p2.ideal": "negócios, profissionais e presença online.",
                "popular.p3.ideal": "estudantes que precisam de organização e revisão documental.",
                "popular.p4.title": "Sistemas de gestão",
                "popular.p4.desc": "Sistemas para vendas, stock, clientes, reservas e operações internas.",
                "popular.p4.ideal": "pequenos negócios e processos que precisam de organização.",
                "popular.p5.title": "Redes e Wi-Fi",
                "popular.p5.desc": "Configuração de routers, redes LAN, Wi-Fi e partilha de recursos.",
                "popular.p5.ideal": "casas, escritórios e pequenos estabelecimentos.",
                "popular.p6.title": "CCTV e segurança",
                "popular.p6.desc": "Instalação e configuração de câmaras, DVR/NVR e acesso remoto.",
                "popular.p6.ideal": "residências, lojas e espaços de trabalho.",
                "popular.all": "Ver todos os serviços",
                "popular.cta": "Pedir orçamento",
                "tech.label": "Tecnologias & áreas",

                "services.title": "O QUE FAZEMOS",
                "services.heading": "Soluções tecnológicas completas para impulsionar o seu dia a dia.",
                "services.s1.title": "INFORMÁTICA E MANUTENÇÃO",
                "services.s1.i1": "Reparação de computadores",
                "services.s1.i2": "Diagnóstico de problemas",
                "services.s1.i3": "Manutenção de computadores",
                "services.s1.i4": "Formatação",
                "services.s1.i5": "Instalação do Windows",
                "services.s1.i6": "Configuração do Windows",
                "services.s1.i7": "Instalação de software",
                "services.s1.i8": "Instalação de drivers",
                "services.s1.i9": "Otimização do sistema",
                "services.s1.i10": "Upgrade de RAM",
                "services.s1.i11": "Upgrade de SSD",
                "services.s1.i12": "Configuração de computadores",
                "services.s1.i13": "Manutenção preventiva",
                
                "services.s2.title": "IMPRESSORAS E EQUIPAMENTOS",
                "services.s2.i1": "Instalação de impressoras",
                "services.s2.i2": "Configuração de impressoras",
                "services.s2.i3": "Manutenção de impressoras",
                "services.s2.i4": "Diagnóstico de problemas",
                "services.s2.i5": "Instalação de drivers",
                "services.s2.i6": "Configuração em rede",
                "services.s2.i7": "Configuração de scanners",
                "services.s2.i8": "Configuração de equipamentos",
                "services.s2.i9": "Manutenção de equipamentos",
                
                "services.s3.title": "REDES E CONECTIVIDADE",
                "services.s3.i1": "Instalação de redes Wi-Fi",
                "services.s3.i2": "Configuração de routers",
                "services.s3.i3": "Redes LAN",
                "services.s3.i4": "Resolução de conectividade",
                "services.s3.i5": "Partilha de recursos",
                "services.s3.i6": "Configuração básica de servidores",
                
                "services.s4.title": "CCTV E SEGURANÇA",
                "services.s4.i1": "Instalação de câmeras",
                "services.s4.i2": "Configuração de CCTV",
                "services.s4.i3": "Configuração de DVR/NVR",
                "services.s4.i4": "Acesso remoto pelo telemóvel",
                "services.s4.i5": "Manutenção de sistemas",
                "services.s4.i6": "Configuração de videovigilância",
                
                "services.s5.title": "DESENVOLVIMENTO WEB",
                "services.s5.i1": "Websites empresariais",
                "services.s5.i2": "Websites pessoais",
                "services.s5.i3": "Portfolios",
                "services.s5.i4": "Landing pages",
                "services.s5.i5": "Lojas online",
                "services.s5.i6": "Sistemas web",
                
                "services.s6.title": "SISTEMAS DE GESTÃO",
                "services.s6.i1": "Sistemas de vendas",
                "services.s6.i2": "Gestão de stock",
                "services.s6.i3": "Gestão de clientes",
                "services.s6.i4": "Sistemas para restaurantes",
                "services.s6.i5": "Sistemas de reservas",
                "services.s6.i6": "Sistemas personalizados",
                
                "services.s7.title": "SOLUÇÕES DIGITAIS",
                "services.s7.i1": "Digitalização de processos",
                "services.s7.i2": "Organização de informação",
                "services.s7.i3": "Automatização de tarefas",
                "services.s7.i4": "Bases de dados",
                "services.s7.i5": "Consultoria informática",
                "services.s7.i6": "Soluções personalizadas",
                
                "about.title": "SOBRE A AYUSOLUTION",
                "about.heading": "Tecnologia útil, próxima e feita para resolver.",
                "about.p1": "A Ayusolution transforma necessidades do dia a dia em soluções tecnológicas claras e funcionais. Trabalhamos com suporte informático, websites, sistemas, equipamentos, redes, CCTV e apoio à organização de documentos académicos.",
                "about.point1.title": "Resolver",
                "about.point1.desc": "Começamos pelo problema real, não pela tecnologia.",
                "about.point2.title": "Construir",
                "about.point2.desc": "Criamos soluções simples, organizadas e adaptáveis.",
                "about.point3.title": "Acompanhar",
                "about.point3.desc": "Mantemos comunicação directa antes e depois da entrega.",
                "about.founder_title": "COMO PENSAMOS",
                "about.founder_p": "Tecnologia só tem valor quando facilita o trabalho, melhora um processo ou resolve uma dificuldade concreta. É essa lógica prática que orienta cada serviço da Ayusolution.",
                "projects.title": "SOLUÇÕES E PROJECTOS",
                "projects.heading": "Exemplos de soluções digitais e técnicas que podemos desenvolver ou implementar.",
                "projects.digital.kicker": "01 — Digital",
                "projects.digital.title": "Soluções Digitais",
                "projects.digital.desc": "Sistemas, plataformas e websites pensados para organizar processos, melhorar atendimento e fortalecer a presença digital.",
                "projects.swipe": "Deslize para ver mais",
                "projects.technical.kicker": "02 — Técnico",
                "projects.technical.title": "Soluções Técnicas",
                "projects.technical.desc": "Infraestrutura, conectividade e manutenção para manter equipamentos e ambientes de trabalho mais estáveis.",
                "projects.more": "Ver solução",
                "projects.ideal": "Ideal para:",
                "projects.tagDemo": "Demonstração",
                "projects.tagConcept": "Conceito",
                "projects.p1.type": "Gestão",
                "projects.p1.title": "Sistema de Gestão Comercial",
                "projects.p1.desc": "Centraliza vendas, stock, clientes e informação essencial do negócio num único ambiente.",
                "projects.p1.fit": "lojas, papelarias, armazéns e pequenos negócios.",
                "projects.p2.type": "Restauração",
                "projects.p2.title": "Sistema de Gestão de Restaurante",
                "projects.p2.desc": "Organiza pedidos, reservas e mesas para tornar o atendimento mais simples e controlado.",
                "projects.p2.fit": "restaurantes, cafés, bares e pequenos estabelecimentos.",
                "projects.p3.type": "Reservas",
                "projects.p3.title": "Sistema de Reserva de Bilhetes",
                "projects.p3.desc": "Digitaliza reservas, confirmações e emissão de bilhetes num fluxo mais simples para o utilizador.",
                "projects.p3.fit": "transportes, eventos, excursões e serviços com marcação.",
                "projects.p4.type": "Web",
                "projects.p4.title": "Website Corporativo",
                "projects.p4.desc": "Apresenta a empresa, os serviços e os contactos numa presença digital moderna e responsiva.",
                "projects.p4.fit": "empresas, profissionais, associações e marcas em crescimento.",
                "projects.p5.type": "Redes",
                "projects.p5.title": "Infraestrutura de Rede",
                "projects.p5.desc": "Organiza LAN, Wi-Fi, routers e partilha de recursos para melhorar a conectividade do espaço.",
                "projects.p5.fit": "escritórios, lojas, residências e pequenas organizações.",
                "projects.p6.type": "Manutenção",
                "projects.p6.title": "Manutenção de Equipamentos Informáticos",
                "projects.p6.desc": "Diagnóstico, limpeza, optimização e manutenção para reduzir falhas e prolongar a vida útil dos equipamentos.",
                "projects.p6.fit": "computadores pessoais, escritórios, estudantes e pequenos negócios.",
                
                "academic.title": "APOIO ACADÉMICO E CIENTÍFICO",
                "academic.heading": "Apoio na estruturação e formatação de documentos académicos.",
                "academic.i1": "Apoio na elaboração e estruturação de trabalhos científicos",
                "academic.i2": "Apoio à estruturação de monografias",
                "academic.i3": "Revisão de artigos científicos",
                "academic.i4": "Apoio a projectos de pesquisa",
                "academic.i5": "Relatórios académicos",
                "academic.i6": "Revisão e correcção de trabalhos",
                "academic.i7": "Formatação académica",
                "academic.i8": "Organização de referências bibliográficas",
                "academic.i9": "Apresentações em PowerPoint",
                "academic.i10": "Apoio na preparação para defesa",
                
                "process.title": "COMO TRABALHAMOS",
                "process.heading": "Um processo simples e focado em resultados.",
                "process.p1.title": "Entender",
                "process.p1.desc": "Compreender as necessidades do cliente.",
                "process.p2.title": "Planear",
                "process.p2.desc": "Definir a solução adequada.",
                "process.p3.title": "Desenvolver",
                "process.p3.desc": "Construir, configurar ou implementar.",
                "process.p4.title": "Acompanhar",
                "process.p4.desc": "Fornecer suporte e melhorias.",
                
                "why.title": "PORQUÊ A AYUSOLUTION?",
                "why.heading": "Razões para confiar em nós.",
                "why.w1.title": "Foco no problema",
                "why.w1.desc": "Primeiro entendemos a necessidade; depois escolhemos a solução adequada.",
                "why.w2.title": "Atendimento directo",
                "why.w2.desc": "Comunicação simples e acompanhamento durante cada etapa do serviço.",
                "why.w3.title": "Presencial e remoto",
                "why.w3.desc": "Atendimento em Quelimane e apoio remoto quando o tipo de serviço permite.",
                "why.w4.title": "Soluções adaptadas",
                "why.w4.desc": "A proposta é ajustada à necessidade, ao contexto e à dimensão de cada pedido.",
                "why.w5.title": "Acompanhamento",
                "why.w5.desc": "Sempre que necessário, damos orientação depois da configuração ou entrega.",
                
                "faq.title": "PERGUNTAS FREQUENTES",
                "faq.heading": "Algumas respostas antes de começar.",
                "faq.q1": "Como posso pedir um orçamento?",
                "faq.a1": "Escolha um serviço no formulário ou contacte-nos pelo WhatsApp. Explique o que precisa e responderemos com a orientação adequada.",
                "faq.q2": "A Ayusolution faz atendimento remoto?",
                "faq.a2": "Sim. Dependendo do serviço, o apoio pode ser feito remotamente. Serviços que exigem intervenção física são combinados directamente com o cliente.",
                "faq.q3": "Trabalham com pessoas e empresas?",
                "faq.a3": "Sim. Atendemos estudantes, profissionais, pequenos negócios, organizações e clientes individuais, de acordo com cada necessidade.",
                "faq.q4": "Posso solicitar uma solução personalizada?",
                "faq.a4": "Sim. Websites, sistemas, redes e outras soluções podem ser ajustados ao problema e ao contexto do cliente.",
                "faq.q5": "A Ayusolution atende em Quelimane?",
                "faq.a5": "Sim. A Ayusolution está baseada em Quelimane. A possibilidade de deslocação ou atendimento presencial depende do tipo de serviço e é combinada directamente.",
                "faq.q6": "Quanto custa um website ou uma reparação?",
                "faq.a6": "O valor depende do trabalho necessário. Por isso, primeiro recolhemos os detalhes do pedido e só depois apresentamos uma estimativa ou proposta adequada.",

                "contact.title": "TEM UM PROJETO EM MENTE?",
                "contact.heading": "Fale connosco e vamos encontrar uma solução para o que precisa.",
                "contact.subtitle": "Conte-nos o que precisa. Quanto mais claro for o pedido, mais fácil será indicar a solução adequada.",
                "contact.local": "Quelimane, Zambézia — atendimento presencial e remoto",
                "contact.direct": "Contacto directo por WhatsApp ou formulário",
                "contact.quoteInfo": "O orçamento depende das características de cada pedido",
                "contact.wa": "Falar pelo WhatsApp",
                "contact.form.heading": "Solicitar orçamento",
                "contact.form.subtitle": "Diga-nos o essencial. Entraremos em contacto para perceber melhor o que precisa.",
                "contact.form.name": "Nome",
                "contact.form.email": "Email (opcional)",
                "contact.form.phone": "Telefone / WhatsApp",
                "contact.form.service": "Serviço",
                "contact.form.select": "Selecione um serviço",
                "contact.form.requestType": "Tipo de pedido",
                "contact.form.requestTypeSelect": "Selecione",
                "contact.form.type.quote": "Orçamento",
                "contact.form.type.info": "Informação",
                "contact.form.type.support": "Suporte",
                "contact.form.urgency": "Urgência",
                "contact.form.urgencySelect": "Selecione",
                "contact.form.urgency.normal": "Normal",
                "contact.form.urgency.soon": "Preciso em breve",
                "contact.form.urgency.urgent": "Urgente",
                "contact.form.message": "Descrição do que precisa",
                "contact.form.btn": "Enviar pedido",
                "contact.form.waBtn": "Enviar no WhatsApp",
                "contact.form.privacy": "Ao enviar, os dados serão usados apenas para responder ao seu pedido.",
                "contact.form.privacyLink": "Saiba mais",
                "contact.form.success": "Pedido enviado com sucesso! Entraremos em contacto brevemente.",
                
                "footer.desc": "Soluções tecnológicas e digitais pensadas para necessidades reais de pessoas, profissionais e pequenos negócios.",
                "footer.location": "Quelimane, Zambézia — Moçambique",
                "footer.privacy": "Política de Privacidade",
                "footer.faq": "Perguntas frequentes",
                "footer.nav": "Navegação",
                "footer.services": "Serviços",
                "footer.contact": "Contactos",
                "footer.copyright": "© 2026 Ayusolution. Todos os direitos reservados."
            },
            en: {
                "nav.home": "Home",
                "nav.services": "Services",
                "nav.about": "About",
                "nav.projects": "Projects",
                "nav.academic": "Academic",
                "nav.guides": "Guides",
                "guides.kicker": "TECHNOLOGY GUIDES",
                "guides.heading": "Useful tips before requesting support.",
                "guides.intro": "Practical articles on device care, data protection and improving your home or office network.",
                "nav.contact": "Contact",
                "nav.cta": "Start a Project",
                "nav.install": "Install App",
                "quick.explore": "Explore",
                "quick.details": "Details",
                "panel.services.title": "All services in detail",
                "panel.services.sub": "7 specialties in IT and digital solutions",
                "panel.projects.title": "Projects and gallery",
                "panel.projects.sub": "Systems, technical services and visual examples",
                "panel.academic.title": "Academic support",
                "panel.academic.sub": "Structuring, reviews and documents",
                "panel.process.title": "How we work",
                "panel.process.sub": "Our process and ongoing support",
                "panel.faq.title": "Frequently asked questions",
                "panel.faq.sub": "Quotes, service and helpful answers",
                
                "hero.title": "TECHNOLOGY THAT SOLVES REAL PROBLEMS.",
                "hero.subtitle": "Professional solutions in IT, digital development, equipment, networking, security and academic support.",
                "hero.btn1": "Explore our services",
                "hero.btn2": "Talk to us",
                "hero.status": "Digital solutions and technical support",
                "hero.location": "Quelimane, Mozambique · On-site and remote support",
                "hero.open": "Quote requests are open",
                "hero.focus1": "Technology",
                "hero.focus2": "Systems",
                "hero.focus3": "Support",
                "hero.quote": "Request a quote",
                "hero.specialty": "Specialties:",

                "popular.title": "MOST REQUESTED SERVICES",
                "popular.heading": "Start quickly with the service you need.",
                "popular.p1.title": "Computer repair",
                "popular.p1.desc": "Diagnosis, maintenance, formatting, Windows, drivers, RAM and SSD.",
                "popular.p2.title": "Website development",
                "popular.p2.desc": "Business and personal websites, landing pages, portfolios and web systems.",
                "popular.p3.title": "Academic support",
                "popular.p3.desc": "Structuring, reviewing, formatting, references and presentation preparation.",
                "popular.ideal": "Ideal for:",
                "popular.p1.ideal": "slow computers, faults and upgrades.",
                "popular.p2.ideal": "businesses, professionals and online presence.",
                "popular.p3.ideal": "students who need document organisation and review.",
                "popular.p4.title": "Management systems",
                "popular.p4.desc": "Systems for sales, stock, customers, bookings and internal operations.",
                "popular.p4.ideal": "small businesses and processes that need organisation.",
                "popular.p5.title": "Networks and Wi-Fi",
                "popular.p5.desc": "Router setup, LAN, Wi-Fi and resource sharing.",
                "popular.p5.ideal": "homes, offices and small establishments.",
                "popular.p6.title": "CCTV and security",
                "popular.p6.desc": "Camera, DVR/NVR and remote-access installation and setup.",
                "popular.p6.ideal": "homes, shops and workplaces.",
                "popular.all": "View all services",
                "popular.cta": "Request a quote",
                "tech.label": "Technologies & areas",

                "services.title": "WHAT WE DO",
                "services.heading": "Complete technological solutions to boost your daily life.",
                "services.s1.title": "COMPUTER & IT SERVICES",
                "services.s1.i1": "Computer repair",
                "services.s1.i2": "Problem diagnosis",
                "services.s1.i3": "Computer maintenance",
                "services.s1.i4": "Formatting",
                "services.s1.i5": "Windows installation",
                "services.s1.i6": "Windows configuration",
                "services.s1.i7": "Software installation",
                "services.s1.i8": "Driver installation",
                "services.s1.i9": "System optimization",
                "services.s1.i10": "RAM upgrade",
                "services.s1.i11": "SSD upgrade",
                "services.s1.i12": "Computer setup",
                "services.s1.i13": "Preventive maintenance",
                
                "services.s2.title": "PRINTERS & EQUIPMENT",
                "services.s2.i1": "Printer installation",
                "services.s2.i2": "Printer configuration",
                "services.s2.i3": "Printer maintenance",
                "services.s2.i4": "Problem diagnosis",
                "services.s2.i5": "Driver installation",
                "services.s2.i6": "Network configuration",
                "services.s2.i7": "Scanner configuration",
                "services.s2.i8": "Equipment setup",
                "services.s2.i9": "Equipment maintenance",
                
                "services.s3.title": "NETWORKS & CONNECTIVITY",
                "services.s3.i1": "Wi-Fi network installation",
                "services.s3.i2": "Router configuration",
                "services.s3.i3": "LAN networks",
                "services.s3.i4": "Connectivity troubleshooting",
                "services.s3.i5": "Resource sharing",
                "services.s3.i6": "Basic server configuration",
                
                "services.s4.title": "CCTV & SECURITY",
                "services.s4.i1": "Camera installation",
                "services.s4.i2": "CCTV configuration",
                "services.s4.i3": "DVR/NVR configuration",
                "services.s4.i4": "Remote mobile access",
                "services.s4.i5": "System maintenance",
                "services.s4.i6": "Video surveillance setup",
                
                "services.s5.title": "WEB DEVELOPMENT",
                "services.s5.i1": "Business websites",
                "services.s5.i2": "Personal websites",
                "services.s5.i3": "Portfolios",
                "services.s5.i4": "Landing pages",
                "services.s5.i5": "Online stores",
                "services.s5.i6": "Web systems",
                
                "services.s6.title": "BUSINESS MANAGEMENT SYSTEMS",
                "services.s6.i1": "Sales systems",
                "services.s6.i2": "Stock management",
                "services.s6.i3": "Customer management",
                "services.s6.i4": "Restaurant systems",
                "services.s6.i5": "Reservation systems",
                "services.s6.i6": "Custom systems",
                
                "services.s7.title": "DIGITAL SOLUTIONS",
                "services.s7.i1": "Process digitization",
                "services.s7.i2": "Information organization",
                "services.s7.i3": "Task automation",
                "services.s7.i4": "Databases",
                "services.s7.i5": "IT consulting",
                "services.s7.i6": "Custom solutions",
                
                "about.title": "ABOUT AYUSOLUTION",
                "about.heading": "Useful, accessible technology built to solve.",
                "about.p1": "Ayusolution turns everyday needs into clear and functional technology solutions. We work with IT support, websites, systems, equipment, networks, CCTV and support for organising academic documents.",
                "about.point1.title": "Solve",
                "about.point1.desc": "We start with the real problem, not the technology.",
                "about.point2.title": "Build",
                "about.point2.desc": "We create simple, organised and adaptable solutions.",
                "about.point3.title": "Support",
                "about.point3.desc": "We keep direct communication before and after delivery.",
                "about.founder_title": "HOW WE THINK",
                "about.founder_p": "Technology only has value when it makes work easier, improves a process or solves a concrete difficulty. That practical approach guides every Ayusolution service.",
                "projects.title": "SOLUTIONS & PROJECTS",
                "projects.heading": "Examples of digital and technical solutions we can develop or implement.",
                "projects.digital.kicker": "01 — Digital",
                "projects.digital.title": "Digital Solutions",
                "projects.digital.desc": "Systems, platforms and websites designed to organise processes, improve service and strengthen digital presence.",
                "projects.swipe": "Swipe to see more",
                "projects.technical.kicker": "02 — Technical",
                "projects.technical.title": "Technical Solutions",
                "projects.technical.desc": "Infrastructure, connectivity and maintenance to keep equipment and work environments more stable.",
                "projects.more": "View solution",
                "projects.ideal": "Ideal for:",
                "projects.tagDemo": "Demo",
                "projects.tagConcept": "Concept",
                "projects.p1.type": "Management",
                "projects.p1.title": "Business Management System",
                "projects.p1.desc": "Centralises sales, stock, customers and essential business information in one environment.",
                "projects.p1.fit": "shops, stationery stores, warehouses and small businesses.",
                "projects.p2.type": "Hospitality",
                "projects.p2.title": "Restaurant Management System",
                "projects.p2.desc": "Organises orders, reservations and tables to make service simpler and more controlled.",
                "projects.p2.fit": "restaurants, cafés, bars and small establishments.",
                "projects.p3.type": "Bookings",
                "projects.p3.title": "Ticket Reservation System",
                "projects.p3.desc": "Digitises bookings, confirmations and ticket issuing in a simpler user flow.",
                "projects.p3.fit": "transport, events, tours and appointment-based services.",
                "projects.p4.type": "Web",
                "projects.p4.title": "Corporate Website",
                "projects.p4.desc": "Presents the company, services and contacts through a modern, responsive digital presence.",
                "projects.p4.fit": "companies, professionals, associations and growing brands.",
                "projects.p5.type": "Networks",
                "projects.p5.title": "Network Infrastructure",
                "projects.p5.desc": "Organises LAN, Wi-Fi, routers and resource sharing to improve connectivity.",
                "projects.p5.fit": "offices, shops, homes and small organisations.",
                "projects.p6.type": "Maintenance",
                "projects.p6.title": "IT Equipment Maintenance",
                "projects.p6.desc": "Diagnosis, cleaning, optimisation and maintenance to reduce failures and extend equipment life.",
                "projects.p6.fit": "personal computers, offices, students and small businesses.",
                
                "academic.title": "ACADEMIC & RESEARCH SUPPORT",
                "academic.heading": "Support in structuring and formatting academic documents.",
                "academic.i1": "Preparation of scientific papers",
                "academic.i2": "Monographs",
                "academic.i3": "Scientific articles",
                "academic.i4": "Research projects",
                "academic.i5": "Academic reports",
                "academic.i6": "Review and correction of papers",
                "academic.i7": "Academic formatting",
                "academic.i8": "Bibliographic references",
                "academic.i9": "PowerPoint presentations",
                "academic.i10": "Defense preparation support",
                
                "process.title": "HOW WE WORK",
                "process.heading": "A simple process focused on results.",
                "process.p1.title": "Understand",
                "process.p1.desc": "Understand the client's needs.",
                "process.p2.title": "Plan",
                "process.p2.desc": "Define the appropriate solution.",
                "process.p3.title": "Develop",
                "process.p3.desc": "Build, configure or implement.",
                "process.p4.title": "Support",
                "process.p4.desc": "Provide support and improvements.",
                
                "why.title": "WHY AYUSOLUTION?",
                "why.heading": "Reasons to trust us.",
                "why.w1.title": "Problem first",
                "why.w1.desc": "We first understand the need, then choose the appropriate solution.",
                "why.w2.title": "Direct service",
                "why.w2.desc": "Simple communication and follow-up throughout each service stage.",
                "why.w3.title": "On-site and remote",
                "why.w3.desc": "Service in Quelimane and remote support when the type of work allows it.",
                "why.w4.title": "Adapted solutions",
                "why.w4.desc": "Each proposal is adjusted to the need, context and scale of the request.",
                "why.w5.title": "Follow-up",
                "why.w5.desc": "When needed, we provide guidance after setup or delivery.",
                
                "faq.title": "FREQUENTLY ASKED QUESTIONS",
                "faq.heading": "A few answers before you get started.",
                "faq.q1": "How can I request a quote?",
                "faq.a1": "Choose a service in the form or contact us on WhatsApp. Tell us what you need and we will respond with the appropriate guidance.",
                "faq.q2": "Does Ayusolution provide remote support?",
                "faq.a2": "Yes. Depending on the service, support can be provided remotely. Services requiring physical intervention are arranged directly with the client.",
                "faq.q3": "Do you work with individuals and businesses?",
                "faq.a3": "Yes. We work with students, professionals, small businesses, organizations and individual clients according to each need.",
                "faq.q4": "Can I request a custom solution?",
                "faq.a4": "Yes. Websites, systems, networks and other solutions can be adapted to the client's problem and context.",
                "faq.q5": "Does Ayusolution provide service in Quelimane?",
                "faq.a5": "Yes. Ayusolution is based in Quelimane. On-site visits depend on the type of service and are arranged directly.",
                "faq.q6": "How much does a website or repair cost?",
                "faq.a6": "The price depends on the work required. We first collect the details and then provide an appropriate estimate or proposal.",

                "contact.title": "HAVE A PROJECT IN MIND?",
                "contact.heading": "Tell us what you need and let's find the right solution.",
                "contact.subtitle": "Tell us what you need. The clearer the request, the easier it is to suggest the right solution.",
                "contact.local": "Quelimane, Zambézia — on-site and remote support",
                "contact.direct": "Direct contact by WhatsApp or form",
                "contact.quoteInfo": "Quotes depend on the characteristics of each request",
                "contact.wa": "Talk on WhatsApp",
                "contact.form.heading": "Request a quote",
                "contact.form.subtitle": "Fill in the details below. You do not need to write a long message.",
                "contact.form.name": "Name",
                "contact.form.email": "Email (optional)",
                "contact.form.phone": "Phone / WhatsApp",
                "contact.form.service": "Service",
                "contact.form.select": "Select a service",
                "contact.form.requestType": "Request type",
                "contact.form.requestTypeSelect": "Select",
                "contact.form.type.quote": "Quote",
                "contact.form.type.info": "Information",
                "contact.form.type.support": "Support",
                "contact.form.urgency": "Urgency",
                "contact.form.urgencySelect": "Select",
                "contact.form.urgency.normal": "Normal",
                "contact.form.urgency.soon": "Needed soon",
                "contact.form.urgency.urgent": "Urgent",
                "contact.form.message": "Describe what you need",
                "contact.form.btn": "Send request",
                "contact.form.waBtn": "Send on WhatsApp",
                "contact.form.privacy": "When you send this form, the data will only be used to reply to your request.",
                "contact.form.privacyLink": "Learn more",
                "contact.form.success": "Request sent successfully! We will contact you shortly.",
                
                "footer.desc": "Technology and digital solutions focused on solving real needs for individuals, professionals and small businesses.",
                "footer.location": "Quelimane, Zambézia — Mozambique",
                "footer.privacy": "Privacy Policy",
                "footer.faq": "Frequently asked questions",
                "footer.nav": "Navigation",
                "footer.services": "Services",
                "footer.contact": "Contact",
                "footer.copyright": "© 2026 Ayusolution. All rights reserved."
            }
        };
const projectDetails = {
            p1: {
                icon: 'fa-cash-register', serviceKey: 'services.s6.title',
                pt: { tag: 'Demonstração', title: 'Sistema de Gestão Comercial', summary: 'Conceito de sistema para centralizar vendas, stock e clientes num único ambiente.', challenge: 'Organizar operações comerciais que normalmente ficam dispersas em cadernos, folhas de cálculo ou processos manuais.', solution: 'Painel de gestão com registo de vendas, controlo de stock e informação de clientes.', tech: 'Sistemas web · Base de dados · Gestão', status: 'Demonstração funcional / conceito' },
                en: { tag: 'Demo', title: 'Business Management System', summary: 'System concept to centralise sales, stock and customers in one environment.', challenge: 'Organise commercial operations usually spread across notebooks, spreadsheets or manual processes.', solution: 'Management dashboard with sales records, stock control and customer information.', tech: 'Web systems · Database · Management', status: 'Functional demo / concept' }
            },
            p2: {
                icon: 'fa-utensils', serviceKey: 'services.s6.title',
                pt: { tag: 'Conceito', title: 'Sistema de Gestão de Restaurante', summary: 'Conceito de plataforma para pedidos, reservas e organização de mesas.', challenge: 'Reduzir desorganização entre pedidos, disponibilidade de mesas e reservas.', solution: 'Sistema com registo de pedidos, reservas e controlo básico de mesas.', tech: 'Sistema web · Reservas · Gestão', status: 'Conceito de solução' },
                en: { tag: 'Concept', title: 'Restaurant Management System', summary: 'Platform concept for orders, reservations and table organisation.', challenge: 'Reduce confusion between orders, table availability and reservations.', solution: 'System with order records, reservations and basic table control.', tech: 'Web system · Reservations · Management', status: 'Solution concept' }
            },
            p3: {
                icon: 'fa-ticket-alt', serviceKey: 'services.s6.title',
                pt: { tag: 'Conceito', title: 'Sistema de Reserva de Bilhetes', summary: 'Plataforma conceptual para reservas e emissão digital de bilhetes.', challenge: 'Facilitar o processo de reserva e reduzir dependência de registos manuais.', solution: 'Fluxo digital de pesquisa, reserva, confirmação e emissão de bilhete.', tech: 'Web · Reservas · Base de dados', status: 'Conceito de solução' },
                en: { tag: 'Concept', title: 'Ticket Reservation System', summary: 'Concept platform for reservations and digital ticket issuing.', challenge: 'Simplify the booking process and reduce dependence on manual records.', solution: 'Digital flow for search, booking, confirmation and ticket issuing.', tech: 'Web · Reservations · Database', status: 'Solution concept' }
            },
            p4: {
                icon: 'fa-globe', serviceKey: 'services.s5.title',
                pt: { tag: 'Demonstração', title: 'Website Corporativo', summary: 'Modelo de website institucional moderno, responsivo e orientado para contactos.', challenge: 'Dar presença digital profissional a uma organização e apresentar serviços com clareza.', solution: 'Website responsivo com apresentação institucional, serviços, portfólio e contacto.', tech: 'HTML · CSS · JavaScript · SEO', status: 'Demonstração funcional / conceito' },
                en: { tag: 'Demo', title: 'Corporate Website', summary: 'Modern, responsive corporate website model focused on generating contacts.', challenge: 'Give an organisation a professional digital presence and clearly present its services.', solution: 'Responsive website with company profile, services, portfolio and contact.', tech: 'HTML · CSS · JavaScript · SEO', status: 'Functional demo / concept' }
            },
            p5: {
                icon: 'fa-server', serviceKey: 'services.s3.title',
                pt: { tag: 'Conceito', title: 'Infraestrutura de Rede', summary: 'Conceito de implementação de rede LAN e configuração de conectividade Wi-Fi.', challenge: 'Melhorar ligação entre equipamentos e partilha de recursos numa pequena organização.', solution: 'Planeamento básico de rede, configuração de router e estrutura LAN/Wi-Fi.', tech: 'LAN · Wi-Fi · Routers · Redes', status: 'Conceito de solução' },
                en: { tag: 'Concept', title: 'Network Infrastructure', summary: 'Concept for LAN implementation and Wi-Fi connectivity configuration.', challenge: 'Improve device connectivity and resource sharing in a small organisation.', solution: 'Basic network planning, router setup and LAN/Wi-Fi structure.', tech: 'LAN · Wi-Fi · Routers · Networks', status: 'Solution concept' }
            },
            p6: {
                icon: 'fa-tools', serviceKey: 'services.s1.title',
                pt: { tag: 'Demonstração', title: 'Manutenção de Equipamentos Informáticos', summary: 'Fluxo de manutenção preventiva e correctiva para equipamentos informáticos.', challenge: 'Identificar falhas, reduzir lentidão e prolongar a vida útil dos equipamentos.', solution: 'Diagnóstico, limpeza, optimização, configuração e substituição de componentes quando necessário.', tech: 'Hardware · Windows · Diagnóstico', status: 'Demonstração de serviço' },
                en: { tag: 'Demo', title: 'IT Equipment Maintenance', summary: 'Preventive and corrective maintenance workflow for IT equipment.', challenge: 'Identify faults, reduce slowness and extend equipment life.', solution: 'Diagnosis, cleaning, optimisation, configuration and component replacement when necessary.', tech: 'Hardware · Windows · Diagnostics', status: 'Service demo' }
            }
        };

const el=id=>document.getElementById(id);
const lang=()=>document.documentElement.lang.startsWith('en')?'en':'pt';
const get=k=>{try{return localStorage.getItem(k)}catch(_){return null}};
const put=(k,v)=>{try{localStorage.setItem(k,v)}catch(_){}};
function showToast(text){const t=el('pwaToast');if(!t)return;t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3300);}
function updateTheme(){const b=el('themeToggle');if(!b)return;const light=document.documentElement.getAttribute('data-theme')==='light';const i=b.querySelector('i');if(i)i.className=light?'fas fa-moon':'fas fa-sun';b.setAttribute('aria-label',light?'Activar modo escuro':'Activar modo claro');}
function setLanguage(code){
 code=code==='en'?'en':'pt';document.documentElement.lang=code==='en'?'en':'pt-MZ';
 document.querySelectorAll('[data-i18n]').forEach(node=>{const value=translations[code]?.[node.dataset.i18n];if(typeof value==='string')node.textContent=value;});
 ['pt','en'].forEach(key=>el('lang-'+key)?.classList.toggle('active',key===code));
 put('ayusolution-language',code);translateV14Content(code);updateTheme();updateWa();
 const t=el('installAppBtnText');if(t)t.textContent=code==='en'?'Install App':'Instalar App';
 const rotating=el('rotatingService');if(rotating)rotating.textContent=code==='en'?'Websites & Systems':'Websites & Sistemas';
}
window.setLanguage=setLanguage;

// Keep the additional V14 landing/page introductions bilingual.
function translateV14Content(code){
 const pt=code==='pt';
 const route=(location.pathname.split('/').pop()||'index.html');
 const intro={
  'servicos.html':[['Serviços tecnológicos e digitais','Discover our IT and digital services'],['Descubra todas as áreas de actuação: informática, impressoras, redes, videovigilância, websites e sistemas.','Explore our services: IT, printers, networking, CCTV, websites and management systems.']],
  'projectos.html':[['Soluções para pessoas e negócios','Solutions for people and businesses'],['Veja exemplos e propostas de sistemas, websites, redes e manutenção. Clique num projecto para conhecer os detalhes.','Explore systems, websites, networks and technical services. Select a project to view details.']],
  'sobre.html':[['Tecnologia útil, próxima e funcional','Practical, accessible technology'],['Conheça a nossa abordagem, o processo de trabalho e a forma como acompanhamos cada cliente.','Discover our approach, workflow and commitment to supporting our clients.']],
  'apoio-academico.html':[['Apoio na organização de documentos','Academic document support'],['Serviços de revisão, formatação, estruturação de referências e preparação de apresentações.','Review, formatting, references and presentation preparation.']],
  'contacto.html':[['Vamos encontrar uma solução',"Let's find a solution"],['Entre em contacto por WhatsApp ou envie um pedido detalhado através do formulário.','Contact us on WhatsApp or send a detailed request using the form.']]
 };
 if(intro[route]){
  const title=document.querySelector('.ayu-page-intro h1'),subtitle=document.querySelector('.ayu-page-intro p');
  if(title)title.textContent=intro[route][0][pt?0:1];
  if(subtitle)subtitle.textContent=intro[route][1][pt?0:1];
 }
 document.querySelectorAll('.ayu-page-actions a').forEach(link=>{
  const href=link.getAttribute('href');
  if(href==='/contacto.html')link.textContent=pt?'Pedir orçamento':'Request a quote';
  else if(href==='/servicos.html')link.textContent=pt?'Ver serviços':'View services';
 });
 const headline=document.querySelector('.ayu-home-cta h2');
 const summary=document.querySelector('.ayu-home-cta p');
 if(headline)headline.textContent=pt?'Tem um problema tecnológico? Estamos aqui para ajudar.':'Need technology support? We are here to help.';
 if(summary)summary.textContent=pt?'Descreva a sua necessidade. Vamos orientar o próximo passo e preparar um orçamento adequado.':'Tell us what you need. We will discuss the next steps and prepare a tailored quote.';
 const parts=[['Assistência técnica','IT support','Manutenção, diagnóstico e configuração de equipamentos.','Maintenance, troubleshooting and device setup.'],
  ['Websites e sistemas','Websites and systems','Soluções digitais adaptadas a negócios e profissionais.','Digital solutions tailored to businesses and professionals.'],
  ['Atendimento directo','Direct contact','Em Quelimane e remotamente quando o serviço permite.','In Quelimane or remotely whenever possible.']];
 document.querySelectorAll('.ayu-benefits-grid article').forEach((article,i)=>{
  const info=parts[i];if(!info)return;
  const h=article.querySelector('h2'),p=article.querySelector('p');
  if(h)h.textContent=info[pt?0:1];if(p)p.textContent=info[pt?2:3];
 });
}

function updateWa(){
 const srv=el('service')?.value||'';
 const t=lang()==='pt'?'Olá AYU Solution, gostaria de saber mais sobre os vossos serviços.':'Hello AYU Solution, I would like to learn more about your services.';
 const msg=srv?t+' Serviço: '+srv:t;
 document.querySelectorAll('.whatsapp-btn,.wa-float,#mobileWhatsApp').forEach(a=>a.href='https://wa.me/258870197738?text='+encodeURIComponent(msg));
}
function selectService(key){const s=el('service');if(!s)return;const opt=[...s.options].find(o=>o.dataset.i18n===key);if(opt)s.value=opt.value;updateWa();}
function requestService(key){
 if(el('contactForm')){selectService(key);el('service')?.focus();}
 else location.href='/contacto.html?servico='+encodeURIComponent(key||'');
}
window.requestService=requestService;
function setupContact(){
 const form=el('contactForm');if(!form)return;
 const q=new URLSearchParams(location.search).get('servico');if(q)selectService(q);
 el('service')?.addEventListener('change',updateWa);
 el('formWhatsAppBtn')?.addEventListener('click',()=>{
   const required=['name','phone','service','requestType','urgency','message'].map(el);
   const miss=required.find(x=>!x?.value.trim());if(miss){miss.focus();showToast('Preencha primeiro os campos obrigatórios.');return;}
   const names=['name','phone','service','requestType','urgency','message'];
   const lines=names.map(k=>k+': '+el(k).value).join('\n');
   window.open('https://wa.me/258870197738?text='+encodeURIComponent('Olá AYU Solution, gostaria de solicitar assistência.\n'+lines),'_blank','noopener');
 });
 form.addEventListener('submit',async event=>{
   event.preventDefault();if(!form.reportValidity())return;
   const button=el('submitBtn'),info=el('formFeedback');button.disabled=true;button.textContent='A enviar…';
   const data={Nome:el('name').value,Email:el('email').value||'Não indicado',Telefone:el('phone').value,
   Serviço:el('service').value,Tipo_de_pedido:el('requestType').value,Urgência:el('urgency').value,
   Mensagem:el('message').value,_subject:'Novo pedido — Ayusolution'};
   try{
    const r=await fetch('https://formsubmit.co/ajax/ismaelmussabacar0@gmail.com',{
      method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});
    const result=await r.json().catch(()=>({}));
    if(!r.ok||result.success===false||result.success==='false')throw new Error('Not confirmed');
    info.removeAttribute('style');info.classList.add('success');info.style.display='block';
    info.textContent=translations[lang()]['contact.form.success'];form.reset();
   }catch(_){
    info.classList.remove('success');info.style.display='block';info.style.color='#EF4444';
    info.textContent=lang()==='en'?'Could not send. Please use WhatsApp.':'Erro no envio. Tente novamente ou utilize o WhatsApp.';
   }finally{button.disabled=false;button.textContent=translations[lang()]['contact.form.btn'];}
 });
}
function setupProjects(){
 const modal=el('projectModal');if(!modal)return;
 let active=null,trigger=null;
 function close(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');trigger?.focus();}
 function open(key,node){const item=projectDetails[key];if(!item)return;active=key;trigger=node;const data=item[lang()];
 const icon=el('projectModalIcon');if(icon)icon.className='fas '+item.icon;
 const m={projectModalTag:'tag',projectModalTitle:'title',projectModalSummary:'summary',projectModalChallenge:'challenge',projectModalSolution:'solution',projectModalTech:'tech',projectModalStatus:'status'};
 for(const [id,prop]of Object.entries(m)){const target=el(id);if(target)target.textContent=data[prop];}
 modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');el('projectModalClose')?.focus();
 }
 document.querySelectorAll('.project-card[data-project]').forEach(card=>{
   card.addEventListener('click',()=>open(card.dataset.project,card));
   card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(card.dataset.project,card);}});
 });
 el('projectModalClose')?.addEventListener('click',close);
 el('projectModalDismiss')?.addEventListener('click',close);
 modal.addEventListener('click',e=>{if(e.target===modal)close();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close();});
 el('projectModalQuote')?.addEventListener('click',()=>{if(active){const key=projectDetails[active].serviceKey;close();requestService(key);}});
}
function setupNavigation(){
 const menu=el('nav-menu'),hamb=el('hamburger-btn');
 function toggle(force){if(!menu)return;const open=typeof force==='boolean'?force:!menu.classList.contains('active');
 menu.classList.toggle('active',open);hamb?.setAttribute('aria-expanded',String(open));const i=hamb?.querySelector('i');if(i)i.className=open?'fas fa-times':'fas fa-bars';}
 hamb?.addEventListener('click',()=>toggle());menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>toggle(false)));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('active')){toggle(false);hamb?.focus();}});
 let last=-1;const update=()=>{const y=scrollY;if(y===last)return;last=y;el('header')?.classList.toggle('scrolled',y>40);el('backToTop')?.classList.toggle('visible',y>600);
 const total=document.documentElement.scrollHeight-innerHeight;if(el('scrollProgress'))el('scrollProgress').style.width=(total>0?Math.min(100,y/total*100):0)+'%';};
 addEventListener('scroll',update,{passive:true});update();
 el('backToTop')?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
 let path=location.pathname==='/'?'/index.html':location.pathname;
 menu?.querySelectorAll('a').forEach(a=>{const url=new URL(a.href,location.origin);let target=url.pathname==='/'?'/index.html':url.pathname;
 a.classList.toggle('active',target===path);if(target===path)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
}
function setupReveal(){
 const obs='IntersectionObserver'in window?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}}),{threshold:.05,rootMargin:'0px 0px -30px 0px'}):null;
 document.querySelectorAll('.reveal').forEach(node=>obs?obs.observe(node):node.classList.add('visible'));
}
function setupCompact(){
 document.querySelectorAll('#services .service-list,#academic .academic-list').forEach(list=>{
 const max=list.closest('#academic')?4:3;if(list.children.length<=max)return;list.classList.add('mobile-collapsible');
 const btn=document.createElement('button');btn.className='mobile-expand-btn';btn.type='button';btn.textContent='Ver mais';btn.setAttribute('aria-expanded','false');
 list.after(btn);btn.addEventListener('click',()=>{const active=list.classList.toggle('mobile-expanded');btn.textContent=active?'Ver menos':'Ver mais';btn.setAttribute('aria-expanded',String(active));});
 });
 document.querySelectorAll('#services .service-row').forEach(row=>{if(row.querySelectorAll(':scope > .tech-card').length>1)row.classList.add('mobile-card-strip');});
}
function setupPWA(){
 let event=null;
 addEventListener('beforeinstallprompt',e=>{e.preventDefault();event=e;el('installAppBtn')?.classList.add('available');});
 el('installAppBtn')?.addEventListener('click',async()=>{if(event){event.prompt();await event.userChoice;event=null;}else showToast('Use o menu do navegador para instalar a aplicação.');});
 if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('/service-worker.js',{scope:'/'}).catch(()=>{}));
}
function oldHashRedirect(){
 if(document.body.dataset.page!=='home')return;
 const map={'#services':'/servicos.html','#popular-services':'/servicos.html','#projects':'/projectos.html','#gallery':'/projectos.html#gallery','#about':'/sobre.html','#process':'/sobre.html#process','#academic':'/apoio-academico.html','#contact':'/contacto.html','#faq':'/contacto.html#faq','#guides':'/guias.html'};
 const hash=location.hash;const dest=map[hash]||(hash.startsWith('#servico-')?'/servicos.html'+hash:null);
 if(dest)location.replace(dest);
}
document.addEventListener('DOMContentLoaded',()=>{
 oldHashRedirect();setupNavigation();
 el('themeToggle')?.addEventListener('click',()=>{const v=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',v);put('ayusolution-theme-v10-light',v);updateTheme();});
 setLanguage(get('ayusolution-language')==='en'?'en':'pt');
 setupReveal();setupContact();setupProjects();setupCompact();setupPWA();
});
