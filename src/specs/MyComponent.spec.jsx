import React from "react";
import MyComponent from "../components/MyComponent";

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


describe("MyComponent", function() {
  let count = 0;
  this.header(`## A Simple Component`); // Markdown.

  before(() => {
    // Runs when the Suite loads.  Use this to host your component-under-test.
    this.load( <MyComponent /> );
  });

  it("reload", () => {
    count += 1;
    this.load( <MyComponent color="red" text={`My Component ${ count }`} /> );
  });

  section("text", () => {
    it("increment", () => {
      count += 1;
      this.props({ text: `My Component ${ count }` });
    });
    it("long", () => { this.props({ text: LOREM }) });
  });

  section("color", () => {
    it("red", () => this.props({ color: "red" }));
    it("green", () => this.props({ color: "green" }));
    it("blue", () => this.props({ color: "blue" }));
    it("orange (error)", () => this.props({ color: "orange" }));
  });
});
