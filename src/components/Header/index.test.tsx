import React from 'reactn';
import renderer from 'react-test-renderer';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css';

describe('Testing src/components/Header/.tsx', () => {

  test('Header it renders', () => {
    // Before
    const wrapper = renderer.create(
        <div className="Header">
        </div>
    );
    // Then
    let tree = wrapper.toJSON();
    // After
    expect(tree).toMatchSnapshot();
  });

});
