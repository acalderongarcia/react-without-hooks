import React from 'reactn';
import menu from '../../utils/menu';
import { Link } from "react-router-dom";
import t from '../../utils/localization/Localization';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';



export class NavigationBar extends React.Component {

    public render() {

        return (
            <div className="NavigationBar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">{t.title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {
                                menu.map((m, key) => {
                                    return (
                                        <li className="nav-item active" key={key}>
                                            <a className="nav-link"><Link to={m.url}>{t.getString(m.title, t.getLanguage())}</Link></a>
                                        </li>)
                                })
                            }
                        </ul>
                    </div>
                    <ReactFlagsSelect
                        onSelect={this.onLinkClick}
                        defaultCountry={t.getLanguage().toUpperCase()}
                        countries={["GB", "ES"]}
                        customLabels={{ "GB": "EN", "ES": "ES" }}
                    />
                </nav>
            </div>

        );
    }

    public onLinkClick = (item: string): void => {
        let languageSelected = this.global.currentLanguage;
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
        this.setGlobal({
            currentLanguage: languageSelected
        });
    }
}
