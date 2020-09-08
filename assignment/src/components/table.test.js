import {configure,shallow,mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmployeeTable from './table'
import React from 'react'

configure({adapter:new Adapter()})
let wrapper;
describe("testing table component",()=>{
    beforeEach(()=>{ wrapper=shallow(<EmployeeTable/>) })

    it ('should display table ',()=>{
  expect( wrapper.find('table').exists()).toBe(true)
    })
    it ('should display table headings',()=>{
        expect( wrapper.find('#Name').text()).toBe("Name")
        expect( wrapper.find('#Job').text()).toBe("Job")
        expect( wrapper.find('#Remove').text()).toBe("Remove")
          })
    it('console',()=>{
        console.log(wrapper.debug())
    })
    it('should run click handler for remove button ',()=>{
        const deleteName = jest.fn();
        wrapper=shallow(<EmployeeTable click={deleteName}/>)
        wrapper.find("EmployeeTableContent").first().dive().find('button').simulate("click");
        expect(deleteName).toBeTruthy();
    })
    it('should update state when removed',()=>{
        const deleteName = jest.fn();
        wrapper=shallow(<EmployeeTable click={deleteName}/>)
        wrapper.find("EmployeeTableContent").first().dive().find('button').simulate("click");
        expect(deleteName).toBeTruthy();
    })
})