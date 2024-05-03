import { FC } from 'react';
import classes from './PostItem.module.css';
import { PostType } from '../../../types/postType';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import ThumbUpIcon from"../../../../assets/thumbUp.svg" 
import CommentIcon from"../../../../assets/comment-2-svgrepo-com.svg"
import { Icon } from '../../icon/Icon';

export type PostItemProps = {
  className?: string;
} & PostType

export const PostItem: FC<PostItemProps> = ({ body, userId }) => {

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar>
              {userId}
            </Avatar>
          }
          sx={{
            borderRadius: 10
          }}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="bottomText.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          className={classes.img}
          image="https://media.licdn.com/dms/image/D5622AQHtqidKgMxYYw/feedshare-shrink_2048_1536/0/1714638841190?e=1717632000&v=beta&t=2wHPPT0evHECoANM_JviWhAkPI8GceOOAuxX9jMBLok"
          alt="Paella dish"
        />
        <div className={classes.horizontalLine} />
        <div className={classes.actions}>
          <Icon icon={ThumbUpIcon} alt="ThumbUp Icon" bottomText='Like' />
          <Icon icon={CommentIcon} alt="Comment Icon" bottomText='Comment' />
          <Icon icon={ThumbUpIcon} alt="ThumbUp Icon" bottomText='Like' />
          <Icon icon={CommentIcon} alt="Comment Icon" bottomText='Comment' />
        </div>
      </Card>
    </div>
  );
};
