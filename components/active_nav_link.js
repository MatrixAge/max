import React from 'react'
import {withRouter} from 'next/router'

class ActiveNavLink extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {children} = this.props
        const {router} = this.props
        const {href} = this.props
        const {className} = this.props
        const isActive = router.pathname === href
            ? ' active'
            : ''
        const classNames = className + isActive

        const handleClick = (e) => {
            e.preventDefault()
            router.push(href)
        }

        return (
            <a href={href} onClick={handleClick} className={classNames}>
                {children}
            </a>
        )
    }

    componentDidMount() {
        const {router} = this.props
        const {href} = this.props

        router.prefetch(href)
    }

}

export default withRouter(ActiveNavLink)