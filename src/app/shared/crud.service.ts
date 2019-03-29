import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { Devices } from './devices';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  devicesRef: AngularFireList<any>;    // Reference to device data list, its an Observable
  deviceRef: AngularFireObject<any>;   // Reference to device object, its an Observable too
  
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create device
  AddDevice(device: Devices) {
    this.devicesRef.push({
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      count: device.count,
      availability: device.availability
    })
    alert(device.deviceName+"Added");
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
  
}