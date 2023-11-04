import IBase from "../models/users/IBase";

interface IConfiguration extends IBase{
    configuration_name: string,
    key: string,
    input: string,
    value: string,
}
export {
    IConfiguration,
}