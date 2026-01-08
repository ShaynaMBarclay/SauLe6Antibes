import menuImage from "./assets/updatedmenu.jpg";

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
              mayonnaise, sauce, coriandre, pâté de volaille.
            </p>
            <p>
              <strong>EN :</strong> Fried eggs, carrot, white radish, cucumber,
              mayonnaise, sauce, coriander, chicken pâté.
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens :</strong> gluten, œuf, soja, lactose /
              gluten, egg, soy, lactose
            </span>
          </div>

          <div className="menu-item">
            <h3>BÁNH MÌ THỊT — 11.90€</h3>
            <p>
              <strong>FR :</strong> Boulettes de porc ou cuisse de poulet, carotte,
              navet blanc, concombre, pâté de volaille, mayonnaise, sauce maison,
              coriandre, sauce.
            </p>
            <p>
              <strong>EN :</strong> Pork meatballs or chicken thigh, carrot, white
              radish, cucumber, chicken pâté, mayonnaise, homemade sauce,
              coriander, sauce.
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens :</strong> gluten, mollusque, soja,
              lait, œuf / gluten, mollusk, soy, milk, egg
            </span>
          </div>
        </div>
      </section>

      {/* BÚN */}
      <section>
        <h2 className="menu-section">Bún / Rice Noodles</h2>
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
              <strong>Allergènes / Allergens :</strong> arachide, noix, céleri, soja /
              peanut, nuts, celery, soy
            </span>
          </div>

          <div className="menu-item">
            <h3>XÔI MẶN — 12.90€</h3>
            <p>
              <strong>FR :</strong> Porc, riz gluant, mini crevettes sucrées-salées,
              chorizo vietnamien, jambon vietnamien, cébettes, œuf, sauce.
            </p>
            <p>
              <strong>EN :</strong> Pork, sticky rice, sweet & salty mini shrimp,
              Vietnamese sausage, Vietnamese ham, scallions, egg, sauce.
            </p>
            <p>
              <strong>Taille S possible / Size S available :</strong> 6.90€
            </p>
            <p>
              <strong>Option poulet / Chicken option :</strong> disponible / available
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens :</strong> crustacés, œuf, mollusque,
              soja, lait / shellfish, egg, mollusk, soy, milk
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
              mini crevettes sucrées-salées, mayo et sauce chili doux.
            </p>
            <p>
              <strong>EN :</strong> Rice paper, egg, corn, scallions, fried onions,
              sweet & salty mini shrimp, mayo and sweet chili sauce.
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens :</strong> crustacés, œufs, lactose /
              shellfish, eggs, lactose
            </span>
          </div>

          <div className="menu-item">
            <h3>Ramen Instantané / Instant Ramen</h3>
            <p>
              <strong>Option 1 :</strong> Bouillon + œuf poché — 3.90€
              <br />
              <strong>EN :</strong> Broth + poached egg
            </p>
            <p>
              <strong>Option 2 :</strong> Ramen cuit + œuf au plat + sauce + épices
              poulet — 4.50€
              <br />
              <strong>EN :</strong> Cooked ramen + fried egg + sauce + chicken spices
            </p>
            <span className="allergens">
              <strong>Allergènes / Allergens :</strong> gluten (blé), œufs /
              gluten (wheat), eggs
            </span>
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section>
        <h2 className="menu-section">Extras / Add-ons</h2>
        <div className="menu-grid">
          <div className="menu-item"><p>Cacahuètes — 0.90€ / Peanuts</p></div>
          <div className="menu-item"><p>Sauce — 0.80€</p></div>
          <div className="menu-item"><p>Oignons frits — 1.50€ / Fried onions</p></div>
          <div className="menu-item"><p>Légumes (au choix) — 2.90€ / Vegetables (choice)</p></div>
          <div className="menu-item"><p>Pickles — 2.00€</p></div>
          <div className="menu-item"><p>Œuf — 1.50€ / Egg</p></div>
          <div className="menu-item"><p>Chorizo vietnamien — 2.90€ / 6 tranches</p></div>
          <div className="menu-item"><p>Viandes — 3.90€ / 100g / Meat</p></div>
        </div>
      </section>
    </div>
  );
}
