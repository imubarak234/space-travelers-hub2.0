import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Naver from '../Components/Navbar';
import Footer from '../Components/Footer';
import RocketContainer from '../Components/Rockets/RocketContainer';
import MissionsContainer from '../Components/missions/MissionsContainer';
import ProfileContainer from '../Components/profiles/ProfileContainer';

describe('Series of tests rendering of each major components', () => {
  it('rendering of Navigation bar(Header) correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter to="/" className="navbar-brand">
          <Naver />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('rendering footer correctly', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rendering Rockets page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RocketContainer />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rendering Missions page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionsContainer />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rendering Profiles Page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProfileContainer />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
