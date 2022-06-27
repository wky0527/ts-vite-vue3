import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";
import testModule from './source/test'
export function setupProdMockServer(){
    createProdMockServer([...testModule])
}