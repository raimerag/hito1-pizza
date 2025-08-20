import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <div
          style={{ border: "1px solid darkgrey", marginBottom: "10px" }}
        ></div>
        <Card.Text className="text-secondary text-center">
          <h5>Ingredients</h5>
          <p>🍕{ingredients.join(", ")}</p>
        </Card.Text>
        <div
          style={{ border: "1px solid darkgrey", marginBottom: "10px" }}
        ></div>
        <Card.Title className="text-center">Precio: {price}</Card.Title>
      </Card.Body>

      <div className="d-flex justify-content-between px-4 py-1">
        <Button variant="dark" className="align-self-start">
          👀Ver Mas
        </Button>
        <Button variant="dark">🛒Añadir</Button>
      </div>
    </Card>
  );
};

export default CardPizza;
