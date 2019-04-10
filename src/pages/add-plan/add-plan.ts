

import { NoteServiceProvider } from './../../providers/note-service/note-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Note } from '../../mockDB/note.model';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-plan',
  templateUrl: 'add-plan.html',
})
export class AddPlanPage {

  formGroup: FormGroup;
  note: Note; 
  date: Date = new Date();
  time: string= '';
  title: string = '';
  content: string = '';

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private noteService: NoteServiceProvider) {
      
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
      time: new FormControl()
    })
  
  }

  saveNote(note: Note){
    //invoking
   this.noteService.saveNote(note);
   this.navCtrl.pop(); 
   const toast = this.toastCtrl.create({
    message: 'Task added successfully!',
    duration: 2000
  });
  toast.present();
}
  
public event = {
  month: '1990-02-19',
  timeStarts: '07:43',
  timeEnds: '1990-02-20'
}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlanPage');
  }

}
