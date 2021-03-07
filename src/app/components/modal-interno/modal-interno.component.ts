import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-interno',
  templateUrl: './modal-interno.component.html',
  styleUrls: ['./modal-interno.component.scss'],
})
export class ModalInternoComponent implements OnInit {

  @Input() nome: string;

  constructor(private navParams: NavParams,
    private modalCtrl: ModalController) { 
    console.log(this.navParams.get("nome"));

  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
