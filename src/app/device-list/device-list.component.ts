import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';  // CRUD API service class
import { Devices } from '../shared/devices';   // Device interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  p: number =1;
  Device: Devices[];
  hideWhenNoDevice:boolean=false;
  noData: boolean = false;
  preLoader: boolean = true;


  constructor(
    public crudApi: CrudService, // Inject Device CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.dataState(); // Initialize Device's list, when component is ready
    let s = this.crudApi.GetDevicesList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Device = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Device.push(a as Devices);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of Devices data. It updates the state of hideWhenNoDevice, noData & preLoader variables when any changes occurs in Device data list in real-time.
  dataState() {     
    this.crudApi.GetDevicesList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoDevice = false;
        this.noData = true;
      } else {
        this.hideWhenNoDevice = true;
        this.noData = false;
      }
    })
  }

  // Method to delete Device object
  deleteDevice(device) {
    if (window.confirm('Are sure you want to delete this Device ?')) { // Asking from user before Deleting Device data.
      this.toastr.success(device.deviceName + ' successfully deleted!'); // Alert message will show up when Device successfully deleted.
      this.crudApi.DeleteDevice(device.$key) // Using Delete Device API to delete Device.
    }
  }
}

