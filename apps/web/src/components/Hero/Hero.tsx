function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">

        <div>
          <span className="hero-eyebrow">
            Tienda verificada · 4.8/5 en 2,340 reseñas
          </span>

          <h1>
            Tecnología cotidiana en la que <em>sí puedes confiar</em>.
          </h1>

          <p className="lead">
            Gadgets probados, seguimiento real de tu pedido y 30 días de
            garantía sin letra pequeña. Nada de sorpresas, solo tecnología que
            funciona.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary">
              Ver catálogo
            </button>

            <button className="btn btn-outline">
              Rastrear un pedido
            </button>
          </div>

          <div className="hero-trust-mini">
            <span className="item">✔ Devoluciones gratis</span>
            <span className="item">✔ Pago cifrado SSL</span>
            <span className="item">✔ Soporte real 24/7</span>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1577375729078-820d5283031c?w=900&auto=format&fit=crop&q=70"
              alt="Tecnología ORBIT"
            />
          </div>

          <div className="spec-float">
            <div className="sf-item">
              <div className="sf-num">12.4K+</div>
              <div className="sf-label">Pedidos entregados</div>
            </div>

            <div className="sf-item">
              <div className="sf-num">4.8★</div>
              <div className="sf-label">Valoración media</div>
            </div>

            <div className="sf-item">
              <div className="sf-num">24-48h</div>
              <div className="sf-label">Despacho</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;