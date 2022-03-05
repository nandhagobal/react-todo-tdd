import React from 'react';
import Todo from './Todo';

import {  shallow} from 'enzyme';
import {render, fireEvent} from '@testing-library/react'

describe("Basic rendering of todo",()=>{
    it("should render todo component",()=>{
        const todo=shallow(<Todo/>);
        const todoValue=todo.find(Text);
        expect(todoValue).toBeDefined();
    })
    
    it("should task value equal to empty",()=>{
        const {getByTestId} = render(<Todo/>);
        expect(getByTestId("taskField")).toHaveValue("");
    })
    it("should the taskList is empty",()=>{
        const component=shallow(<Todo/>);
        expect(component.find('.item')).toHaveLength(0);
    })
})

describe("Basic functionlity of todo app",()=>{
    it("should change the task state when input field value is changed",()=>{
        const {getByTestId}= render(<Todo/>);
        fireEvent.change(getByTestId("taskField"),{target: {value: 'take your key'}});
        expect(getByTestId("taskField").value).toBe("take your key");
    })
    it("should add the task when button is clicked",()=>{
        const {getByTestId}= render(<Todo/>);
        fireEvent.change(getByTestId("taskField"),{target: {value: 'take your key'}});
        fireEvent.click(getByTestId("addTask"));
        expect(getByTestId("count")).toHaveTextContent("1");
    })
    it("should remove the task from the tasklist when close symbol is clicked",async ()=>{
        const {findByTestId,getByTestId}=render(<Todo/>)
        fireEvent.change(getByTestId("taskField"),{target: {value: 'take your key'}});
        fireEvent.click(getByTestId("addTask"));
        fireEvent.click(getByTestId("0close"));
        expect(getByTestId("count")).toHaveTextContent("0");

    })
})