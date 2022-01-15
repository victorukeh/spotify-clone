import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    if(!code) return
    axios
      .post(`http://localhost:5000/login`, {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null, '/')
      })
      .catch(() => {
        window.location = '/'
      })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(async () => {
      try {
        const {
          data: { access_token, expires_in },
        } = await axios.post(`http://localhost:5000/refresh`, {
          refreshToken,
        })
        setAccessToken(access_token)
        setExpiresIn(expires_in)
      } catch {
        window.location = '/'
      }
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}
