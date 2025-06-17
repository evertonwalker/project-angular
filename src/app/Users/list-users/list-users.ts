import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../service/user-service';
import { User } from '../types.user';
import { UserCard } from '../user-card/user-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.html',
  styleUrl: './list-users.scss',
  providers: [UserService],
  imports: [UserCard, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUsers implements OnInit {
  constructor(private userService: UserService) {}

  users: Array<User> = [];
  previousUsers: Array<User> = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((resultUsers) => {
      console.log(resultUsers);
      this.previousUsers = [...resultUsers];
      this.users = resultUsers;
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
