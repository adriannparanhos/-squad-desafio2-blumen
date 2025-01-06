import { DeveloperCard } from "../../components/DeveloperCard";
import { Developer } from "../../types/developer";
import "./style.css";

const developers: Developer[] = [
  {
    name: "Thomas Henrique de Souza Santos",
    avatar: "https://github.com/thethoomm.png",
    role: "Frotend Developer",
    personalDescription:
      "I'm fullstack developer, focused in Node.js ecosystem and Golang enthusiast. I have experience in modern web applications with Next.js and Nest.js.  I also enjoy working with the Vue.js ecosystem and stay updated with the latest technologies in the industry.",
  },
];

export default function AboutUs() {
  return (
    <div className="about-us-page">
      <div className="about-us-developers">
        {developers.map((developer, index) => (
          <DeveloperCard key={index} developer={developer} />
        ))}
      </div>
    </div>
  );
}
