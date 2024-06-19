import { JWT, Session, User } from "next-auth/next"
//tokenをサーバーセッションで管理するためにデフォルトの型定義を拡張しています
declare module "next-auth" {
  interface Session {
    accessToken: string
    user: {
      id: string
      accessToken: string
    } & Session["user"]
  }
  interface User {
    access_token: string
  }
  interface JWT {
    access_token: string
  }
}
