import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabChangeEvent, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalCompComponent } from '../modal-comp/modal-comp.component';

import * as $ from 'jquery';
@Component({
  selector: 'app-bluestack',
  templateUrl: './bluestack.component.html',
  styleUrls: ['./bluestack.component.css']
})
export class BluestackComponent implements OnInit {
  prospectId: number;
  selectedTab:string; 

  @ViewChild('tabs')
  private tabs:NgbTabset;
  tabsetdata:any;
  tabsetheader:any;
  closeResult: any;
  prevTab :HTMLElement;
  nextTab: HTMLElement;
  modalData:any;
  constructor(private modalService: NgbModal) { 
    this.selectedTab = 'tab-preventchange2';
   
  }

  ngOnInit() {
    this.tabsetheader =['date','campaign','view','action'];
    this.tabsetdata = [{
      "data": [{
          "name": "Test Whatsapp",
          "region": "US",
          "createdOn": "Oct 2018,29",
          "dayAgo": "5 Days Ago ",
          "price": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 4/Price.png",
          "viewPrice": "view Pricing",
          "csv": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 3/file.png",
          "report": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 2/statistics-report.png",
          "image_url":"../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group/calendar.png" ,
          "thumb":"../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Thumb/Bitmap.png",
          "modalData":{
            'image': "../../assets/Images/inspect/Front-End/Page 1/Top Games/component/apps/small copy 10/Feature 2 Copy 2/img/80.png",
            "pricing": [{
              "month":'1 week - 1 month',
              "price": 100
            },{
              "month":'6 months',
              "price": 500
            },{
              "month":'1 year',
              "price": 1000
            }
          ]
        }
        },
        {
          "name": "Super Jewels Quest",
          "region": "FR",
          "createdOn": "Oct 2018,29",
          "dayAgo": "5 Days Ago ",
          "price": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 4/Price.png",
          "viewPrice": "view Pricing",
          "csv": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 3/file.png",
          "report": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 2/statistics-report.png",
          "image_url":"../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group/calendar.png",
          "thumb":"../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row Copy 2-Row/Thumb/Bitmap.png",
          "modalData":{
            'image': "../../assets/Images/inspect/Front-End/Page 1/Top Games/component/apps/small copy 9/Feature 2 Copy 2/img/80.png",
            "pricing": [{
              "month":'1 week - 1 month',
              "price": 100
            },{
              "month":'6 months',
              "price": 400
            },{
              "month":'1 year',
              "price": 2200
            }
          ]
        }
        },
        {
          "name": "Mole Slayer",
          "region": "FR",
          "createdOn": "Oct 2018,29",
          "dayAgo": "5 Days Ago ",
          "price": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 4/Price.png",
          "viewPrice": "view Pricing",
          "csv": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 3/file.png",
          "report": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 2/statistics-report.png",
          "image_url":"../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group/calendar.png",
          "thumb":"../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row Copy 3-Row/Thumb/Bitmap.png",
          "modalData":{
            'image': "../../assets/Images/inspect/Front-End/Page 1/Top Games/component/apps/small copy 8/Feature 2 Copy 2/img/80.png",
            "pricing": [{
              "month":'1 week - 1 month',
              "price": 100
            },{
              "month":'6 months',
              "price": 800
            },{
              "month":'1 year',
              "price": 9900
            }
          ]
        }
        },
        {
          "name": "Mancala Mix",
          "region": "JP",
          "createdOn": "Oct 2018,29",
          "dayAgo": "5 Days Ago ",
          "price": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 4/Price.png",
          "viewPrice": "view Pricing",
          "csv": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 3/file.png",
          "report": "../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group 2/statistics-report.png",
          "image_url":"../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row/Group/calendar.png",
          "thumb":"../../assets/Images/inspect/Front-End/Page 1/Dashboard/Row Copy 4-Row/Thumb/Bitmap.png",
          "modalData":{
            'image': "../../assets/Images/inspect/Front-End/Page 1/Top Games/component/apps/small copy 7/Feature 2 Copy 2/img/80.png",
            "pricing": [{
              "month":'1 week - 1 month',
              "price": 100
            },{
              "month":'6 months',
              "price": 1100
            },{
              "month":'1 year',
              "price": 1900
            }
          ]
        }
      }]
    }]
   

    
  }

  openModal(modalData) {
    const modalRef =  this.modalService.open(ModalCompComponent, {ariaLabelledBy: 'modal-basic-title',size: 'sm'});
    modalRef.componentInstance.modalData  =modalData;
    modalRef.componentInstance.modalRefs  = modalRef;
    modalRef.result.then((result) => {
       console.log(result);
       if(result.status === 'SUCCESS'){
           // this.categoryData.push(result.content);
           // this.AppserviceServices.display(false); 
           
       }
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       console.log(reason);
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
 
   }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }
  ngAfterViewChecked(): void {
    // if(this.tabs) {
    //   // var element = document.getElementById(this.selectedTab);
    //   // element.style.border ='none';
    //   // element.style.borderBottom= "4px solid green !important";
    //   // element.style.color=' green';
    //     this.tabs.select(this.selectedTab);
    // }
} 
onTabChange($event: NgbTabChangeEvent) {
  console.log($event);
  this.prevTab = document.getElementById($event.activeId);
  this.prevTab.classList.remove("activetab");
  this.nextTab =document.getElementById($event.nextId);
  this.nextTab.classList.add("activetab");
    // $('#'+ $event.activeId).removeClass('activetab');
  // $('#'+ $event.nextId).addClass('activetab');

}
}
