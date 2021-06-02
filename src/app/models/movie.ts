import {ResultsMovie} from "./results-movie";

export interface Movie {
  page:number
  results:ResultsMovie[]
  total_pages:number
  total_results:number
}
