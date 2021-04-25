/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_THREAD = 'reactCommentsDjango/Thread/LOAD_THREAD'
export const LOAD_THREAD_SUCCESS = 'reactCommentsDjango/Thread/LOAD_THREAD_SUCCESS'
export const LOAD_THREAD_ERROR = 'reactCommentsDjango/Thread/LOAD_THREAD_ERROR'

export const LOAD_POSTS = 'reactCommentsDjango/Thread/LOAD_POSTS'
export const LOAD_POSTS_SUCCESS = 'reactCommentsDjango/Thread/LOAD_POSTS_SUCCESS'
export const LOAD_POSTS_ERROR = 'reactCommentsDjango/Thread/LOAD_POSTS_ERROR'

export const NEW_POST = 'reactCommentsDjango/Thread/NEW_POST'
export const NEW_POST_SUCCESS = 'reactCommentsDjango/Thread/NEW_POST_SUCCESS'
export const NEW_POST_ERROR = 'reactCommentsDjango/Thread/NEW_POST_ERROR'

export const UPDATE_POST = 'reactCommentsDjango/Thread/UPDATE_POST'
export const UPDATE_POST_SUCCESS = 'reactCommentsDjango/Thread/UPDATE_POST_SUCCESS'
export const UPDATE_POST_ERROR = 'reactCommentsDjango/Thread/UPDATE_POST_ERROR'

export const DELETE_POST = 'reactCommentsDjango/Thread/DELETE_POST'
export const DELETE_POST_SUCCESS = 'reactCommentsDjango/Thread/DELETE_POST_SUCCESS'

export const VOTE_POST = 'reactCommentsDjango/Thread/VOTE_POST'
