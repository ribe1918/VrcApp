declare namespace Notification {
  interface Notification {
    id: string
    senderUsername: string
    senderUserId: string
    type: unknown
    message: string
    details: unknown
    seen: boolean
    created_at: string
  }
}

export default Notification