import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ObjetoComponent } from './objeto/objeto.component';

export const routes: Routes = [];
@Component({
  selector: 'app-root',
  imports: [HomeComponent, ObjetoComponent, ArrayComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
}
