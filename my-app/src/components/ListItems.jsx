import React from "react";

class ListItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let array = [1, 2, 3, 4, 5];
    let listItems = array.map((item) =>
      <li>{item}</li>
    );
    
    return (
        <ul>{listItems}</ul>
    );
  }
}

export default ListItems;
