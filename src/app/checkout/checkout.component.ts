import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { loadScript } from '@paypal/paypal-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  CLIENT_ID = 'test';
  @Input() cartTotal: Number = 0.02;

  constructor() {}

  ngOnInit(): void {
    loadScript({ 'client-id': this.CLIENT_ID }).then((paypal) => {
      paypal
        .Buttons({
          createOrder: this.createOrder,
          onApprove: this.onApprove,
        })
        .render('#paypal-button-container');
    });
  }

  createOrder = (data: any, actions: any) => {
    console.log('Create order...');
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: this.cartTotal,
          },
        },
      ],
    });
  }

  onApprove = (data: any, actions: any) => {
    console.log('Order approved...');
    return actions.order.capture().then(alert('Order complete!'));
  }
}
