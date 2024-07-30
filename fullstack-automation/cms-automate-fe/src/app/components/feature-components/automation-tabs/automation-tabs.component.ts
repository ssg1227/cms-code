/*
import { Component, ContentChildren, QueryList, AfterContentInit, TemplateRef, Input } from '@angular/core';

export class TabComponent {
  @Input() tabTitle = '';
  active = false;
}
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = QueryList<undefined>();
  selectedIndex = 0;

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(0);
    } else {
      this.selectTab(this.tabs.toArray().indexOf(activeTabs[0]));
    }
  }

  selectTab(index: number): void {
    this.selectedIndex = index;
    this.tabs.toArray().forEach((tab, i) => {
      tab.active = i === index;
    });
  }
}

@Component({
  selector: 'app-tab',
  template: '<ng-content></ng-content>',
  styles: []
})
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-automation-tabs',
  templateUrl: './automation-tabs.component.html',
  styleUrls: ['./automation-tabs.component.css']
})
export class AutomationTabsComponent {

   currentTab = 'add-images'
   selectTab(tabname:string) {
    this.currentTab = tabname ;
   }
}
