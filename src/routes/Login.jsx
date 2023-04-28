import React, { useContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { AppContext } from "../App";
import { toast } from "react-hot-toast";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRoute } = useContext(AppContext);

  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // LOGS
        console.log(`[ Login ] Token: ${token}`);
        console.log(`[ Login ] User: ${JSON.stringify(user)}`, user);
      })
      .catch((error) => {
        // Handle Errors here.
        //const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const errorEmail = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // LOGS
        console.log(`[ LOGIN - GOOGLE ] Error: ${errorMessage}`, error);
        console.log(`[ LOGIN - GOOGLE ] Error mail: ${errorEmail}`);
        console.log(`[ LOGIN - GOOGLE ] Error credential: ${credential}`);
      });
  };

  const loginEmail = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success(`User ${email} successfully registered!`);
        setEmail("");
        setPassword("");
        setRoute("home");
        // LOG
        console.log(`[ LOGIN - EMAIL ] User: ${user}`, user);
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        // LOGS
        console.log(`[ LOGIN - EMAIL ] Error message: ${errorMessage}`, error);
        console.log(`[ LOGIN - EMAIL ] Error: `, error);
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="login">Welcome to login!</div>
      <div className="w-full flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold text-amber-400 leading-9 tracking-tigh">
            Register
          </h2>
        </div>
        {/* EMAIL */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginEmail}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* PASSWORD */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="I"
                    className="font-semibold text-red-400 hover:text-red-600"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <button
        className="py-2 px-4 rounded-full text-white bg-amber-200 shadow-md transition hover:bg-amber-600"
        onClick={() => loginGoogle()}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
