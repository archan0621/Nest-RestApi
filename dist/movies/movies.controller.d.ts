export declare class MoviesController {
    getAll(): string;
    search(searchingYear: string): string;
    getOne(id: string): string;
    create(movieData: any): any;
    remove(id: string): string;
    path(id: string, updateData: any): any;
}
