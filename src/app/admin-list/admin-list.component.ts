import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';  // CRUD API service class
import { Admins} from '../shared/admins';   // admin interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  p: number =1;
  Admin: Admins[];
  hideWhenNoAdmin:boolean=false;
  noData: boolean = false;
  preLoader: boolean = true;


  constructor(
    public crudApi: CrudService, // Inject Admin CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.dataState(); // Initialize Admin's list, when component is ready
    let a = this.crudApi.GetAdminsList(); 
    a.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Admin = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Admin.push(a as Admins);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of Admins data. It updates the state of hideWhenNoAdmin, noData & preLoader variables when any changes occurs in Admin data list in real-time.
  dataState() {     
    this.crudApi.GetAdminsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoAdmin = false;
        this.noData = true;
      } else {
        this.hideWhenNoAdmin = true;
        this.noData = false;
      }
    })
  }

  // Method to delete Admin object
  deleteAdmin(admin) {
    if (window.confirm('Are sure you want to delete this Admin ?')) { // Asking from user before Deleting Admin data.
      this.crudApi.DeleteAdmin(admin.$key) // Using Delete Admin API to delete Admin.
      this.toastr.success(admin.adminName + ' successfully deleted!'); // Alert message will show up when admin successfully deleted.
    }
  }
}

