import { Component } from '@angular/core';
import { ListUsers } from './Users/list-users/list-users';

@Component({
  selector: 'app-root',
  imports: [ListUsers],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
