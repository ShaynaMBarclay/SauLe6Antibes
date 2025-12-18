import "./styles/App.css";
import { useEffect, useState } from "react";
import InstagramEmbed from "./InstagramEmbed";
import hero from "./assets/hero.webp";
import menuImage from "./assets/menu.jpg";
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
      <section className="hero">
        <img src={hero} alt="Restaurant food" className="hero-img" />
        <div className="hero-text">
          <h2>Colorful Vietnamese Street Food</h2>
          <p>Minimal design. Max flavor. Fresh bowls, crispy rolls, bold drinks.</p>
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
          <h2>Street food with an edge.</h2>
          <p>FRUITY BOBA – LIGHT, REFRESHING, DELICIOUS</p>
        </div>
      </section>

      <section className="vibe-section vibe-section-flipped">
        <div className="vibe-img-wrapper">
          <img src={foodheader} alt="Modern Vietnamese Craft" className="vibe-img" />
        </div>
        <div className="vibe-text">
          <h2>Crafted with character.</h2>
          <p>🔥 BÁNH MÌ THỊT – THE REAL DEAL 🔥</p>
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
