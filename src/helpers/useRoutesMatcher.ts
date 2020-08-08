/**
 * Get selected route from routes map
 * @param map routes map
 * @param locationPath location pathname
 */
export default function useRoutesMatcher(
  map: Map<string[], string[]>,
  locationPath: string
) {
  /**
   * Check if path match
   * @param originalPath original path
   */
  function matchPath(originalPath: string) {
    const originalParts = originalPath.split('/')
    const pathParts = locationPath.split('/')

    if (originalParts.length !== pathParts.length) return false

    for (let index = 0; index < originalParts.length; index++) {
      const element = originalParts[index]
      if (element.startsWith(':')) {
        continue
      }

      if (pathParts[index] !== element) {
        return false
      }
    }

    return true
  }

  /**
   * Check if paths match
   * @param originalPaths app paths
   */
  function matchPaths(originalPaths: string[]) {
    for (const path of originalPaths) {
      if (matchPath(path)) {
        return true
      }
    }
    return false
  }

  function matcher() {
    for (const [key, value] of map.entries()) {
      if (matchPaths(key)) return value
    }
    return []
  }

  return matcher
}
