import React from 'react';
import "./EmailRow.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IconButton } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { LabelImportantOutlined } from '@mui/icons-material';
//import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EmailRow({id,title,subject,description,time}) {
  const navigate=useNavigate();

    return(
  <div onClick={() =>navigate("/mail")} className='emailRow'>
   
   <div className='emailRow_options'>
    <CheckBoxIcon/>
    <IconButton>
        <StarOutlineIcon/>
    </IconButton>
    <IconButton>
        <LabelImportantOutlined/>
    </IconButton>
   </div>
   <h3 className="emailRow_title">{title}</h3>

   <div className="emailRow_message">
    <h4>
        {subject}{" "}
        <span className='emailRow_description'>
            {description}
        </span>
        </h4>
   </div>
   <p className="emailRow_time">{time}</p>

  </div> 
  );
}

export default EmailRow;