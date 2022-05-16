import Header from "../components/header.js";
import Form from "../components/form.js";


class Contact {
  constructor() {
    this.header = new Header();
    this.form = new Form();
    this.errors = {
      missingNameField:
        "Name is mandatory",
        missingEmailField:
        "Email is mandatory",
        missingCommentField:
        "Comment is mandatory",
    };
  }
  visit() {
    cy.visit("/contact.html")
  }
}

export default Contact;