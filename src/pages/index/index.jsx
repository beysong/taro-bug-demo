import { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";

import { add, minus, asyncAdd } from "../../actions/counter";

import "./index.scss";

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
  })
)
class Index extends Component {
  state = { open: false };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { open } = this.state;
    return (
      <View className="index">
        <View
          onClick={() => {
            this.setState({ open: true });
          }}
        >
          打开dialog
        </View>
        <mp-dialog
          show={open}
          // onClick={handleSelect}
          onButtonTap={(i) => {
            console.log("onButtonTap", i);
            this.setState({ open: !open });
          }}
          onClose={() => {
            console.log("onClose");
          }}
          buttons={[
            { text: "取消", extClass: "btn2" },
            { text: "确定", extClass: "btn" },
          ]}
        >
          <View
            onClick={() => {
              console.log("setOpen(!open)", open);
              setOpen(!open);
            }}
            className="font16 title"
          >
            点击关闭
          </View>
        </mp-dialog>
      </View>
    );
  }
}

export default Index;
