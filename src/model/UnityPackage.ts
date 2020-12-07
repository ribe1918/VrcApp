declare namespace UnityPackage {
  interface unityPackage {
    id: string
    platform: string
    assetUrl: string
    unityVersion: string
    unitySortNumber: number
    assetVersion: number
  }
  
  interface WorldSpecificKeys {
    created_at: string
    assetUrlObject: unknown
    pluginUrl: string
    pluginUrlObject: unknown
  }
}

export default UnityPackage