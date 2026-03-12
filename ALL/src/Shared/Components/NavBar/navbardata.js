import Spanish from "./../../../assets/Img/SpainV2.png";
import English from "./../../../assets/Img/UnitedKingDomV2.png";
import Sol from "../../../assets/Img/SolV1.svg";
import Luna from "../../../assets/Img/LunaV1.svg";

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
      Link: "#sobremi",
    },
    {
      Id: 3, 
      Title: "Habilidades", 
      Link: "#habilidades",
    },
    {
      Id: 4, 
      Title: "Formación", 
      Link: "#formación",
    },
    {
      Id: 5, 
      Title: "Proyectos", 
      Link: "#proyectos",
    },
    {
      Id: 6, 
      Title: "Contacto", 
      Link: "#contacto",
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
      Link: "#sobremi",
    },
    {
      Id: 3, 
      Title: "Skills", 
      Link: "#habilidades",
    },
    {
      Id: 4, 
      Title: "Training", 
      Link: "#formación",
    },
    {
      Id: 5, 
      Title: "Proyects", 
      Link: "#proyectos",
    },
    {
      Id: 6, 
      Title: "Contact", 
      Link: "#contacto",
    },
    {
      Id: 7, 
      Title: "AllProyects", 
      Link: "/AllProyects",
    },
  ],
},  
Themes: {
  Day: Sol,
  Night: Luna
  },
LanguagesLogos: [
  {Id: 1, ImgSrc: Spanish, LogoLanguage: "Spanish"},
  {Id: 2, ImgSrc: English, LogoLanguage: "English"}
  ],
}