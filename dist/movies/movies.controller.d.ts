import { MoviesService } from "./movies.service";
import { Movie } from "./entities/movie.entity";
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAll(): Movie[];
    search(searchingYear: string): string;
    getOne(id: string): Movie;
    create(movieData: any): any;
    remove(id: string): string;
    path(id: string, updateData: any): any;
}
