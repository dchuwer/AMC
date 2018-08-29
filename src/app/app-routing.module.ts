import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienSomosComponent } from './quien-somos/quien-somos.component';
import { BiomagnetismoComponent } from './biomagnetismo/biomagnetismo.component';
import { EmotionalCodeComponent } from './emotional-code/emotional-code.component';
import { AcupunturaComponent } from './acupuntura/acupuntura.component';
import { HipnoterapiaComponent } from './hipnoterapia/hipnoterapia.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
 { path: 'quien-somos', component: QuienSomosComponent },
 { path: 'biomagnetismo', component: BiomagnetismoComponent },
 { path: 'emotional-code', component: EmotionalCodeComponent },
 { path: 'acupuntura', component: AcupunturaComponent },
 { path: 'hipnoterapia', component: HipnoterapiaComponent },
 { path: 'contacto', component: ContactoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    
})


export class AppRoutingModule { }
