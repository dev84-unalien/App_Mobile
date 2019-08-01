import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inscription', pathMatch: 'full' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilPageModule' },
  { path: 'culture', loadChildren: './culture/culture.module#CulturePageModule' },
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
