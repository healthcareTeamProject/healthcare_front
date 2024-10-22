import React from 'react';
import Topbar from 'src/Topbar';
import './style.css';
import Pagination from 'src/components/pagination';
import { usePagination } from 'src/hooks';
import { Board } from 'src/types';

// 카테고리 컴포넌트

const categories = ['식단', '홈 트레이닝', '운동기구', '헬스장'];

// 인기태그 컴포넌트

const popularTags1 = ['#운동일지', '#영양식단', '#상체', '#어깨', '#하체', '#등',
    '#허리', '#가슴', '#체중감량', '#보충제'
];

const popularTags2 = ['#대회식단', '#일반식단', '#단백질',
    '#부상/재활', '#유산소', '#맨몸운동', '#전신운동', '#다이어트 식단', '#영양제', '#바디프로필'
];

interface BoardItem {
    id: number;
    title: string;
    author: string;
    date: string;
    views: number;
}

const boardData: BoardItem[] = [
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
    { id: 187, title: '턱걸이 어꺠 뚜둑 소리', author: '마라탕가슴살', date: '2024-10-11 17:15', views: 826 },
];


export default function Community() {

    const {
        currentPage, totalPage, totalCount, viewList,
        setTotalList, initViewList, ...paginationProps
    } = usePagination<Board>();

    return (
        <div id='cm-wrapper'>
            <Topbar />
            <div className='top'>
                <div className="categoryKing">
                    <label className='category'>카테고리</label>
                    <div className='category-search'>
                        <div className='categories'>
                            {categories.map((category) => (
                                <button key={category} className='category-button'>
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div id="container">
                            <input type="text" placeholder="검색어 입력" />
                            <button>
                                <img src="/images/searchIcon.png" alt="search" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mid'>
                <label className="popularTag">인기태그</label>
                <div className="popularTags1">
                    {popularTags1.map((popularTag) => (
                        <button key={popularTag} className="popularTag-button1">
                            {popularTag}
                        </button>
                    ))}
                </div>
                <div className="popularTags2">
                    {popularTags2.map((popularTag) => (
                        <button key={popularTag} className="popularTag-button2">
                            {popularTag}
                        </button>
                    ))}
                </div>
            </div>
            <div className='main'>
                <table className="board-table">
                    <thead>
                        <tr className="table1">
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성 날짜</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boardData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.date}</td>
                                <td>{item.views}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='bottom'>
                <Pagination currentPage={currentPage} {...paginationProps} />
            </div>
        </div>
    );
}
