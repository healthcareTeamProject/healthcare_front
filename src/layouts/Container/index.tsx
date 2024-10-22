import React from "react";
import { useLocation } from "react-router";
import TopBar from "../Topbar";

// component: 메인 top 레이아웃 //
export default function Container() {

    // state: 현재 페이지 path name //
    const {pathname} = useLocation();
    
    // render: 메인 레이아웃 렌더링 //
    return (
    <>
        <TopBar />
    </>
    );
}
