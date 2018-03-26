import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

class SecondaryNavigation extends React.PureComponent {
  handleItemClick = (e, { name }) =>
    this.state.changeActiveItem({ activeItem: name })

  render() {
    const { activeItem } = this.props
    return (
      <Nav justified>
        <NavItem  className="light-purple-text">
          <NavLink name='About Me' onClick={this.props.callback} active={activeItem === 'About Me'}>About Me</NavLink>
        </NavItem>
        <NavItem onClick={this.props.callback} className="light-purple-text">
          <NavLink name='Projects' active={activeItem === 'Projects'}>Projects</NavLink>
        </NavItem>
        <NavItem className="light-purple-text">
          <NavLink name='Photos' onClick={this.props.callback} active={activeItem === 'Photos'}>Photos</NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export { SecondaryNavigation }