import { connect } from 'react-redux'
import Login from './Login'

const mapDispatchToProps = dispatch => ({
    login: password => dispatch({ type: "LOGIN", value: password })
})

export default connect(null, mapDispatchToProps)(Login)
