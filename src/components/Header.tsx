import React from 'react'
import { connect } from 'react-redux'

export const Header = () => {
  return (
    <div>Header</div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
