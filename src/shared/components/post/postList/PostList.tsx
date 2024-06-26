import { FC } from 'react'
import { useGetPosts } from '../../../utils/getPosts'
import { Loader } from '../../loader/Loader'
import { PostItem } from '../postItem/PostItem'
import classes from './PostList.module.css'

export type PostListProps = {
  className?: string;
}

export const PostList: FC<PostListProps> = () => {
  const { loading, data } = useGetPosts()

  if (loading) {
    return <Loader />
  }

  return (
    <div className={classes.root}>
      {data?.map((post) => <PostItem key={post.id} {...post} />)}
    </div>
  )
}
