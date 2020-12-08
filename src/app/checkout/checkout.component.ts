import { Component, OnInit } from '@angular/core';
import { loadScript } from '@paypal/paypal-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loadScript({'client-id': 'sb'})
      .then(paypal => {
        paypal.Buttons().render('#paypal-button-container')
      });
  }
}
