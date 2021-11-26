import movies from "../Data/movies.js";

class MoviesModels{
    allMovies(){
    return movies;
    }

    getMovieId(id){
    return movies.find(e =>e.id==id);
    }

    createMovie(newMovie){
    movies.push(newMovie);
    return movies;
    }

    deleteMovie(id){
    movies.splice (movies.findIndex((e) => e.id == id),1);
    return movies;
    }
    
    // updateMovie(id){    
    // for (let i = 0; i < movies.length; i++) {
    //     if (movies[i].id==id){
    //         movies[i].year= 1999
    //         movies[i].title= 'Hola Paola'
    //         break;
    //     };

    // }
    // return movies;
    // }
    
    updateMovie(req){
        let i = movies.findIndex(e =>e.id==req.id);
        movies[i] = req;
        return movies;
    }

}

export default new MoviesModels();   