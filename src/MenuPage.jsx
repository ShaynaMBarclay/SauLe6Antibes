import menuImage from "./assets/menu.jpg"; 

export default function MenuPage() {
  
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>

      
      <div className="menu-image-wrapper">
        <img
          src={menuImage}
          alt="Full Menu"
          className="menu-image"
        />
      </div>

      {/* BÁNH MÌ */}
      <section>
        <h2 className="menu-section">Bánh Mì</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>BÁNH MÌ THỊT — 11.90€</h3>
            <p><strong>FR :</strong> Boulettes de porc ou cuisse de poulet, carotte, navet blanc, concombre, pâté de volaille, mayonnaise, sauce maison, coriandre.</p>
            <p><strong>EN :</strong> Pork meatballs or chicken thigh, carrot, white radish, cucumber, chicken pâté, mayonnaise, homemade sauce, coriander.</p>
            <span className="allergens">Allergènes / Allergens: gluten, mollusque, soja, lait, œuf</span>
          </div>

          <div className="menu-item">
            <h3>BÁNH MÌ ỐP LA — 7.90€</h3>
            <p><strong>FR :</strong> Œufs au plat, carotte, navet blanc, concombre, mayonnaise, sauce, coriandre, pâté de volaille.</p>
            <p><strong>EN :</strong> Fried eggs, carrot, white radish, cucumber, mayonnaise, sauce, coriander, chicken pâté.</p>
            <span className="allergens">Allergènes / Allergens: gluten, œuf, soja, lactose</span>
          </div>
        </div>
      </section>

      {/* BÚN */}
      <section>
        <h2 className="menu-section">Bún</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>BÚN CHAY — 11.90€</h3>
            <p><strong>FR :</strong> Vermicelles de riz, œuf, tofu, coriandre, cacahuètes, céleri, pak choï, germes de soja, champignons noirs, carottes, sauce.</p>
            <p><strong>EN :</strong> Rice vermicelli, egg, tofu, coriander, peanuts, celery, pak choi, bean sprouts, black mushrooms, carrots, sauce.</p>
            <strong>Option vegan / Vegan option: 10.90€</strong><br />
            <span className="allergens">Allergènes / Allergens: arachide, noix, céleri, soja</span>
          </div>

          <div className="menu-item">
            <h3>XÔI MẶN — 12.90€</h3>
            <p><strong>FR :</strong> Riz gluant, mini crevettes sucrées-salées, chorizo vietnamien, jambon viet, porc, œuf, effiloché de porc, sauce.</p>
            <p><strong>EN :</strong> Sticky rice, sweet & salty dried shrimp, Vietnamese sausage, Vietnamese ham, pork, egg, shredded pork, sauce.</p>
            <strong>Option poulet / Chicken option available</strong><br />
            <strong>Taille S / Size S: 6.90€</strong><br />
            <span className="allergens">Allergènes / Allergens: crustacés, œuf, mollusque, soja, lait</span>
          </div>
        </div>
      </section>

      {/* PETITE FAIM */}
      <section>
        <h2 className="menu-section">Petite Faim / Small Bites</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>Tacos Vietnamien — 4.90€</h3>
            <p><strong>FR :</strong> Galette de riz, œuf, maïs, ciboulette, oignons frits, mini crevettes sucrées-salées, mayonnaise & sauce chilli douce.</p>
            <p><strong>EN :</strong> Rice paper, egg, corn, chives, fried onions, sweet & salty mini shrimp, mayonnaise & sweet chili sauce.</p>
          </div>

          <div className="menu-item">
            <h3>Ramen Instantané</h3>
            <p><strong>Option 1 :</strong> Bouillon + œuf poché — 3.90€ <br /><strong>EN :</strong> Soup broth + poached egg</p>
            <p><strong>Option 2 :</strong> Ramen sec + œuf au plat + épices poulet — 4.50€ <br /><strong>EN :</strong> Dry ramen + fried egg + chicken spices</p>
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section>
        <h2 className="menu-section">Extras</h2>
        <div className="menu-grid">
          <div className="menu-item"><p>Cacahuètes / Peanuts — 0.70€</p></div>
          <div className="menu-item"><p>Sauce — 0.80€</p></div>
          <div className="menu-item"><p>Oignons frits / Fried onions — 1.50€</p></div>
          <div className="menu-item"><p>Légumes au choix / Mixed vegetables — 2.70€</p></div>
          <div className="menu-item"><p>Œuf / Egg — 1.50€</p></div>
          <div className="menu-item"><p>Chorizo vietnamien — 2.70€ / 6 slices</p></div>
          <div className="menu-item"><p>Viande / Meat — 3.70€ / 100g</p></div>
        </div>
      </section>
    </div>
  );
}
