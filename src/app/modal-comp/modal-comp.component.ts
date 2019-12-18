import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.css']
})
export class ModalCompComponent implements OnInit {
  @Input('modalData') public modalData;
  @Input('modalRefs') public modalRefs;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.modalData);
  }

}
