import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = ({ history }) => {
  let { heroeId } = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  // const hero = getHeroById(heroeId);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    }
    history.goBack();
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <article className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`../assets/heroes/${heroeId}.jpg`}
            alt={superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">
              <strong>Publisher:</strong> {publisher}
            </p>
            <p className="card-text">
              <strong>Alter ego:</strong> {alter_ego}
            </p>
            {alter_ego !== characters && (
              <p className="card-text">
                <strong>Characters: </strong>
                {characters}
              </p>
            )}
            <p className="card-text">
              <strong> First Appearance: </strong>
              {first_appearance}
            </p>
          </div>
          <button className="btn btn-outline-info" onClick={handleReturn}>
            Return
          </button>
        </div>
      </div>
    </article>
  );
};

export default HeroScreen;
