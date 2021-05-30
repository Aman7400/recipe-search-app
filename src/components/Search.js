import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const SearchForm = styled.div`
  background-image: url("/images/bg.png");
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;

  height: 50vh;
  width: 100%;
  form {
    width: 50%;
    display: flex;
  }
  input {
    padding: 0.5rem;
    width: 80%;
    appearance: none;
    border: none;
    outline: none;
    font-size: larger;
    border-radius: 5px;
  }
  button {
    width: 20%;
    margin-left: 0.25rem;
  }

  @media (max-width: 480px) {
    form {
      flex-direction: column;
      width: 80%;
    }
    input,
    button {
      width: 100%;
      padding: 0.5rem;
      margin: 0.25rem auto;
    }
  }
`;

const Container = styled.div`
  padding: clamp(1rem, 5rem, 2rem);
  /* background-color: #f1f2a3; */
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));

  justify-content: center;
`;

const Search = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("chicken");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  React.useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const data = await (await fetch(url)).json();
    setRecipes(data.hits);
  };

  return (
    <>
      <Wrapper>
        <SearchForm className="center">
          <form
            onSubmit={(e) => {
              if (search === "") {
                return;
              }
              e.preventDefault();
              setQuery(search);
              setSearch("");
            }}
          >
            <input
              type="text"
              placeholder="Type Chicken ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              style={{
                border: "2px solid white",
                background: "transparent",
                color: "white",
                fontSize: "medium",
                cursor: "pointer",
              }}
              type="submit"
            >
              Search
            </button>
          </form>
        </SearchForm>

        <Container>
          {recipes.map((recipe) => (
            <RecipeCard
              title={recipe.recipe.label}
              src={recipe.recipe.image}
              ingredients={recipe.recipe.ingredientLines}
            />
          ))}
        </Container>
      </Wrapper>
    </>
  );
};

export default Search;
