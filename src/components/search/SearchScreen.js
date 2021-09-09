import queryString from "query-string";
import useForm from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard/HeroCard";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeoresByName";
// import { useMemo } from "react";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  //Parseo de las query
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  // const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const heroesFiltered = getHeroesByName(q);

  const handleSearch = (e) => {
    e.preventDefault();
    // heroesFiltered.filter(hero => hero.)
    history.push(`?q=${searchText}`);
  };
  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>

          <form
            onSubmit={handleSearch}
            className="d-flex flex-column align-items-center"
          >
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              autoComplete="off"
            />

            <button
              type="submit"
              className="btn m-1 btn-outline-primary btn-block"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger animate__animated animate__flash">
              There is no a hero with {q}
            </div>
          )}
          {q === "" && (
            <div className="alert alert-info animate__animated animate__flash">
              Search a hero
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <div key={hero.id} className="animate__animated animate__fadeIn">
              <HeroCard {...hero} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
