import {configure,shallow,mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmployeeForm from './form'
import React from 'react'

configure({adapter:new Adapter()})

let wrapper;
describe('testing for form',()=>{
    beforeEach(()=>{ wrapper=shallow(<EmployeeForm/>) })
it ('testing for input fields',()=>{
    expect(wrapper.find('input')).toHaveLength(2)
})
it('Add button is rendered',()=>{
    expect(wrapper.find('button').exists()).toBe(true)
})
it('on change of value in the field name and job, the state of that field in the component should be updated',()=>{

    wrapper.find('#name').simulate('change',{target:{ id:"name",value:'neha'}})
    expect(wrapper.find('#name').prop('value')).toBe('neha')

    wrapper.find('#job').simulate('change',{target:{id:"job",value:"trainee"}})
    expect(wrapper.find('#job').prop('value')).toBe("trainee")
})
it("should run click handler on click", () => {
    const changeName = jest.fn();
    wrapper=shallow(<EmployeeForm addEmp={changeName}/>)
    wrapper.find("button").simulate("click");
    expect(changeName).toBeTruthy();
  });


})