import { Component } from '@angular/core';
import { AutocompleteOptgroupExample } from '../autocomplete-optgroup/autocomplete-optgroup.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [AutocompleteOptgroupExample],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

}
