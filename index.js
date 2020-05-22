var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://cristobalmh:dios0987@cluster0-z6kyk.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
  var lib= Libro({
    Autor:{
      nombre_s: 'Becca',
      apellidos: 'Fitzpatrick'
    },
    ISBN: '978-032-98-0600-2',
    Título:'Hush Hush',
    Genero_s:'Romance',
    Edición: 2010,
    Editorial:'Ediciones B',
    Páginas: 366,
    Sinopsis:'Enamorarse no formaba parte de los planes de Nora Grey: Nunca se había sentido especialmente atraída por sus compañeros de instituto, a pesar de los esfuerzos de su mejor amiga, Vee, para encontrarle una pareja. Así era hasta la llegada de Patch. Con su sonrisa fácil,y sus ojos que parecen ver en su interior, Nora se siente encandilada por él a pesar de sí misma.'
  });

  lib.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
    }
  });
}


function nuevosLibros() {

  var libros=[
    {
      Autor:{
        nombre_s: 'Barone',
        apellidos: 'G. L.'
      },
      ISBN: '978-607-07-2416-9',
      Título: 'La Conspiracion de Los Illuminati',
      Genero: 'Thriller',
      Edición: 2013,
      Editorial: 'Planeta',
      Páginas: 276,
      Sinopsis:'En lo más profundo de la noche, una inmensa fogata ilumina repentinamente la ciudad de Turín y la peor de las noticias se dispersa por todo el mundo: el Santo Sudario ha sido destruido. Cuatro meses después, en Roma, un escándalo convulsiona al Vaticano: el coronel Weistaler, jefe de la guardia suiza, ha sido asesinado brutalmente. ¿Qué une a estos acontecimientos aparentemente tan distantes? La investigación de Stella Rosati, una joven fiscal italiana, revela la extraña relación entre la élite de la Santa Sede, el presidente del Banco Vaticano, traficantes de armas y células terroristas islámicas. A la investigación de Stella se unirá Andreas Henkel, un exagente checo ahora al servicio del Vaticano. En los altos cargos de la ciudad papal alguien está dirigiendo un complot para destruir a la Iglesia de Roma desde el interior. Pero existe un peligro aún mayor que amenaza al cristianismo: los Illuminati per voluntatem Dei. ¿Quiénes son? ¿Cuál es su plan y hasta dónde están dispuestos a llegar para alcanzarlo?'
    },
    {
      Autor:{
        nombre_s: 'Paul J. y Harvey M.',
        apellidos: 'DEITEL'
      },
      ISBN: '978-970-26-1190-5',
      Título: 'CÓMO PROGRAMAR EN JAVA',
      Genero: 'Computación',
      Edición: 7,
      Editorial: 'Pearson Educación de Méxic',
      Páginas: 1152,
      Sinopsis: 'Presenta una introducción y actualización al lenguaje de programación Java, a través de una serie de ejercicios y aplicaciones a casos reales.'
    },
    {
      Autor:{
        nombre_s: 'Osvaldo',
        apellidos: 'Cairó'
      },
      ISBN: '970-15-1100-X',
      Título: 'Metodología de la Programación: Algoritmos, Diagramas de Flujo y Programas',
      Genero: 'Computación',
      Edición: 3,
      Editorial: 'Alfaomega',
      Páginas: 464,
      Sinopsis: 'Presenta una introducción a la logica de programación e incluye programas de apoyo'
    },
    {
      Autor:{
        nombre_s: 'Suzanne',
        apellidos: 'Collins'
      },
      ISBN: '978-84-9867-539-9',
      Título: 'Los Juegos del Hambre',
      Genero: 'Ciencia Ficción / Aventuras',
      Edición: 10,
      Editorial: 'RBA',
      Páginas: 396,
      Sinopsis: 'Cuando Katniss Everdeen, una joven de dieciséis años, se presenta voluntaria para ocupa el lugar de su hermana en los juegos, lo entiende como una condena a muerte. Sin embargo Katniss ya ha visto la muerte de cerca; y la supervivencia forma parte de su naturaleza.'
    },
    {
      Autor:{
        nombre_s: 'Jon',
        apellidos: 'Duckett'
      },
      ISBN: '978-1-118-00818-8',
      Título: 'HTML & CSS: Design and Build Websites',
      Genero: 'Computación',
      Edición: 2,
      Editorial: 'John Wiley & Sons, Inc.',
      Páginas: 490,
      Sinopsis: 'Este libro nos da una pequeña introducción a lo que es el diseño/construcción de tu propia pagina web'
    },
    {
      Autor:{
        nombre_s: 'Becca',
        apellidos: 'Fitzpatrick'
      },
      ISBN: '978-I-4I69-8943-I',
      Título: 'Crescendo',
      Genero: 'Romance',
      Edición: 2017,
      Editorial: 'Simon & Schuster',
      Páginas: 408,
      Sinopsis: 'La esperada continuación del best seller Hush, hush. Una novela de amor, intriga trepidante y ángeles diabólicamente seductores. A pesar de su fascinante relación con Patch y de haber sobrevivido a un intento de asesinato, la vida de Nora dista mucho de ser perfecta. Patch está empezando a alejarse y Nora no sabe si es por su bien o porque cada vez está más interesado en su archienemiga Marcie Millar. Además, una serie de imágenes sobre su padre la acosan de manera recurrente. A medida que Nora se sumerge en el misterio de su muerte, comienza a sospechar que su sangre nefilim puede estar relacionada con el asunto. Pero Patch no le da ninguna respuesta, por lo que ella decide investigar por su cuenta, arriesgándose hasta el límite. ¿Qué verdad se esconde detrás de la muerte de su padre? ¿Puede contar con Patch o este le oculta secretos más oscuros de lo que ella imagina? '
    },
    {
      Autor:{
        nombre_s: 'Joanne',
        apellidos: 'Rowling'
      },
      ISBN: '978-84-9838-631-8',
      Título: 'Harry Potter y la Piedra Filosofal',
      Genero: 'Literatura Fantástica, Aventuras, Literatura Juvenil',
      Edición: 1998,
      Editorial: 'Salamandra',
      Páginas: 255,
      Sinopsis: 'Harry vive con sus horribles tíos y el insoportable primo Dudley, hasta que su ingreso en el Colegio Hogwarts de Magia y Hechicería cambia su vida para siempre. Allí aprenderá trucos y encantamientos fabulosos, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Y, sobre todo, conocerá los secretos que lo ayudarán a cumplir con su destino.'
    },
    {
      Autor:{
        nombre_s: 'Marqués',
        apellidos: 'de Sade'
      },
      ISBN: '9786071419323',
      Título: 'Filosofía en el Tocador',
      Género: 'Novela Literaria',
      Edición: 1,
      Editorial: 'Austral',
      Páginas: 256,
      Sinópsis: 'Dos instructores enseñan a una joven el arte del libertinaje, al mismo tiempo le dan lecciones sobre religión y eso pone en duda la existencia o la verdad de esto'
    }, 
    {
      Autor:{
        nombre_s: 'Ángel David',
        apellidos: 'Revilla'
      },
      ISBN: '9788408161301',
      Título: 'El Festival de la Blasfemia',
      Género: 'Fantasía',
      Edición: 1,
      Editorial: 'Planeta',
      Páginas: 150,
      Sinópsis: 'No todo festival se desarrolla con ánimo festivo, ni toda blasfemia se pronuncia en vano, a esto viene el festival de la blasfemia'
    },
    {
      Autor:{
        nombre_s: 'Andrea',
        apellidos: 'Ramos'
      },
      ISBN: '9781365919589',
      Título: 'El Burdel de las Parafilias',
      Genero: 'Novela',
      Edición: 2018,
      Editorial: 'MORVOZ',
      Páginas: 141,
      Sinopsis: 'El burdel de las parafilias es un sitio donde las personas revelan sus deseos ocultos, aquellos que se han esforzado por esconder para encajar en una sociedad hipócrita y moralista. A lo largo de sus páginas el lector puede ir descubriendo de la mano de los personajes -con los que más de uno se puede identificar- diversas historias donde las más perversas, sádicas y aberrantes fantasías pueden hacerse realidad.'
    }

  ];

  Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function findByISBN(isbn){
  Libro.find({'ISBN':isbn},function(err,documentos){
    console.log(documentos);
  });
}


function cambiarTituloByISBN(nisbn, nuevoTítulo){
  Libro.findOneAndUpdate({'ISBN':nisbn},{'Título':nuevoTítulo},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
  //nuevoLibro();
  //nuevosLibros();
  //findByISBN('978-032-98-0600-2');
  cambiarTituloByISBN('9781365919589', 'El Burdel de la Felicidad');
}

main();    // ejecutamos main
