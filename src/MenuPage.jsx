import menuImage from "./assets/menunew.jpg";

export default function MenuPage() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>

      <div className="menu-image-wrapper">
        <img src={menuImage} alt="Full Menu" className="menu-image" />
      </div>

      {/* BÁNH MÌ */}
      <section>
        <h2 className="menu-section">Bánh Mì</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>BÁNH MÌ ỐP LA — 7.90€</h3>
            <p>
              <strong>FR :</strong> Œufs au plat, carotte, navet blanc, concombre,
              mayonnaise, sauce, coriandre.
            </p>
            <p>
              <strong>EN :</strong> Fried eggs, carrot, white radish, cucumber,
              mayonnaise, sauce, coriander.
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens:</strong> gluten, œuf, soja, lactose /
              gluten, egg, soy, lactose
            </span>
          </div>

          <div className="menu-item">
            <h3>BÁNH MÌ THỊT — 11.90€</h3>
            <p>
              <strong>FR :</strong> Boulettes de porc ou cuisse de poulet, carotte,
              navet blanc, concombres, mayonnaise, sauce maison, coriandre, sauce.
            </p>
            <p>
              <strong>EN :</strong> Pork meatballs or chicken thigh, carrot, white
              radish, cucumbers, mayonnaise, homemade sauce, coriander, sauce.
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens:</strong> gluten, mollusque, soja, lait,
              œuf / gluten, mollusk, soy, milk, egg
            </span>
          </div>
        </div>
      </section>

      {/* BÚN / RICE NOODLES */}
      <section>
        <h2 className="menu-section">Bún</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>BÚN CHAY — 11.90€</h3>
            <p>
              <strong>FR :</strong> Vermicelles de riz, œuf, tofu, coriandre,
              cacahuètes, céleri, pak choy, germes de soja, oreille de judas,
              carottes, sauce.
            </p>
            <p>
              <strong>EN :</strong> Rice vermicelli, egg, tofu, coriander, peanuts,
              celery, pak choi, bean sprouts, wood ear mushrooms, carrots, sauce.
            </p>
            <p>
              <strong>Option vegan / Vegan option :</strong> 10.90€
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens:</strong> arachide, noix, céleri, soja /
              peanut, nuts, celery, soy
            </span>
          </div>

          <div className="menu-item">
            <h3>XÔI MẶN — 12.90€</h3>
            <p>
              <strong>FR :</strong> Porc, riz gluant, mini crevettes sucré-salé,
              chorizo viet, jambon viet, cébettes, œuf, sauce.
            </p>
            <p>
              <strong>EN :</strong> Pork, sticky rice, sweet & salty mini shrimp,
              Vietnamese sausage, Vietnamese ham, scallions, egg, sauce.
            </p>
            <p>
              <strong>Option poulet / Chicken option :</strong> disponible / available
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens:</strong> crustacés, œuf, mollusque, soja,
              lait / shellfish, egg, mollusk, soy, milk
            </span>
          </div>
        </div>
      </section>

      {/* PETITE FAIM */}
      <section>
        <h2 className="menu-section">Petite Faim / Small Bites</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>Tacos Vietnamien — 4.90€</h3>
            <p>
              <strong>FR :</strong> Galette de riz, œuf, maïs, cébette, oignons frits,
              mini crevettes sucré-salé, mayo et sauce chili doux.
            </p>
            <p>
              <strong>EN :</strong> Rice paper, egg, corn, scallions, fried onions,
              sweet & salty mini shrimp, mayo and sweet chili sauce.
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens:</strong> crustacés (mini crevettes), œufs,
              lactose (beurre) / shellfish, eggs, lactose (butter)
            </span>
          </div>

          <div className="menu-item">
            <h3>Ramen Instantané</h3>
            <p>
              <strong>Option 1 :</strong> Bouillon + œuf poché — 3.90€
            </p>
            <p>
              <strong>Option 2 :</strong> Ramen cuit + œuf au plat + sauce + épice de poulet
              — 4.50€
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens:</strong> gluten (blé), œufs / gluten (wheat), eggs
            </span>
          </div>
        </div>
      </section>

      {/* PHỞ */}
      <section>
        <h2 className="menu-section">Phở</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>PHỞ GÀ — 13.90€</h3>
            <p className="muted">
              (Plat indisponible à emporter / Not available for takeaway)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
