import React, {Component} from 'react';
import ItemView from '../ItemView/ItemView';

class ItemList extends Component {
  renderItem = () => {
    const { items } = this.props;
    console.log(this.props)
    console.log(items)
    return items.map((item, index) => {
      return (
        <ItemView
          item={ item }
          index={ index }
        />
      )
    });
  }

  render() {
    return(
      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: '10%' }} className="text-center">#</th>
              <th>Name</th>
              <th style={{ width: '15%' }} className="text-center">Level</th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItem()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ItemList;
