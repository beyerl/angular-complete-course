import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  @Input('isFavourite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  onLikeClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }
}

export interface FavouriteChangedEventArgs  {
  newValue: boolean
}