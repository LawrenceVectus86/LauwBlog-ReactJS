import { useEffect, useState } from 'react';
import MyContext from './myContext';
import { collection, deleteDoc, onSnapshot, orderBy, query, doc } from 'firebase/firestore';
import { fireDB } from '../../Firebase/FirebaseConfig';
import PropTypes from 'prop-types'; // Added import for PropTypes
import toast from 'react-hot-toast';

function MyState(props) {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    };

    const [searchkey, setSearchkey] = useState('');
    const [loading, setloading] = useState(false);
    const [getAllBlog, setGetAllBlog] = useState([]);

    function getAllBlogs() {
        setloading(true);
        try {
            const q = query(
                collection(fireDB, 'blogPost'),
                orderBy('time')
            );
            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                let blogArray = [];
                QuerySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllBlog(blogArray);
                setloading(false);
            });
            return unsubscribe;
        } catch (error) {
            console.error('Error fetching blogs: ', error);
            setloading(false);
        }
    }

    

    useEffect(() => {
        const unsubscribe = getAllBlogs();
        return () => unsubscribe && unsubscribe();
    }, []);

    // Blog Delete Function 
    const deleteBlogs = async (id) => {
        try {
            await deleteDoc(doc(fireDB, "blogPost", id));
            getAllBlogs()
            toast.success("Blogs deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MyContext.Provider value={{
            mode,
            toggleMode,
            searchkey,
            setSearchkey,
            loading,
            setloading,
            getAllBlog,
            deleteBlogs,
            deleteDoc
        }}>
            {props.children}
        </MyContext.Provider>
    );
}

MyState.propTypes = {
    children: PropTypes.node.isRequired, // Added prop validation
};

export default MyState;