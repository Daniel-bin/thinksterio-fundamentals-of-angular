import { ActorListComponent } from "./components/actor-list/actor-list.component";
import { FlopDetailsComponent } from "./components/flop-details/flop-details.component";
import { FlopListComponent } from "./components/flop-list/flop-list.component";
import { FlopSuggestionComponent } from "./components/flop-suggestion/flop-suggestion.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const routingTable = [
  { path: "", redirectTo: "/flops", pathMatch: "full" },
  { path: "flops", component: FlopListComponent },
  { path: "flops/suggestion", component: FlopSuggestionComponent },
  { path: "flops/:id", component: FlopDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "actors", component: ActorListComponent },
  {
    path: "watchlist",
    loadChildren: () =>
      import("./components/watch-list-module/watch-list.module").then(
        (m) => m.WatchListModule
      ),
  },
  { path: "**", component: NotFoundComponent },
];
