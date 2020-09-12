import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Post from '../components/Post';

export default ({ children, title = 'The Universal Blog' }) => (
    <Layout>
        <Header>
            <Jumbotron>
            <h1>{title}</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </Jumbotron>  
        </Header>
        <Post />
    </Layout>
);