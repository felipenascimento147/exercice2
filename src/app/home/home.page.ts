import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arrayElement: number = null;
  arrayInput = [];

  controllerArray: boolean = false;

  constructor(
    public alertController: AlertController
  ) {

  }

  arrayPush(){
    console.log(this.arrayElement);
    this.arrayInput.push(this.arrayElement);
    this.arrayElement = null;
    console.log(this.arrayInput);
    
  }

  verify() {
    if (this.arrayInput.length == 0) {
      this.arrayNull();
    }
    else if (this.arrayInput.length % 2 == 0) {
      this.arrayEven();
    }
    else {
      this.arrayOdd()
    }
  }

  arrayNull() {
    this.presentAlert("Array nulo é um array simétrico");
  }

  arrayEven() {
    let j = this.arrayInput.length - 1;
    for (let i = 0; i < this.arrayInput.length / 2; i++) {
      if (this.arrayInput[i] != -this.arrayInput[j]) {
        i = this.arrayInput.length;
        this.controllerArray = false;
      }
      else {
        this.controllerArray = true;
        j = j - 1;
      }
    }
    if (this.controllerArray) {
      this.presentAlert("Este array é par e simétrico")
    }
    else {
      this.presentAlert("Este array é par e não é simétrico");
    }
  }

  arrayOdd() {
    let j = this.arrayInput.length - 1;
    for (let i = 0; i < Math.round(this.arrayInput.length / 2) - 1; i++) {
      if (this.arrayInput[i] != -this.arrayInput[j]) {
        i = this.arrayInput.length;
        this.controllerArray = false;
      }
      else {
        this.controllerArray = true;
        j = j - 1;
      }
    }
    if (this.controllerArray) {
      this.presentAlert("Este array é ímpar e simétrico")
    }
    else {
      this.presentAlert("Este array é ímpar e não é simétrico");
    }
  }

  async presentAlert(text) {
    const alert = await this.alertController.create({
      header: "Array Symmetrical",
      message: text,
      buttons: ['OK']
    });
    await alert.present();
  }

  arrayClean(){
    this.arrayInput = [];
  }
}
