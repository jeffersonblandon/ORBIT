import "./Navbar.css";

function Navbar() {
  return (
    <header className="site">
      <div className="site-inner">
        <a href="#" className="brand">
          <span className="dot"></span>
          ORBIT
        </a>

        <nav className="main-nav">
          <a href="#">Catálogo</a>
          <a href="#">Garantías</a>
          <a href="#">Reseñas</a>
          <a href="#">Rastrear pedido</a>
        </nav>

        <div className="search-box">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21 L16.5 16.5" />
          </svg>

          <input
            type="text"
            placeholder="Buscar audífonos, smartwatch, cargador..."
          />

          <div className="search-results"></div>
        </div>

        <div className="icon-actions">
          <button className="icon-btn" title="Modo oscuro">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3 A9 9 0 1 0 21 12 A7 7 0 0 1 12 3 Z" />
            </svg>
          </button>

          <button className="icon-btn" title="Favoritos">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 20 C12 20 3 14.5 3 8.5 C3 5.5 5.5 3.5 8 3.5 C10 3.5 11.3 4.6 12 6 C12.7 4.6 14 3.5 16 3.5 C18.5 3.5 21 5.5 21 8.5 C21 14.5 12 20 12 20 Z" />
            </svg>

            <span className="badge-count">0</span>
          </button>

          <button className="icon-btn" title="Carrito">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6 H6 L8.2 16.8 A2 2 0 0 0 10.2 18.4 H17.5 A2 2 0 0 0 19.4 16.9 L21 9 H7" />
              <circle cx="10" cy="21" r="1.3" />
              <circle cx="18" cy="21" r="1.3" />
            </svg>

            <span className="badge-count">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;