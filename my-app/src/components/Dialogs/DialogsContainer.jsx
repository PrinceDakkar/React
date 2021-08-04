import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import {connect} from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) =>{
  return {
    DialogsPage: state.dialogsPage,

  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    }
  }
}



export default compose( 
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
  )(Dialogs)
