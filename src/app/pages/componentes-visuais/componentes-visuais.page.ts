import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {

  menuCollection: any[] = [];

  constructor(private navCtrl: NavController) { 

    this.menuCollection = [
      {
        title: 'Navegação',
        url: 'navegacao',
        icon: 'paper-plane'
      },
      {
        title: 'Botões',
        url: 'botao',
        icon: 'construct'
      },
      {
        title: 'Alert',
        url: 'alert',
        icon: 'alert'
      },
      {
        title: 'Action-Sheet',
        url: 'actionsheet',
        icon: 'alert-circle'
      },
      {
        title: 'Badge',
        url: 'badge',
        icon: 'text'
      },
      {
        title: 'Card',
        url: 'card',
        icon: 'card'
      },
      {
        title: 'CheckBox',
        url: 'checkbox',
        icon: 'checkbox'
      },
      {
        title: 'Chip',
        url: 'chip',
        icon: 'tablet-landscape'
      },
      {
        title: 'Content',
        url: 'content',
        icon: 'clipboard'
      },
      {
        title: 'DateTime',
        url: 'datetime',
        icon: 'calendar'
      },
      {
        title: 'Fab',
        url: 'fab',
        icon: 'arrow-forward'
      },
      {
        title: 'Grid',
        url: 'grid',
        icon: 'grid'
      },
      {
        title: 'InfiniteScroll',
        url: 'infinitescroll',
        icon: 'filter'
      },
      {
        title: 'Input',
        url: 'input',
        icon: 'enter'
      },
      {
        title: 'List',
        url: 'list',
        icon: 'list'
      },
      {
        title: 'Progress Bar',
        url: 'progressbar',
        icon: 'cellular'
      },
      {
        title: 'Refresher',
        url: 'refresher',
        icon: 'refresh-circle'
      },
      {
        title: 'Reorder',
        url: 'reorder',
        icon: 'reorder-three'
      },
      {
        title: 'Select',
        url: 'select',
        icon: 'checkmark'
      },
      {
        title: 'Toggle',
        url: 'toggle',
        icon: 'toggle'
      },
      {
        title: 'SearchBar',
        url: 'searchbar',
        icon: 'search'
      },
      {
        title: 'Segment',
        url: 'segment',
        icon: 'infinite'
      },
      {
        title: 'Slides',
        url: 'slides',
        icon: 'albums'
      },
      {
        title: 'Toast',
        url: 'toast',
        icon: 'chatbubble'
      },
      {
        title: 'Modal',
        url: 'modal',
        icon: 'easel'
      },
      {
        title: 'Popover',
        url: 'popover',
        icon: 'chatbox'
      },
      {
        title: 'Radio',
        url: 'radio',
        icon: 'disc'
      },
      {
        title: 'Animação',
        url: 'animacao',
        icon: 'bonfire'
      }
    ];
  }

  ngOnInit() {
  }

  showPage(url: string) {
    this.navCtrl.navigateForward(url);
  }

}
