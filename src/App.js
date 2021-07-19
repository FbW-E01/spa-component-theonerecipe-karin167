import Footer from "./Footer";
import IngredientsList from "./IngredientsList";
import Steps from "./Steps";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <Recipe />
      <Footer />
      <IngredientsList />
      <Steps />
    </div>
  );
}

export default App;
