import Nav from 'react-bootstrap/Nav';
import './Navv.css';

function Navv() {
  return (
    <>
    <div id="navou">
       <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
         <Nav.Item>
           <Nav.Link href="/home"> Home  </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="link-1"> Contact   </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="link-2"> our product </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="Active" Active>
           Join us</Nav.Link>
         </Nav.Item>
       </Nav>
       <hr/>
       </div>
       </>
     );
   }
export default Navv ;