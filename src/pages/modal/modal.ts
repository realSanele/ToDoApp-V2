import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Note } from '../../mockDB/note.model';
import { NoteServiceProvider } from './../../providers/note-service/note-service';
import { AddPlanPage } from './../add-plan/add-plan';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  addPlanPage = AddPlanPage;
  private notes: Promise<Note[]>;
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private view: ViewController,
    private noteService: NoteServiceProvider) {
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  addNote() {
    this.navCtrl.push(AddPlanPage);
  }


  getAllNotes() {
    return this.noteService.getAllNotes();
  }

}
