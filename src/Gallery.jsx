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
  }, [visibleImages]); // re-run when page changes

  return (
    <section id="gallery" className="gallery-section edgy-gallery" ref={galleryRef}>
      <h3>Sáu Snapshots</h3>

      <div className="gallery-grid">
        {visibleImages.map((img, idx) => (
          <img
            key={startIndex + idx}
            src={img}
            alt={`Gallery item ${startIndex + idx + 1}`}
            loading="lazy"
            onClick={() => onImageClick(img)}
            style={{ "--initial-rotate": idx % 2 === 0 ? "-2deg" : "2deg" }}
          />
        ))}
      </div>

      {/* CENTERED ARROWS */}
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
