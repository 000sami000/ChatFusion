import {create} from 'zustand'


const useGlobalState=create((set)=>({
    selectedConversation:null,
    setselectedConversation:(selectedConversation)=>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>set({messages}),
}))
export default useGlobalState;