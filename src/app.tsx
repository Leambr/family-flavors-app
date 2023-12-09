import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './design-system/styles/variables/typography.css';
import './design-system/styles/variables/colors.css';
import './design-system/styles/variables/spaces.css';
import './design-system/styles/reset.global.css';

// App Component
const App = () => (
    <div>
        <h1>Hello, test to see if esbuild workhfhs oui ça marche trop biennnnn</h1>
        <p>Test</p>
        <p>Ca marche encore</p>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
