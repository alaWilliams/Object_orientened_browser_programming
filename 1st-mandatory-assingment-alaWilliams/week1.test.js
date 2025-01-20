const week1 = require("./week1");

/* Create test cases for the functions in week1.js by using jest */
describe("calculator", () => {
  test("add with positive values", () => {
    expect(week1.calculator(1, 2, "+")).toBe(3);
  });
  test("add with negative values", () => {
    expect(week1.calculator(-1, -2, "+")).toBe(-3);
  });
  test("add with positive and negative values", () => {
    expect(week1.calculator(1, -2, "+")).toBe(-1);
  });

  test("subtract with positive values", () => {
    expect(week1.calculator(1, 2, "-")).toBe(-1);
  });
  test("subtract with negative values", () => {
    expect(week1.calculator(-1, -2, "-")).toBe(1);
  });
  test("subtract with positive and negative values", () => {
    expect(week1.calculator(1, -2, "-")).toBe(3);
  });

  test("multiply with small numbers", () => {
    expect(week1.calculator(1, 2, "*")).toBe(2);
  });
  test("multiply with large numbers", () => {
    expect(week1.calculator(100, 200, "*")).toBe(20000);
  });
  test("multiply with negative numbers", () => {
    expect(week1.calculator(-1, -2, "*")).toBe(2);
  });
  test("multiply with positive and negative numbers", () => {
    expect(week1.calculator(1, -2, "*")).toBe(-2);
  });

  test("divide with small numbers", () => {
    expect(week1.calculator(1, 2, "/")).toBe(0.5);
  });
  test("divide with large numbers", () => {
    expect(week1.calculator(6412122, 5563, "/")).toBe(
      1152.6374258493618551141470429624
    );
  });
});

describe("createPerson", () => {
  test("create an adult person", () => {
    expect(week1.createPerson("John", "Doe", 30)).toEqual({
      name: "John",
      surname: "Doe",
      age: 30,
      fullName: "John Doe",
      isAdult: true,
    });
  });
  test("create a minor person", () => {
    expect(week1.createPerson("Jane", "Doe", 15)).toEqual({
      name: "Jane",
      surname: "Doe",
      age: 15,
      fullName: "Jane Doe",
      isAdult: false,
    });
  });
});

describe("personToString", () => {
  test("person to string with an adult", () => {
    expect(
      week1.personToString({
        name: "John",
        surname: "Doe",
        age: 30,
        fullName: "John Doe",
        isAdult: true,
      })
    ).toBe("The person John, Doe is 30 years old, and is an adult");
  });

  test("person to string with a minor", () => {
    expect(
      week1.personToString({
        name: "Jane",
        surname: "Doe",
        age: 15,
        fullName: "Jane Doe",
        isAdult: false,
      })
    ).toBe("The person Jane, Doe is 15 years old, and is an minor");
  });
});

describe("cityNameAndPopulationToString", () => {
  test("city name and population to string", () => {
    const amsterdam = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };
    expect(week1.cityNameAndPopulationToString(amsterdam)).toBe(
      "Amsterdam has a population of 821000"
    );
  });
});

describe("isCapital", () => {
  test("is capital true", () => {
    const amsterdam = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };

    expect(week1.isCapital(amsterdam)).toBe(true);
  });

  test("is capital false", () => {
    const philadelphia = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };

    expect(week1.isCapital(philadelphia)).toBe(false);
  });
});

describe("getCountryName", () => {
  test("get country name", () => {
    const amsterdam = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };

    expect(week1.getCountryName(amsterdam)).toBe("Netherlands");
  });
});

describe("getLargerPopulation", () => {
  test("get larger population", () => {
    const amsterdam = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };

    const philadelphia = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };

    expect(week1.getLargerPopulation(amsterdam, philadelphia)).toBe(
      philadelphia
    );
  });

  test("get larger population with opposite order of parameters", () => {
    const amsterdam = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };

    const philadelphia = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };

    expect(week1.getLargerPopulation(philadelphia, amsterdam)).toBe(
      philadelphia
    );
  });
});

describe("getLargerPopulationString", () => {
  test("get larger population string", () => {
    const amsterdam = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };

    const philadelphia = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };

    expect(week1.getLargerPopulationString(amsterdam, philadelphia)).toBe(
      "Philadelphia has larger population than Amsterdam"
    );
  });

  test("get larger population string with opposite order of parameters", () => {
    const amsterdam = {
      name: "Amsterdam",
      population: 821000,
      isCapital: true,
      country: "Netherlands",
    };

    const philadelphia = {
      name: "Philadelphia",
      population: 1576000,
      isCapital: false,
      country: "USA",
    };

    expect(week1.getLargerPopulationString(philadelphia, amsterdam)).toBe(
      "Philadelphia has larger population than Amsterdam"
    );
  });
});
