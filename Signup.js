import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (firstname === 'firstname' && lastname=='lastname' && mobileno=='mobileno'&& password === 'password') {
      onSignup(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="signup">
        <fieldset>
          <h2>Signup Page</h2>
          {error && <p className="error">{error}</p>}
         <form onSubmit={handleSignup}>
           <div className="form1-group">
             <label>Firstname:</label>
             <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
            </div>
            <br></br>
            <div className="form2-group">
             <label>Lastname:</label>
             <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
            </div>
            <br></br>
            <div className="form3-group">
             <label>MobileNo:</label>
             <input type="text" value={mobileno} onChange={(e) => setMobileno(e.target.value)} required />
            </div>
            <br></br>
            
            <div className="form4-group">
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div><br></br>
            <button type="submit">Signup</button>
         </form>
             
        </fieldset>
    </div>
  );
};
export default Signup;
