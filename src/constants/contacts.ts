import { type Contact } from "@/interfaces/utilsInterfaces";
import {
  BsFillEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

export const contacts: Contact[] = [
  {
    url: "mailto:paulomedeiros5000@gmail.com",
    icon: BsFillEnvelopeFill,
  },
  {
    url: "https://www.linkedin.com/in/joaopmmorais/",
    icon: BsLinkedin,
  },
  { url: "https://github.com/jpmedeirosmorais", icon: BsGithub },
  { url: "https://wa.me/5584999170574", icon: BsWhatsapp },
  { url: "https://medium.com/@paulomedeiros5000", icon: BsMedium },
  { url: "https://twitter.com/jpmedeiros50", icon: BsTwitter },
];
