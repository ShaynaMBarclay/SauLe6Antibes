export default function DrinksPage() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Boissons & Bubble Tea / Drinks & Bubble Tea</h1>

      {/* BUBBLE TEA */}
      <section>
        <h2 className="menu-section">Bubble Tea au Tapioca / Tapioca Bubble Tea</h2>
        <div className="menu-grid">
          <div className="drink-card">
            <h3>Milk Tea</h3>
            <p>Thé noir / Black tea</p>
            <p>M: 6.50€ · L: 7.50€</p>
          </div>

          <div className="drink-card">
            <h3>Taro</h3>
            <p>Thé au lait taro / Taro milk tea</p>
            <p>M: 6.50€ · L: 7.50€</p>
          </div>

          <div className="drink-card">
            <h3>Matcha</h3>
            <p>Thé au lait matcha / Matcha milk tea</p>
            <p>M: 6.50€ · L: 7.50€</p>
          </div>

          <div className="drink-card">
            <h3>Dirty Milk</h3>
            <p>Lait + sucre brun / Milk & brown sugar</p>
            <p>M: 6.90€ · L: 7.90€</p>
          </div>

          <div className="drink-card">
            <h3>Black Sugar Matcha</h3>
            <p>Matcha au sucre brun / Black sugar matcha</p>
            <p>M: 6.90€ · L: 7.90€</p>
          </div>
        </div>

        <p className="menu-note">Lait végétal du jour disponible / Plant milk available (daily)</p>
      </section>

      {/* FRUITY BOBA */}
      <section>
        <h2 className="menu-section">Fruity Boba</h2>
        <p className="menu-note">Sans lait – à base de thé jasmin / No milk – jasmine tea base</p>
        <div className="menu-grid">
          <div className="drink-card">
            <h3>Fruity Boba</h3>
            <p>M: 6.50€ · L: 7.50€</p>
          </div>
        </div>
      </section>

      {/* COMPOSE / CREATE */}
      <section>
        <h2 className="menu-section">Créer votre boisson / Create your drink</h2>
        <ul className="choose-list">
          <li>
            Choisissez votre parfum fruité / Choose your fruit flavor (pêche, passion, mangue,
            litchi… / peach, passion fruit, mango, lychee…)
          </li>
          <li>Et puis vos perles / Then choose your toppings</li>
        </ul>
        <p className="menu-note">Boisson du jour disponible / Drink of the day available</p>
      </section>

      {/* AUTRES BOISSONS / OTHER DRINKS */}
      <section>
        <h2 className="menu-section">Autres Boissons / Other Drinks</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <p>
              Cà phê sữa đá — Café glacé vietnamien / Vietnamese iced coffee — 5.90€
            </p>
          </div>

          <div className="menu-item">
            <p>Thé glacé (Trà Đá) — Iced tea — 1.90€</p>
          </div>
        </div>
      </section>
    </div>
  );
}
