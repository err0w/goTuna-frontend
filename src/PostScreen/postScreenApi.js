import {axiosGet} from '../httpUtility';

export async function fetchCommentList(post_id){
    const data = await axiosGet("/v1/fetch_comment_post",{"post_id":post_id});
    return data;
}