import { useState } from "react";

const IMAGES_PER_PAGE = 10;

export default function Gallery({ images, onImageClick }) {
  const [page, setPage] = useState(0);

  const startIndex = page * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const visibleImages = images.slice(startIndex, endIndex);

  const hasNext = endIndex < images.length;
  const hasPrev = page > 0;

  return (
    <section id="gallery" className="gallery-section edgy-gallery">
      <h3>Sáu Snapshots</h3>

      <div className="gallery-grid">
        {visibleImages.map((img, idx) => (
          <img
            key={startIndex + idx}
            src={img}
            alt="Gallery item"
            loading="lazy"
            onClick={() => onImageClick(img)}
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
