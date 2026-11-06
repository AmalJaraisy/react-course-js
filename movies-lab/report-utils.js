// #1: Print the director's name rather than the whole object.
export const getDirectorLine = movie => `Director: ${movie.director.name}`;
// #2: An expression arrow function returns the filter condition.
export const getShortMovies = movies => movies.filter(movie => movie.duration < 100);
// #3: find returns one movie, whereas filter returns an array.
export const findByTitle = (movies, title) => movies.find(movie => movie.title === title);
// #4: Missing awards should produce zero, not a TypeError.
export const getOscarsLine = movie => `Oscars: ${movie.awards?.oscars ?? 0}`;
// #5: Sort a copy to preserve the original order.
export const sortByYear = movies => [...movies].sort((a, b) => a.year - b.year);
// #6: Copy the array and the movie being updated.
export const markAsWatched = (movies, id) =>
  movies.map(movie => movie.id === id ? { ...movie, watched: true } : movie);
// #7: Copy every changed level: movie, cast array and selected actor.
export const renameActor = (movie, index, newName) => ({
  ...movie,
  cast: movie.cast.map((actor, actorIndex) =>
    actorIndex === index ? { ...actor, name: newName } : actor),
});
