import {Redirect} from 'react-router-dom';

export const withAuth = (Component) => {
    const authRoute = () => {
        const auth = !!localStorage.getItem('token')
        if(auth){
            return <Component />
        }
        else{
            return <Redirect to='/login' />
        }
    }

    return authRoute
}