// const getUser = (user) => ({type: 'LOGIN_USER', payload: user })



// export const findUser = (token) => {
//     return dispatch => {
//         return fetch('http://localhost:3000/current_user', {    
//         headers: {
//               'Content-type': 'application/json', 
//               Accepts: 'application/json', 
//               Authorization: token
//             }
//           }).then(res => res.json())
//           .then(res => dispatch(getUser(res.user)))
//           .catch(console.error)
//     }
// } 
