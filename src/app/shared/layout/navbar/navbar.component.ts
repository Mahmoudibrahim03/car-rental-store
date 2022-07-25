import {Component, OnInit} from '@angular/core';
import {user} from '../../../core/interfaces/user.interface';
import {Routes} from "@angular/router";
import {RoutesEnums} from "../../../core/enums/routes.enums";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public routes = RoutesEnums;
  public logoPath: string = '../../../assets/images/logo X2.png';

  public user: user = {
    name: 'Ahmed Ali',
    imagePath: 'https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg',
  }

  constructor() {
  }

  ngOnInit(): void {
  }


}
