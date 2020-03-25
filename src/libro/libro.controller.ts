import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {Libro} from '../libro';


@Controller('api/libro')
export class LibroController {
/*
  @Get()
  listaLibros(@Body() libro): string{
    console.log(libro.id);
    console.log(libro.titulo);
    console.log(libro.autor);
    console.log(libro.fecha)
    return "listado de libros";
  }

 */
  @Get()
  listaLibros(@Body() respuesta): Libro{
    /*
    console.log(respuesta.id);
    console.log(respuesta.titulo);
    console.log(respuesta.autor);
    console.log(respuesta.fecha);

     */

//Variables
    const numLibros = respuesta.length;
    const biblioteca: Libro[] = new Array(numLibros);
    /*
    Libro[0] = {'id':1, 'titulo':'tit1', 'autor':'aut1', 'fecha':'fec1'};
    Libro[1] ={'id':1, 'titulo':'tit1', 'autor':'aut1', 'fecha':'fec1'};

     */
    for (const entry in biblioteca ) {
      Libro[entry] ={'id': respuesta.id, 'titulo': respuesta.titulo, 'autor': respuesta.autor, 'fecha': respuesta.fecha};
      console.log(Libro[entry]);
    }
    return Libro[0];
  }

  @Post()
  addLibro(@Body() respuesta: Libro): string{
    console.log(respuesta.id);
    console.log(respuesta.titulo);
    console.log(respuesta.autor);
    console.log(respuesta.fecha);
    return "libro nuevo";
  }

  @Put(':id')
  editarLibro(@Param('id') id): string{
    console.log(id);
    return "libro editado";
  }

  @Delete(':id')
  borrarLibros(@Param('id') id): string{
    console.log(id);
    return 'libros eliminados';
  }
}
