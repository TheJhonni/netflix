import { useRef } from "react";
import { auth } from "../firebase";
import "./ScreenStyles/SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up!</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button onClick={signIn} type="submit">
          Sign in
        </button>

        <h4>
          <span className="signupscreen_span">New to Netflix?</span>
          <span onClick={register} className="signupscreen_link">
            Sign Up now!
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
