import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
let store = {
  _state: {
    profilePage: {
      posts: [
          { id: 1, message: "Post number one", likesCount: 3 },
          { id: 2, message: "Number two", likesCount: 23 },
        ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
     
  
      dialogs: [
          { id: 1, name: "Dima" },
          { id: 2, name: "Andrey" },
          { id: 3, name: "Sveta" },
          { id: 4, name: "Sasha" },
          { id: 5, name: "Viktor" },
          { id: 6, name: "Valera" },
          { id: 7, name: "Serega" },
        ],
        messages: [
          { id: 1, message: "Hi" },
          { id: 2, message: "How are you" },
          { id: 3, message: "Snid" },
          { id: 4, message: "Asda" },
          { id: 5, message: "Cxda" },
          { id: 6, message: "Mezda" },
        ],
        newMessageBody:""
    },
  },
  _callSubscriber(){
    console.log('dd')
  },

  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },
  dispatch(action){
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state)
  },
}





export default store;
window.store = store;
