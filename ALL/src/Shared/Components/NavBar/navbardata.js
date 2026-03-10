import Spanish from "./../../../assets/Img/Spanish.png";
import English from "./../../../assets/Img/English.png";
export const NavbarData = {
Spanish: {
  Cards: [
    {
      Id: 1, 
      Title: "Home", 
      Link: "/", 
    },
    {
      Id: 2, 
      Title: "Sobre mí", 
      Link: "/#Sobre mí",
    },
    {
      Id: 3, 
      Title: "Habilidades", 
      Link: "/#Habilidades",
    },
    {
      Id: 4, 
      Title: "Formación", 
      Link: "/#Formación",
    },
    {
      Id: 5, 
      Title: "Proyectos", 
      Link: "/#Proyectos",
    },
    {
      Id: 6, 
      Title: "Contacto", 
      Link: "/#Contacto",
    },
    {
      Id: 7, 
      Title: "Proyectos", 
      Link: "/AllProyects",
    },
  ],
},
English: {
  Cards: [
    {
      Id: 1, 
      Title: "Home", 
      Link: "/", 
    },
    {
      Id: 2, 
      Title: "About me", 
      Link: "/#Sobre mí",
    },
    {
      Id: 3, 
      Title: "Skills", 
      Link: "/#Habilidades",
    },
    {
      Id: 4, 
      Title: "Training", 
      Link: "/#Formación",
    },
    {
      Id: 5, 
      Title: "Proyects", 
      Link: "/#Proyectos",
    },
    {
      Id: 6, 
      Title: "Contact", 
      Link: "/#Contacto",
    },
    {
      Id: 7, 
      Title: "AllProyects", 
      Link: "/AllProyects",
    },
  ],
},  
Themes: {
  Day: Spanish,
  Night: English
  },
LanguagesLogos: [
  {Id: 1, ImgSrc: Spanish, LogoLanguage: "Spanish"},
  {Id: 2, ImgSrc: English, LogoLanguage: "English"}
  ],
}