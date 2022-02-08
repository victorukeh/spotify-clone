export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  songs: [],
  search: '',
  searchResults: [],
  spotify: null,
  choice: null,
}

// The reducer's primary job is to listen to actions
const reducer = (state, action) => {
  console.log(action)

  // Action has a type and a payload
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }

    case 'SET_REFRESH':
      return{
        ...state,
        refresh: action.refresh
      }

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }

    case 'SET_SONGS':
      return{
        ...state,
        songs: action.songs
      }

    case 'SET_SEARCH':
      return{
        ...state,
        search: action.search
      }

    case 'SET_SEARCHRESULTS':
      return{
        ...state, 
        searchResults: action.searchResults
      }

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case 'SET_CHOOSETRACK':
      return{
        ...state, 
        chooseTrack: action.chooseTrack
      }

    case 'SET_PLAYLIST_TO_PLAY':
       return{
         ...state,
         choice: action.choice
       }     

    case 'SET_PLAYINGTRACK':
      return{
        ...state,
        playingTrack: action.playingTrack
      }
    
    case 'SET_CATEGORIES':
      return{
        ...state,
        category: action.category
      }

    case 'SET_PLAYLISTS_PER_CATEGORY':
      return{
        ...state,
        categoryPlaylist: action.categoryPlaylist
      }
    
    case 'SET_CATEGORYID':
      return{
        ...state,
        id: action.id
      }
    default:
      return state
  }
}

export default reducer
