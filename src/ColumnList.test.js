import React from 'react';
import ColumnList from './ColumnList';
import { shallow, mount, render } from 'enzyme';

it('renderiza corretamente', () => {
    const addTask = jest.fn();
    expect(shallow(<ColumnList addTask={addTask} />)).toMatchSnapshot();
});

it('renderiza toda a arvore de component, Done', () => {
    const addTask = jest.fn();
    expect(render(<ColumnList title="Done" addTask={addTask} />)).toMatchSnapshot();
});

it('renderiza toda a arvore de component, To Do ', () => {
    const addTask = jest.fn();
    expect(render(<ColumnList title="To Do" addTask={addTask} />)).toMatchSnapshot();
});

it('ao submeter o formulário, chama o addTask', () => {
    const addTask = jest.fn();
    const test = mount(
        <ColumnList 
            title="To Do"
            addTask={addTask}
        />
    )
    test.find('form').simulate('submit')
    expect(addTask).toHaveBeenCalledTimes(1)
});

it('renderiza lista de elements', () => {

    const addTask = jest.fn();
    const items = [{id : 'a', title : 'a', status : 'To Do'}]
    const test = mount(
        <ColumnList 
            title="To Do"
            items={items}
            addTask={addTask}
        />
    )
    expect(test.find('li').length).toBe(1)

})



describe('Usuário interage com lista', () => {

    it('Usuário seleciona item na lista', () => {
        const addTask = jest.fn();
        const updateTask = jest.fn();
        const items = [{id : 'a', title : 'a', status : 'To Do'}]
        const test = mount(
            <ColumnList 
                title="To Do"
                items={items}
                addTask={addTask}
                updateTask={updateTask}
            />
        )
        test.find('li').find('input').simulate('change')
        expect(updateTask).toHaveBeenCalledTimes(1)
    })
        
})