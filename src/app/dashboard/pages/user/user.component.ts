import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';

import { User } from '../../../interfaces/req-response';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );
}
