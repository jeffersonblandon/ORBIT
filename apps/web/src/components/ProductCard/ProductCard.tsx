import "./ProductCard.css";

type ProductCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  price: string;
};

function ProductCard({
  image,
  category,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        className="product-image"
        src={image}
        alt={title}
      />

      <div className="product-content">
        <span className="product-category">
          {category}
        </span>

        <h3 className="product-title">
          {title}
        </h3>

        <p className="product-description">
          {description}
        </p>

        <div className="product-footer">
          <span className="product-price">
            {price}
          </span>

          <button className="btn btn-primary">
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard; 