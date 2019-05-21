import React from 'reactn';
import renderer from 'react-test-renderer';
import 'bootstrap/dist/css/bootstrap.css';
import Content from './index';

describe('Testing src/components/Content/index', () => {

    test('Content it renders', () => {
        // Before
        const wrapper = renderer.create(
            <div className="Content">
                {Content.propTypes.body.children}
            </div>
        );
        // Then
        let tree = wrapper.toJSON();
        // After
        expect(tree).toMatchSnapshot();
    });
});




