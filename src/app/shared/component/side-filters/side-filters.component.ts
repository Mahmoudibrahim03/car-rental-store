import {Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {filters} from "../../interfaces/filters.interface";

@Component({
  selector: 'app-side-filters',
  templateUrl: './side-filters.component.html',
  styleUrls: ['./side-filters.component.scss'],
})
export class SideFiltersComponent implements OnInit {
  @Output() filters: EventEmitter<filters> = new EventEmitter();
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef> | undefined;

  public citiesOption: string[] = ["Alexandria", "Cairo", "Giza", "Hurghada", "Aswan", "Luxor", "Ismaillia", "Asut", "Tanta"];
  public shiftingSystem: string[] = ['Manual', 'Automatic'];

  public citiesList: string[] = [];
  public shiftingList: string[] = [];

  public isCollapsed: boolean = true;
  public isCollapsed2: boolean = true;
  public isCollapsed3: boolean = true;

  public citiesSeeMore: boolean = false;
  public shiftersSeeMore: boolean = false;

  public isCollapsed4: boolean = true;

  public slider = {
    minValue: 20,
    maxValue: 100,
    options: {
      floor: 20,
      ceil: 100
    }
  };

  public filterValues: filters = {
    airConditionState: [],
    cities: [],
    range: this.slider,
    shifterType: []
  }

  constructor() {
  }

  ngOnInit(): void {
    this.seeMore(this.citiesOption, 4, 'cities')
    this.seeMore(this.shiftingSystem, 4, 'shifters')
  }

  public onChangeFilters($e?: any, sectionName?: string) {
    if (sectionName === 'shifters') {
      $e.target.checked ? this.filterValues.shifterType?.push($e.target.value) : null;
      !($e.target.checked) ? this.filterValues.shifterType = this.filterValues.shifterType?.filter((sys) => sys !== $e.target.value) : null
    }

    if (sectionName === 'cities') {
      $e.target.checked ? this.filterValues.cities?.push($e.target.value) : null;
      !($e.target.checked) ? this.filterValues.cities = this.filterValues.cities?.filter((sys) => sys !== $e.target.value) : null
    }

    if (sectionName === 'airCondition') {
      $e.target.checked ? this.filterValues.airConditionState?.push($e.target.value) : null;
      !($e.target.checked) ? this.filterValues.airConditionState = this.filterValues.airConditionState?.filter((sys) => sys !== $e.target.value) : null
    }

    this.filters?.emit(this.filterValues);
  }

  public seeMore(arr: string[], maxItems: number, section: string): any {
    if (section == 'cities') {
      this.citiesSeeMore = !this.citiesSeeMore
      if (this.citiesSeeMore) {
        this.citiesList = arr.slice(0, maxItems)
      } else {
        this.citiesList = arr
      }
    }
    if (section == 'shifters') {
      this.shiftersSeeMore = !this.shiftersSeeMore
      if (this.shiftersSeeMore) {
        this.shiftingList = arr.slice(0, maxItems)
      } else {
        this.shiftingList = arr
      }
    }
    return [];
  }

  public resetValues() {
    this.slider = {
      minValue: 20,
      maxValue: 100,
      options: {
        floor: 20,
        ceil: 100
      }
    }
    this.filterValues = {
      airConditionState: [],
      cities: [],
      range: this.slider,
      shifterType: []
    }
    this.checkboxes?.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }
}

