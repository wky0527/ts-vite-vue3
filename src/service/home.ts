import commonRequest from '@/utils/axios';

interface HomeType {
    index: Function
}
const homeRequest:HomeType = function (){}
homeRequest.index = (id: number) =>{
    return commonRequest.get({url: `/api/getUserInfo/${id}`})
}

export default  homeRequest