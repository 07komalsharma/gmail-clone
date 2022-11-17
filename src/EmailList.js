
import React from 'react';
import './EmailList.css';
// import Checkbox from '@mui/joy/Checkbox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList_settings'>
        <div className='emailList_settingsLeft'>
          <CheckBoxIcon/>
        </div>
      </div>

    </div>
  ); 
}

export default EmailList;