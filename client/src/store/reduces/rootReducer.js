const intiState = {
    modules: [
        {id: '1', text: "Who am I?"},
        {id: '2', text: "What matters?"},
        {id: '3', text: "What's my purpose?"},
        {id: '4', text: "What's my plan?"}
    ],
    subModules: [
        {id: '1', text: "Identity", link: "/identity"},
        {id: '2', text: "Capital", link: "/capital"},
        {id: '3', text: "Passion", link: "/passion"},
        {id: '4', text: "Best Life", link: "/best life"},
        {id: '5', text: "Smart Goals", link: "/smart goals"}
    ],
    principles: [
        {id: '1', text: "WATCH", link: "/watch"},
        {id: '2', text: "READ", link: "/read"},
        {id: '3', text: "DO", link: "/do"},
    ]
}

const rootReducer = (state = intiState, action) => {
 return state;   
}

export default rootReducer