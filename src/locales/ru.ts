export default {
    name: "Русский",
    routes: {
        home: "Главная",
        about: "Обо мне",
        contact: "Контакты",
        blog: "Блог",
    },
    footer: {
        message: "you're cute",
        donate: "поддержите меня",
        sourceCode: "source code",
    },
    home: {
        title: "LoosaZ's портфолио",
        description: "Добро пожаловать в моё портфолио!",
        hello: "Привет, я <0>LoosaZ!</0>",
        about: "Я самоучка разработчик программного обеспечения и изучаю кибербезопасность, я создаю майнкрафт моды для Java версии как хобби",
        about2: "Также мне нравятся модификации для Дискорд Клиентов и организации серверов",
        socialsTitle: "Вы можете меня увидеть много где!",
        thanks: "Спасибо Bedji, Fleanyi и Zyliatix за помощь с переводом!",
    },
    about: {
        title: "Обом мне",
        description: "Узнайте больше обо мне и о том, что я делаю",
        intro: "Я программирую с начала 2022 и научился многим языкам и фреймворк с того момента. Мне нравятся проекты с открытыми исходными кодами!",
        stack: "Tech Stack",
        projects: "Проекты",
    },
    contact: {
        title: "Свяжитесь со мной",
        description: "Узнайте как можно связаться со мной",
        socials: "Соц. сети",
        noscript: "Вам нужно разрешить JavaScript чтобы использовать",
    },
    blog: {
        title: "LoosaZ's Блог",
        description: "Ninguém sabe como ta a mente do palhaço",
        teehee: "Когда-нибудь я тут буду говорить, готовьтесь",
    },
    "404": {
        title: "404 Не найдено",
        description: "Вы потерялись? :(",
        notFound: "Упс! Страница не найдена :(",
        lost: "Либо вы потерялись, либо эта страница ещё не сделана",
        goHome: "Кликните на Atreus чтобы вернуться на главную страницу!",
        atreusAlt: "Atreus mimir",
    },
} as const;
