import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly email : String = "m10ai@proton.me"
  readonly bylawsLink : string = "https://docs.google.com/document/d/1UCZa68_1dmW4Am221g3R0EAC8ez-GjRp1ifk6az7YI4/edit?usp=sharing"; 
}
