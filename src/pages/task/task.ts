import { ViewPage } from './../view/view';
import { AddPlanPageModule } from './../add-plan/add-plan.module';
import { NoteServiceProvider } from './../../providers/note-service/note-service';
import { AddPlanPage } from './../add-plan/add-plan';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Note } from '../../mockDB/note.model';


@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  private notes: Promise<Note[]>;
  private note: Note;
  splash = true;
  addPlanPage = AddPlanPage;


  constructor(public navCtrl: NavController, private noteService: NoteServiceProvider, private modal: ModalController) {
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }
    //ionic lifeCycle event
    ionViewWillEnter() {
      this.notes = this.getAllNotes();
    }

    addNote() {
      this.navCtrl.push(AddPlanPage);
    }


    getAllNotes() {
      return this.noteService.getAllNotes();
    }

    openModal(){

      const myData = {
        name: 'Vuyo',
        sname: 'Mhlontlo'
      };

      //init modal
      const myModal = this.modal.create('ModalPage', 
      /*passing obj to next page*/ {data: myData} );
      //to show the modal
      myModal.present();
    }

    getNote(createDate: number){
      //invloke note service
      this.noteService.getNote(createDate).then((n) => {
        this.note = n;
        this.navCtrl.push('ViewPage', { note: this.note });
      })
    }
}
