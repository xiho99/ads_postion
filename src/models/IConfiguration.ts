import IBase from "../models/users/IBase";

interface IConfiguration extends IBase{
    configuration_name: string,
    key: string,
    input: string,
    value: string,
    link: string,
    appName: string;
    title: string;
    icon: string;
}
export {
    IConfiguration,
}