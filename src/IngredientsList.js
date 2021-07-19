import "./IngredientsList.css";

function IngredientsList() {
  return (
    <div className="ingredientsList">
      ingredients list
      <div className="box2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3aVogXg8z1A?start=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <ul>
        <p>TABLE OF CONTENTS</p>
        <li>You Only Need Three Ingredients!</li>
        <li>Pineapple juice</li>
        <li>Coconut cream</li>
        <li>Light rum</li>
      </ul>
    </div>
  );
}

export default IngredientsList;
