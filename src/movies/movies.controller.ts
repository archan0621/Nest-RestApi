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

  @Get(':id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete a movie with the id: ${id}`;
  }
  @Patch('/:id')
  path(@Param('id') id: string, @Body() updateData) {
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}
