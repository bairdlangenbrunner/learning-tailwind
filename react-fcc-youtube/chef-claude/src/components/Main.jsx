import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = useState(["a", "b", "c"]);
  const [recipeShown, setRecipeShown] = useState(false);

  const getRecipeButton = () => {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  };

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    if (newIngredient) {
      if (!ingredients.includes(newIngredient)) {
        setIngredients([...ingredients, newIngredient]);
      }
    }
    console.log(ingredients);
    console.log("submitted");
  };

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          handleGetRecipeButton={getRecipeButton}
        />
      )}

      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
