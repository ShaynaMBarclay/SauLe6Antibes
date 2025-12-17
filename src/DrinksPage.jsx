export default function DrinksPage() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Boissons & Bubble Tea</h1>

      {/* BUBBLE TEA */}
      <section>
        <h2 className="menu-section">Bubble Tea au Tapioca</h2>

        <div className="menu-list-grid">

          <div className="drink-card">
            <h3>Milk Tea</h3>
            <p className="price">M: 5.90€</p>
          </div>

          <div className="drink-card">
            <h3>Thai Tea</h3>
            <p className="price">M: 5.90€</p>
          </div>

          <div className="drink-card">
            <h3>Matcha</h3>
            <p className="price">M: 5.90€</p>
          </div>

          <div className="drink-card">
            <h3>Dirty Milk</h3>
            <p className="price">M: 6.50€</p>
          </div>

          <div className="drink-card">
            <h3>Black Sugar</h3>
            <p className="price">M: 6.50€</p>
          </div>
        </div>
      </section>

      {/* FRUITY BOBA */}
      <section>
        <h2 className="menu-section">Fruity Boba (Sans lait)</h2>

        <div className="menu-list-grid">
          <div className="drink-card"><h3>Fruity Boba — M: 5.90€ / L: 6.90€</h3></div>
        </div>
      </section>

      {/* Choose Your Drink */}
      <section>
        <h2 className="menu-section">Composez Votre Boisson</h2>
        <ul className="choose-list">
          <li>Choisissez votre parfum fruité</li>
          <li>Choisissez vos perles</li>
        </ul>
      </section>

      {/* OTHER DRINKS */}
      <section>
        <h2 className="menu-section">Boissons</h2>

        <div className="menu-item">
          <p>Chá đá (thé glacé maison) — 3.50€</p>
        </div>
        <div className="menu-item">
          <p>Citronnade — 5.90€</p>
        </div>
      </section>
    </div>
  );
}
