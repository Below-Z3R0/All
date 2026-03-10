import CSS3 from "../../../assets/Img/CSS3.jpg";
import Git from "../../../assets/Img/GIT.png";
import GitHub from "../../../assets/Img/GITHUB.jpg";
import Gmail from "../../../assets/Img/Gmail.jpg";
import HTML5 from "../../../assets/Img/HTML5.webp";
import JavaScript from "../../../assets/Img/JavaScript.webp";
import LinkedIn from "../../../assets/Img/LinkedIn.png";
import LogoUtp from "../../../assets/Img/LogoUtp.png";
import Ojo from "../../../assets/Img/Ojo.png"
import React from "../../../assets/Img/React.png";
export const CvData = {
Spanish: {
        Section1: {
        Title1:"Hola! Soy",
        Title2:"Emmanuel Centeno",
        Title3:"Desarrollador WEB FRONT-END",
        Paragrapht: "Estudiante de Licenciatura en Gestión y Desarrollo de Software en la Universidad Tecnológica de Panamá (UTP), enfocado en el desarrollo Fullstack. Me apasiona la lógica de programación, la optimización y la creación de aplicaciones web con estructuras claras y escalables. Actualmente trabajo con HTML, CSS, JavaScript, React, Git, GitHub y SQL, desarrollando proyectos con un enfoque minimalista, profesional y orientado a la mejor experiencia de usuario.",
        ImgSrc: LinkedIn,
        Contact: [
        {Id: 1, ImgSrc: Gmail},
        {Id: 2, ImgSrc: Git},
        {Id: 3, ImgSrc: LinkedIn},
        ],
        Bottons: [
            {Id:1, Txt: "DESCARGAR CV"},
            {Id:2, Txt: "CONTACTO"},
        ]
    },
    
    Section2: {
            Title: "Sobre mí",
            ImgSrc: LinkedIn,
            SecondTitle: "Emmanuel Centeno",
            Paragrapht: "Soy estudiante de Licenciatura en Gestión y Desarrollo de Software en la Universidad Tecnológica de Panamá. Actualmente me enfoco en el desarrollo web con el objetivo de convertirme en desarrollador Fullstack. Trabajo principalmente con tecnologías como HTML, CSS, JavaScript, React, Git, GitHub y SQL, y continúo fortaleciendo mis conocimientos en React, CSS y bases de datos. Me interesa especialmente la lógica de programación, la optimización del código y la construcción de aplicaciones con estructuras claras y escalables. Disfruto desarrollar proyectos minimalistas, creativos y profesionales, priorizando siempre la eficiencia y la calidad del código. Aunque también puedo trabajar en diseño de interfaces y animaciones, actualmente mi mayor interés está en la arquitectura del software y el flujo de datos dentro de las aplicaciones. Me considero una persona curiosa, autodidacta, analítica y perfeccionista, siempre buscando mejorar mis habilidades y aprender nuevas tecnologías para crecer dentro de la industria tecnológica."
    },
    Section3: {
        Title: "Habilidades",
        Logos: [
            {Id:1, ImgSrc: React, Names: "React"},
            {Id:2, ImgSrc: HTML5, Names: "HTML5"},
            {Id:3, ImgSrc: CSS3, Names: "CSS3"},
            {Id:4, ImgSrc: JavaScript, Names: "JavaScript"},
            {Id:5, ImgSrc: Git, Names: "Git"},
            {Id:6, ImgSrc: GitHub, Names: "GitHub"},
        ]
    },
    Section4: {
        Title: "Formación",
        Cards: [
            {Id:1, ImgSrc: LogoUtp, Title: "Licenciatura en Desarr. y Gest. de software", Date: "2026"},
        ]
    },

    Section5: {
        Title: "Proyectos",
        Cards: [
            {
                Id:1, 
                ImgSrc: Git, 
                Name: "Portafolio", 
                Description: "Portafolio Web con react router, desarrollado de manera responsive e interactiva", 
                Bottons: [
                    {Id:1, SrcImg: Ojo, Txt: "DEMO"},
                    {Id:2, SrcImg: GitHub, Txt: "REPO"}
                ], 
                Logos: [
                    {Id:1, SrcImg: React, Tittle:"React", Description: "Este portafolio esta controlado completamente por react-router desde las secciones ensi hasta cada uno de los elementos esta hecho en react."},
                    {Id:2, SrcImg: JavaScript, Tittle:"JavaScript", Description: "Esta tecnologia fue utilizada para el backend y hooks personalizados asi mismo como para la manipulacion de arreglos para renderizado dinamico con archivos de data independientes por pagina del proyecto"},
                    {Id:3, SrcImg: HTML5, Tittle:"HTML5", Description: "Fue utilizado para toda la estructura de la pagina web combinado con react y jsx para la creacion de elementos dinamicos"},
                    {Id:4, SrcImg: CSS3, Tittle:"CCS3", Description: "Utilizado para todo el estilado de la pagina, cada seccion tiene su archivo de estilado, ya que es una landing page decidi que los estilados no se pasen como prop ya que no se necesita que sean dinamicos "},
                ]
            },
        ]
    },

    Section6: {
        Title: "Contacto"
    }
},

English: {
    Section1: {
        Title1:"Hello! I'm",
        Title2:"Emmanuel Centeno",
        Paragrapht: "A Software Management and Development student at the Technological University of Panama (UTP), focused on becoming a Fullstack developer. I’m passionate about programming logic, optimization, and building web applications with clear and scalable architectures. I currently work with HTML, CSS, JavaScript, React, Git, GitHub, and SQL, developing projects with a minimalist, professional approach focused on delivering the best possible user experience.",
        ImgSrc: LinkedIn,
        Contact: [
        {Id: 1, ImgSrc: Gmail},
        {Id: 2, ImgSrc: Git},
        {Id: 3, ImgSrc: LinkedIn},
        ],
        Bottons: [
            {Id:1, Txt: "DOWNLOAD CV"},
            {Id:2, Txt: "Contact"},
        ]
    },
    
    Section2: {
            Title: "About Me",
            ImgSrc: LinkedIn,
            SecondTitle: "Emmanuel Centeno",
            Paragrapht: "I’m currently studying Software Management and Development at the Technological University of Panama. My main focus is web development, with the goal of becoming a Fullstack developer. I primarily work with technologies such as HTML, CSS, JavaScript, React, Git, GitHub, and SQL, while continuing to strengthen my knowledge in React, CSS, and database systems. What interests me the most is programming logic, code optimization, and building applications with clean, scalable architectures. I enjoy creating minimalist, creative, and professional projects, always prioritizing efficiency and high-quality code. Although I can also work on UI design and animations, my current focus is mainly on software architecture and data flow within applications. I consider myself a curious, self-taught, analytical, and detail-oriented developer, always looking to improve my skills and learn new technologies in order to grow within the tech industry."
        
    },
    Section3: {
        Title: "Skills",
        Logos: [
            {Id:1, ImgSrc: React, Names: "React"},
            {Id:2, ImgSrc: HTML5, Names: "HTML5"},
            {Id:3, ImgSrc: CSS3, Names: "CSS3"},
            {Id:4, ImgSrc: JavaScript, Names: "JavaScript"},
            {Id:5, ImgSrc: Git, Names: "Git"},
            {Id:6, ImgSrc: GitHub, Names: "GitHub"},
        ]
    },
    Section4: {
        Title: "Formación",
        Cards: [
            {Id:1, ImgSrc: LogoUtp, Title: "Licenciatura en Desarr. y Gest. de software", Date: "2026"},
        ]
    },

    Section5: {
        Title: "Projects",
        Cards: [
            {
                Id:1, 
                ImgSrc: Git, 
                Name: "Portafolio", 
                Description: "Portafolio Web con react router, desarrollado de manera responsive e interactiva", 
                Bottons: [
                    {Id:1, SrcImg: Ojo, Txt: "DEMO"},
                    {Id:2, SrcImg: GitHub, Txt: "REPO"}
                ], 
                Logos: [
                    {Id:1, SrcImg: React, Tittle:"React", Description: "Este portafolio esta controlado completamente por react-router desde las secciones ensi hasta cada uno de los elementos esta hecho en react."},
                    {Id:2, SrcImg: JavaScript, Tittle:"JavaScript", Description: "Esta tecnologia fue utilizada para el backend y hooks personalizados asi mismo como para la manipulacion de arreglos para renderizado dinamico con archivos de data independientes por pagina del proyecto"},
                    {Id:3, SrcImg: HTML5, Tittle:"HTML5", Description: "Fue utilizado para toda la estructura de la pagina web combinado con react y jsx para la creacion de elementos dinamicos"},
                    {Id:4, SrcImg: CSS3, Tittle:"CCS3", Description: "Utilizado para todo el estilado de la pagina, cada seccion tiene su archivo de estilado, ya que es una landing page decidi que los estilados no se pasen como prop ya que no se necesita que sean dinamicos "},
                ]
            },
        ]
    },

    Section6: {
        Title: "Contactame"
    }
},
Themes: {
    Day: HTML5,
    Night: HTML5
}
}