import { useEffect, useRef } from "react";

export default function InstagramEmbed({ embedHtml }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = embedHtml;

      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);
      } else {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      }
    }
  }, [embedHtml]);

  return (
    <div className="instagram-wrapper">
      <div ref={containerRef}></div>
    </div>
  );
}
