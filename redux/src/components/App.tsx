import { useState } from 'react';
import { useGetRecipesQuery } from '../store/api/api';
import CreateRecipe from './create-recipe/CreateRecipe';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
// import User from './user/User';

const userId = 1;

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const [queryTerm, setQueryTerm] = useState('');

  const { isLoading, data } = useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(searchTerm);
  };

  return (
    <section>
      <Header />
      <CreateRecipe />
      <div
        style={{
          padding: '10px',
        }}>
        <p>Find for you: </p>
        <div>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter search term"
          />
          <button onClick={handleSearch}>Search your recipe</button>
        </div>
      </div>
      {/* <User /> для createAsyncThunk */}
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not FOUND</div>
        )}
      </div>
    </section>
  );
}

export default App;
