import "./App.css";
import { useEffect, useState } from "react";
import InstagramEmbed from "./InstagramEmbed";
import hero from "./assets/hero.webp";
import food1 from "./assets/food1.jpg";
import food2 from "./assets/food2.jpg";
import drink1 from "./assets/drink1.jpg";
import food3 from "./assets/food3.jpg";
import food4 from "./assets/food4.jpg";
import food5 from "./assets/food5.jpg";
import girl from "./assets/girl.webp";
import girl2 from "./assets/girl2.webp";
import paint from "./assets/paint.webp";
import menuImage from "./assets/menu.jpg";
import header from "./assets/lefthero.jpg";
import foodheader from "./assets/foodheader.jpg";

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

  const galleryImages = [
    food1, girl, food2, paint, food5,
    girl2, paint, drink1, food3, drink1,
    food4, drink1, girl2, food5, girl
  ];

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
      <section id="gallery" className="gallery-section edgy-gallery">
        <h3>Sáu Snapshots</h3>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Gallery item"
              onClick={() => setPopupImage(img)}
            />
          ))}
        </div>
      </section>

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
      <section id="menu" className="menu-section">
        <h3>The Spread</h3>
        <div className="full-menu">
          <img src={menuImage} alt="Full menu" />
        </div>
        <div className="menu-grid">
          <div className="menu-item">
            <img src={food1} alt="Bánh Mì Thịt" />
            <h4>BÁNH MÌ THỊT — 11.90€</h4>
            <p>Pork meatballs, carrots, cucumber, pâté, coriander, mayo.</p>
          </div>
          <div className="menu-item">
            <img src={food2} alt="Bánh Mì Op La" />
            <h4>BÁNH MÌ ỐP LA — 7.90€</h4>
            <p>Sunny-side eggs, carrots, cucumber, mayo, coriander.</p>
          </div>
          <div className="menu-item">
            <img src={food1} alt="Bún Chay" />
            <h4>BÚN CHAY — 11.90€</h4>
            <p>Rice noodles, tofu, peanuts, herbs, veggies.</p>
          </div>
          <div className="menu-item">
            <img src={food2} alt="Xôi Mặn" />
            <h4>XÔI MẶN — 12.90€</h4>
            <p>Sticky rice, shrimp, sausage, fried shallots.</p>
          </div>
        </div>
      </section>

      {/* DRINKS */}
      <section id="drinks" className="drinks-section">
        <h4>Drinks</h4>
        <div className="menu-grid">
          <div className="menu-item">
            <img src={drink1} alt="Milk Tea" />
            <h4>Milk Tea — 5.90€</h4>
            <p>Black tea with milk and tapioca pearls.</p>
          </div>
          <div className="menu-item">
            <img src={drink1} alt="Matcha" />
            <h4>Matcha — 5.90€</h4>
            <p>Japanese matcha with tapioca pearls.</p>
          </div>
          <div className="menu-item">
            <img src={drink1} alt="Dirty Milk" />
            <h4>Dirty Milk — 6.50€</h4>
            <p>Fresh milk with brown sugar.</p>
          </div>
          <div className="menu-item">
            <img src={drink1} alt="Fruity Boba" />
            <h4>Fruity Boba — 5.90€</h4>
            <p>Tea-based drink with fruit flavors.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>6 Rue Fourmillière, Antibes • Open Mon–Sat 12:00–22:00</p>
        <a href="https://instagram.com/thevsnackn6_antibes" target="_blank">Instagram</a>
      </footer>
    </div>
  );
}
