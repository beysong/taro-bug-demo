import { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import RenderPro from "../../components/RenderPro";

import "./index.scss";

class Index extends Component {
  state = { open: false, sortValue: "" };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleOuter = (e) => {
    console.log("我师父组件回调");
  };

  handleInner = (e) => {
    e.stopPropagation();
    console.log("这里阻止了冒泡");
    this.setState({ open: !this.state.open });
  };

  render() {
    console.log("执行渲染了");
    return (
      <View className="index">
        <RenderPro
          options={[
            { label: "排序1", value: "1" },
            { label: "排序2", value: "2" },
            { label: "排序3", value: "3" },
          ]}
        >
          {(open) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ display: "flex" }}>
                <Button>排序</Button>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("inner");
                    this.setState({
                      isOpened: true,
                    });
                  }}
                >
                  渲染属性
                </Button>
              </View>
            </View>
          )}
        </RenderPro>

        <View onClick={this.handleOuter} style={{ marginTop: "30px" }}>
          <Button onClick={this.handleInner}>这里正常的</Button>
        </View>
      </View>
    );
  }
}

export default Index;
