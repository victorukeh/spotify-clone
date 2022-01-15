export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
  songs: [],
  search: ''
    // 'BQAJtnYiJpl88FFcDfuz7klQqYJ7Q3pTuJuJLIv06pVP_sdRFxpLAKld2n0MjSW_JEfF-jwMTu4sX41bIGlh_4cDoZhQLb41JD4dBoAthMVlRGtHTtXaSYYmtsTYejUfTqa_q3y75lGQemh7bNPl6CUD_plM79vpgBmYg5KWgRcFGgfl',
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

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }

    case 'SET_REFRESH':
      return{
        ...state,
        refresh: action.refresh
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

    default:
      return state
  }
}

export default reducer
