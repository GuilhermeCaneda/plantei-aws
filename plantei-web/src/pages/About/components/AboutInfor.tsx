import React from "react";
/*import IMG_Erik from "@Assets/aboutUs/erik.jpeg";
import IMG_Guilherme from "@Assets/aboutUs/guilherme.jpg";
import IMG_Joao from "@Assets/aboutUs/joao.jpg";
import IMG_Mauricio from "@Assets/aboutUs/mauricio.jpg";
import IMG_Thais from "@Assets/aboutUs/thais.jpeg";*/
import "./AboutInfo.css";
import { baseURL, directories } from "@Types/BucketS3"

interface Person {
    name: string;
    bio: string;
    imgUrl: string;
    linkedin?: string;
    github?: string;
}

const people: Person[] = [
    {
        name: "Erik",
        bio: "Meu nome é Erik Fontella, tenho 20 anos, natural de São Borja (RS), mas morando em Alegrete (RS), técnico em informática pelo IFFAR de São Borja, graduando em Engenharia de Software na Unipampa - Alegrete, entusiasta e apaixonado por tecnologia, secretário de informática no segundo e terceiro ano do técnico em informática. Atualmente focado no estudos de tecnlogias Full Stack.",
        imgUrl: `${baseURL}${directories.teamPhotos}erik.jpeg`,  
        linkedin: "https://www.linkedin.com/in/erikricarde/",
        github: "https://github.com/herick",
    },
    {
        name: "Guilherme",
        bio: "Meu nome é Guilherme Caneda, tenho 24 anos, moro em Bagé - RS, sou Técnico em Informática pelo IFSUL e atualmente curso Engenharia de Computação na Unipampa. Tenho contato com programação há quase 8 anos e gosto de ensinar o que aprendo (já fui monitor durante o curso técnico), pois assim sinto que acabo aprendendo mais. Possuo certificação AWS Cloud Pratictioner CLF-02 e no momento gosto bastante de desenvolvimento front-end, por ter participado de um PB da Compass em 2023.",
        imgUrl: `${baseURL}${directories.teamPhotos}guilherme.jpg`,   
        linkedin: "https://www.linkedin.com/in/guilhermecaneda/",
        github: "https://github.com/GuilhermeCaneda",
    },
    {
        name: "João",
        bio: "Sou João Carlos Brazeiro, tenho 22 anos e moro em Uruguaiana - RS. Sou formado em Técnico em informática para Internet pelo IFFAR - Uruguaiana. Atualmente estudo Ciência da Computação, estou no 9° semestre e sou apaixonado por programar. Tenho experiência nas linguagens de programação Python, C#, C++ e JS. Tenho bastante interesse na área de IHC e hoje em dia estudo desenvolvimento web front-end e back-end. Tenho foco em ter uma comunicação clara e transparente e sou bastante acostumado a dinâmicas em grupo.",
        imgUrl: `${baseURL}${directories.teamPhotos}joao.jpg`,  
        linkedin: "",
        github: "https://github.com/CoaoJarlos",
    },

    {
        name: "Mauricio",
        bio: "Meu nome é Mauricio Beutler, tenho 20 anos e sou programador Back-end especializado em Java com Spring Boot. Atualmente, estou no 6º semestre do curso de Engenharia de Software na Faculdade Federal do Pampa.",
        imgUrl: `${baseURL}${directories.teamPhotos}mauricio.jpg`,
        linkedin: "https://www.linkedin.com/in/mauricio-beutler-a78287258/",
        github: "https://github.com/Beutler28",
    },
    {
        name: "Thais",
        bio: "Meu nome é Thais Lemos, tenho 25 anos e moro em Alegrete, RS. Atualmente, estou no 8º semestre do curso de Engenharia de Software na Universidade Federal do Pampa (Unipampa). Tenho mais experiência em back-end e, no momento, estou focada em aprimorar minhas habilidades no desenvolvimento front-end.",
        imgUrl: `${baseURL}${directories.teamPhotos}thais.jpeg`,
        linkedin: "https://www.linkedin.com/in/thais-dos-santos-9858701b2/",
        github: "https://github.com/thais",
    },
];

const PersonCard: React.FC<{ person: Person }> = ({ person }) => {
    return (
        <div className="card">
            <img
                src={person.imgUrl || "https://via.placeholder.com/150"}
                alt={person.name}
                className="card-image"
            />
            <h2>{person.name}</h2>
            <p className="bio-about">{person.bio}</p>
            <div className="card-links">
                {person.linkedin && (
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                )}
                {person.github && (
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

const AboutInfo: React.FC = () => {
    return (
        <div className="about-info-container">
            {people.map((person, index) => (
                <PersonCard key={index} person={person} />
            ))}
        </div>
    );
};

export default AboutInfo;
