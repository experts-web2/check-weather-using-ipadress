import React from "react";
import { render } from "@testing-library/react";
import Result from "../components/Result";

describe("Result component", () => {
  const sunlightInfo = {
    sunrise: "6:00 AM",
    sunset: "6:00 PM",
  };

  const locationInfo = {
    location: {
      country: { name: "Country" },
      region: { name: "Region" },
      city: { name: "City" },
    },
  };

  it("should render sunlight duration information", () => {
    const { getByText } = render(
      <Result sunlightInfo={sunlightInfo} locationInfo={locationInfo} />
    );

    const sunriseElement = getByText("6:00 AM");
    console.log("sunriseElement",sunriseElement)
    expect(sunriseElement).toBeInTheDocument();

    const sunsetElement = getByText("6:00 PM");
    expect(sunsetElement).toBeInTheDocument();

  });
});
