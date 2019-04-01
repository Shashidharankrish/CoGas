import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { Devices } from './devices';
import { Shifts } from './shifts';
import { Securities } from './securities';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  devicesRef: AngularFireList<any>;    // Reference to device data list, its an Observable
  deviceRef: AngularFireObject<any>;   // Reference to device object, its an Observable too
  shiftsRef: AngularFireList<any>;
  shiftRef: AngularFireObject<any>;
  securitiesRef: AngularFireList<any>;
  securityRef: AngularFireObject<any>;

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }


  //  Related to Devices

  // Create device
  AddDevice(device: Devices) {
    this.devicesRef.push({
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      count: device.count,
      availability: device.availability
    })
  }

  // Fetch Single device Object
  Getdevice(id: string) {
    this.deviceRef = this.db.object('devices-list/' + id);
    return this.deviceRef;
  }

  // Fetch devices List
  GetDevicesList() {
    this.devicesRef = this.db.list('devices-list');
    return this.devicesRef;
  }  

  // Update device Object
  UpdateDevice(device: Devices) {
    this.deviceRef.update({
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      count: device.count,
      availability: device.availability
    })
  }  

  // Delete device Object
  DeleteDevice(id: string) { 
    this.deviceRef = this.db.object('devices-list/'+id);
    this.deviceRef.remove();
  }


  // Related to Securites
 

  // Create Security
  AddSecurity(security: Securities) {
    this.securitiesRef.push({
      securityName: security.securityName,
      phoneNumber: security.phoneNumber,
      count: security.count,
      availability: security.availability
    })
    alert(security.securityName+" Added");
  }

   // Fetch Single Security Object
   Getsecurity(id: string) {
    this.securityRef = this.db.object('securities-list/' + id);
    return this.securityRef;
  }

  // Fetch securities List
  GetSecuritiesList() {
    this.securitiesRef = this.db.list('securities-list');
    return this.securitiesRef;
  }

  // Update Security Object
  UpdateSecurity(security: Securities) {
    this.securityRef.update({
      securityName: security.securityName,
      phoneNumber: security.phoneNumber,
      count: security.count,
      availability: security.availability
    })
  }

  // Delete Security Object
  DeleteSecurity(id: string) { 
    this.securityRef = this.db.object('securites-list/'+id);
    this.securityRef.remove();
  }

// Related to Shifts
  // Create Shift
  AddShift(shift: Shifts) {
    this.shiftsRef.push({
      shiftName: shift.shiftName,
      count: shift.count,
      availability: shift.availability,
    })
    alert(shift.shiftName+" Added");
  }

   // Fetch Single shift Object
   Getshift(id: string) {
    this.shiftRef = this.db.object('shifts-list/' + id);
    return this.shiftsRef;
  }

  // Fetch shifts List
  GetShiftsList() {
    this.shiftsRef = this.db.list('shifts-list');
    return this.shiftsRef;
  }

  // Update Shift Object
  UpdateShift(shift: Shifts) {
    this.shiftRef.update({
      shiftName: shift.shiftName,
      availability: shift.availability
    })
  }

  // Delete shift Object
  DeleteShift(id: string) { 
    this.shiftRef = this.db.object('shifts-list/'+id);
    this.shiftRef.remove();
  }
  
}