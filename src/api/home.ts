import { get, post } from './base';

export const getConfiguration = () => get('/getConfigurations');
export const getMenu = () => get('/getMenuList');
export const getGroupCategory = () => get('/getGroupList');
export const getMoreSite = () => get('/getMoreSite');
export const getAds = () => get('/getAds');