import { get, post } from './base';
import { ICooperation } from "@/models/ICooperation";

export const submitCooperate = (param: ICooperation) => post('/addCooperate', param);