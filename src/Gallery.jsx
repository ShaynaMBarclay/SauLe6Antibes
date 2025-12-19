import { useState, useEffect, useRef } from "react";

export default function Gallery({ images, onImageClick }) {
  const galleryRef = useRef();
  const [page, setPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(10);

  // Update imagesPerPage based on screen width
  useEffect(() => {
    const updateImagesPerPage = () => {
      if (window.innerWidth <= 768) setImagesPerPage(12); // mobile
      else if (window.innerWidth <= 1024) setImagesPerPage(8); // tablet
      else setImagesPerPage(10); // desktop
    };

    updateImagesPerPage();
    window.addEventListener("resize", updateImagesPerPage);
    return () => window.removeEventListener("resize", updateImagesPerPage);
  }, []);

  const startIndex = page * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const visibleImages = images.slice(startIndex, endIndex);

  const hasNext = endIndex < images.length;
  const hasPrev = page > 0;

  // Animate images on scroll
  useEffect(() => {
    const imgs = galleryRef.current.querySelectorAll("img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate");
        });
      },
      { threshold: 0.2 }
    );

    imgs.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, [visibleImages]);

  return (
    <section id="gallery" className="gallery-section edgy-gallery" ref={galleryRef}>
      <h3>Sáu Snapshots</h3>
      <p className="gallery-subtext">
        view the full gallery{" "}
        <a href="https://www.instagram.com/thevsnackn6_antibes/" target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>

      <div className="gallery-grid">
        {visibleImages.map((img, idx) => (
          <img
  key={startIndex + idx}
  src={img.desktop || img}
  srcSet={img.mobile ? `${img.mobile} 480w, ${img.desktop} 800w` : undefined}
  sizes="(max-width: 480px) 33vw, (max-width: 1024px) 25vw, 20vw"
  alt={`Gallery item ${startIndex + idx + 1}`}
  loading="lazy"
  onClick={() => onImageClick(img)}
  style={{
    "--initial-rotate": idx % 2 === 0 ? "-2deg" : "2deg",
    "--fade-delay": `${idx * 0.1}s` 
  }}
  className="fade-in"
  onLoad={(e) => e.target.classList.add("animate")}
/>
        ))}
      </div>

      <div className="gallery-arrows">
        {hasPrev && (
          <button className="gallery-arrow" onClick={() => setPage(page - 1)} aria-label="Previous images">
            ←
          </button>
        )}
        {hasNext && (
          <button className="gallery-arrow" onClick={() => setPage(page + 1)} aria-label="Next images">
            →
          </button>
        )}
      </div>
    </section>
  );
}
