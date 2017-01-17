import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  constructor(public navCtrl: NavController) {

    this.getAllItems();
  }

  getAllItems(){
    let items = firebase.database().ref('items');
    items.once('value', snapshot =>{
      snapshot.forEach(childSnap=>{
        let item = {
          name: childSnap.val().name,
          body: childSnap.val().body
        }
        this.items.push(item);
        console.log(item);
        return false;
      })
    })
    console.log(this.items);
  }
}
