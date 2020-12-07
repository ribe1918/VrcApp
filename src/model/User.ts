import SpecialType from './SpecialType'

declare namespace User {

  import State = SpecialType.State
  import Status = SpecialType.Status
  import DeveloperType = SpecialType.DeveloperType

  interface User {
    username: string
    displayName: string
    id: string
    bio: string
    bioLinks: string[]
    userIcon: string
    state: State
    status: Status
    statusDescription: string
    currentAvatarImageUrl: string
    currentAvatarThumbnailImageUrl: string
    last_login: string
    last_platform: string
    allowAvatarCopying: boolean
    tags: string[]
    developerType: DeveloperType
    isFriend: boolean
    friendKey: string
    location: any // location
    worldId: string
    instanceId: any // location
  }

  interface CurrentUser {
    username: string
    displayName: string
    pastDisplayNames: PastDisplayName[]
    id: string
    bio: string
    bioLinks: string[]
    email: string
    emailVerified: boolean
    hasEmail: boolean
    hasPendingEmail: boolean
    obfuscatedEmail: string
    obfuscatedPendingEmail: string
    steamId: string
    steamDetails: []
    oculusId: string
    acceptedTOSVersion: number
    hasBirthday: boolean
    friends: []
    onlineFriends: []
    activeFriends: []
    offlineFriends: []
    friendGroupNames: []
    state: State
    status: Status
    statusDescription: string
    currentAvatar: string
    currentAvatarAssetUrl: string
    currentAvatarImageUrl: string
    currentAvatarThumbnailImageUrl :string
    homeLocation: string
    last_login: string
    last_platform: string
    hasLoggedInFromClient: string
    twoFactorAuthEnabled: boolean
    allowAvatarCopying: boolean
    accountDeletionDate: string | null
    unsubscribe: boolean
    tags: string[]
    feature?: Feature
    developerType: DeveloperType
    isFriend: boolean
    friendKey: string
  }

  interface LimitedUser {
    username: string
    displayName: string
    id: string
    bio: string
    status: string
    currentAvatarImageUrl: string
    currentAvatarThumbnailImageUrl: string
    last_platform: string
    tags: string[]
    developerType: string
    isFriend: boolean
    location: any
  }

  interface Feature {
    twoFactorAuth: boolean
  }

  interface PastDisplayName {
    displayName: string
    updated_at: string
  }
}

export default User