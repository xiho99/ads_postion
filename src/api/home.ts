import { get, post } from './base';

export const getConfiguration = () => get('/getConfigurationList');
export const getMenuIcons = () => get('/getMenuIconList');
export const getMenuButtons = () => get('/getMenuButtonList');
export const getGroupCategory = () => get('/getGroupList');
export const getMoreSite = () => get('/getMoreSite');
export const getAds = () => get('/getAdsList');