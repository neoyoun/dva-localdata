import React,{PropTypes} from 'react';
import { Table,Popconfirm,Button } from 'antd';

const ProductList = ({ onDelete, products })=>{
  const columns = [{
    title:'Name',
    dataIndex:'name'
  },{
    title:'Actions',
    render:(text, record) => {
      return (
        <Popconfirm title="确认删除?" onConfirm={()=> onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
        )
    }
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  );
  //return (<Table dataSource={products} columns={columns} />)
}

ProductList.PropTypes={
  onDelete:PropTypes.func.isRequired,
  products:PropTypes.array.isRequire
}

export default ProductList
