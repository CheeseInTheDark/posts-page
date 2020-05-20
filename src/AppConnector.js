import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = state => ({
    route: state.route
})

export default connect(mapStateToProps, null)(App)