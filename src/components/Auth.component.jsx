import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth, db } from '../configs/firebase.config';
import { ref, set } from "firebase/database";

const AuthComponent = () => {

    const [playerId, setPlayerId] = useState(null);
    const [playerRef, setplayerRef] = useState(null);

    const AnonymouslySignIn = async () => {
        try {
            const res = await signInAnonymously(auth)
            const resRef = ref(db, `player/${res.user.uid}`)
            await set(resRef, {
                id: res.user.uid,
                ships: [],
            });
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            setPlayerId(user.uid);
        } else {
            console.log("Error on User.")
        }
    })
    
    return (
        <div>
            <button onClick={AnonymouslySignIn}>Sign In</button>
            {console.log(playerId)}
        </div>
    )
}

export default AuthComponent;