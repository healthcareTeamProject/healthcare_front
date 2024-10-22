import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router";
import { ACCESS_TOKEN, AUTH_ABSOLUTE_PATH, BOARD_LIST_PATH, MAIN_ABSOLUTE_PATH, MAIN_PATH, ROOT_ABSOLUTE_PATH, SCHEDUL_DATH, USER_MYPAGE_DETAIL_PATH } from "src/constant";
import useUserStore from "src/stores/user.store";

// interface: 사용자 이름 컴포넌트 Properties //
interface UsernameProps{
    name: string;
}

// component: 로그인 후 컴포넌트 //
function LoginTop({username}: {username:UsernameProps}){

    // state: 로그인 후 컴포넌트 //
    const{pathname} = useLocation();
    // state: cookie 상태 //
    const [cookies, setCookie, removeCookie] = useCookies();
    // state: 로그인 유저 상태 //
    const {user, setUser} = useUserStore();
    
    const {name} = username;

    // function: 네비게이터 함수 //
    const navigator = useNavigate();


    // event handler: 마이페이지 버튼 클릭 이벤트 처리 //
    const onMyPageButtonClickHandler = () => {
        navigator(USER_MYPAGE_DETAIL_PATH(cookies.accessToken))
    }
    
    // event handler: 로그아웃 버튼 클릭 이벤트 처리 //
    const onLogoutButtonClickHandler = () => {
        removeCookie(ACCESS_TOKEN, {path: ROOT_ABSOLUTE_PATH});
        navigator(MAIN_ABSOLUTE_PATH);
    }

    // render: 로그인 전 컴포넌트 렌더링 //
    if(!cookies.accessToken) return null;

    // render: 로그인 후 컴포넌트 렌더링 //
    return(
            <div className='logout-mypage-box'>
                <div className='mypage-button'onClick={onMyPageButtonClickHandler}>{`${username.name}`}님</div>
                <div className='logout-button'onClick={onLogoutButtonClickHandler}>{"로그아웃"}</div>
            </div>

    )
}

// component: 상단 기본 컴포넌트 //
export default function TopBar(){
    
    // state: 쿠키 상태 //
    const [cookies] = useCookies();

    // function: 네비게이터 함수 //
    const navigator = useNavigate();

    // event handler: 홈 로고 클릭 이벤트 처리 //
    const onHomeClickHandler = () => {
        navigator(MAIN_PATH);
    };
        
    // event handler: 커뮤니티 클릭 이벤트 처리 //
    const onBoardClickHandler = () => {
        navigator(BOARD_LIST_PATH);
    };
    
    // event handler: 스케줄러 클릭 이벤트 처리 //
    const onScheduleClickHandler = () => {
        navigator(SCHEDUL_DATH);
    };

    // effect: 레이아웃 마운트시 로그인 여부 확인 //
    useEffect(() => {
        if(!cookies[ACCESS_TOKEN]) navigator(AUTH_ABSOLUTE_PATH);
    }, []);

    // render: topbar 컴포넌트 렌더링 //
    return(
        <div id='layout-top-logo'>
            <div className='menu-box'>
                <div className='home-button'onClick={onHomeClickHandler}>{"홈"}</div>
                <div className='board-button'onClick={onBoardClickHandler}>{"커뮤니티"}</div>
                <div className='schedule-button'onClick={onScheduleClickHandler}>{"스케줄표"}</div>
            </div>
            <div className='logo-box'></div>
            <LoginTop username={{name: "사용자 이름"}} />
        </div>
        );
    
}