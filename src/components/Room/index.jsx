import React, { useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams, useLocation } from "react-router-dom";


function RoomPage() {
    //decleration 
    //getting roomId 
    const { roomId  } = useParams(); 

    //getting username 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');
    console.log("username" , username )

    //initializing app
    useEffect(() => {
        initializeApp();
    }, []);


    const initializeApp = async () => {
       
        const roomID = roomId ; 
        const id = Date.now().toString()

        // token
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(806233519, "79dc5bc5dcf69148e059047e3bd1a36c", roomID,id , username || Date.now().toString());
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        //join room 
        zp.joinRoom({
            container: document.querySelector("#root"),
            sharedLinks: [{
                name: 'Personal link',
                url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            turnOnMicrophoneWhenJoining: true,
            turnOnCameraWhenJoining: true,
            showMyCameraToggleButton: true,
            showMyMicrophoneToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: true,
            showTextChat: true,
            showUserList: true,
            maxUsers: 50,
            layout: "Auto",
            showLayoutButton: true,
            screenSharingConfig : false
        });
    };

    return (
        <div>
            <div id="root"></div>
        </div>
    );
}

export default RoomPage;
