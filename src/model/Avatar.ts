import UnityPackage from './UnityPackage'
import SpecialType from './SpecialType'

declare namespace Avatar {

  import ReleaseStatus = SpecialType.ReleaseStatus
  import unityPackage = UnityPackage.unityPackage

  interface Avatar {
    name: string
    description: string
    id: string
    authorName: string
    authorId: string
    tags: string[]
    version: number
    featured: boolean
    created_at: string
    updated_at: string
    releaseStatus: ReleaseStatus
    assetUrl: string
    assetVersion: string
    assetUrlObject: object
    platform: string
    imageUrl: string
    thumbnailImageUrl: string
    unityVersion: string
    unityPackageUrl: string
    unityPackageUrlObject: object
    unityPackages: unityPackage[]
  }
}

export default Avatar