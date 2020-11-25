import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/core/models/movies";
import { MoviesService } from "src/app/core/services/movies.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] | null = null;
  constructor(private moviesService: MoviesService) {}

  // Tương đương componentDidMount bên react
  ngOnInit(): void {
    this.moviesService.getMovieList().subscribe({
      next: (result) => {
        this.movieList = result;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => console.log("Get movie list success"),
    });
  }
}
