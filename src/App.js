/*import React from "react"
import { NavLink as Link, Route, Routes } from "react-router-dom"
import LoginPage from "./protected/LoginPage"
import PrivateRoute from "./protected/PrivateRoute"
import ProtectedPage from "./protected/ProtectedPage"
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" activeClassName="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/object_route" activeClassName="active">
              Route as Object
            </Link>
          </li>
          <li>
            <Link to="/search" activeClassName="active">
              Search
            </Link>
          </li>
          <li>
            <Link to="/public" activeClassName="active">
              Public Page
            </Link>
          </li>
          <li>
            <Link to="/protected" activeClassName="active">
              Protected Page
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="public" element={<PublicPage />}></Route>
          <Route
            path="protected"
            element={
              <PrivateRoute>
                <ProtectedPage x={1} />
              </PrivateRoute>
            }
          ></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export const Home = () => {
  return <div>You are in Home page</div>
}
export const About = () => {
  return <div>This is the page where you put details about yourself</div>
}
export const PublicPage = () => {
  return <div>This page can be accessed by anyone</div>
}
export const NotFound = () => {
  return <div>This is a 404 page</div>
}

export default App*/

import React from 'react';

export default function App() {
  const [selected, setSelected] = React.useState('');

  const handleSelectionChange = (value) => {
    setSelected(value);
  };

  return (
    <div>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOptions value="social media">social media</RadioOptions>
        <RadioOptions value="friend">friend</RadioOptions>
      </RadioGroup>
    </div>
  );
}

export const RadioGroup = ({ onChange, selected, children }) => {
  const radioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });

  return <div className="RadioGroup">{radioOptions}</div>;
};

export const RadioOptions = ({ value, checked, onChange, children }) => {
  return (
    <div>
      <input
        type="radio"
        id={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};