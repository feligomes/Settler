"use client";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { store } from "./store";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <title>Settlement System</title>
    <meta name="description" content="LeyLine Technical Challenge" />
    <body style={{ margin: "0px" }}>
      <Provider store={store}>
        <AntdRegistry>{children}</AntdRegistry>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
