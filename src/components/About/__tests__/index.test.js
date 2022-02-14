import React from "react" ;
// import the react Testing Library
// jest creates a simulated DOM to "render" the component
// cleanup removes components from the DOM to avoid
// memory leaks
import {render, cleanup} from '@testing-library/react';
// jest-dom offers custom matchers that are used to test the DOM
import '@testing-library/jest-dom/extend-expect';

import About from '..';

// after each test cleanup the DOM
afterEach(cleanup);


describe('About component', ()=> {
    //renders about test
    // First test
    // could use test('renders' .....) also
    it('renders', ()=> {
        render(<About />);
    });

    // Second test
    it('matches snapshot DOM node structure', ()=> {
        // render about
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})

