import "./Benefits.css";

function Benefits() {
  return (
    <div className="trust-bar">
      <div className="wrap">
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M3 7 H15 V17 H3 Z" />
            <path d="M15 10 H19 L21 13 V17 H15 Z" />
            <circle cx="7.5" cy="19" r="1.6" />
            <circle cx="17.5" cy="19" r="1.6" />
          </svg>

          <div>
            <h4>Envío rastreado</h4>
            <p>Número de guía desde el día 1</p>
          </div>
        </div>

        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M12 3 L20 7 V12 C20 17 16.4 20.4 12 21 C7.6 20.4 4 17 4 12 V7 Z" />
          </svg>

          <div>
            <h4>Garantía 30 días</h4>
            <p>Devolución sin preguntas</p>
          </div>
        </div>

        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="4" y="10" width="16" height="10" rx="2" />
            <path d="M8 10 V7 A4 4 0 0 1 16 7 V10" />
          </svg>

          <div>
            <h4>Pago seguro</h4>
            <p>Cifrado de extremo a extremo</p>
          </div>
        </div>

        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="12" r="9" />
            <path d="M9.2 9.5 A2.8 2.8 0 1 1 12.4 13.8 L12 16.5" />
            <circle cx="12" cy="19" r="0.7" fill="currentColor" />
          </svg>

          <div>
            <h4>Soporte real</h4>
            <p>Chat con respuesta &lt; 5 min</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;