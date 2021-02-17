import { combineReducers } from 'redux';
import App from '@iso/redux/app/reducer';
import Auth from './auth/reducer';
import ThemeSwitcher from '@iso/redux/themeSwitcher/reducer';
import Ecommerce from '@iso/redux/ecommerce/reducer';
import LanguageSwitcher from '@iso/redux/languageSwitcher/reducer';
//import Invoices from './invoice/reducer';
import Users from './user/reducer';
import Assets from './asset/reducer';
import Workorders from './workorder/reducer';
import UserGroup from './usergroup/reducer';
import AssetCategory from './assetcategory/reducer';
import Status from './status/reducer';
import WorkOrderStatus from './workorderstatus/reducer';
import Project from './project/reducer';
import Account from './account/reducer';
import Chargedepartment from './chargedepartment/reducer';
import EventType from './eventtype/reducer';
import MeterReading from './meterreading/reducer';
import AssetUser from './assetuser/reducer';
import AssetEvent from './assetevent/reducer';
import Business from './business/reducer';
import AssetBusiness from './assetbusiness/reducer';
import BusinessUser from './businessuser/reducer';
import ScheduledMaintenance from './scheduledmaintenance/reducer';
import ScheduledMaintenanceTrigger from './scheduledmaintenancetrigger/reducer';
import WorkOrderTask from './workordertask/reducer';
// import scrumBoard from './scrumBoard/reducer';
import ScheduledTask from './scheduledtask/reducer';

//--------------- CHARTER ---------------------//

import Charter from './charter/reducer';

//---------------------------------------------//

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  Ecommerce,
  LanguageSwitcher,
  Users,
  Assets,
  Workorders,
  UserGroup,
  AssetCategory,
  Status,
  WorkOrderStatus,
  Project,
  Account,
  Chargedepartment,
  EventType,
  MeterReading,
  AssetUser,
  AssetEvent,
  Business,
  AssetBusiness,
  BusinessUser,
  ScheduledMaintenance,
  ScheduledMaintenanceTrigger,
  WorkOrderTask,
  //scrumBoard,
  ScheduledTask,
  Charter
});
