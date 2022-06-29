import {MockMethod} from "vite-plugin-mock";

export default [
    {
        url: '/api/login',
        method: 'post',
        response: () => {
            return {
                access_token: 'dE2QKP79emxVcRtnjX6Lov1aWW7uwM9ZFJfFvVT2LHshi6KN64IZmYFFQVsvlhKBMcrE947HTp1U79Z9'
            }
        }
    }
] as MockMethod[]