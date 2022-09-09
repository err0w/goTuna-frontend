import {axiosGet} from '../httpUtility';

export async function fetchPostList(){
    const data = await axiosGet("/v1/feed",{});
    return data.feedList;
}