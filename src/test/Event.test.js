<<<<<<< HEAD
import React from 'react';
import Event from '../Event';
import { mockData } from '../mock-data';
import { shallow } from 'enzyme';

describe('<Event /> component', () => {
    
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test('render an event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('render a location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('render start date', () => {
        expect(EventWrapper.find('.start-date')).toHaveLength(1);
    });

    test('event details are collapsed by default', () => {
        expect(EventWrapper.state('collapsed')).toBe(true);
    });

    test('render details button', () => {
        expect(EventWrapper.find('.details-button')).toHaveLength(1);
    });

    test('render details when show details button is clicked', () => {
        EventWrapper.setState({ collapsed: true });
        EventWrapper.find('.details-button').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });

    test('hide details when button is clicked again', () => {
        EventWrapper.setState({ collapsed: false });
        EventWrapper.find('.hide-details').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    });
})
=======
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
>>>>>>> 35bba28c40bff285db1e83a3da5b1d5e764c6a2e
