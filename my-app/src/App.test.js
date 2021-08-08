import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';
import App from './App';
import ReactDOM from 'react-dom'

it('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp/>, div);
  ReactDOM.unmountComponentAtNode(div)
});
