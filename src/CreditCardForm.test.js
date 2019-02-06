/* eslint-env jest */
import { shallow, mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Form from "./CreditCardForm.js";

describe("<Form />", () => {
  it("Renders without crashing", () => {
    shallow(<Form />);
  });
  // it("Help page shows correct text", () => {
  //   const wrapper = mount(<Help />);
  //   expect(wrapper.contains("get some help")).toEqual(true);
  //   expect(
  //     wrapper.contains(
  //       "Use this form to get in contact with someone at Mentor Weekly. We are happy to help!"
  //     )
  //   ).toEqual(true);
  //   expect(wrapper.contains("please describe your issue here:")).toEqual(true);
  // });
  // it("contains the appropriate child components", () => {
  //   const wrapper = mount(<Help />);
  //   expect(wrapper.contains(<Dashboard />));
  //   expect(wrapper.contains(<Helpform />));
  //   expect(wrapper.contains(<UpdateProfileModal />));
  // });
  // it("contains deep child components", () => {
  //   const wrapper = mount(<Help />);
  //   expect(wrapper.contains(<Sidebar />));
  //   expect(wrapper.contains(<Navbar />));
  //   expect(wrapper.contains(<Button />));
  //   expect(wrapper.find("Navbar").length).toEqual(1);
  //   expect(wrapper.find("Navbar").find("button").length).toEqual(3);
  //   expect(wrapper.find("Sidebar").length).toEqual(1);
  //   expect(wrapper.find("Sidebar").find("button").length).toEqual(1);
  //   expect(wrapper.find("Sidebar").find("img").length).toEqual(1);
  //   expect(wrapper.find("Sidebar").contains("p"));
  //   expect(wrapper.find("button").length).toEqual(5);
  //   expect(wrapper.find("Helpform").find("input").length).toEqual(4);
  //   expect(wrapper.find("Helpform").find("textarea").length).toEqual(1);
  //   expect(wrapper.find("Helpform").find("p").length).toEqual(1);
  //   expect(wrapper.find("Helpform").find("form").length).toEqual(1);
  // });
  // it("only opens modal when 'update profile' button is clicked", () => {
  //   const wrapper = mount(<Help />);
  //   expect(wrapper.state("updateModalIsOpen")).toEqual(false);
  //   wrapper
  //     .find("Sidebar")
  //     .find("button")
  //     .simulate("click");
  //   expect(wrapper.state("updateModalIsOpen")).toEqual(true);
  // });
  // it("'send message' button responds to click event", () => {
  //   const mockCallBack = jest.fn();
  //   const wrapper = mount(
  //     <Help>
  //       <Helpform>
  //         <Button>
  //           <button onButtonClick={mockCallBack} />
  //         </Button>
  //       </Helpform>
  //     </Help>
  //   );
  //   wrapper
  //     .find("Helpform")
  //     .find("button")
  //     .simulate("click");
  //   expect(mockCallBack.calledOnce).toBe.true;
  // });
  // it("only sends form if all 5 fields have value", () => {
  //   const wrapper = mount(<Help />);
  //   const mockCallBack = jest.fn();
  //   const value = "Foobar";
  //   wrapper
  //     .find("Helpform")
  //     .find('input[type="text"]')
  //     .at(0)
  //     .instance().value = value;
  //   wrapper.find("Helpform").simulate("submit");
  //   expect(mockCallBack).not.toHaveBeenCalled;
  //   wrapper
  //     .find("Helpform")
  //     .find('input[type="text"]')
  //     .at(1).value = value;
  //   wrapper
  //     .find("Helpform")
  //     .find('input[type="text"]')
  //     .at(2).value = value;
  //   wrapper
  //     .find("Helpform")
  //     .find('input[type="text"]')
  //     .at(3).value = value;
  //   wrapper
  //     .find("Helpform")
  //     .find('input[type="text"]')
  //     .at(4).value = value;
  //   wrapper.find("Helpform").simulate("submit");
  //   expect(mockCallBack).toHaveBeenCalled;
  // });
});
