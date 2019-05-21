import React from 'reactn';
import renderer from 'react-test-renderer';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { NavigationBar } from ".";
import t from '../../utils/localization/Localization';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';


describe('Testing src/components/NavigationBar/index.tsx', () => {

    test('Button it renders', () => {
        // Before
        const wrapper = renderer.create(

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        );
        // Then
        let tree = wrapper.toJSON();
        // After
        expect(tree).toMatchSnapshot();
    });

    test('ReactFlagsSelect it renders', () => {
        // Before
        const wrapper = renderer.create(
            <div className="NavigationBar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">{t.title}</a>
                    <ReactFlagsSelect
                        onSelect={onLinkClick}
                        defaultCountry={t.getLanguage().toUpperCase()}
                        countries={["GB", "ES"]}
                        customLabels={{ "GB": "EN", "ES": "ES" }}
                     />
                </nav>
            </div>
        );
        // Then
        let tree = wrapper.toJSON();
        // After
        expect(tree).toMatchSnapshot();
    });

});

function onLinkClick(item: string) {
    let languageSelected = NavigationBar.prototype.global.currentLanguage;
    switch (item.toString()) {
        case "ES":
            languageSelected = "es";
            t.setLanguage("es")
            break;
        case "GB":
            languageSelected = "en";
            t.setLanguage("en")
            break;
    }
    NavigationBar.prototype.setGlobal({
        currentLanguage: languageSelected
    });


}


