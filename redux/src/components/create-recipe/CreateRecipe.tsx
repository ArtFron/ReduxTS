import { FormEvent, useState } from 'react';
import { useCreateRecipeMutation } from '../../store/api/recipe.api';
import { IRecipeData } from '../../types/recipe.types';

const defaultValue: IRecipeData = {
  name: '',
  image: '',
};

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState<IRecipeData>(defaultValue);
  const [createRecipe] = useCreateRecipeMutation();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Form for Create New Recipe:</p>
        <label>
          <input
            type="text"
            placeholder="Recipe Name"
            value={recipe.name}
            onChange={(e) =>
              setRecipe({ ...recipe, name: e.target.value })
            }></input>
        </label>
        <label>
          <input
            type="text"
            placeholder="Recipe Image"
            value={recipe.image}
            onChange={(e) =>
              setRecipe({ ...recipe, image: e.target.value })
            }></input>
        </label>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}
