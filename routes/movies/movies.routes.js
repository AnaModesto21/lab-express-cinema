const router = require('express').Router();

const Movie = require('../../models/Movie.model.js'); // <== add this line before your routes


router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        // -> allTheBooksFromDB is a placeholder, it can be any word
        // console.log('Retrieved movies from DB:', allTheMoviesFromDB);
        res.render('movies.hbs', {movies: allTheMoviesFromDB});
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

  router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(thisMovie => {
        res.render('movie-details.hbs', {movie: thisMovie});
    })

    .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
        next(error);
    });
});

module.exports = router;