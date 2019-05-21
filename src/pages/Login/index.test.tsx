import * as React from 'reactn';
import renderer from 'react-test-renderer';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import t from "../../utils/localization/Localization"
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from '../../utils/firebase';
import Validate from '../../utils/validator/Validator';
import firebaseui from 'firebaseui';

const deleteAccount = () => {
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

describe('Testing src/pages/Login/index.tsx', () => {

    test('Testing jumbotron firstSection text-center with isSignedIn = true', () => {
        // Before
        let isSignedIn = true;
        let uiConfig: firebaseui.auth.Config = {
            signInFlow: "popup",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ]
        }

        // CAMBIAR:        
        // <Form.Group controlId="formBasicEmail">
        // <Form.Group controlId="formBasicPassword">
        // POR:
        // <Form.Group>
        // <Form.Group>

        const wrapper = renderer.create(
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
                        {isSignedIn !== undefined && !isSignedIn &&
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        }
                        {isSignedIn &&
                            <div>
                                <Button type="button" onClick={() => firebase.auth().signOut()}>Sign-out</Button>
                                <Button type="button" onClick={deleteAccount}>Delete account</Button>
                            </div>
                        }
                    </Form>
                </div>
            </div>
        );
        // Then
        let tree = wrapper.toJSON();
        // After
        expect(tree).toMatchSnapshot();
    });

    test('Testing jumbotron firstSection text-center with isSignedIn = false', () => {
        // Before
        let isSignedIn = false;
        let uiConfig: firebaseui.auth.Config = {
            signInFlow: "popup",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ]
        }
        const wrapper = renderer.create(
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
                        {isSignedIn !== undefined && !isSignedIn &&
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        }
                        {isSignedIn &&
                            <div>
                                <Button type="button" onClick={() => firebase.auth().signOut()}>Sign-out</Button>
                                <Button type="button" onClick={deleteAccount}>Delete account</Button>
                            </div>
                        }
                    </Form>
                </div>
            </div>
        );
        // Then
        let tree = wrapper.toJSON();
        // After
        expect(tree).toMatchSnapshot();
    });

});

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

