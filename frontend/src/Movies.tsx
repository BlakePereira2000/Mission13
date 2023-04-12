import { useState } from 'react';
import movies from './MovieData.json';

const Movies = movies.MovieData;

function MovieList() {
  // this is from the video but what it does it keeps things in a season and knows the size of the object we are working with
  //   const [listOMovies, setListOMovies] = useState(Movies);

  // //   const addMovie = () => {
  // //     setListOMovies([
  // //       {
  // //         Category: 'Drama',
  // //         Title: 'Departed, The',
  // //         Year: 1988.660436,
  // //         Director: 'Martin Scorsese',
  // //         Rating: 'R',
  // //         Edited: 'Yes',
  // //       },
  // //     ]);
  // //   };

  return (
    <>
      {/* this code will show all content on the json file and list all movies in it */}
      <div>
        <h3 style={{ textAlign: 'center' }}>Joel Hilton's Movie Collection</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {Movies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button> */}
    </>
  );
}
export default MovieList;
