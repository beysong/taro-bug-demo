import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./index.scss";

export default ({ DefaultValue, options = [], children }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(DefaultValue);
  return (
    <View className="dropdown-wrap">
      <View
        style={{ zIndex: 12 }}
        onClick={() => {
          console.log("渲染属性组件回调，不应该执行");
          setOpen(!open);
        }}
      >
        {children(open)}
      </View>

      {open ? (
        <View
          style={{
            position: "absolute",
            zIndex: 11,
            backgroundColor: "white",
            width: "100vw",
          }}
        >
          {options.map((v) => (
            <View
              key={v.value}
              style={{
                borderBottom: "1px solid #e9e9e9",
                padding: "10px 0",
                margin: "0 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => {
                setValue(v.value);
                setOpen(false);
              }}
            >
              <Text className={v.value == value ? "font14 red" : "font14"}>
                {v.label}
              </Text>
              {v.value == value ? (
                <mp-icon icon="done" color="#BC181E" size="18"></mp-icon>
              ) : (
                false
              )}
            </View>
          ))}
        </View>
      ) : (
        false
      )}
    </View>
  );
};
