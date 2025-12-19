import { useState, useEffect, useRef } from "react";

const IMAGES_PER_PAGE = 10;

export default function Gallery({ images, onImageClick }) {
  const [page, setPage] = useState(0);
  const galleryRef = useRef();

  const startIndex = page * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const visibleImages = images.slice(startIndex, endIndex);

  const hasNext = endIndex < images.length;
  const hasPrev = page > 0;

  useEffect(() => {
    const imgs = galleryRef.current.querySelectorAll("img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
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
    view the full gallery <a href="https://www.instagram.com/thevsnackn6_antibes/" target="_blank" rel="noopener noreferrer">here</a>
  </p>

      <div className="gallery-grid">
        {visibleImages.map((img, idx) => {
          const src = typeof img === "object" ? img.desktop || img.mobile : img;
          const srcMobile = typeof img === "object" ? img.mobile : img;

          return (
            <img
              key={startIndex + idx}
              src={src}
              srcSet={srcMobile ? `${srcMobile} 480w, ${src} 800w` : undefined}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              alt={`Gallery item ${startIndex + idx + 1}`}
              loading="lazy"
              onClick={() => onImageClick(typeof img === "object" ? src : img)}
              style={{
                "--initial-rotate": idx % 2 === 0 ? "-2deg" : "2deg",
              }}
              className="fade-in"
              onLoad={(e) => e.target.classList.add("animate")}
            />
          );
        })}
      </div>

      <div className="gallery-arrows">
        {hasPrev && (
          <button
            className="gallery-arrow"
            onClick={() => setPage(page - 1)}
            aria-label="Previous images"
          >
            ←
          </button>
        )}
        {hasNext && (
          <button
            className="gallery-arrow"
            onClick={() => setPage(page + 1)}
            aria-label="Next images"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
