import { ActorListComponent } from './actor-list/actor-list.component';
import { FlopDetailsComponent } from './flop-details/flop-details.component';
import { FlopListComponent } from './flop-list/flop-list.component';
import { FlopSuggestionComponent } from './flop-suggestion/flop-suggestion.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routingTable = [
  { path: '', redirectTo: '/flops', pathMatch: 'full'},
  { path: 'flops', component: FlopListComponent },
  { path: 'flops/suggestion', component: FlopSuggestionComponent },
  { path: 'flops/:id', component: FlopDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'watchlist', loadChildren: () => import('./watch-list-module/watch-list.module').then(m => m.WatchListModule)},
  { path: '**', component: NotFoundComponent },
]
