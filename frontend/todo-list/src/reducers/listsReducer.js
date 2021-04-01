const initialState = [{
        id: 0,
        title: "Todos",
        cards: [{
                id: 0,
                text: "We created a static list and static card"
            },
            {
                id: 1,
                text: "We used a mix between material UI React and styled components"
            }
        ]
    },
    {
        id: 1,
        title: "Completed",
        cards: [{
                id: 2,
                text: "We will create our first reducer"
            },
            {
                id: 3,
                text: "Render many cards on our list with static data"
            },
            {
                id: 4,
                text: "Ok whatever whatever whatever"
            }
        ]
    }

]


const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default listsReducer;