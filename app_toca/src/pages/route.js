import { useContext } from "react"

import { Navigate } from "react-router-dom";
import { CreateSessionContext } from "../providers/CreateSession";


export const ProtectedRoute = ({ element: Element, onlyFor}) => {
    const { userToken, user } = useContext(CreateSessionContext)

    if(!userToken) {
        return <Navigate to='/'/>
    } else if(onlyFor && user[onlyFor.access] !== onlyFor[onlyFor.access] ) {
        return <Navigate to={onlyFor.path}/>
    } 

    return (
        <>
        {Element}
        </>
    )
}

export const LoginOrRegisterRoute = ({ element: Element}) => {
    const { userToken } = useContext(CreateSessionContext)

    if(userToken) {
        return <Navigate to='/home'/>
      } 

    return (
        <>
        {Element}
        </>
    )
}
