import { Component, EnvironmentInjector, inject } from '@angular/core';
import { GlobalUI } from '../shared'; // Path to your shared file
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [...GlobalUI,CommonModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  userRole: 'admin' | 'tenant' = 'admin';
  selectedTab: string = 'tab1';

  constructor() { }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
  }

  toggleRole() {
    this.userRole = this.userRole === 'admin' ? 'tenant' : 'admin';
  }
}