import { useState } from 'react';

import Menu from '../Menu'
import NavBar from '../NavBar'
import Content from '../Content'
import Switcher from "../DarkMode/Switcher";


function Index(props) {

    const [showNavBar, setShowNavBar] = useState(false)
    const [content, setContent] = useState({ text: "Settings", color: "bg-green-500" })

    return (
        <div class=" flex sm:flex-row flex-grow flex-col py-4  w-full h-screen dark:bg-gray-900">
            <div class="px-4 sm:w-1/4 w-full">
                <Menu setShowNavBar={(value) => setShowNavBar(value)} showNavBar={showNavBar} />
            </div>
            <main role="main" class="flex-grow pt-1 px-3 sm:w-3/4 w-full">
                {showNavBar &&
                    <NavBar handleChangeContent={(value) => setContent(value)} />
                }
                <Content content={content} />
                <Switcher />
            </main>
        </div>
    );
}

export default Index;