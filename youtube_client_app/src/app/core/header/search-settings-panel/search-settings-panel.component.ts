import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-settings-panel',
  templateUrl: './search-settings-panel.component.html',
  styleUrls: ['./search-settings-panel.component.scss'],
})
export class SearchSettingsPanelComponent {
  @ViewChild('sortByWordInput')
  public sortByWordInputRef!: ElementRef;

  public focusSortByWordInput(): void {
    this.sortByWordInputRef.nativeElement.focus();
  }
}
