import React from 'react';
import If from './If';
import { shallow } from 'enzyme';

it('renderiza corretamente', () => {
    const test = (
        <If test={true}>
            <span>Olá teste</span>
        </If>
    )
    expect(shallow(test)).toMatchSnapshot();
});

it('Renderiza corretamente sem o elemento filho', () => {
    const test = (
        <If test={false}>
            <span>Olá teste</span>
        </If>
    )
    expect(shallow(test)).toMatchSnapshot();
});