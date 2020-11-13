export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER FINISHED DEVELOPING
    //token: "BQCf5kC-HuSwPjfKfTUmU-eMrLYQ7LmPILN5oTBB6DHesFAFa62Czz3jQY_jTAsHulPD-AaFTvJGPAzQkTDdFpHAAsLtUK9GrvyDkWf0OQUrXZ1BiChOmp28E_qfZY3sE4ecJ0AYIART0k0gycs3TmHvmobw4ShDMZIxWjE-YNAo-BEk",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        
        default:
            return state;
    }
}

export default reducer;