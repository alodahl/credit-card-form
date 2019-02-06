/* eslint-env jest */
import { shallow, mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Form from "./CreditCardForm.js";

describe("<Form />", () => {
  it("Renders without crashing", () => {
    shallow(<Form />);
  });
  it("Shows correct text", () => {
    const wrapper = mount(<Form />);
    expect(wrapper.contains("Enter your credit card information")).toEqual(true);
  });
  it("'Submit' button responds to click event", () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <Form>
        <form>
            <button onButtonClick={mockCallBack} />
        </form>
      </Form>
    );
    wrapper
      .find("form")
      .find("button")
      .simulate("click");
    expect(mockCallBack.calledOnce).toBe.true;
  });
  // it("clears input values when 'Submit' button is clicked", async (done) => {
  //   const wrapper = mount(<Form />);
  //   const dummyForm = {
  //     name: "a",
  //     cardNumber: "",
  //     cvv2: "",
  //     expMonth: "",
  //     expYear: ""
  //   }
  //   try {
  //     await wrapper.setState({form: dummyForm});
  //     await wrapper.update();
  //     () => {
  //       expect(wrapper.find("#name").value).toEqual(dummyForm.name);
  //       done();
  //     }
  //   } catch(error) {
  //     console.error(error);
  //   }
  // });
  // it("clears input values when 'Submit' button is clicked", () => {
  //   const wrapper = mount(<Form />);
  // });
});
