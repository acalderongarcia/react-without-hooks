import * as React from 'reactn';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import Validate from '../../utils/validator/Validator';
import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from '../../utils/firebase';
import t from "../../utils/localization/Localization";

export interface Props {
    uiConfig: firebaseui.auth.Config,
}
export interface State {
    uiConfig: firebaseui.auth.Config,
    isSignedIn: boolean,
    firebaseToken: string
}

class Login extends React.Component<Props, State>{


    constructor(props: Props) {
        super(props);

        this.state = {
            isSignedIn: false,
            uiConfig: this.props.uiConfig,
            firebaseToken: ""
        };
    }

    componentWillMount() {
        this.setState({
            uiConfig: {
                signInFlow: "popup",
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.FacebookAuthProvider.PROVIDER_ID
                ]
            }
        })
    }



    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            if (this.state.isSignedIn) {
                const { currentUser } = firebase.auth();
                if (currentUser) {
                    // @ts-ignore
                    const accessToken = currentUser.toJSON()["stsTokenManager"]["accessToken"]
                    this.setState({ firebaseToken: accessToken })
                    console.log(this.state.firebaseToken)
                }
            }
        })
    }

    deleteAccount = () => {
        // @ts-ignore
        firebase.auth().currentUser.delete().catch((error) => {
            if (error.code === 'auth/requires-recent-login') {
                firebase.auth().signOut().then(() => {
                    setTimeout(() => {
                        alert('Please sign in again to delete your account.');
                    }, 1);
                });
            }
        });
    }

    // CAMBIAR:        
    // <Form.Group controlId="formBasicEmail">
    // <Form.Group controlId="formBasicPassword">
    // POR:
    // <Form.Group>
    // <Form.Group>
    render() {
        t.setLanguage(this.global.currentLanguage)
        return (
            <div>
                <div className="jumbotron firstSection text-center">
                    <h1 className="card-title h1 my-5">
                        {t.login}
                    </h1>
                    <Form>
                        <Form.Group>
                            <Form.Label className="blue-text my-3 font-weight-bold">{t.email}</Form.Label>
                            <Form.Control id="email" type="email" placeholder={t.placeHolderEmail} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="blue-text my-3 font-weight-bold">{t.password}</Form.Label>
                            <Form.Control id="password" type="password" placeholder={t.placeHolderPassword} required />
                        </Form.Group>
                        <Button onClick={onClickLink} type="button" className="pl-4 pr-4 btn mr-3 btn-blue waves-effect">
                            {t.login}
                        </Button>
                        <p></p>
                        {this.state.isSignedIn !== undefined && !this.state.isSignedIn &&
                            <StyledFirebaseAuth uiConfig={this.state.uiConfig} firebaseAuth={firebase.auth()} />
                        }
                        {this.state.isSignedIn &&
                            <div>
                                <Button type="button" onClick={() => firebase.auth().signOut()}>Sign-out</Button>
                                <Button type="button" onClick={this.deleteAccount}>Delete account</Button>
                            </div>
                        }
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;

function onClickLink() {
    Validate.emailResult = Validate.schemaEmail.validate((document.getElementById('email') as HTMLInputElement).value),
        Validate.passResult = Validate.schemaPass.validate((document.getElementById('password') as HTMLInputElement).value)

    if (Validate.emailResult.error) {
        (document.getElementById('email') as HTMLInputElement).value = '';
        alert(t.loginEmailError);
    }
    if (Validate.passResult.error) {
        (document.getElementById('password') as HTMLInputElement).value = '';
        alert(t.loginPassError);
    }
}
