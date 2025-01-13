import {mainClick, secondClick} from "../services/useStorage.js";
import LinkedInIcon from "/icons/linkedin.svg";
import GitHubIcon from "/icons/github.svg";

const Overlay = () => {

  const links = [
    {href: "https://github.com/Frozway", icon: GitHubIcon, alt: "GitHub"},
    {href: "https://www.linkedin.com/in/thibaut-lefrancois/", icon: LinkedInIcon, alt: "LinkedIn"}
  ];

  return (
    <>
      <div className="flex items-center absolute p-7 bottom-0 left-0 animate-pulse select-none pointer-events-none">
        <img src="/icons/drag-hand.svg" alt="Drag Hand" className="w-10 h-10 mr-3 "/>
        <p className="text-white text-center text-sm font-mono">Drag and click <br/> to interact</p>
      </div>
      <div className="flex p-7 absolute bottom-0 right-0 text-white text-center">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            className="hover:opacity-80 mr-2"
            onMouseEnter={() => secondClick.play()}
            onClick={() => mainClick.play()}
          >
            <img src={link.icon} alt={link.alt} className="h-10 w-10"/>
          </a>
        ))}
      </div>
    </>
  )
}

export default Overlay;