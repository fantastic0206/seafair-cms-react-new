import React from 'react';
// import TableWrapper from '../AntTables.styles';
import { Col, Row, Form } from "antd";
// import Scrollbars from "@iso/components/utility/customScrollBar";
// import TableWrapper from "@iso/containers/Tables/AntTables/AntTables.styles";
import Input, { InputGroup, Textarea } from "@iso/components/uielements/input";
import {
  Fieldset,
  // Form,
  Label, 
} from "../../Asset/Facility/OnlineContent.styles";
import { DatePicker } from 'antd';
import moment from "moment";
// import addDoubleImg from '../../../../assets/images/new-group-inner-list.png';
// import newAddImg from '../../../assets/images/new-inner-list.png';

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
  const [data, setData] = React.useState([]);
  const [dueDate,setDueDate]=React.useState(null);
   return (
    <div className="isoInvoiceTable">
      <div className="PageContent">
         <Row style={rowStyle} gutter={gutter} justify="start">
           <Col md={24} sm={24} xs={24} style={colStyle}>
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={8} sm={8} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Internal SMS Audit Report</Label>
                      <Input
                        label="Set Offline By User"
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
                    <Label>Date</Label>                   
                   <DatePicker  value={dueDate!=null?moment(dueDate,'YYYY-MM-DD HH:mm:ss'):""}   />
                  </Fieldset>
                </Form>
              </Col>
              <Col md={6} sm={6} xs={12} style={colStyle}>
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
            <Row style={rowStyle} gutter={10} justify="start">
              <Col md={4} sm={4} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Audit No.</Label>                   
                      <Input                       
                        placeholder=""
                        //  value={strDrillTitle}
                        //  onChange={(event)=>setStrDrillTitle(event.target.value)}
                        // style={{ width: "90%" }}
                      />                     
                  </Fieldset>
                </Form>
              </Col>
              <Col md={5} sm={5} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Auditor</Label>                 
                      <Input
                        label="Set Offline By User"
                        placeholder=""
                        //  value={drillFrequencyName}
                        style={{ width: "90%" }}
                      />    
                  </Fieldset>
                </Form>
              </Col>
              <Col md={5} sm={5} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>NCR/CAR NO.</Label>                 
                      <Input                      
                        placeholder=""
                        //  value={drillFrequencyName}
                        style={{ width: "90%" }}
                      />    
                  </Fieldset>
                </Form>
              </Col>
              <Col md={10} sm={10} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Auditor/Auditee.</Label>                 
                      <Input                       
                        placeholder=""
                        //  value={drillFrequencyName}
                        style={{ width: "90%" }}
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
              <Col md={12} sm={12} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>ISM Reference</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}  
                          rows={2}
                          // value={strDescription}
                          //  onChange={(event)=>{setStrDescription(event.target.value)}}                               
                        /> 
                  </Fieldset>
                </Form>
              </Col>
              <Col md={12} sm={12} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>SMS Reference</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}  
                          rows={2}
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
              <Col md={24} sm={24} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Non-conformity Statement</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}  
                          rows={2}
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
            <Label>Proposed Corrective Action</Label>
            <Row style={rowStyle} gutter={gutter} justify="start">
         
              <Col md={20} sm={20} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Immediate Action(s)</Label>
                    <Input                   
                        placeholder=""
                        //  value={drillFrequencyName}                      
                      />   
                  </Fieldset>
                </Form>
              </Col>
              <Col md={4} sm={4} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Date for completion</Label>                   
                   <DatePicker  value={dueDate!=null?moment(dueDate,'YYYY-MM-DD HH:mm:ss'):""}   />
                  </Fieldset>
                </Form>
              </Col>
              <Col md={20} sm={20} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Further Action(s)</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}  
                          rows={2}
                          // value={strDescription}
                          //  onChange={(event)=>{setStrDescription(event.target.value)}}                               
                        />                   
                  </Fieldset>
                </Form>
              </Col>
              <Col md={4} sm={4} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Date for completion</Label>
                   <DatePicker  value={dueDate!=null?moment(dueDate,'YYYY-MM-DD HH:mm:ss'):""}   />
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
            <Label>Verification of Corrective Action</Label>
            <Row style={rowStyle} gutter={gutter} justify="start">         
              <Col md={24} sm={24} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Follow Up Details:</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}  
                          rows={2}
                          // value={strDescription}
                          //  onChange={(event)=>{setStrDescription(event.target.value)}}                               
                        />     
                  </Fieldset>
                </Form>
              </Col>   
              <Col md={24} sm={24} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Corrective Action(s) Closed Out</Label>
                    <Input                   
                        placeholder=""
                        //  value={drillFrequencyName}                      
                      />   
                  </Fieldset>
                </Form>
              </Col>
              </Row>
            </Col>
            </Row> 
          </div>
      {/* <Scrollbars
        style={{ width: "100%", height: "calc(100vh - 70px)" }}
      > 
        
     </Scrollbars> */}
    
  </div>
  );
}
