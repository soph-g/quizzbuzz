import React from 'react';
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import TestUtils from 'react-addons-test-utils'

import Lobby from '../../../../web/static/js/components/lobby';

describe("Game", () => {
  const wrapper = shallow(<Lobby />);
  // const wrapper2 = mount(<Lobby />);
  //
  // wrapper2.setState({channel: "test"})

  it('Should give the user the single player option', () => {
    expect(wrapper.contains("Single Player")).to.be.true
  });

  it('Should give the user the multiplayer option', () => {
    expect(wrapper.contains("Multiplayer")).to.be.true
  });

  console.log(wrapper.debug())
  // console.log("________________________")
  // console.log(wrapper2.debug())

  // TODO - Would like to test that when clicked the buttons then render the game element.

})
