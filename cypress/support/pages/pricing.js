import Form from "../components/form.js";


class Pricing {
  constructor() {
    this.form = new Form();
  }
  visit() {
    cy.visit("/pricing.html")
  }
}

export default Pricing;