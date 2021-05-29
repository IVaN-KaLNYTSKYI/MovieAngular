import {ResultsMovie} from "./ResultsMovie";

export interface Movie {
  page:number
  results:ResultsMovie[]
  total_pages:number
  total_results:number
}
