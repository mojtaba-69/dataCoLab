function Index(props) {
    return (
        <div class=" top-0 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl w-full h-full">
            <button
                type="button"
                class="text-gray-800 w-full
                        dark:text-gray-50
                         dark:hover:text-[#000]
                         hover:[color:white]
                           hover:bg-[#6864CF]
                            focus:bg-[#6864CF]
                            focus:outline-none
                              font-medium
                               rounded-lg text-sm px-5 py-2.5 text-center 
                               inline-flex items-center
                                dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                onClick={() => props.setShowNavBar(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 sm:mx-2 mx-4 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Campaigns
            </button>
            <button type="button"
                class="text-gray-800 w-full
                  dark:text-gray-50
                   dark:hover:text-[#000]
                  hover:[color:white]
                    hover:bg-[#6864CF]
                     focus:bg-[#6864CF]
                     focus:outline-none
                       font-medium
                        rounded-lg text-sm px-5 py-2.5 text-center 
                        inline-flex items-center
                         dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                onClick={() => props.setShowNavBar(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 sm:mx-2 mx-4 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
            </button>
            
        </div >
    );
}

export default Index;