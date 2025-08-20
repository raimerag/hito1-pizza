const Header = () => {
  return (
    <>
      <header
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/public/Header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
        }}
      >
        {/* Overlay oscuro */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

        {/* Contenido */}
        <div className="position-relative z-1">
          <h1 className="display-3 fw-bold">¡Pizzeria Mamma Mia!</h1>
          <p className="lead fs-4">
            Tenemos las mejores pizzas que podrás encontrar
          </p>
          <div
            style={{ border: "1px solid darkgrey", marginBottom: "10px" }}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
