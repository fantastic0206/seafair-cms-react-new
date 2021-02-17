import React from 'react';
// import TableWrapper from '../AntTables.styles';
import { Col, Row, Form } from "antd";
// import Scrollbars from "@iso/components/utility/customScrollBar";
import TableWrapper from "@iso/containers/Tables/AntTables/AntTables.styles";
import Input, { InputGroup, Textarea } from "@iso/components/uielements/input";
import { DatePicker } from 'antd';
import moment from "moment";
import {
  Fieldset,
  // Form,
  Label, 
} from "../../Asset/Facility/OnlineContent.styles";


const rowStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "row wrap",
};
const colStyle = {
  marginBottom: "16px",
};
const gutter = 16;

export default function(props) {   
   const [dueDate, setDueDate] = React.useState(null);

  return (
    <div className="PageContent">
      <Row style={rowStyle} gutter={gutter} justify="start">
           <Col md={24} sm={24} xs={24} style={colStyle}>
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={20} sm={20} xs={20} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Name of Person Reporting the Non-Conformity:</Label>
                      <Input                      
                        placeholder=""
                        // value={drillCategoryName}
                        // onChange={() => {
                        //   setDrillCategoryModalActive(true);
                        // }}
                       
                      />                     
                  </Fieldset>
                </Form>
              </Col>
              <Col md={4} sm={4} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Date of Report</Label>                   
                   <DatePicker  value={dueDate!=null?moment(dueDate,'YYYY-MM-DD HH:mm:ss'):""}   />
                  </Fieldset>
                </Form>
              </Col>
             
            </Row>
            <Row style={rowStyle} gutter={10} justify="start">
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Department/Vessel</Label>                 
                      <Input
                        // value={drillTypeName}
                        placeholder=""
                        
                      />                      
                  </Fieldset>
                </Form>
              </Col>
            </Row>
            <div  style={{
                    borderBottom: '1px solid #E9E9E9',
                    paddingBottom: '5px',
                    marginBottom:'10px'
                  }}>
            </div>           
            <Row style={rowStyle} gutter={gutter} justify="start">             
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>State the nature of the non-conformity:</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}
                          rows={4}
                          // value={strDescription}
                          //  onChange={(event)=>{setStrDescription(event.target.value)}}                               
                        />     
                  </Fieldset>
                </Form>
              </Col>
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>What part of the ISM does this non-conformity refer to?</Label>
                    <Input                      
                        placeholder=""
                        // value={drillCategoryName}
                        // onChange={() => {
                        //   setDrillCategoryModalActive(true);
                        // }}                       
                      />     
                  </Fieldset>
                </Form>
              </Col>
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>What part of the SMS does this refer to?</Label>
                    <Input                      
                        placeholder=""
                        // value={drillCategoryName}
                        // onChange={() => {
                        //   setDrillCategoryModalActive(true);
                        // }}                       
                      />     
                  </Fieldset>
                </Form>
              </Col>
              </Row>
              <div  style={{
                    borderBottom: '1px solid #E9E9E9',
                    paddingBottom: '5px',
                    marginBottom:'10px'
                  }}>
            </div>
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>What is the proposed corrective action(s):</Label>
                    <Input                      
                        placeholder=""
                        // value={drillCategoryName}
                        // onChange={() => {
                        //   setDrillCategoryModalActive(true);
                        // }}                       
                      />                    
                       </Fieldset>
                </Form>
              </Col>
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Immediate Action(s):</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}
                          rows={3}
                          // value={strDescription}
                          //  onChange={(event)=>{setStrDescription(event.target.value)}}                               
                        />   
                  </Fieldset>
                </Form>
              </Col>   
              </Row>
              <div  style={{
                    borderBottom: '1px solid #E9E9E9',
                    paddingBottom: '5px',
                    marginBottom:'10px'
                  }}>
            </div>
            <Row style={rowStyle} gutter={gutter} justify="start">             
              <Col md={20} sm={20} xs={20} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Name(s) of Person(s) to Correct the Non-Conformity:</Label>
                    <Input                      
                        placeholder=""
                        // value={drillCategoryName}
                        // onChange={() => {
                        //   setDrillCategoryModalActive(true);
                        // }}                       
                      />   
                  </Fieldset>
                </Form>
              </Col>
              <Col md={4} sm={4} xs={4} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Date for Competion:</Label>
                    <DatePicker  value={dueDate!=null?moment(dueDate,'YYYY-MM-DD HH:mm:ss'):""}/> 
                  </Fieldset>
                </Form>
              </Col>              
              </Row>
              <div  style={{
                    borderBottom: '1px solid #E9E9E9',
                    paddingBottom: '5px',
                    marginBottom:'10px'
                  }}>
            </div>
            <Row style={rowStyle} gutter={gutter} justify="start">             
              <Col md={20} sm={20} xs={20} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Further Action(s):</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}
                          rows={3}
                          // value={strDescription}
                          //  onChange={(event)=>{setStrDescription(event.target.value)}}                               
                        />   
                  </Fieldset>
                </Form>
              </Col>
              </Row>
              <div  style={{
                    borderBottom: '1px solid #E9E9E9',
                    paddingBottom: '5px',
                    marginBottom:'10px'
                  }}>
            </div>
              <Row style={rowStyle} gutter={gutter} justify="start">             
              <Col md={20} sm={20} xs={20} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Name of Person to Correct the Non-Conformity:</Label>
                    <Input                      
                        placeholder=""
                        // value={drillCategoryName}
                        // onChange={() => {
                        //   setDrillCategoryModalActive(true);
                        // }}                       
                      />   
                  </Fieldset>
                </Form>
              </Col>
              <Col md={4} sm={4} xs={4} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Date for Competion:</Label>
                    <DatePicker  value={dueDate!=null?moment(dueDate,'YYYY-MM-DD HH:mm:ss'):""}/> 
                  </Fieldset>
                </Form>
              </Col>              
              </Row>
              <div  style={{
                    borderBottom: '1px solid #E9E9E9',
                    paddingBottom: '5px',
                    marginBottom:'10px'
                  }}>
            </div>
            <Row style={rowStyle} gutter={gutter} justify="start">             
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Verification of Corrective Action:</Label>
                    <Input                      
                        placeholder=""
                        // value={drillCategoryName}
                        // onChange={() => {
                        //   setDrillCategoryModalActive(true);
                        // }}                       
                      />   
                  </Fieldset>
                </Form>
              </Col>
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Follow Up Details(Explain how the corrective action was verified.):</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}
                          rows={3}
                          // value={strDescription}
                          //  onChange={(event)=>{setStrDescription(event.target.value)}}                               
                        />   
                  </Fieldset>
                </Form>
              </Col>   
              <Col md={24} sm={24} xs={24} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Corrective Action(s) Closed Out:</Label>
                    <Input                      
                        placeholder=""
                        // value={drillCategoryName}
                        // onChange={() => {
                        //   setDrillCategoryModalActive(true);
                        // }}                       
                      />   
                  </Fieldset>
                </Form>
              </Col>
              </Row>

           </Col>
          </Row>
  </div>
  );
}
