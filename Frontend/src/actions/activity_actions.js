// import React, { Component } from 'react';
// import { connect } from 'react-redux'

// function ActivityActions(props) {
    

//      handleCreateActivity = (e, props) => {
//         e.preventDefault()

//         if(e.target.category.value && e.target.user_id.value) {
//             fetch('http://localhost:3000/activities',{
//             method: 'POST',
//             headers: { Accept: 'application/json', 'Content-Type':'application/json' },
//             body: JSON.stringify({
//                 activity: {
//                     category: e.target.category.value.toLowerCase(),
//                     calories_burned: e.target.calories_burned.value,
//                     distance: e.target.distance.value,
//                     user_id: props.user.userInfo.id,
//                     distance: e.target.password.value,
//                 }
//             })
//         })
//         .then(res => res.json())
//         }
//         //   	else if(res.errors)
//         //   		this.setState({ errors: res.errors })
//         //   })
//         // 	e.target.reset
//         // }
//     }
// }

// let mapStateToProps = (state) => {
//     return { user: state.user}
//   }


// export {handleCreateActivity}
// export default connect(mapStateToProps)(ActivityActions)