import { Link } from 'react-router-dom';


function Home() {
     return (
       <div style={{ padding: '20px' }}>
         <h1>Welcome to Our Company</h1>
         
         <p>We are dedicated to delivering excellence in all our services.</p>
         <nav>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
       </div>
     );
   }

   export default Home;