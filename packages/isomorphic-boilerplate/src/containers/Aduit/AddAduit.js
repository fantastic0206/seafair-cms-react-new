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
import { NCR ,Report,Plan} from "./Tabviews/Tabviews";
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
        <Link to={"/dashboard/audit"} style={margin}>
          <Button color="primary">
            <span>Back</span>
          </Button>
        </Link>

        <Button type="primary"  className="saveBtn" style={margin}>
          <span>Save</span>
        </Button>
        
      </div>
      <TableTabsStyle className="isoLayoutContentAsset">
        <h4 style={{ marginBottom: "15px" }}>Audit Code:</h4>      
        <Tabs
          defaultActiveKey="1"
          className="isoTableDisplayTab"
          onChange={callback}
        >
          <TabPane tab="SMS AUDIT PLAN" key="1">
      
            <Plan></Plan>
          </TabPane>
          {/* <TabPane tab="Trigger Conditions" key="2">
            Content of Tab Pane 2
          </TabPane> */}
           <TabPane tab=" Internal SMS Audit Report" key="2">
             <Report></Report>
          </TabPane>  
          <TabPane tab="NCR/CAR" key="3">
         <NCR></NCR>
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
