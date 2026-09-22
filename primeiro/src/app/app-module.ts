import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaExercicios1Module } from './lista-exercicios-1/lista-exercicios-1-module';
import { ListaExercicios2Module } from './lista-exercicios-2/lista-exercicios-2-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaExercicios1Module,
    ListaExercicios2Module
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }