PayWithMyBank.establish({
  accessId: 'D61EC9BAF0BB369B9438',
  merchantId: '1004314986',
  metadata: { demo: 'enabled' },
  currency: 'USD',
  paymentType: 'Deferred',
  amount: '100.00',
  description: 'debora.pacharra@outlook.com',
  merchantReference: '123456',
  returnUrl: 'review/9478x659743',
  cancelUrl: '#cancel'
});
