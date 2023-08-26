import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PostCreate from '../components/community/PostCreate';
import PostDetail from '../components/community/PostDetail';
import PostList from '../components/community/PostList';

const Community = () => {

    return (
        <div>
          <p>커뮤니티 메인 페이지 (자유게시판 글 출력)</p>
           
          
          <Routes>
              
                <Route path="/post/list/:categoryId/:pageNumb" element={<PostList />} />
                <Route path="/post/:postId" element={<PostDetail />} />
                <Route path='/post/create' element={<PostCreate />} />
                
            </Routes>
          
        </div>
    );
}

export default Community;