import { Component, Input } from '@angular/core';
import { User } from '../types.user';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input() user: User | undefined = undefined;
}
