import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../service/user-service';
import { User } from '../types.user';
import { UserCard } from '../user-card/user-card';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.html',
  styleUrl: './list-users.scss',
  providers: [UserService],
  imports: [UserCard, CommonModule],
})
export class ListUsers implements OnInit {
  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  users: Array<User> = [];
  previousUsers: Array<User> = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((resultUsers) => {
      console.log(resultUsers);
      this.previousUsers = [...resultUsers];
      this.users = resultUsers;
      this.cdr.detectChanges();
    });
  }

  filterUsers(event: any) {
    if (!event.target.value) {
      this.users = this.previousUsers;
    } else {
      this.users = this.users.filter((user) =>
        user.name.toLocaleLowerCase().includes(event.target.value.toLowerCase())
      );
    }
  }

  identify(index: number, user: User) {
    return user.name;
  }
}
