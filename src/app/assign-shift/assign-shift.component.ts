import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';
import * as jQuery from 'jquery';
window['jQuery'] = jQuery;
@Component({
  selector: 'app-assign-shift',
  templateUrl: './assign-shift.component.html',
  styleUrls: ['./assign-shift.component.scss']
})
export class AssignShiftComponent implements OnInit {
  selectedShift: string;
  selectedStartDate: string;
  selectedEndDate: string;
  selectedSecurity: string;
  selectedDevice: string;
  assignedDtoArray: assignedDto[] = [];
  updatebutton: boolean = false;
  editMode: boolean = false;
  EditableIndex: number = -1;

  constructor() { }

  ngOnInit() {
  }

  update() {

    if (this.editMode === true) {
      this.saveEditedValue();
      return;
    }
    else {
      let obj1: assignedDto = new assignedDto(this.selectedShift, this.selectedStartDate, this.selectedEndDate, this.selectedSecurity, this.selectedDevice);
      if (this.selectedDevice) { this.updatebutton = true; }
      if (this.updatebutton === true) {
        this.assignedDtoArray.push(obj1);
        localStorage.setItem('details', JSON.stringify(this.assignedDtoArray));
        this.updatebutton = false;
      }
      else {
        alert("Please fill the Datas")
      }
    }
  }
  edit(datas: assignedDto, index: number) {
    this.selectedShift = datas.shift;
    this.selectedStartDate = datas.startDate;
    this.selectedEndDate = datas.endDate;
    this.selectedSecurity = datas.security;
    this.selectedDevice = datas.device;
    this.EditableIndex = index;
    this.editMode = true;
    this.updatebutton=true;
  }
  saveEditedValue() {
    let a = localStorage.getItem('details');
    let detailsList: assignedDto[] = JSON.parse(a);
    detailsList.forEach((element) => {
      if (element.shift === this.assignedDtoArray[this.EditableIndex].shift &&
        element.startDate === this.assignedDtoArray[this.EditableIndex].startDate &&
        element.endDate === this.assignedDtoArray[this.EditableIndex].endDate &&
        element.security === this.assignedDtoArray[this.EditableIndex].security &&
        element.device === this.assignedDtoArray[this.EditableIndex].device) {
        element.shift = this.selectedShift;
        element.startDate = this.selectedStartDate;
        element.endDate = this.selectedEndDate;
        element.security = this.selectedSecurity;
        element.device = this.selectedDevice;
      }
      localStorage.setItem('details', JSON.stringify(detailsList));
      this.assignedDtoArray[this.EditableIndex].shift = this.selectedShift;
      this.assignedDtoArray[this.EditableIndex].startDate = this.selectedStartDate;
      this.assignedDtoArray[this.EditableIndex].endDate = this.selectedEndDate;
      this.assignedDtoArray[this.EditableIndex].security = this.selectedSecurity;
      this.assignedDtoArray[this.EditableIndex].device = this.selectedDevice;
    })
    this.editMode = false;
    this.EditableIndex = -1;
    this.selectedShift = "";
    this.selectedStartDate = "";
    this.selectedEndDate = "";
    this.selectedSecurity = "";
    this.selectedDevice = "";

  }
}

export class assignedDto {
  shift: string;
  startDate: string;
  endDate: string;
  security: string;
  device: string;
  constructor(shift: string, startDate: string, endDate: string, security: string, device: string) {
    this.shift = shift;
    this.startDate = startDate;
    this.endDate = endDate;
    this.security = security;
    this.device = device;
  }

}


// $('#datetimepicker6').datetimepicker();
// $('#datetimepicker7').datetimepicker({
//     useCurrent: false //Important! See issue #1075
// });
// $("#datetimepicker6").on("dp.change", function (e) {
//     $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
// });
// $("#datetimepicker7").on("dp.change", function (e) {
//     $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
// });
