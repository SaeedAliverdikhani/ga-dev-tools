import loadScript from "load-script"
import { store } from "./wrapRootElement"

import { gapi, loadClientAuth2 } from "gapi-script"

export const onInitialClientRender = async () => {
  // const clientId = process.env.GAPI_CLIENT_ID
  const clientId =
    "757109853889-uvjcfhd1dj0dj1pu4pfnrs62mlb44q1u.apps.googleusercontent.com"
  let SCOPE = "https://www.googleapis.com/auth/analytics.readonly"

  // if you want to use the gapi client itself
  await loadClientAuth2(gapi, clientId, SCOPE)

  loadScript("https://accounts.google.com/gsi/client", err => {
    if (err) {
      console.error("Could not load gapi")
      return
    }

    // TODO - Remove :analytics and replace it with the discovery document.
    window.gapi.load("client:auth2:analytics", () => {
      Promise.all([
        window.gapi.client.load(
          "https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"
        ),
        window.gapi.client.load(
          "https://analyticsdata.googleapis.com/$discovery/rest"
        ),
        window.gapi.client.load(
          "https://analyticsadmin.googleapis.com/$discovery/rest"
        ),
      ]).then(() => {
        window.gapi.client
          .init({
            scope: SCOPE,
            clientId,
          })
          .then(() => {
            store.dispatch({ type: "setGapi", gapi: window.gapi })
            const user = window.gapi.auth2.getAuthInstance().currentUser.get()
            store.dispatch({
              type: "setUser",
              user: user.isSignedIn() ? user : undefined,
            })
            window.gapi.auth2.getAuthInstance().currentUser.listen(user => {
              store.dispatch({
                type: "setUser",
                user: user.isSignedIn() ? user : undefined,
              })
            })
          })
          .catch(e => {
            store.dispatch({ type: "setGapi", gapi: window.gapi })
            store.dispatch({
              type: "setUser",
              user: undefined,
            })
            store.dispatch({
              type: "gapiStatus",
              status: "cannot initialize",
            })
            console.error(e)
          })
      }, console.error)
    })
  })
}
