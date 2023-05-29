import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {/*PROPERTY DATA BINDING*//*INTERPOLACION*/
  public image: String = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFbtbVBIvncZX_dVXtud-vx6PT4Bp0soxAsByUmEnfZtLz_kkUNpdpdHJNTZ9eOZf_qM&usqp=CAU";
  public titulo: String = "TARJETAS";  

  constructor() { }

  ngOnInit(): void {

}
}

