import { Component, OnInit } from '@angular/core';
import { loadScript } from '@paypal/paypal-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  CLIENT_ID = 'your-client-id';

  constructor() { }

  ngOnInit(): void {
    loadScript({'client-id': this.CLIENT_ID})
      .then(paypal => {
        paypal.Buttons().render('#paypal-button-container');
      });
  }
}
