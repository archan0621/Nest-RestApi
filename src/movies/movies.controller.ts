import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post, Query,
} from '@nestjs/common';
import {MoviesService} from "./movies.service";
import {Movie} from "./entities/movie.entity";
import {CreateMovieDto} from "./dto/create-movie.dto";
import {UpdateMovieDto} from "./dto/update-movie.dto";

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[]{
    return this.moviesService.getAll();
  }

  @Get('/search')
  search(@Query("year") searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
        console.log(typeof id);
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  path(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(id, updateData);
  }
}
