import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';  // CRUD API service class
import { Shifts } from '../shared/shifts';   // Shift interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {
  p: number =1;
  Shift: Shifts[];
  hideWhenNoShift:boolean=false;
  noData: boolean = false;
  preLoader: boolean = true;


  constructor(
    public crudApi: CrudService, // Inject Shift CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.dataState(); // Initialize Shift's list, when component is ready
    let s = this.crudApi.GetShiftsList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Shift = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Shift.push(a as Shifts);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of Shifts data. It updates the state of hideWhenNoShift, noData & preLoader variables when any changes occurs in Shift data list in real-time.
  dataState() {     
    this.crudApi.GetShiftsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoShift = false;
        this.noData = true;
      } else {
        this.hideWhenNoShift = true;
        this.noData = false;
      }
    })
  }

  // Method to delete Shift object
  deleteShift(shift) {
    if (window.confirm('Are sure you want to delete this Shift ?')) { // Asking from user before Deleting Shift data.
      this.crudApi.DeleteShift(shift.$key) // Using Delete Shift API to delete Shift.
      this.toastr.success(shift.shiftName + ' successfully deleted!'); // Alert message will show up when Shift successfully deleted.
    }
  }
}

