import { orderList } from '../consts';
import { IOrdering } from '../models/IOrdering';

export const findOrderingByName = (name: string): IOrdering => orderList.find((obj) => obj.name === name) as IOrdering;