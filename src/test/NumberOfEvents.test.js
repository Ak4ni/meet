<<<<<<< HEAD
import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<EventList /> component", () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("render an event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render the location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("render the summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  //button area

  test("render the show details button", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });

  test("open details when the button is clicked", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("hide details when the button is clicked", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".hide-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("When the details button is clicked, the state will change from true to false", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".details-button").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("After the details button is clicked, the state will change from false to true", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".details-button").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
=======
import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(numberOfEvents);
  });
})
>>>>>>> 35bba28c40bff285db1e83a3da5b1d5e764c6a2e
