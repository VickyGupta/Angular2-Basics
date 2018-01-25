import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatDatepickerModule } from '@angular/material';

@Component({
  selector: 'package', // <home></home>
  styleUrls: ['./package.component.scss'],
  templateUrl: './package.component.html'
})
export class PackageComponent {
  public panelOpenState: boolean = true;
  public date = new FormControl(new Date());
  public serializedDate = new FormControl(new Date().toISOString());
  public step = 0;
  public name: string;
  public searchForm: FormGroup;
  public searchForm1: FormGroup;
  private options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
    this.searchForm = fb.group({
      properties: fb.array([])
    });
    this.searchForm1 = fb.group({
      properties1: fb.array([])
    });
  }

  public setStep(index: number) {
    this.step = index;
  }

  public nextStep() {
    this.step++;
  }

  public prevStep() {
    this.step--;
  }
  public addlocation() {
    for (let i = 1; i <= 1; i++) {
      this.searchForm.get('properties').push(new FormControl());
    }
  }
  public addhotel() {
    for (let i = 1; i <= 1; i++) {
      this.searchForm1.get('properties1').push(new FormControl());
    }
  }
}
