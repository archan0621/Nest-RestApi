import { Movie } from "./entities/movie.entity";
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: string): Movie;
}
