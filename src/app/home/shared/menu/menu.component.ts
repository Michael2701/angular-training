import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import HomeActions from '../../store/home-types';
import { HomeService } from '../../home.service';
import { Observable } from 'rxjs';
import { isLogged, isNotLogged } from '../../store/home-selectors';
import { SubscribeDialogComponent } from '../subscribe-dialog/subscribe-dialog.component';

export interface LoginData {
  email: string;
  password: string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLoggedObs: Observable<boolean>;
  isNotLoggedObs: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private homeService: HomeService
  ) { }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      // data: this.loginData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.store.dispatch(HomeActions.login(result));
    });
  }

  openSubscribeDialog(): void {
    const dialogRef = this.dialog.open(SubscribeDialogComponent, {
      width: '350px',
      // data: this.loginData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("from service ", result);
      this.store.dispatch(HomeActions.onSubscribe(result));
    });
  }

  onLogout() {
    this.homeService.logout();
  }


  ngOnInit(): void {
    this.isLoggedObs = this.store.select(isLogged)
    this.isNotLoggedObs = this.store.select(isNotLogged)
  }

}
