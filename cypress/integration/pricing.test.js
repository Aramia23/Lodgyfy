import Pricing from "../support/pages/pricing";
import pricingData from "../fixtures/pricingData.json"

import {
  currencyDrop,
  rentals50,
  starterPlan,
  professionalPlan,
  ultimatePlan
} from "../support/selectors/pricing";
const pricing= new Pricing();

context('Lodgify pricing page', () => {
  beforeEach(() => {
    pricing.visit();
  });

  it('Should verify right plan value', () => {
    pricing.form.fillField(rentals50,'text', 50)
    pricing.form.getFieldValue(starterPlan).should('include',pricingData.usd.starterUsd50yearly)
    pricing.form.getFieldValue(professionalPlan).should('include',pricingData.usd.professionalUsd50yearly)
    pricing.form.getFieldValue(ultimatePlan).should('include',pricingData.usd.ultimateUsd50yearly)
  });
  it('Should verify currency change', () => {
    pricing.form.fillField(rentals50,'text', 50)
    //changing from usd to gbp
    pricing.form.fillField(currencyDrop, 'dropdown',pricingData.lib.dropValue )
    pricing.form.getFieldValue(starterPlan).should('include',pricingData.lib.starterLib50yearly)
    pricing.form.getFieldValue(professionalPlan).should('include',pricingData.lib.professionalLib50yearly)
    pricing.form.getFieldValue(ultimatePlan).should('include',pricingData.lib.ultimateLib50yearly)

    //changing from gbp to eur
    pricing.form.fillField(currencyDrop, 'dropdown',pricingData.eur.dropValue )
    pricing.form.getFieldValue(starterPlan).should('include',pricingData.eur.starterEur50yearly)
    pricing.form.getFieldValue(professionalPlan).should('include',pricingData.eur.professionalEur50yearly)
    pricing.form.getFieldValue(ultimatePlan).should('include',pricingData.eur.ultimateEur50yearly)
  });
});
 