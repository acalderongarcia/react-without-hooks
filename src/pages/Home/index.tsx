import React  from 'reactn';
import Button from "@material-ui/core/Button";
import reduxLogo from "../../assets/images/reduxLogo.png";
import downloadApple from "../../assets/images/downloadApple.png";
import googlePlay from "../../assets/images/googlePlay.png";
import t from "../../utils/localization/Localization"


class Home extends React.Component{

    render(){
        t.setLanguage(this.global.currentLanguage)

        return(
            <div className="Home">
                <div className="jumbotron firstSection text-center">
                    <img className="logo" alt="Redux thunk explanation" />
                    <h1 className="card-title h1 my-5">
                        Lorem
                    </h1>

                    <p className="blue-text my-3 font-weight-bold">
                        Switch from home page and use Redux to call a fun API
                    </p>

                    <div className="row d-flex justify-content-center">
                        <div className="col-7 pb-2">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="pt-2">
                        <Button type="button" className="pl-4 pr-4 btn mr-3 btn-blue waves-effect">{t.login}</Button>
                        <Button type="button" className="pl-4 pr-4 btn btn-outline-primary waves-effect">Info</Button>
                    </div>
                </div>
                <div className="jumbotron secondSection text-center">
                    <img className="logo" src={reduxLogo} alt="Redux logo" />
                    <h1 className="card-title h1 my-5">
                        {t.download}
                    </h1>

                    <p className="blue-text my-3 font-weight-bold">
                        {t.links}
                    </p>

                    <div className="row d-flex justify-content-center">
                        <div className="col-7 pb-2">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <a href="https://www.apple.com/ios/app-store/">
                        <img className="downloadApple mr-2" src={downloadApple} alt="link to download from Apple Store"/>
                    </a>

                    <a href="https://play.google.com/store">
                        <img className="downloadApple" src={googlePlay} alt="link to download from google Store"/>
                    </a>

                </div>
            </div>
        );
    }
}

export default Home;
