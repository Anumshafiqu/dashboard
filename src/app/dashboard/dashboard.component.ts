import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  value: number = 70;
products= [
  {
    Company: 'affrends Futerkisite',
    Contact : 'Mana anders',
    Country : 'Germany'

},
{
  Company: 'Centro commercial moctezmu',
  Contact : 'Francisco Change',
  Country : 'Maxico'

},
{
  Company: 'Emst Handle',
  Contact : 'Ronaldo ',
  Country : 'Austria'

},
{
  Company: 'jkson',
  Contact : 'Heien Bonett',
  Country : 'UK'

},


]
}
