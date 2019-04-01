import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';  // CRUD API service class
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr
import { Securities } from '../shared/securities';
@Component({
  selector: 'app-security-list',
  templateUrl: './security-list.component.html',
  styleUrls: ['./security-list.component.scss']
})
export class SecurityListComponent implements OnInit {
  p: number = 1;
  Security: Securities[] = [];
  hideWhenNoSecurity: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  constructor(public crudApi: CrudService, // Inject Security CRUD services in constructor.
    public toastr: ToastrService) // Toastr service for alert message
  { }

  ngOnInit() {
    this.dataState(); // Initialize Security's list, when component is ready
    let s = this.crudApi.GetSecuritiesList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Security = [] = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Security.push(a as Securities);
      })
    })
  }


  // Using valueChanges() method to fetch simple list of Securities data. It updates the state of hideWhenNoDevice, noData & preLoader variables when any changes occurs in Security data list in real-time.
  dataState() {
    this.crudApi.GetSecuritiesList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoSecurity = false;
        this.noData = true;
      } else {
        this.hideWhenNoSecurity = true;
        this.noData = false;
      }
    });
  }


  // Method to delete Security object
  deleteSecurity(security) {
    if (window.confirm('Are sure you want to delete this Security ?')) { // Asking from user before Deleting Security data.
      this.crudApi.DeleteSecurity(security.$key) // Using Delete Security API to delete Security.
      this.toastr.success(security.securityName + ' successfully deleted!'); // Alert message will show up when Security successfully deleted.
    }
  }
}
