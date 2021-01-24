import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
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
      title: 'Select',
      url: 'select',
      icon: 'checkmark'
    },
    {
      title: 'Toggle',
      url: 'toggle',
      icon: 'toggle'
    }

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
