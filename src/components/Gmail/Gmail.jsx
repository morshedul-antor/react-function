import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import React, { useState, useEffect } from 'react'
import { FiAirplay } from 'react-icons/fi'
import classes from './Gmail.module.css'

export default function Gmail() {
    const [user, setUser] = useState([])
    const [profile, setProfile] = useState(null)

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    })

    useEffect(() => {
        let controller = new AbortController()
        let dataFetch = async () => {
            let response = await fetch(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                }
            )
            let data = await response.json()

            if (response.ok) {
                setProfile(data)
            }
        }
        try {
            dataFetch()
            controller.abort()
        } catch {
            setProfile([])
        }
    }, [user])

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout()
        setProfile(null)
    }

    console.log('user', user)
    console.log('profile', profile)

    return (
        <div className={classes.gmail}>
            <h2>React Google Login</h2>
            {profile ? (
                <div className={classes.flex}>
                    <img src={profile.picture} alt="user" />
                    <h3>User Logged in</h3>
                    <span>Name: {profile.name}</span>
                    <span>Email Address: {profile.email}</span>
                    <button onClick={logOut}>Log Out</button>
                </div>
            ) : (
                <div className={classes.btn} onClick={() => login()}>
                    Sign in with Google 🚀
                </div>
            )}

            <FiAirplay className={classes.icon} />
        </div>
    )
}
