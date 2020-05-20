import { connect } from 'react-redux'
import Login from './Login'

const mapDispatchToProps = dispatch => ({
    login: password => dispatch({ type: "LOGIN", value: password })
})

const mapStateToProps = state => ({
    loginFailed: state.loginFailed
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
