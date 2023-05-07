const carregando = document.querySelector("#carregando");
const autores = document.querySelector("#autores");

//const url = 'https://hapi-books.p.rapidapi.com/top_authors';


const url = 'https://example-data.draftbit.com/books?_limit=120';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8057ff8a3emshc186199dcb7098bp19548fjsn69e1fe31e6db',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
};
// address //city country image name website


async function getAllBooks(){
    const response = await fetch(url)
    console.log(response, "resposta")
    
    const data = await response.json();
    console.log(data, "resposta")
    
  
    data.map((food) => {
        const div = document.createElement("div");
        const titulo = document.createElement("h2");
        const autor = document.createElement("h3");
        const descrição = document.createElement("p");
        const paginas = document.createElement("h6");
        const generos = document.createElement("h4");
        const imagemUrl = document.createElement("img");
        
        titulo.innerHTML = "Titulo: <span class='title'>" + food.title + "</span>";


      
        descrição.innerHTML = "Descrição: <span class='descricao'>" + food.description + "</span>";
       
        paginas.innerHTML = "Paginas: <span class='paginas'>" + food.num_pages + "</span>";
        autor.innerHTML = "Autor: <span class='paginas'>" + food.authors + "</span>"
        imagemUrl.setAttribute("src", food.image_url)
        generos.innerHTML = "Generos: <span class='paginas'>" + food.genres + "</span>";

        div.appendChild(imagemUrl);
        div.appendChild(titulo);
        div.appendChild(autor);
        div.appendChild(descrição);
        div.appendChild(generos);
        div.appendChild(paginas);
        autores.appendChild(div);
    })
   
    

}
getAllBooks();