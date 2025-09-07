import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import queryString from 'query-string';
import {useNavigate} from 'react-router-dom';

const User = (props) => {
  const [user, setUser] = useState({});
  const {id} = useParams();
  console.log(queryString.parse(window.location.search));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://reqres.in/api/users/${id}`, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      setUser(response.data.data);
    };
    fetchUser();
  }, [id]);

 return ( 
   <>
     <img src={user.avatar} style={{borderRadius: '50%', width: '100px'}} alt="" />
     <h4>{user.first_name} {user.last_name}</h4>
     <h5>{user.email}</h5>
     <button onClick={() => { navigate('/users'); }} className="btn btn-info mt-3">Users</button>
   </>
  );
}
 
export default User;


 // In class components kannst du async componentDidMount() direkt verwenden, weil React die Methode als Lifecycle-Methode behandelt und das Promise-Handling intern übernimmt.
 // In funktionalen Komponenten mit useEffect erwartet React eine normale Funktion (kein Promise). Deshalb ist dort ein async direkt nicht erlaubt, sondern du musst eine Hilfsfunktion (wie fetchUser) innerhalb von useEffect definieren und aufrufen.
 // The [id] in useEffect is the dependency array. It tells React to run the effect whenever the value of id changes.
  