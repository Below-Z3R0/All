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
      Link: "#home", 
    },
    {
      Id: 3, 
      Title: "Habilidades", 
      Link: "#skills",
    },
    {
      Id: 4, 
      Title: "Formación", 
      Link: "#training",
    },
    {
      Id: 5, 
      Title: "Proyectos", 
      Link: "#proyects",
    },
    {
      Id: 6, 
      Title: "Contacto", 
      Link: "#contact",
    },
  ],
},
English: {
  Cards: [
    {
      Id: 1, 
      Title: "Home", 
      Link: "#home", 
    },
    {
      Id: 3, 
      Title: "Skills", 
      Link: "#skills",
    },
    {
      Id: 4, 
      Title: "Training", 
      Link: "#training",
    },
    {
      Id: 5, 
      Title: "Proyects", 
      Link: "#proyects",
    },
    {
      Id: 6, 
      Title: "Contact", 
      Link: "#contact",
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