import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navv from './Navigation/Navv';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer/Footer';
import Copyright from './Copyright/copyright';
import logo from './logoo.png';
// var welcomemsg="hello";
function App() {
  return (
  
<>
<Navv></Navv>
<hr/>

<div  class="container">
<p id="po"> Bienvenue dans e-shop </p>

    <div class="topright ">
        <img src={logo} alt="logo" />
    </div>

        </div>
<h1> Form </h1> 

        <Form id="form2">

        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
       </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          <Button  id="saa" variant="outline-dark" type="submit">
            connect now! 
          </Button>
        </Form>
       
        <Footer></Footer>
        <Copyright></Copyright>
        </>
      );
    }

export default App;
  