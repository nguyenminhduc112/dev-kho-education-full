import React, { useEffect } from 'react'
// React Player
import ReactPlayer from 'react-player'
// Plugin Facebook
import { FacebookProvider, Comments } from 'react-facebook';
import { getVideo } from 'Libs/fetch/video';
import { useQuery } from 'react-query';
function VideoPlayer({ videoID }) {
    const video = useQuery(['video', videoID], () => getVideo(videoID))
    const BASE_URL = "https://www.facebook.com/"
    return (
        <>
            <div className="boxVideo">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${video.data?.id_video_youtube}`} controls={true} width={`100%`} height={`567px`} />
                <h1 className="boxVideo__title">
                    {video.data?.name}
                </h1>
                <FacebookProvider appId="881373269065187">
                    <Comments href={`https://www.youtube.com/watch?v=${video.data?.id_video_youtube}`} width={`100%`} />
                </FacebookProvider>
            </div>

        </>
    )
}

export default VideoPlayer