import { useEffect, useRef, useState } from "react";

export default function InstagramEmbed({ embedHtml }) {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    containerRef.current.innerHTML = embedHtml;

    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => window.instgrm?.Embeds?.process();
      document.body.appendChild(script);
    } else {
      
      window.instgrm?.Embeds?.process();
    }
  }, [embedHtml, mounted]);

  return <div className="instagram-wrapper"><div ref={containerRef}></div></div>;
}
