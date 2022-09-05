import { useParams } from "react-router-dom"

const UsersDetails = () => {
    const {userId} = useParams();
    return (
        <div>User Details {userId}</div>
    )
}

export default UsersDetails