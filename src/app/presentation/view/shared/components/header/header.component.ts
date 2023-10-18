import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private translate: TranslateService
  ) {}

  changeLang() {
    switch (this.translate.currentLang) {
      case 'pt-BR':
        this.translate.use('en-US')
        break;
      case 'en-US':
        this.translate.use('pt-BR')
        break;
    }
  }

}
