import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-500">CovertComm</h1>
      <h3 className="text-3xl font-bold text-blue-500">Secret & Secure</h3>
      <p className="text-xl text-muted-foreground">
        Message your comrades,{" "}
        <span className="font-bold text-green-400">confidentially.</span>
      </p>
      <div className="flex items-center justify-center w-full h-screen">
        {children}
      </div>
    </div>
  );
};

export default layout;
