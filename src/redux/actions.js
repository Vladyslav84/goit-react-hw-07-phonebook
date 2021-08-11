import { createAction } from "@reduxjs/toolkit";
export const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
export const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
export const fetchContactError = createAction("contacts/fetchContactError");