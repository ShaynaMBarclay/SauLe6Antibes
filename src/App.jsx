import "./styles/App.css";
import { useEffect, useState } from "react";
import InstagramEmbed from "./InstagramEmbed";
import hero from "./assets/images/25.jpg";
import hero3 from "./assets/images/29.jpg"
import hero2 from "./assets/images/44.jpg"
import header from "./assets/lefthero.jpg";
import foodheader from "./assets/foodheader.jpg";
import MenuPage from "./MenuPage";
import DrinksPage from "./DrinksPage";


import Gallery from "./Gallery";
import galleryImages from "./GalleryImages";

export default function App() {
  const [popupImage, setPopupImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-section .menu-item");
    const drinkItems = document.querySelectorAll(".drinks-section .menu-item");
    const vibeSections = document.querySelectorAll(".vibe-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const img = entry.target.querySelector(".vibe-img-wrapper");
          const text = entry.target.querySelector(".vibe-text");

          if (entry.isIntersecting) {
            img?.classList.add("animate");
            text?.classList.add("animate");
          } else {
            img?.classList.remove("animate");
            text?.classList.remove("animate");
          }

          if (
            entry.target.classList.contains("menu-item") ||
            entry.target.classList.contains("drink-item")
          ) {
            if (entry.isIntersecting) entry.target.classList.add("animate");
            else entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    menuItems.forEach((item, index) => {
      item.style.transitionDelay = `${0.1 * index}s`;
      observer.observe(item);
    });

    drinkItems.forEach((item, index) => {
      item.style.transitionDelay = `${0.1 * index}s`;
      observer.observe(item);
    });

    vibeSections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  const embedHtml1 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DCrFRjyorfP/" data-instgrm-version="14" data-instgrm-captioned></blockquote>`;
  const embedHtml2 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DFIY8cJtZaz/" data-instgrm-version="14" data-instgrm-captioned></blockquote>`;
  const embedHtml3 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DCAJmA0Nojc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" data-instgrm-version="14" data-instgrm-captioned></blockquote>`;

  return (
    <div className="container">
      {/* NAV */}
      <header className="nav">
        <h1 className="logo">Sáu (Le 6) Antibes</h1>
        <nav className="links">
          <a href="#gallery">Gallery</a>
          <a href="#menu">Menu</a>
          <a href="#drinks">Drinks</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </nav>
      </header>

      {/* HERO */}
<section className="hero hero-two-images">
  <div className="hero-images">
    <div className="hero-images">
  <img src={hero} alt="Left hero" className="hero-img hero-left" />
  <img src={hero2} alt="Middle hero" className="hero-img hero-middle" />
  <img src={hero3} alt="Right hero" className="hero-img hero-right" />
</div>
  </div>
  <div className="hero-text">
    <h2>Street food elevated</h2>
    <p>Savage flavours only. Soft bread, hot fillings, zero mercy.</p>
    <div className="hero-buttons">
      <a href="#menu" className="btn-outline">View Menu</a>
    </div>
  </div>
</section>

      {/* VIBE SECTIONS */}
      <section className="vibe-section">
        <div className="vibe-img-wrapper">
          <img src={header} alt="Brand vibe" className="vibe-img" />
        </div>
        <div className="vibe-text">
          <h2>Your taste buds called and they’re done being polite.</h2>
          <p>They want bold Vietnamese flavours, sizzling toppings, and that SAU-level crunch.</p>
        </div>
      </section>

      <section className="vibe-section vibe-section-flipped">
        <div className="vibe-img-wrapper">
          <img src={foodheader} alt="Modern Vietnamese Craft" className="vibe-img" />
        </div>
        <div className="vibe-text">
          <h2>Your favourite bite!</h2>
          <p>🔥  It starts with crunch, ends with “holy sh*t,” and lives in the middle of Antibes.🔥</p>
        </div>
      </section>

      {/* INSTAGRAM HIGHLIGHTS */}
      <section className="highlight-section">
        <h3>Our Flavor Feed</h3>
        <div className="highlight-grid">
          <div className="highlight-item"><InstagramEmbed embedHtml={embedHtml1} /></div>
          <div className="highlight-item"><InstagramEmbed embedHtml={embedHtml2} /></div>
          <div className="highlight-item"><InstagramEmbed embedHtml={embedHtml3} /></div>
        </div>
      </section>

      {/* FEATURED INSTAGRAM REEL */}
      <section className="featured-reel-section">
        <div className="featured-reel-container">
          <div className="featured-reel-wrapper">
            <iframe
              src="https://www.instagram.com/p/DDe1e3-t_sK/embed"
              title="Sticky Rice Reel"
              loading="lazy"
              width="400"
              height="500" 
              style={{ border: 'none', overflow: 'hidden' }}
              allow="fullscreen; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="featured-reel-text">
            <h3>Let’s cook some sticky rice 🍚</h3>
            <p>
              Learn the secrets to perfect sticky rice like the pros! Fresh, fun, and flavorful – your taste buds will thank you. <br/>
              Click or Press the video to play
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery images={galleryImages} onImageClick={setPopupImage} />

      {/* IMAGE POPUP */}
      {popupImage && (
        <div className="popup-overlay" onClick={() => setPopupImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setPopupImage(null)}>×</button>
            <img src={popupImage} alt="Full view" />
          </div>
        </div>
      )}

      {/* MENU */}
      <section id="menu">
  <MenuPage />
</section>

      {/* DRINKS */}
      <section id="drinks">
  <DrinksPage />
</section>


      {/* FOOTER */}
      <footer className="footer">
        <p>6 Rue Fourmillière, Antibes • Open Mon–Sat 12:00–22:00</p>
        <a href="https://instagram.com/thevsnackn6_antibes" target="_blank">Instagram</a>
      </footer>
    </div>
  );
}
