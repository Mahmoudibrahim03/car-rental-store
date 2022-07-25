import {Injectable} from '@angular/core';
import {cars} from "../interfaces/cars.interface";
import {filters} from "../../shared/interfaces/filters.interface";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private _cars: cars[] = [
    {
      name: 'Aercedes GLS 2022',
      image: '../../../assets/images/BG.png',
      city: 'Alexandria',
      dailyRate: 30,
      features:
        {airCondition: false, shifting: "Automatic"}
      ,
      id: 0
    },
    {
      name: 'Bercedes GLS ',
      image: '../../../assets/images/blackCar.png',
      city: 'Cairo',
      dailyRate: 50,
      features:
        {airCondition: false, shifting: "Manual"}
      ,
      id: 1
    },
    {
      name: 'Mercedes V Class 2022',
      image: '../../../assets/images/mercidec.png',
      city: 'Giza',
      dailyRate: 40,
      features:
        {airCondition: true, shifting: "Automatic"}
      ,
      id: 2
    },
    {
      name: 'Mercedes V Class 2022',
      image: '../../../assets/images/mercidec.png',
      city: 'Giza',
      dailyRate: 40,
      features:
        {airCondition: true, shifting: "Automatic"}
      ,
      id: 2
    },
    {
      name: 'Mercedes V Class 2022',
      image: '../../../assets/images/mercidec.png',
      city: 'Giza',
      dailyRate: 40,
      features:
        {airCondition: true, shifting: "Automatic"}
      ,
      id: 2
    },
    {
      name: 'Mercedes V Class 2022',
      image: '../../../assets/images/mercidec.png',
      city: 'Giza',
      dailyRate: 40,
      features:
        {airCondition: true, shifting: "Automatic"}
      ,
      id: 2
    }
  ]

  constructor() {
  }

  public getAllCars(): cars[] {
    return this._cars;
  }

  public addCar(newCar: cars): cars[] {
    if (!newCar.id) {
      newCar.id = this._cars.at(-1)?.id ?? 0;
    }
    this._cars.push(newCar);
    return this._cars
  }

  public getSpecificCar(id: number): cars {
    return this._cars.filter((car) => car.id === id)[0];
  }

  public filteredCars(filtersValue: filters) {
    console.log(filtersValue)
    return this._cars.filter((car) => {
      console.log((filtersValue.cities.includes(car.city) || (filtersValue.cities.length == 0)))
      return (
        filtersValue.range.maxValue >= car.dailyRate &&
        filtersValue.range.minValue <= car.dailyRate &&

        (filtersValue.airConditionState?.includes(car.features.airCondition ? 'yes' : 'no') || (filtersValue.airConditionState?.length == 0)) &&
        (filtersValue.cities.includes(car.city) || (filtersValue.cities.length == 0)) &&
        (filtersValue.shifterType?.includes(car.features.shifting) || (filtersValue.shifterType?.length == 0))
      )
    })
  }
}
