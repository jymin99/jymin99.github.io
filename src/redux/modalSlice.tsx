import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface ModalState{
    isOpen:boolean;
    title:string;
}

const initialState:ModalState={
    isOpen:false,
    title:'',
};

const modalSlice=createSlice({
    name:'modal',
    initialState,
    reducers : {
        openModal(state, action:PayloadAction<string>){
            state.isOpen=true;
            state.title=action.payload; //modal의 title=action의 페이로드
        },
        closeModal(state){
            state.isOpen=false;
            state.title='';//title 초기화
        },
    },
});
export const {openModal, closeModal}=modalSlice.actions;
export default modalSlice.reducer;