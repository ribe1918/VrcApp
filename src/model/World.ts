import Avatar from './Avatar'

declare namespace World {
  import ReleaseStatus = Avatar.ReleaseStatus

  interface World {
    name: string
    description: string
    id: string
    authorName: string
    authorId: number
    tags: string[]
    version: number
    featured: boolean
    created_at: string
    updated_at: string
    releaseStatus: ReleaseStatus
    visits: number
    publicOccupants: number
    privateOccupants: number
    occupants: number
    capacity: number
    favorites: number
    popularity: number
    assetUrl: string
    assetUrlObject: string
    imageUrl: string
    thumbnailImageUrl: string
    organization: string
    heat: number
    namespace: string
    instances: string[]
    previewYoutubeId: unknown
    publicationDate: string
    labsPublicationDate: string
    pluginUrl: string
    pluginUrlObject: unknown
    unityPackageUrl: string
    unityPackageUrlObject: unknown
    unityPackages: any
  }

  interface LimitedWorld {
    name: string
    id: string
    authorName: string
    authorId: number
    tags: string[]
    created_at: string
    updated_at: string
    releaseStatus: ReleaseStatus
    visits: number
    occupants: number
    capacity: number
    favorites: number
    popularity: number
    imageUrl: string
    thumbnailImageUrl: string
    organization: string
    heat: number
    publicationDate: string
    labsPublicationDate: string
    unityPackages: any
  }

  interface Instance {
    name: string
    id: any
    type: any
    active: boolean
    n_users: number
    capacity: number
    full: boolean
    canRequstInvite: boolean
    location: any
    instanceId: any
    shortName: string
    ownerId: string
    worldId: string
    users: object
    tags: string[]
    platforms: object
    clientNumber: string
    photonRegion: string
    permanent: boolean
    hidden: string
  }
}
export default World