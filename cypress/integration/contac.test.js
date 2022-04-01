import Contact from "../support/pages/contact";
import userData from "../fixtures/formData.json"
import {
  nameInput,
  phoneInput,
  emailInput,
  arrivalInput,
  commentTextArea,
  guestsInput,
  startDate,
  endDate,
  datePickerNextMonth
} from "../support/selectors/contact";
const contact= new Contact();

context('Lodgify contact page', () => {
  beforeEach(() => {
    contact.visit()
  });
  it('Should have the right title', () => {
      cy.title().should('include', 'Contact');
  });
  it('Should validate missing field', () => {
   cy.intercept({ method: "GET", url: "https://i.icdbcdn.com/oh/*" }).as("api_load");
   cy.wait("@api_load").then(xhr => {
    //nameInput
    contact.form.getField(nameInput).click();
    contact.form.getSubmitButton().click().should("have.class", "ui circular disabled right floated button");
    contact.form.getErrorInput().should('include',contact.errors.missingNameField);
    contact.form.fillField(nameInput,'text',userData.name);
    contact.form.getSubmitButton().should("have.class", "ui circular right floated button");

    //emailInput
    contact.form.getField(emailInput).click();
    contact.form.getSubmitButton().click().should("have.class", "ui circular disabled right floated button");
    contact.form.getErrorInput().should('include',contact.errors.missingEmailField);
    contact.form.fillField(emailInput,'text',userData.email);
    contact.form.getSubmitButton().should("have.class", "ui circular right floated button");

   //commentInput
   contact.form.getField(commentTextArea).click();
   contact.form.getSubmitButton().click().should("have.class", "ui circular disabled right floated button");
   contact.form.getErrorInput().should('include',contact.errors.missingCommentField);
   contact.form.fillField(commentTextArea,'text',userData.comment);
   contact.form.getSubmitButton().should("have.class", "ui circular right floated button");
   });
  });

  it('Should submit valid contact info', () => {
   //nameInput
   contact.form.getField(nameInput).click();
   contact.form.fillField(nameInput,'text',userData.name);

   //emailInput
   contact.form.getField(emailInput).click();
   contact.form.fillField(emailInput,'text',userData.email);

   //commentInput
   contact.form.getField(commentTextArea).click();
   contact.form.fillField(commentTextArea,'text',userData.comment);

   //phoneInput
   contact.form.getField(phoneInput).click();
   contact.form.fillField(phoneInput,'text',userData.phone);

   //guestsInput
   contact.form.getField(guestsInput).click();
   contact.form.fillField(guestsInput,'text',userData.guests);

   //datePicker
   contact.form.getField(arrivalInput).click();
   contact.form.getField(startDate).click();
   contact.form.getField(datePickerNextMonth).click().click();
   contact.form.getField(endDate).click();
   contact.form.getSubmitButton().click();
  });

})