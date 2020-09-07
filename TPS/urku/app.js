const express = require('express');
const app = express();
const port = 3000;

const hbs = require("hbs");
hbs.registerPartials(__dirname + '/views/partials');

app.use('/assets', express.static('assets'));
app.set('view engine', 'hbs');
const VIEWS_PATH = __dirname + '/views/'; 


const DATOS = {
  year: new Date().getFullYear(),
  propietario: 'Juan Perez',  
}


class Seccion {
  constructor(nombre, ruta, view){
    this.nombre = nombre;
    this.ruta = ruta;
    this.view = VIEWS_PATH + view;
  }
}

class Secciones {
    lista = new Map()

    has(seccion){
        return this.lista.has(seccion)
    }

    add(nombre, ruta, view) {
      if (! this.has(nombre)) {
        let seccion = new Seccion(nombre, ruta, view);
        this.lista.set(nombre, seccion);
      }
    }

    get_ruta(seccion){
      return this.lista.get(seccion).ruta;
    }

    get_view(seccion){
      return this.lista.get(seccion).view;
    }
}

var secciones = new Secciones();

secciones.add('home', '/home', 'home.hbs');
secciones.add('portfolio', '/portfolio/', 'portfolio.hbs');
secciones.add('portfolio-alt', '/portfolio-alt/', 'portfolio-alt.hbs');
secciones.add('portfolio-item', '/portfolio-item/', 'portfolio-item.hbs');
secciones.add('portfolio-masonry', '/portfolio-masonry/', 'portfolio-masonry.hbs');
secciones.add('portfolio-raw', '/portfolio-raw/', 'portfolio-raw.hbs');
secciones.add('design-styles', '/design-styles/', 'design-styles.hbs');
secciones.add('documentation', '/documentation/', 'documentation.hbs');
secciones.add('blog', '/blog/', 'blog.hbs');
secciones.add('about', '/about/', 'about.hbs');
secciones.add('contact', '/contact/', 'contact.hbs');
secciones.add('blog-post', '/blog-post/', 'blog-post.hbs');
secciones.add('not_found', '', 'not_found.hbs');

app.get('/', (req, res) => res.redirect(secciones.get_ruta('home')));

app.get('/:seccion', (req, res) => {
  if (secciones.has(req.params.seccion)) {
        return res.render(secciones.get_view(req.params.seccion), {DATOS, secciones});
    } else {
        return res.status(404).render(secciones.get_view('not_found'), {DATOS, secciones});
    }
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})