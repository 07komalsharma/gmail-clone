import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Mail.css";
  
function Mail() {
  const navigate=useNavigate();

  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className='mail_toolsLeft'>
          <IconButton onClick={() => navigate("/", { replace: true })}>
            <ArrowBack/>
          </IconButton>

          <IconButton>
            <MoveToInbox/>
          </IconButton>

          <IconButton>
            <Error/>
          </IconButton>

          <IconButton>
            <Delete/>
          </IconButton>

          <IconButton>
            <Email/>
          </IconButton>

          <IconButton>
            <WatchLater/>
          </IconButton>

          <IconButton>
            <CheckCircle/>
          </IconButton>

          <IconButton>
            <LabelImportant/>
          </IconButton>

          <IconButton>
            <MoreVert/>
          </IconButton>

        </div>
          <div className='mail_toolsRight'>
            <IconButton>
              <UnfoldMore/>
            </IconButton>

            <IconButton>
              <Print/>
            </IconButton>

            <IconButton>
              <ExitToApp/>
            </IconButton>
          </div>
        </div>
    
      <div className="mail_body">

      </div>

    </div>
  ); 
}

export default Mail;