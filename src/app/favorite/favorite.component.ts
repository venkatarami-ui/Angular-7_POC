import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',

  styleUrls: ['./favorite.component.css']
  
})
export class FavoriteComponent  {

  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();
  //encapsulation: ViewEncapsulation.Emulated
  //encapsulation: ViewEncapsulation.ShadowDom
  //encapsulation: ViewEncapsulation.Native
  //encapsulation: ViewEncapsulation.None

  onCLick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangeEventArgs {
  newValue: boolean
}
