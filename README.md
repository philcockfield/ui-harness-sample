# UIHarness Sample
A "getting started" project employing the [UIHarness](http://www.uiharness.com/) to develop React components.


## Install and Start

    npm install
    npm start

Point your browser at [http://localhost:3030](http://localhost:3030).


![Screenshot](https://cloud.githubusercontent.com/assets/185555/12281176/be80e442-b9f8-11e5-9991-6b678bbc067f.png)

This screen is produced by a simple `describe` block that looks like this:

```js

describe("MyComponent", function() {
  let count = 0;
  this.header(`## A Simple Component`); // Markdown.

  before(() => {
    // Runs when the Suite loads.  Use this to host your component-under-test.
    this.load( <MyComponent color="red"/> );
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
  });
});


```


---
### License: MIT
