import React, { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Hompage() {
    // Declaration
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState('');
    const [username, setUserName] = useState('');

    // Functions
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${roomCode}?username=${username}`);
    }, [roomCode, navigate, username]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
           <h1 className="text-3xl mb-6">Welcome to Edutech</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(event) => setUserName(event.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500"
            />
            <input
                type="text"
                placeholder="Enter room code"
                value={roomCode}
                onChange={(event) => setRoomCode(event.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500"
            />
            <button
                onClick={handleJoinRoom}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                Join
            </button>
        </div>
    );
}

export default Hompage;
