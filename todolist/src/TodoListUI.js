import React, {Component} from 'react';
import { Input, Button, List, message ,Row, Col} from "antd";

const TodoListUI = (props) => {
    return (
        <div style={{ margin: "10px"}}>
        {/* <Row type="flex" gutter={32} justify="start"> */}
          {/* <Col span={12} style={{ padding:0}}> */}
          <Input
            value={props.inputValue}
            placeholder="add todo"
            onChange={props.handleChange}
            style={{ width:"60%"}}
          />
          {/* </Col> */}
          {/* <Col span={3} style={{ padding:0}}> */}
          <Button
            type="primary"
            onClick={props.handleAdd}
            // style={{ marginTop: "0.5rem", marginRight: "0.5rem", }}
          >
            Add
          </Button>
          {/* </Col> */}
          {/* <Col span={4} > */}
          <Button
            type="primary"
            onClick={props.handleAjax}
            // style={{ marginTop: "0.5rem", marginRight: "0.5rem" }}
          >
            Export
          </Button>
          {/* </Col> */}
          {/* <Col span={4} > */}
          <Button
            type="primary"
            onClick={props.handleClean}
            // style={{ width: "wrap-content", marginTop: "0.5rem", marginRight: "0.5rem" }}
          >
            Clean
          </Button>
          {/* </Col> */}
          {/* </Row> */}
          <List
            header={<div style={{ textAlign: "center" }}>** TodoList **</div>}
            footer={
              <div style={{ textAlign: "center", fontSize: "10px" }}>
                {" "}
                Copyright Rain{" "}
              </div>
            }
            bordered
            dataSource={props.dataObj}
            renderItem={(item, index) => (
              <List.Item onClick={() => {props.handleDel(index)}}>
                <ul>
                  <li>{item}</li>
                </ul>
              </List.Item>
            )}
            style={{ width: "20rem", margin: "0.5rem" }}
          />
      </div>
    )
}


// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ margin: "10px"}}>
//         {/* <Row type="flex" gutter={32} justify="start"> */}
//           {/* <Col span={12} style={{ padding:0}}> */}
//           <Input
//             value={this.props.inputValue}
//             placeholder="add todo"
//             onChange={this.props.handleChange}
//             style={{ width:"60%"}}
//           />
//           {/* </Col> */}
//           {/* <Col span={3} style={{ padding:0}}> */}
//           <Button
//             type="primary"
//             onClick={this.props.handleAdd}
//             // style={{ marginTop: "0.5rem", marginRight: "0.5rem", }}
//           >
//             Add
//           </Button>
//           {/* </Col> */}
//           {/* <Col span={4} > */}
//           <Button
//             type="primary"
//             onClick={this.props.handleAjax}
//             // style={{ marginTop: "0.5rem", marginRight: "0.5rem" }}
//           >
//             Export
//           </Button>
//           {/* </Col> */}
//           {/* <Col span={4} > */}
//           <Button
//             type="primary"
//             onClick={this.props.handleClean}
//             // style={{ width: "wrap-content", marginTop: "0.5rem", marginRight: "0.5rem" }}
//           >
//             Clean
//           </Button>
//           {/* </Col> */}
//           {/* </Row> */}
//           <List
//             header={<div style={{ textAlign: "center" }}>** TodoList **</div>}
//             footer={
//               <div style={{ textAlign: "center", fontSize: "10px" }}>
//                 {" "}
//                 Copyright Rain{" "}
//               </div>
//             }
//             bordered
//             dataSource={this.props.dataObj}
//             renderItem={(item) => (
//               <List.Item onClick={(index) => {this.props.handleDel(index)}}>
//                 <ul>
//                   <li>{item}</li>
//                 </ul>
//               </List.Item>
//             )}
//             style={{ width: "20rem", margin: "0.5rem" }}
//           />
//       </div>
//         );
//     }
// }

export default TodoListUI;