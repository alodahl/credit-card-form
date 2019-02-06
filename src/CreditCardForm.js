import React, { Component } from 'react';
import "./CreditCardForm.css";
import CreditCardsPhoto from "./visa-amex.png";

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        cardNumber: "",
        cvv2: "",
        expMonth: "",
        expYear: ""
      },
      feedback: {
        name: "",
        cardNumber: "",
        cvv2: "",
        expMonth: "",
        expYear: ""
      },
      submitEnabled: false,
    }
  }

  validateForm() {
    let name = this.state.form.name.length > 0;
    let cardNumber = this.state.form.cardNumber.length > 14;
    let cvv2 = this.state.form.cvv2.length > 2;
    let expMonth = this.state.form.expMonth.length > 1;
    let expYear = this.state.form.expYear.length > 1;
    let validated = name && cardNumber && cvv2 && expMonth && expYear;
    if (validated) {
      this.setState({ submitEnabled: true});
    } else {
      this.setState({ submitEnabled: false});
    }
  }

  validateTypeOnBlur(e, type) {
    e.preventDefault();
    let form = this.state.form;
    let feedback = this.state.feedback;
    let card = this.getCardRules(form.cardNumber) || undefined;

    switch (type) {
      case "name":
        if (form.name.length < 1) {
          feedback[type] = "Enter the name on your card.";
        } else {
          feedback[type] = "";
        }
        break;
      case "cardNumber":
        let number = form.cardNumber;
          if (number.length !== card.characters) {
            feedback[type] = card.feedback;
          } else {
            feedback[type] = "";
          }
          number = card.number(number);
          form.cardNumber = number;
          console.log("formatted number", form.cardNumber);
          this.setState({form: form});
        break;
      case "cvv2":
        if (form.cvv2.length !== card.cvv2 ) {
          feedback[type] = `Enter your ${card.cvv2}-digit CVV2`;
        } else {
          feedback[type] = "";
        }
        break;
      case "expMonth":
        if (form.expMonth.length < 2) {
          feedback[type] = "Enter the 2-digit month";
        } else {
          feedback[type] = "";
        }
        break;
      case "expYear":
        if (form.expYear.length < 2) {
          feedback[type] = "Enter the 2-digit year";
        } else {
          feedback[type] = "";
        }
        break;
      default:
        break;
    }
    this.setState({feedback: feedback});
  }

  getCardRules(cardNumber){
    let card = {};
    if(cardNumber[0]==="4"){
      card.type = "Visa";
      card.cvv2 = 3;
      card.characters= 19;
      card.feedback = "Enter your 16-digit card number";
      card.number = (num) => {
        let formattedNum = num.replace(/ /g,'');
        return formattedNum.slice(0,4)+" "+formattedNum.slice(4,8)+" "+formattedNum.slice(8,12)+" "+formattedNum.slice(12,16);
      }
      console.log(card.number);
    } else if(cardNumber[0]+cardNumber[1]==="34" || cardNumber[0]+cardNumber[1]==="37"){
      card.type = "AmEx";
      card.cvv2 = 4;
      card.characters= 17;
      card.feedback = "Enter your 15-digit card number";
      card.number = (num) => {
        let formattedNum = num.replace(/ /g,'');
        return formattedNum.slice(0,4)+" "+formattedNum.slice(4,10)+" "+formattedNum.slice(10,15);
      }
      console.log(card.number);
    } else {
      card.type = "other";
      card.cvv2 = 3;
      card.characters= 19;
      card.feedback = "Enter your full card number";
      card.number = (num) => cardNumber.replace(/ /g,'');
    }
    return card;
  }

  handleInput(e, field) {
    e.preventDefault();
    let input = e.target.value;
    let newForm = this.state.form;
    let card = this.getCardRules(newForm.cardNumber);

    switch (field) {
      case "cardNumber":
          let numbersOnly = input.replace(/[^.0-9\s]/g, '');
          newForm[field] = numbersOnly.slice(0, card.characters);
        break;
      case "cvv2":
        newForm[field] = input.slice(0, card.cvv2);
        break;
      case "expMonth":
      case "expYear":
        newForm[field] = input.slice(0, 2);
        break;
      default:
        newForm[field] = input;
    }
    this.setState({ newForm });
    this.validateForm();
  }

  handleSubmit(e) {
    e.preventDefault();
    //make an AJAX call with this.state.form as the data.
    this.setState({ form: {
      name: "",
      cardNumber: "",
      cvv2: "",
      expMonth: "",
      expYear: ""
    } });
  }

  handleClose(e){
    e.preventDefault();
    this.setState({ messageStatus: undefined });
  }

  render() {
    return (
      <div className="credit-card-form">
        <form>
          {this.state.messageStatus ? this.displayMessageStatus(): null}
          <div className="form-header-div">
            <h2 className="form-header">
              Enter your credit card information
            </h2>
          </div>
          <div className="form-inputs-div">
            <div className="form-input-wrapper">
              <input
                placeholder="Cardholder Name"
                aria-label="Cardholder Name"
                type="text"
                name="name"
                id="name"
                className="block form-input"
                value={this.state.form.name}
                onChange={(e) => this.handleInput(e, "name")}
                onBlur={(e)=> this.validateTypeOnBlur(e, "name")}
              />
              <div className="validation-feedback">{this.state.feedback.name}</div>
            </div>
            <div className="form-input-wrapper">
              <input
                placeholder="Credit Card Number"
                aria-label="Credit Card Number"
                type="text"
                name="cardNumber"
                id="cardNumber"
                className="block form-input"
                value={this.state.form.cardNumber}
                onChange={(e) => this.handleInput(e, "cardNumber")}
                onBlur={(e)=> this.validateTypeOnBlur(e, "cardNumber")}
              />
              <div className="validation-feedback">{this.state.feedback.cardNumber}</div>
            </div>
            <div className="form-input-wrapper">
              <input
                placeholder="CVV2"
                aria-label="C v v 2"
                type="number"
                name="cvv2"
                id="cvv2"
                className="block form-input"
                value={this.state.form.cvv2}
                onChange={(e) => this.handleInput(e, "cvv2")}
                onBlur={(e)=> this.validateTypeOnBlur(e, "cvv2")}
                maxLength="3"
              />
              <div className="validation-feedback">{this.state.feedback.cvv2}</div>
            </div>
            <div className="form-input-wrapper form-input--left inline">
              <input
                placeholder="Exp. Month"
                aria-label="Expiration Month"
                type="number"
                name="expMonth"
                id="expMonth"
                className="form-input inline"
                value={this.state.form.expMonth}
                onChange={(e) => this.handleInput(e, "expMonth")}
                onBlur={(e)=> this.validateTypeOnBlur(e, "expMonth")}
                maxLength="2"
              />
              <div className="validation-feedback">{this.state.feedback.expMonth}</div>
            </div>
            <div className="form-input-wrapper form-input--right inline">
              <input
                placeholder="Exp. Year"
                aria-label="Expiration Year"
                type="number"
                name="expYear"
                id="expYear"
                className="form-input inline"
                value={this.state.form.expYear}
                onChange={(e) => this.handleInput(e, "expYear")}
                onBlur={(e)=> this.validateTypeOnBlur(e, "expYear")}

                maxLength="2"
              />
              <div className="validation-feedback">{this.state.feedback.expYear}</div>
            </div>
            <img className="credit-card-photo" src={CreditCardsPhoto} alt="Visa and Mastercard Accepted"/>
          </div>
          <button className="submit-button" type="submit" onClick={(e)=>this.handleSubmit(e)} disabled={!this.state.submitEnabled}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreditCardForm;
