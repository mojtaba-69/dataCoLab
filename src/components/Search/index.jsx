import { useState } from 'react';

import Menu from '../Menu'
import NavBar from '../NavBar'
import Content from '../Content'

function Index(props) {
    const [showNavBar, setShowNavBar] = useState(true)
    const [content, setContent] = useState({ text: "", color: "bg-green-500" })

    return (
        <div class=" flex sm:flex-row flex-grow flex-col py-4  w-full ">
            <div class="px-4 w-1/4">
                <Menu setShowNavBar={(value) => setShowNavBar(value)} showNavBar={showNavBar} />
            </div>
            <main role="main" class="flex-grow pt-1 px-3 w-3/4">
                {showNavBar &&
                    <NavBar handleChangeContent={(value) => setContent(value)} />
                }
                <Content content={content} />
            </main>
        </div>
    );
}

export default Index;