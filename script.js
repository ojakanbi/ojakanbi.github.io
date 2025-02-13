//Make a dummy API 
// let fakeMoviesAPI = {
//     "dates": {
//         "maximum": "2023-06-05",
//         "minimum": "2023-04-18"
//     },
//     "page": 1,
//     "results": [
//         {
//             "adult": false,
//             "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
//             "genre_ids": [
//                 16,
//                 10751,
//                 12,
//                 14,
//                 35
//             ],
//             "id": 502356,
//             "original_language": "en",
//             "original_title": "The Super Mario Bros. Movie",
//             "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
//             "popularity": 3392.2,
//             "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
//             "release_date": "2023-04-05",
//             "title": "The Super Mario Bros. Movie",
//             "video": false,
//             "vote_average": 7.8,
//             "vote_count": 4327
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
//             "genre_ids": [
//                 28,
//                 12,
//                 16,
//                 878
//             ],
//             "id": 569094,
//             "original_language": "en",
//             "original_title": "Spider-Man: Across the Spider-Verse",
//             "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
//             "popularity": 2921.844,
//             "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
//             "release_date": "2023-05-31",
//             "title": "Spider-Man: Across the Spider-Verse",
//             "video": false,
//             "vote_average": 8.8,
//             "vote_count": 739
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
//             "genre_ids": [
//                 28,
//                 80,
//                 53
//             ],
//             "id": 385687,
//             "original_language": "en",
//             "original_title": "Fast X",
//             "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
//             "popularity": 2334.66,
//             "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
//             "release_date": "2023-05-17",
//             "title": "Fast X",
//             "video": false,
//             "vote_average": 7.1,
//             "vote_count": 854
//         },
//     ],
//     "total_pages": 98,
//     "total_results": 1951
// }

// console.log(fakeMoviesAPI.results[1])

// let firstMovie = fakeMoviesAPI.results[1]

//Process of adding an element to the DOM
function generateCards(movieObject){

    let movieContainer = document.getElementById("movies-grid")
    console.log(movieContainer)
    //create star
    let star = document.createElement("span")
    star.classList.add("star")
    let starContent = document.createTextNode("⭐")
    star.appendChild(starContent)
    // document.body.appendChild(star)

    //create rating 
    let rating = document.createElement("span")
    rating.classList.add("movie-votes")
    let ratingContent = document.createTextNode(movieObject.vote_average)
    rating.appendChild(ratingContent)
    // document.body.appendChild(rating)

    //create average container 
    let averageContainer = document.createElement("div")
    averageContainer.classList.add("average")
    averageContainer.appendChild(star)
    averageContainer.appendChild(rating)
    
    // document.body.appendChild(averageContainer)

    let image = document.createElement("img")
    image.setAttribute("alt", movieObject.title)
    image.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movieObject.poster_path)
    // document.body.insertBefore(image, averageContainer)
    image.classList.add("movie-card")

    let name = document.createElement("div")
    name.classList.add("movie-title")
    name.innerHTML = movieObject.title
    // document.body.insertBefore(name, averageContainer.nextSibling)

    let movies = document.createElement("section")
    movies.classList.add("movies")
    movies.classList.add("movies")
    movies.appendChild(image)
    movies.appendChild(averageContainer)
    movies.appendChild(name)
    // document.body.appendChild(movies)

    // insert the movies section into the movieContainer
    movieContainer.appendChild(movies)

   
}



//loops through the array of movies and calles the generateCards function to generate each card
// fakeMoviesAPI.results.forEach(movie => {generateCards(movie)})

// fakeMoviesAPI.results.forEach(movie => {generateCards(movie)})

// const apiKey = "d80e50c14ea6d4ffe19317ea6a27fdc7"


//Code to fetch data and generate movie cards for the specified page
const makemovie = (page) => {

    
    options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODBlNTBjMTRlYTZkNGZmZTE5MzE3ZWE2YTI3ZmRjNyIsInN1YiI6IjY0ODIwNjcxNjQ3NjU0MDEyNDk3MzA1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D2mQxUgeO-qjMIkg3qtdbjspe-CfHT987JntpEflqeE'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(movie => {generateCards(movie)})
        })
        // .then(response => console.log(response))
        // .catch(err => console.error(err));

}


//  // Code to fetch data and generate movie cards for the specified search query and page
const searchMovie = (movie, page) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODBlNTBjMTRlYTZkNGZmZTE5MzE3ZWE2YTI3ZmRjNyIsInN1YiI6IjY0ODIwNjcxNjQ3NjU0MDEyNDk3MzA1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D2mQxUgeO-qjMIkg3qtdbjspe-CfHT987JntpEflqeE'
        }
      };
      
      fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(movie => {generateCards(movie)})
            console.log(response)
        })
        .catch(err => console.error(err));
}


// 
const loadMore = () => {
    loadButton.addEventListener("click", function(){
        page += 1
        makemovie(page)
    })

}


let loadButton = document.getElementById("load-more-movies-btn")
let page = 1






let movieSearch = document.getElementById("search-input")
let searchButton = document.getElementById("close-search-btn")
let movieContainer = document.getElementById("movies-grid")


movieSearch.addEventListener("keyup", function(){
    event.preventDefault()
    if (movieSearch.value.length < 1) {
        movieContainer.innerHTML = ""; // Clear movieContainer
        makemovie(page)
    }else{
        movieContainer.innerHTML = ""; // Clear movieContainer
        let searchValue = movieSearch.value
        console.log(searchValue)
        searchMovie(searchValue,page)
    }

})
        
    
 

 



// searchMovie(page)

window.onload =  function  () {
    makemovie(loadMore())
}
