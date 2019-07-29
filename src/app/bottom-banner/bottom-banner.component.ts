import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-banner',
  template: '<div class="bottom-banner"><img src="/assets/Group 5.png"></div>',
  styles: ['.bottom-banner{ width : 100%; height : 7.22%; z-index: 3; }',' .bottom-banner img{ position:absolute; bottom: 0px;left: 0px;width : 100%;height : 9%;}']
})
export class BottomBannerComponent {
  constructor() { }
}
