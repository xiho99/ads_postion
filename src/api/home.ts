import { get, post } from './base';

export const getConfiguration = () => get('/getConfiguration');
export const getMenu = () => get('/getMenu');
export const getGroupCategory = () => get('/getGroupCategory');
export const getMoreSite = () => get('/getMoreSite');