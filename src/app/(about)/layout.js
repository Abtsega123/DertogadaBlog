import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
  "🦋I'm not just a software engineer – I'm a digital guardian forging a secure path in the cyber wilderness",
  "👨🏾‍💻Computer Science and Engineering Student👨‍💻",
  "🦀I traverse the digital realms with the passion of a tech enthusiast and the vigilance of a cybersecurity aficionado🦊",
  "💻🔭CyberGuy, Developer, Curious, Passionate💻🔭",
  "🎲Crafting code that sings in the language of innovation by day, and donning the cyber cape to safeguard the digital frontier by night🦋",
  "🎯Navigating the binary seas with lines of code by day, and standing guard as a cyber sentinel by night.🏆",
];


export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
