import { ADD_ALBUMS } from "../constants/constant"


export const addAlbums = (albums) => {
    return {
        type: ADD_ALBUMS,
        payload: albums,
    }
}