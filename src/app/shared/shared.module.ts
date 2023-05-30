import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './componentes/hero-search/hero-search.component';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [
  HeroSearchComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [COMPONENTS],
})
export class SharedModule { }
