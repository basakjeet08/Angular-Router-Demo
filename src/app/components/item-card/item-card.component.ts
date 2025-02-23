import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  // Data passed from the parent component
  @Input() title: string = '';
  @Input() description: string = '';

  // Events to be passed to the parent component
  @Output() showMoreEvent = new EventEmitter<void>();
  @Output() deleteEvent = new EventEmitter<void>();

  // This function is invoked when the user clicks on the show more buton
  onShowMoreClick = () => this.showMoreEvent.emit();

  // This function is invoked when the user clicks the delete button
  onDeleteClick = () => this.deleteEvent.emit();
}
