import {configure,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Person from './Person'
import React from 'react'

configure({adapter:new Adapter()})
describe("testing Person component",()=>{

   it ('should contain login if not authenticated',()=>{
       const wrapper=shallow(<Person/>)
       expect(wrapper.find("h6").text()).toBe("login")
   })

   it('props',()=>{
       const wrapper=shallow(<Person />)
       wrapper.setProps({name:'neha', age:20})
       
     expect(wrapper.find('h4').text()).toBe("I'm neha and i am 20!!")
   })
})
