import React, { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    const resizeEmbed = () => {
      const embed = document.getElementById("pdfEmbed");
      if (embed) {
        const windowHeight = window.innerHeight;
        embed.style.height = `${windowHeight}px`;
      }
    };

    resizeEmbed();
    window.addEventListener("resize", resizeEmbed);
    return () => window.removeEventListener("resize", resizeEmbed);
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <embed
        id="pdfEmbed"
        src="../assets/Resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default Portfolio;
