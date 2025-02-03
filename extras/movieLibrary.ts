class Movie {
  title: string;
  director: string;
  year: number;
  rating: number;
  genre: string;
  isAvailable: boolean;

  constructor(title: string, director: string, year: number, rating: number, genre: string) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.rating = rating;
    this.genre = genre;
    this.isAvailable = true;
  }

  getTitle(): string {
    return this.title;
  };
  getMovieInfo() : string {
    return `${this.title} by ${this.director} (${this.year}) - Rating: ${this.rating}, Genre: ${this.genre}`
  };

  borrowMovie() : string {
    if (!this.isAvailable) {
      return `${this.title} is borrowed now`
    } else {
      this.isAvailable = false;
      return `You borrowed ${this.title}`
    }
  }
  returnMovie() : string {
    this.isAvailable = true;
    return `You returned ${this.title}`
  }
}

// MovieLibrary Class:

// Properties:
// movies: An array of Movie objects.
// Methods:
// addMovie(movie: Movie): Adds a movie to the library.
// getAvailableMovies(): Returns a list of titles for movies that are available (isAvailable is true).
// getMovieInfoByTitle(title: string): Returns the info of a movie given the title.
// borrowMovie(title: string): Finds the movie by title, marks it as borrowed (isAvailable to false), and returns a message.
// returnMovie(title: string): Finds the movie by title, marks it as available again (isAvailable to true), and returns a message.
// getMoviesByGenre(genre: string): Returns a list of movie titles of the given genre.
// getAverageRating(): Returns the average rating of all movies in the library.
// getNumberOfMovies(): Returns the number of movies in the library.