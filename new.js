class Movies{
    constructor(title,studio,rating="PG") {
      this.title=title;
      this.studio=studio;
      this.rating=rating;
    }
    getPG(Movie){
        return Movie.filter(Movies=>Movies.rating==="PG")
    }
  }
  const myMovie =[ 
  new Movies("Inception", "Warner Bros."),
  new Movies("Vampier Dairies","CW Television Network","TV-14"),
  new Movies("Bigil","AGS Entertainment"),
  new Movies("Never have I ever","Universal studio","PG 13"),
  new Movies("Casino Royale","Eon Productions","PG 13")
]
const movieI = new Movies();
const pgMovies = movieI.getPG(myMovie); 
console.log(pgMovies);
console.log(myMovie);
  