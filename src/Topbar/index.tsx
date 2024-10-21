import './style.css'

import React from 'react'

// component: 상단 로고 컴포넌트 //
function TopBar(){

    // render: 상단 로고 컴포넌트 //
    return(
        <div id='layout-top-logo'>
            <div className='menu-box'>
                <div className='home-button'>홈</div>
                <div className='board-button'>커뮤니티</div>
                <div className='schedule-button'>스케줄표</div>
            </div>
            <div className='logo-box'></div>
            <div className='logout-mypage-box'>
                <div className='mypage-button'>홍길동님</div>
                <div className='logout-button'>로그아웃</div>
            </div>
        </div>
    )
}

export default function Topbar() {
    return (
            <div id='main-layout'>
                <TopBar />
            </div>
    )
}
