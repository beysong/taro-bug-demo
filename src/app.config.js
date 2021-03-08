export default {
  pages: ["pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  useExtendedLib: { weui: true },
  usingComponents: {
    "mp-navigation-bar":
      "/miniprogram_npm/weui-miniprogram/navigation-bar/navigation-bar",
    "mp-cells": "/miniprogram_npm/weui-miniprogram/cells/cells",
    "mp-cell": "/miniprogram_npm/weui-miniprogram/cell/cell",
    "mp-icon": "/miniprogram_npm/weui-miniprogram/icon/icon",
    "mp-dialog": "/miniprogram_npm/weui-miniprogram/dialog/dialog",
  },
};
