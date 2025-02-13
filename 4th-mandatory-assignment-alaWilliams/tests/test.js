const puppeteer = require("puppeteer");
const browser = null;

describe("Week 5 tests", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8080");
  });

  describe("Task 1", () => {
    it("should have Task 1 completed text in the div with id task1", async () => {
      await page.waitForSelector("#task1");
      const task1 = await page.$eval("#task1", (el) => el.textContent);
      expect(task1).toBe("Task 1 Completed");
    });
  });

  describe("Task 2", () => {
    it("Should have input with id greeterName", async () => {
      await expect(page).toMatchElement("input#greeterName");
    });

    it("Should have button with id doGreet", async () => {
      await expect(page).toMatchElement("button#doGreet");
    });

    it("Should have div with id greetResult", async () => {
      await expect(page).toMatchElement("div#greetResult");
    });

    it("should show text 'Hello, ' and value from greeterName when button is clicked", async () => {
      await expect(page).toFill("input#greeterName", "John");
      await expect(page).toClick("button#doGreet");
      await expect(page).toMatchElement("div#greetResult", {
        text: "Hello, John",
      });
    });
  });

  describe("Task 3", () => {
    it("Should have 3 divs with class highlight", async () => {
      await expect(page).toMatchElement("div.highlight");
      const highlightDivs = await page.$$eval("div.highlight", (el) => el);
      expect(highlightDivs.length).toBe(3);
    });

    it("Should have text 'Click to highlight me' in each div", async () => {
      await expect(page).toMatchElement("div.highlight", {
        text: "Click to highlight me",
      });
    });

    it("Should change background color to yellow when div is clicked", async () => {
      await expect(page).toClick("div.highlight");
      await expect(page).toMatchElement("div.highlight");
      const highlightStyles = await page.$eval(
        "div.highlight",
        (el) => el.style.backgroundColor
      );
      expect(highlightStyles).toBe("yellow");
    });
  });

  describe("Task 4", () => {
    it("Should have input element with id calcInput1", async () => {
      await expect(page).toMatchElement("input#calcInput1");
    });

    it("Should have input element with id calcInput2", async () => {
      await expect(page).toMatchElement("input#calcInput2");
    });

    it("Should have button element with id calcButton", async () => {
      await expect(page).toMatchElement("button#calcButton");
    });

    it("Should have div element with id calcResult", async () => {
      await expect(page).toMatchElement("div#calcResult");
    });

    it("Should show the sum of the two input values in calcResult when the button is clicked", async () => {
      await expect(page).toFill("input#calcInput1", "5");
      await expect(page).toFill("input#calcInput2", "8");
      await expect(page).toClick("button#calcButton");
      await expect(page).toMatchElement("div#calcResult", { text: "13" });
    });
  });

  describe("Task 5", () => {
    it("Should have button with id hideButton", async () => {
      await expect(page).toMatchElement("button#hideButton");
    });

    it("Should have a button with id showButton", async () => {
      await expect(page).toMatchElement("button#showButton");
    });

    it("Should have a div with id hideShowResult initally hidden", async () => {
      await expect(page).toMatchElement("div#hideShowResult", {
        visible: false,
      });
    });

    it("Should have red background and size 100x100px in the hideShowResult div", async () => {
      await expect(page).toMatchElement("div#task5 div#hideShowResult");
      const hideShowResultStyles = await page.$eval(
        "div#task5 div#hideShowResult",
        (el) => {
          return {
            width: el.style.width,
            height: el.style.height,
            backgroundColor: el.style.backgroundColor,
          };
        }
      );
      expect(hideShowResultStyles).toHaveProperty("width", "100px");
      expect(hideShowResultStyles).toHaveProperty("height", "100px");
      expect(hideShowResultStyles).toHaveProperty("backgroundColor", "red");
    });

    it("Should show the div when the show button is clicked", async () => {
      await expect(page).toClick("button#showButton");
      await expect(page).toMatchElement("div#hideShowResult", {
        visible: true,
      });
    });

    it("Should hide the div when the hide button is clicked", async () => {
      await expect(page).toClick("button#hideButton");
      await expect(page).toMatchElement("div#hideShowResult", {
        visible: false,
      });
    });
  });
});
