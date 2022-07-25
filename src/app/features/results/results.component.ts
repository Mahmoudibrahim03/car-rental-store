import {Component, OnInit} from '@angular/core';
import {filters} from "../../shared/interfaces/filters.interface";
import {Router} from "@angular/router";
import {CarsService} from "../../core/services/cars.service";
import {cars} from "../../core/interfaces/cars.interface";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {AddCarComponent} from "../modals/add-car/add-car.component";

export enum sortTypes {
  highToLow = 'highToLow',
  lowToHigh = 'lowToHigh',
  AtoZ = 'AtoZ',
  ZtoA = 'ZtoA'
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public route: string = ''
  public carData: cars[] = [];
  public sortType?: string = sortTypes.highToLow;
  private modalRef?: BsModalRef;

  constructor(
    private activeRoute: Router
    , private cars: CarsService
    , private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.route = this.activeRoute.url.slice((1));
    this.carData = this.cars.filteredCars({
      range: {
        maxValue: 100,
        minValue: 20
      },
      airConditionState: [],
      cities: [],
      shifterType: [],
    })

  }

  public filtersData(data: filters): void {
    this.carData = this.cars.filteredCars((data))
  }

  public sortData() {
    if (this.sortType == sortTypes.lowToHigh) {
      this.carData = this.carData.sort((a, b) => a.dailyRate - b.dailyRate)
    } else if (this.sortType == sortTypes.highToLow) {
      this.carData = this.carData.sort((a, b) => b.dailyRate - a.dailyRate)
    } else if (this.sortType == sortTypes.AtoZ) {
      this.carData = this.carData.sort((a, b) => {
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
        return 0;
      });
    } else if (this.sortType == sortTypes.ZtoA) {
      this.carData = this.carData.sort((a, b) => {
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameB < nameA)
          return -1;
        if (nameB > nameA)
          return 1;
        return 0;
      });
    }
  }

  public addNewCar() {
    this.modalRef = this.modalService.show(AddCarComponent);
  }
}
