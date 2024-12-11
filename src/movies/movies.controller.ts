import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Post()
    create() {
    return "create a new movie endpoint";
    }
    @Get()
    findAll() {
    return "find all movie endpoint";
    }
    @Get(":id")
    findOne() {
    return "fetch movie on the based on id";
    }
    @Put(":id")
    update() {
    return "update movie on the based on id";
    }
    @Delete(":id")
    delete() {
    return "delete a movie on the based on id";
    }
    
}
