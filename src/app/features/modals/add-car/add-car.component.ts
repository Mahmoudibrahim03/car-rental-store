import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit, AfterViewInit {
  @ViewChild('template') template: any;

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.template)
    this.modalRef = this.modalService.show(this.template);
  }

}
