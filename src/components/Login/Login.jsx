import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import logo from '../Assets/sumagoinfotech.png';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post('http://localhost:3000/user/login', payload)
      .then((res) => {
        setLoading(false);
        toast('Login Successful');
        console.log('Login done', res);
        localStorage.setItem('token', JSON.stringify(res.data.token));
        navigate('/head');
      })
      .catch((err) => {
        toast('Invalid Credentials');
        console.log('Error while login', err);
        setLoading(false);
      });
  };

  const newaccount = () => {
    navigate('/newRegister');
  };

  return (
    <div>
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h1 className="mb-4">Welcome To Sumago Infotech</h1>
                <h5>Industrial Visit Management System</h5>
              </div>
            </div>
          </MDBCol>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src={logo}
                  style={{ width: '150px',marginLeft:'200px' }}
                  alt="logo"
                />
                <h4 className="mt-3 mb-5 pb-1 text-black fs-3">Sumago Infotech</h4>
              </div>

              <p >Please login to your account</p>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn
                  className="mb-4 w-100 gradient-custom-2"
                  onClick={handleLogin}
                >
                  Login
                </MDBBtn>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
                <a className="text-muted" href="#!" onClick={newaccount}>
                  Create New Account
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn outline className="mx-2" color="danger">
                  Danger
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
