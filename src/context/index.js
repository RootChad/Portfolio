import { createContext, useContext, useMemo, useState } from "react"
import { getPosts, insertPosts } from "../Services"

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children}) => {
    const [posts, setPosts] = useState([]);
    const [fetching, setFetching] = useState(true);
    const fetchPosts = () => {
        getPosts().then(setPosts).then(() => setFetching(false))
    }
    const addPost =(body) => {
        insertPosts(body).then(setPosts).then(() => setFetching(false))
    }
    const value = useMemo(() => {
        return {
            posts,
            fetching, 
            fetchPosts,
            addPost
        }
    }, [posts, fetchPosts, addPost])
    return <Provider value={value}>{children}</Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}

export default AppProvider;