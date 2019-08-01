import styled from 'styled-components'
import defaultImg from '../images/snowy.jpg'

const SplashGoalDiv = styled.div`
background-image: url(${defaultImg});
min-height: 100vh;
background-size: cover;
background-position: center;
z-index: -1;
overflow: hidden;
`

export default SplashGoalDiv