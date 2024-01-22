import React from 'react';
import { createRoot } from 'react-dom/client';
// import NumberBaseballClass from './NumberBaseballClass';
import RenderTest from './RenderTest';

const container = document.querySelector('#root');
const root = createRoot(container);
// root.render(<NumberBaseballClass />);

root.render(<RenderTest />);
