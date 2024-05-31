// conexión a api para traer las peliculas  en populares

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const contenedor = document.getElementById("main-movies");

let pagina = 1;

previous.addEventListener("click", ()=>{
  if(pagina > 1){
      pagina -= 1;
      cargarPeliculas();
  }
});

next.addEventListener("click", ()=>{
  if(pagina < 1000){
      pagina += 1;
      cargarPeliculas();
  }
});

const cargarPeliculas = async()=>{

   try{

    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f46108cbc0a4fde40e74851db6a704aa&language=es-MX&page=${pagina}`)
    console.log(respuesta);

    if(respuesta.status === 200){

        const datos = await respuesta.json();
        console.log(datos);

        let peliculas = [];

        datos.results.forEach(pelicula => {
            peliculas += `
            <div class="main-movies2">
              <a href="html/detalle.html">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="..." class="img-movies">
                <div class="name-movies">
                  <h4>${pelicula.title}</h4>
                </div>
              </a>
            </div>`;            
        });

        contenedor.innerHTML = peliculas;

    }

   }
   
   catch(error){
    console.log(error.message);

   }

}

cargarPeliculas();