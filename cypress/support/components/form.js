import {
    submitButton,
    errorAlert
  } from "../selectors/contact";
  
  class Form {
  
    getSubmitButton() {
      return cy.get(submitButton);
    }

    getField(selector) {
      return cy.get(selector);
    }

    getFieldValue(selector) {
      return cy.get(selector).invoke("text");
    }

    getErrorInput(){
      return cy.get(errorAlert).invoke("text");
    }
  
    fillField(selector, type, content) {
      const element = {
        text: () => {
          return cy.get(selector).click().clear().type(content);
        },
        dropdown: () => {
          return cy.get(selector).should("exist").select(content);
        }
      };
      return element[type]();
    }
  }
  
  export default Form;