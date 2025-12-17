export default function MenuPage() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>

      {/* BÁNH MÌ */}
      <section>
        <h2 className="menu-section">Bánh Mì</h2>

        <div className="menu-item">
          <h3>BÁNH MÌ THỊT — 11.90€</h3>
          <p>Boulette de porc ou cuisse de poulet, carotte, navet blanc, concombre, pâté de volaille, mayonnaise, sauce maison, coriandre.</p>
          <span className="allergens">Allergènes: gluten, soja, lait, œuf</span>
        </div>

        <div className="menu-item">
          <h3>BÁNH MÌ ỐP LA — 7.90€</h3>
          <p>Œufs au plat, carotte, navet blanc, concombre, mayonnaise, sauce, coriandre, pâté de volaille.</p>
          <span className="allergens">Allergènes: gluten, œuf, soja, lactose</span>
        </div>
      </section>

      {/* BÚN */}
      <section>
        <h2 className="menu-section">Bún</h2>

        <div className="menu-item">
          <h3>BÚN CHAY — 11.90€</h3>
          <p>Vermicelles de riz, œuf, tofu, coriandre, cacahuètes, germes de soja, oreille de Judas, carottes, sauce.</p>
          <strong>Option Vegan: 10.90€</strong><br />
          <span className="allergens">Allergènes: arachide, noix, céleri, soja</span>
        </div>

        <div className="menu-item">
          <h3>XÔI MẶN — 12.90€</h3>
          <p>
            Riz gluant, mini crevette séchée, saucisse chinoise,
            porc, oignons viet, jambon viet, œuf, effiloché de porc BBQ.
          </p>
          <strong>Option poulet disponible</strong><br />
          <strong>Taille S possible: 6.90€</strong><br />
          <span className="allergens">Allergènes: crustacés, œuf, mollusque, soja</span>
        </div>
      </section>

      {/* PETITE FAIM */}
      <section>
        <h2 className="menu-section">Petite Faim</h2>

        <div className="menu-item">
          <h3>Tacos Vietnamien — 4.90€</h3>
          <p>Galette de riz, œuf, maïs, oignon frits, mini saucisse sucrée salée, mayo + chilli doux.</p>
        </div>

        <div className="menu-item">
          <h3>Ramen Instantané</h3>
          <p>Option 1 — Bouillon + œuf poché — 3.90€</p>
          <p>Option 2 — Ramen sec + œuf au plat + épice poulet — 4.50€</p>
        </div>
      </section>

      {/* EXTRAS */}
      <section>
        <h2 className="menu-section">Extras</h2>

        <div className="menu-item"><p>Cacahuètes — 0.70€</p></div>
        <div className="menu-item"><p>Sauce — 0.50€</p></div>
        <div className="menu-item"><p>Oignons frits — 1.50€</p></div>
        <div className="menu-item"><p>Légumes au choix — 2.70€</p></div>
        <div className="menu-item"><p>Œuf — 1.50€</p></div>
        <div className="menu-item"><p>Chorizo vietnamien — 2.70€</p></div>
      </section>
    </div>
  );
}
