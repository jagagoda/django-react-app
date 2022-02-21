import React from 'react'

const Navbar = (props) => {
  const {data} = props;
  console.log(data)
  return (
    <div>Navbar {data.humidity}</div>
  )
}

export default Navbar