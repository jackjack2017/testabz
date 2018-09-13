import React from 'react';
import SidebarL from '../../components/SidebarL/SidebarL'
import SidebarR from '../../components/SidebarR/SidebarR'
import Main from '../../components/Main/Main'

import './Page.scss';

const Page = (props) => (
    <section className="Page">
        <div className="container">
            <div className="Page__content">
                <SidebarL/>
                <Main/>
                <SidebarR/>
            </div>
        </div>
    </section>
);

export default Page;