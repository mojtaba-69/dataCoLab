import { useNavigate } from "react-router-dom";

function Index(props) {

    const { handleChangeContent } = props
    let navigate = useNavigate();

    const handleChangePage = (e) => {
        navigate(`/search/${e.target.value}`);
    }

    return (
        <div class="flex flex-row flex-wrap dark:bg-gray-800 top-0 p-4 bg-gray-100 rounded-xl w-full ">
            <button
                type="button"
                class="text-gray-800 sm:w-48 w-full
                            dark:text-gray-50
                            dark:hover:text-[#000]
                           hover:bg-[#D0D0D0]
                            focus:bg-[#D0D0D0]
                            focus:outline-none
                              font-medium
                               rounded-lg text-sm px-5 py-2.5 text-center 
                               inline-flex items-center
                                dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                onClick={(e) => handleChangeContent({ text: e.target.outerText, color: "bg-red-500" })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 sm:mx-2 mx-4 inline" viewBox="0 0 48 48" width="48px" ><path fill="#1e88e5" d="M38.59,39c-0.535,0.93-0.298,1.68-1.195,2.197C36.498,41.715,35.465,42,34.39,42H13.61 c-1.074,0-2.106-0.285-3.004-0.802C9.708,40.681,9.945,39.93,9.41,39l7.67-9h13.84L38.59,39z" /><path fill="#fbc02d" d="M27.463,6.999c1.073-0.002,2.104-0.716,3.001-0.198c0.897,0.519,1.66,1.27,2.197,2.201l10.39,17.996 c0.537,0.93,0.807,1.967,0.808,3.002c0.001,1.037-1.267,2.073-1.806,3.001l-11.127-3.005l-6.924-11.993L27.463,6.999z" /><path fill="#e53935" d="M43.86,30c0,1.04-0.27,2.07-0.81,3l-3.67,6.35c-0.53,0.78-1.21,1.4-1.99,1.85L30.92,30H43.86z" /><path fill="#4caf50" d="M5.947,33.001c-0.538-0.928-1.806-1.964-1.806-3c0.001-1.036,0.27-2.073,0.808-3.004l10.39-17.996 c0.537-0.93,1.3-1.682,2.196-2.2c0.897-0.519,1.929,0.195,3.002,0.197l3.459,11.009l-6.922,11.989L5.947,33.001z" /><path fill="#1565c0" d="M17.08,30l-6.47,11.2c-0.78-0.45-1.46-1.07-1.99-1.85L4.95,33c-0.54-0.93-0.81-1.96-0.81-3H17.08z" /><path fill="#2e7d32" d="M30.46,6.8L24,18L17.53,6.8c0.78-0.45,1.66-0.73,2.6-0.79L27.46,6C28.54,6,29.57,6.28,30.46,6.8z" /></svg>
                Google Drive
            </button>
            <button
                type="button"
                class="text-gray-800 sm:w-48 w-full
                dark:text-gray-50
                            dark:hover:text-[#000]
                           hover:bg-[#D0D0D0]
                            focus:bg-[#D0D0D0]
                            focus:outline-none
                              font-medium
                               rounded-lg text-sm px-5 py-2.5 text-center 
                               inline-flex items-center
                                dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                onClick={(e) => handleChangeContent({ text: e.target.outerText, color: "bg-orange-500" })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 sm:mx-2 mx-4 inline" fill="#000000" viewBox="0 0 32 32" width="32px" ><path d="M 7.5 4 A 2.5 2.5 0 0 0 7.5 9 A 2.5 2.5 0 0 0 8.8320312 8.6113281 L 16.318359 14.251953 C 15.494802 15.279183 15 16.5808 15 18 C 15 19.551691 15.594081 20.960309 16.560547 22.025391 L 13.515625 25.070312 A 2 2 0 0 0 13 25 A 2 2 0 0 0 13 29 A 2 2 0 0 0 14.929688 26.484375 L 18.138672 23.275391 C 18.139161 23.275657 18.140136 23.275125 18.140625 23.275391 C 18.990789 23.737195 19.964375 24 21 24 C 24.314 24 27 21.314 27 18 C 27 15.0276 24.836666 12.566888 22 12.089844 L 22 8.7304688 A 2 2 0 0 0 21 5 A 2 2 0 0 0 20 8.7304688 L 20 12.089844 C 19.221485 12.220767 18.495614 12.502316 17.849609 12.902344 L 9.9570312 6.9550781 A 2.5 2.5 0 0 0 7.5 4 z M 21 15 C 22.654 15 24 16.346 24 18 C 24 19.654 22.654 21 21 21 C 19.346 21 18 19.654 18 18 C 18 16.346 19.346 15 21 15 z" /></svg>
                Hubspot
            </button>
            <button
                type="button"
                class="text-gray-800 sm:w-48 w-full
                            dark:text-gray-50
                            dark:hover:text-[#000]
                           hover:bg-[#D0D0D0]
                            focus:bg-[#D0D0D0]
                            focus:outline-none
                              font-medium
                               rounded-lg text-sm px-5 py-2.5 text-center 
                               inline-flex items-center
                                dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                onClick={(e) => handleChangeContent({ text: e.target.outerText, color: "bg-gray-500" })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 sm:mx-2 mx-4 inline" width="512" viewBox="0 0 512 512" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M128 32C74.9807 32 32 74.9807 32 128V384C32 437.019 74.9807 480 128 480H384C437.019 480 480 437.019 480 384V128C480 74.9807 437.019 32 384 32H128ZM200 108C180.118 108 164 124.118 164 144V384C164 395.046 172.954 404 184 404C195.046 404 204 395.046 204 384V276H296C342.392 276 380 238.392 380 192C380 145.608 342.392 108 296 108H200ZM296 236H204V148H296C320.301 148 340 167.699 340 192C340 216.301 320.301 236 296 236Z" fill="black" />
                </svg>
                Pipedrive
            </button>
            <div class="grow">
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                        type="search"
                        id="search"
                        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I am looking for" required
                        onKeyDown={(e) => handleChangePage(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Index;