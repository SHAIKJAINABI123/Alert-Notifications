// Write your code here
// Write your code here
// import {Component} from 'react'
// import {AiFillCheckCircle} from 'react-icons/ai'
// import {RiErrorWarningFill} from 'react-icons/ri'
// import {MdWarning, MdInfo} from 'react-icons/md'

// import Notification from '../Notification'

// import './index.css'

// class AlertNotifications extends Component {
//   render() {
//     return (
//       <div className="alert-container">
//         <h1 className="alert-heading">Alert Notifications</h1>
//         <Notification className="text-container">
//           <AiFillCheckCircle className="success" />
//           <div className="sub-container">
//             <h1 className="success">Success</h1>
//             <p className="sub-para">
//               You can access all the files in the folder
//             </p>
//           </div>
//         </Notification>
//         <Notification className="text-container">
//           <RiErrorWarningFill className="error" />
//           <div className="sub-container">
//             <h1 className="error">Error</h1>
//             <p className="sub-para">
//               Sorry, you are not authorized to have access to delete the file
//             </p>
//           </div>
//         </Notification>
//         <Notification className="text-container">
//           <MdWarning className="warning" />
//           <div className="sub-container">
//             <h1 className="warning">Warning</h1>
//             <p className="sub-para">
//               Viewers of this file can see comments and suggestions
//             </p>
//           </div>
//         </Notification>
//         <Notification className="text-container">
//           <MdInfo className="info" />
//           <div className="sub-container">
//             <h1 className="info">Info</h1>
//             <p className="sub-para">
//               Anyone on the internet can view these files
//             </p>
//           </div>
//         </Notification>
//       </div>
//     )
//   }
// }

// export default AlertNotifications

/*
 */

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="message-container">
        <h1 className="message-heading info">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="message-container">
        <h1 className="message-heading warning">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="message-container">
        <h1 className=" message-heading error">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="message-container">
        <h1 className="message-heading success">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications