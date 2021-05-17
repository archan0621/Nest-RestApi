import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/search')
  search() {
    return `We are searching for a movie with a title: `;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie with the id: ${id}`;
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
