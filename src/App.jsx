import "./styles/App.css";
import { useEffect, useState } from "react";
import InstagramEmbed from "./InstagramEmbed";

import hero from "./assets/images/25.jpg";
import hero2 from "./assets/images/44.jpg";
import hero3 from "./assets/images/29.jpg";

import header from "./assets/lefthero.jpg";
import foodheader from "./assets/images/5.jpg";

import MenuPage from "./MenuPage";
import DrinksPage from "./DrinksPage";

import Gallery from "./Gallery";
import galleryImages from "./GalleryImages";
import { translations } from "./i18n";

import flavorFeed1 from "./assets/images/flavorfeed1.jpg";
import flavorFeed2 from "./assets/images/flavorfeed2.jpg";
import flavorFeed3 from "./assets/images/flavorfeed3.jpg";

export default function App() {
  const [popupImage, setPopupImage] = useState(null); // Lightbox state
  const [isPlaying, setIsPlaying] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [lang, setLang] = useState("fr");
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => {
      if (!navScrolled && window.scrollY > 80) {
        setNavScrolled(true);
      } else if (navScrolled && window.scrollY < 30) {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navScrolled]);

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
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            } else {
              entry.target.classList.remove("animate");
            }
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

  const embedHtml1 = `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DCMe9dBtKlv/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
<div style="padding:16px;">
<a href="https://www.instagram.com/p/DCMe9dBtKlv/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
View this post on Instagram
</a>
</div>
</blockquote>`;

  const embedHtml2 = `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DF4_f97tf9F/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
<div style="padding:16px;">
<a href="https://www.instagram.com/p/DF4_f97tf9F/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
View this post on Instagram
</a>
</div>
</blockquote>`;

  const embedHtml3 = `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DCrFRjyorfP/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
<div style="padding:16px;">
<a href="https://www.instagram.com/p/DCrFRjyorfP/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
View this post on Instagram
</a>
</div>
</blockquote>`;

  return (
    <div className="container">
      {/* NAV */}
      <header className={`nav ${navScrolled ? "nav--scrolled" : ""}`}>
        <h1
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Sáu (Le 6) Antibes
        </h1>

        <div className="language-toggle">
          <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}>
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        <nav className="links">
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#menu">{t.nav.menu}</a>
          <a href="#drinks">{t.nav.drinks}</a>
          <a href="#contact">{t.nav.contact}</a>
          <a href="#find-us" className="btn-outline">
            {t.nav.findUs}
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero hero-two-images">
        <div className="hero-images">
          <img src={hero} alt="Left hero" className="hero-img hero-left" />
          <img src={hero2} alt="Middle hero" className="hero-img hero-middle" />
          <img src={hero3} alt="Right hero" className="hero-img hero-right" />
        </div>

        <div className="hero-text">
          <h2>{t.hero.title}</h2>
          <p>{t.hero.subtitle}</p>

          <div className="hero-buttons">
            <a href="#menu" className="btn-outline">
              {t.hero.button}
            </a>
          </div>
        </div>
      </section>

      {/* VIBE SECTIONS */}
      <section className="vibe-section">
        <div className="vibe-img-wrapper">
          <img src={header} alt="Brand vibe" className="vibe-img" />
        </div>

        <div className="vibe-text">
          <h2>{t.vibe1.title}</h2>
          <p>{t.vibe1.text}</p>
        </div>
      </section>

      <section className="vibe-section vibe-section-flipped">
        <div className="vibe-img-wrapper">
          <img src={foodheader} alt="Modern Vietnamese Craft" className="vibe-img" />
        </div>

        <div className="vibe-text">
          <h2>{t.vibe2.title}</h2>
          <p>{t.vibe2.text}</p>
        </div>
      </section>

      {/* INSTAGRAM HIGHLIGHTS */}
      <section className="highlight-section">
        <h3>{t.flavorFeed}</h3>

        <div className="highlight-grid">
          <div className="highlight-item">
            <InstagramEmbed embedHtml={embedHtml1} />
          </div>
          <div className="highlight-item">
            <InstagramEmbed embedHtml={embedHtml2} />
          </div>
          <div className="highlight-item">
            <InstagramEmbed embedHtml={embedHtml3} />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery images={galleryImages} onImageClick={setPopupImage} />

      {/* LIGHTBOX / IMAGE POPUP */}
      {popupImage && (
        <div className="popup-overlay" onClick={() => setPopupImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setPopupImage(null)}>
              ×
            </button>
            <img src={popupImage} alt="Full view" />
          </div>
        </div>
      )}

      {/* LOCATION */}
      <section className="location-section" id="find-us">
        <h3>{t.findUs}</h3>

        <div className="location-wrapper">
          <iframe
            title="Sáu Antibes Location"
            src="https://www.google.com/maps?q=6%20Rue%20Fourmillière%2C%20Antibes&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="map-buttons">
          <a
            href="https://www.google.com/maps/search/?api=1&query=6+Rue+Fourmillière,+Antibes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
           {t.openGoogleMaps}
          </a>

          <a
            href="https://maps.apple.com/?q=6+Rue+Fourmillière,+Antibes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
           {t.openAppleMaps}
          </a>
        </div>
      </section>

      {/* MENU */}
      <section id="menu">
        <MenuPage />
      </section>

      {/* DRINKS */}
      <section id="drinks">
        <DrinksPage />
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <h3>{t.contact}</h3>

        <div className="contact-links">
          <a>Lebaou4@gmail.com</a>

          <a
            href="https://www.instagram.com/thevsnackn6_antibes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p>{t.footer}</p>

          <div className="footer-links">
            <a
              href="https://instagram.com/thevsnackn6_antibes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Sáu (Le 6) Antibes. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
