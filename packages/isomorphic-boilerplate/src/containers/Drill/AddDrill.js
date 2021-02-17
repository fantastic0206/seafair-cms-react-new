import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@iso/components/uielements/button";
import Input, { InputGroup, Textarea } from "@iso/components/uielements/input";
// import DateTimePicker from "react-datetime-picker";
import { DatePicker } from 'antd';
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import { TableTabsStyle } from "./Asset.styles";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import PageWrapper from "./SingleWorkOrder.styles";
// import Checkbox from '@iso/components/uielements/checkbox';
// import workorderAction from "../../redux/workorder/actions";
import { Col, Row, Form } from "antd";
import moment from "moment";
import { General,Action ,Upload} from "./Tabviews/Tabviews";
import { direction } from '@iso/lib/helpers/rtl';
// import WorkOrderStatusModal from "../../component/WorkOrderStatusModal";
// import MaintenanceTypeModal from "../../component/MaintenanceTypeModal";
import DrillCategoryModal from "../../component/DrillCategoryModal";
import DrillTypeModal from "../../component/DrillTypeModal";
import DrillFrequencyModal from "../../component/DrillFrequencyModal";
// import ProjectModal from "../../component/ProjectModal";
// import AssetModal from "../../component/AssetModal"
// import OtherAssetModal from "../../component/AssetModal"
import newInnerImg  from '../../assets/images/new-inner-list.png';

import {
  Fieldset,
  // Form,
  Label, 
} from "../Asset/Facility/OnlineContent.styles";
const FormItem = Form.Item;

// const { updateData ,add} = workorderAction;
function callback(key) {}

const rowStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "row wrap",
};
const colStyle = {
  marginBottom: "16px",
};
const gutter = 16;
const margin = {
  margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
};

export default function (props) {
  const dispatch = useDispatch();
  const { redirectPath } = props;
  const [drillCategoryModalActive,setDrillCategoryModalActive]=React.useState(false);
  const [drillTypeModalActive,setDrillTypeModalActive]=React.useState(false);
  const [drillFrequencyModalActive,setDrillFrequencyModalActive]=React.useState(false);
  const [drillCategoryName,setDrillCategoryName]=React.useState("");
  const [intDrillCategoryId,setIntDrillCategoryId]=React.useState(null);
  const [drillTypeName,setDrillTypeName]=React.useState("");
  const [intDrillTypeId,setIntDrillTypeId]=React.useState(null);
  const [drillFrequencyName,setDrillFrequencyName]=React.useState("");
  const [intDrillFrequencyId,setIntDrillFrequencyId]=React.useState(null);
  const [strDrillTitle,setStrDrillTitle]=React.useState("");
  const [strDescription,setStrDescription]=React.useState("");
  const [
    dtmSuggestedCompletionDate,
    setDtmSuggestedCompletionDate,
  ] = React.useState(null);
  const [
    dueDate,
    setDueDate,
  ] = React.useState(null);
  
//   const onSave = () => {
//     var sendData = {
//       intPriorityID: intPriorityID,
//       intWorkOrderStatusID: intWorkOrderStatusID,
//       intSiteID: intSiteID,
//       intRequestedByUserID: localStorage.getItem("user_id"),
//       strEmailUserGuest: strEmailUserGuest,
//       dtmDateCreated: dtmDateCreated,
//       dtmDateCompleted: dtmDateCompleted,
//       intCompletedByUserID: intCompletedByUserID,
//       strDescription: strDescription,
//       strNameUserGuest: strNameUserGuest,
//       dtmSuggestedCompletionDate: dtmSuggestedCompletionDate,
//       strPhoneUserGuest: strPhoneUserGuest,
//       strCode: strCode,
//       strCompletionNotes: strCompletionNotes,
//       intMaintenanceTypeID: intMaintenanceTypeID,
//       dtmDateLastModified: dtmDateLastModified,
//       strAdminNotes: strAdminNotes,
//       intRCAActionID: intRCAActionID,
//       intRCACauseID: intRCACauseID,
//       intRCAProblemID: intRCAProblemID,
//       strAssignedUsers: strAssignedUsers,
//       strAssetIds:strAssetIds,
//       intProjectId:intProjectId,
//       intAssignedUserId:intAssignedUserId,
//       strAssets:strAssets
//     };
//     console.log(workorderId);
//      dispatch(updateData(sendData,workorderId));
//   };
//   const selectStatus = (sel) => {
//     // workOrder status    
//     setIntWorkOrderStatusID(sel.intSysCode);
//     setSelectedStatusText(sel.strName);
//   };
//   const selectMaintenanceType = (id, txt) => {
//     setMaintanaceTypeTxt(txt);
//     setIntMaintenanceTypeID(id);
//   };
//   const selectedPriority = (id, txt) => {
//     setPriorityTxt(txt);
//     setIntPriorityID(id);
//   };
//   const selectProject = (row) => {
//     setStrProjectTxt(row.strName);
//     setIntProjectId(row._id);
//   };
  const handleCancel = () => {
      setDrillCategoryModalActive(false);
      setDrillTypeModalActive(false);
      setDrillFrequencyModalActive(false);
  };

  const selectedDrillCategory = (id,str) => {
    setDrillCategoryName(str);
    setIntDrillCategoryId(id);   
  };
  const selectedType=(id,str)=>{
    setDrillTypeName(str);
    setIntDrillTypeId(id);
  }
  const selectedFrequency=(id,str)=>{
    setIntDrillFrequencyId(id);
    setDrillFrequencyName(str);
  }
  const onChange=(value, dateString)=> {
    setDtmSuggestedCompletionDate(dateString);
  }
  const onChange2=(value, dateString)=> {
    setDueDate(dateString);
  }
  
  return (
    <LayoutWrapper>
      <div className="PageHeader">
        <Link to={"/dashboard/drill"} style={margin}>
          <Button color="primary">
            <span>Back</span>
          </Button>
        </Link>

        <Button type="primary"  className="saveBtn" style={margin}>
          <span>Complete Drill</span>
        </Button>
        <Button type="primary"  className="saveBtn" style={margin}>
          <span>Approve Drill</span>
        </Button>
        <Button type="primary"  className="saveBtn" style={margin}>
          <span>Report Drill</span>
        </Button>
      </div>
      <TableTabsStyle className="isoLayoutContentAsset">
        <h4 style={{ marginBottom: "15px" }}>Drill Code:</h4>
        <PageWrapper className="editView">
          <div className="PageContent">
         <Row style={rowStyle} gutter={gutter} justify="start">
           <Col md={2} sm={2} xs={24} style={colStyle}>
              
           </Col>
           <Col md={22} sm={22} xs={24} style={colStyle}>
            <Row style={rowStyle} gutter={gutter} justify="start">
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Drill Category</Label>
                    <div style={{ position: "relative" }}>
                      <Input
                        label="Set Offline By User"
                        placeholder=""
                        value={drillCategoryName}
                        onChange={() => {
                          setDrillCategoryModalActive(true);
                        }}
                        style={{ width: "90%" }}
                      />
                      <i
                        className="ionicons ion-arrow-down-b"
                        onClick={() => {
                          setDrillCategoryModalActive(true);
                        }}
                        style={{
                          fontSize: "25px",
                          cursor: "pointer",
                          position: "absolute",
                          marginLeft: "5px",
                        }}
                      ></i>
                    </div>
                  </Fieldset>
                </Form>
              </Col>
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Drill Type</Label>
                    <div style={{ position: "relative" }}>
                      <Input
                        value={drillTypeName}
                        placeholder=""
                        style={{ width: "90%" }}
                      />
                      <i
                        className="ionicons ion-arrow-down-b"
                       onClick={()=>{setDrillTypeModalActive(true)}}
                        style={{
                          fontSize: "25px",
                          cursor: "pointer",
                          position: "absolute",
                          marginLeft: "5px",
                        }}
                      ></i>
                    </div>
                  </Fieldset>
                </Form>
              </Col>
            </Row>
            <Row style={rowStyle} gutter={10} justify="start">
              <Col md={8} sm={8} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Drill Title</Label>                   
                      <Input
                        label="Maintenance Type"
                        placeholder=""
                         value={strDrillTitle}
                         onChange={(event)=>setStrDrillTitle(event.target.value)}
                        // style={{ width: "90%" }}
                      />                     
                  </Fieldset>
                </Form>
              </Col>
              <Col md={4} sm={4} xs={12} style={colStyle}>
                {/* <Form>
                  <Fieldset>
                    <Label>Drill Frequency</Label>
                    <div style={{ position: "relative" }}>
                      <Input
                        label="Set Offline By User"
                        placeholder=""
                         value={drillFrequencyName}
                        style={{ width: "90%" }}
                      />
                      <i
                        className="ionicons ion-arrow-down-b"
                        onClick={() => {
                          setDrillFrequencyModalActive(true);
                        }}
                        style={{
                          fontSize: "25px",
                          cursor: "pointer",
                          position: "absolute",
                          marginLeft: "5px",
                        }}
                      ></i>
                    </div>
                  </Fieldset>
                </Form> */}
              </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} justify="start">
              {/* <Col md={8} sm={8} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Drill Description</Label>
                    <Textarea placeholder="" 
                          style={{ height: 'auto' }}  
                          rows={6}
                          name="strDescription"
                          value={strDescription}
                           onChange={(event)=>{setStrDescription(event.target.value)}}                               
                        /> 
                  </Fieldset>
                </Form>
              </Col> */}
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Estimated time</Label>                   
                   <DatePicker showTime value={dtmSuggestedCompletionDate!=null?moment(dtmSuggestedCompletionDate,'YYYY-MM-DD HH:mm:ss'):""} onChange={onChange}  />
                  </Fieldset>
                </Form>
              </Col>
              <Col md={6} sm={6} xs={12} style={colStyle}>
                <Form>
                  <Fieldset>
                    <Label>Due Date</Label>                   
                   <DatePicker  value={dueDate!=null?moment(dueDate,'YYYY-MM-DD HH:mm:ss'):""} onChange={onChange2}  />
                  </Fieldset>
                </Form>
              </Col>
            </Row>
            </Col>
            </Row> 
          </div>
        </PageWrapper>
        <Tabs
          defaultActiveKey="1"
          className="isoTableDisplayTab"
          onChange={callback}
        >
          <TabPane tab="General" key="1">
            <General></General>
          </TabPane>
          {/* <TabPane tab="Trigger Conditions" key="2">
            Content of Tab Pane 2
          </TabPane> */}
           <TabPane tab="Action" key="3">
            <Action></Action>
          </TabPane>  
          <TabPane tab="Documents Upload View" key="4">
         <Upload></Upload>
          </TabPane>    
        </Tabs>
      </TableTabsStyle>
      {/* customize modal start */}
      {/* <WorkOrderStatusModal
        visible={statusModalActive}
        selectStatus={selectStatus}
        title="WORK ORDER STATUS"
        onCancel={handleCancel}
      ></WorkOrderStatusModal>

      <AssetModal
       visible={assetModalActive}      
       title="ASSETS"
       selectedAsset={selectedAsset}
       onCancel={handleCancel}
      ></AssetModal>


      <OtherAssetModal
       visible={otherAssetModalActive}      
       title="WORK ORDER ASSETS"
       selectedAsset={selectedOtherAsset}
       onCancel={handleCancel}
      ></OtherAssetModal>

      <MaintenanceTypeModal
        visible={maintainTypeModalActive}
        selectMaintenanceType={selectMaintenanceType}
        title="MAINTENACE TYPES"
        onCancel={handleCancel}
      ></MaintenanceTypeModal>

  
      <ProjectModal
        visible={projectModalActive}
        selectProject={selectProject}
        title="PROJECTES"
        onCancel={handleCancel}
      ></ProjectModal> */}
          <DrillCategoryModal
        visible={drillCategoryModalActive}
        selectedDrillCategory={selectedDrillCategory}
        title="DRILL CATEGORIES"
        onCancel={handleCancel}
      ></DrillCategoryModal>
      <DrillTypeModal
        visible={drillTypeModalActive}
        selectedType={selectedType}
        title="DRILL TYPE"
        onCancel={handleCancel}
      ></DrillTypeModal>
      <DrillFrequencyModal
        visible={drillFrequencyModalActive}
        selectedFrequency={selectedFrequency}
        title="DRILL FREQUENCY"
        onCancel={handleCancel}
      ></DrillFrequencyModal>
      {/*  customize modal end*/}
    </LayoutWrapper>
  );
}
