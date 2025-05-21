const Filmography = () => {
  const films = [
    { title: "El Cuervo", year: 1994, role: "Eric Draven", image: "imagen2.jpg" },
    { title: "Rapid Fire", year: 1992, role: "Jake Lo", image: "imagen1.jpg" },
    { title: "Showdown in Little Tokyo", year: 1991, role: "Johnny Murata", image: "imagen4.jpg" },
    { title: "Legacy of Rage", year: 1986, role: "Brandon Ma", image: "imagen3.jpg" }
  ];

  return (
    <section id="Filmografia" className="filmography">
      <div className="container">
        <h2>Filmografía</h2>
        <div className="films-grid">
          {films.map((film, index) => (
            <div className="film-card" key={index}>
              {film.image && (
                <div className="film-image">
                  <img src={`/src/assets/images/${film.image}`} alt={film.title} />
                </div>
              )}
              <h3>{film.title} <span>({film.year})</span></h3>
              <p>{film.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filmography;