import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  Properties: Array<any> = [
    {
    "Id": 1,
    "Name": "Barla House",
    "Type": "House",
    "Price": 12000,
  },
  {
    "Id": 2,
    "Name": "Erose Villa",
    "Type": "House",
    "Price": 15000,
  },
  {
    "Id": 3,
    "Name": "Jul Villa",
    "Type": "House",
    "Price": 23000,
  },
  {
    "Id": 4,
    "Name": "Postmyre Mansion",
    "Type": "House",
    "Price": 31000,
  }
]
}
