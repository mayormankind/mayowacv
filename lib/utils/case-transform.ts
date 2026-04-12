// Utility functions for data transformation

/**
 * Converts snake_case to camelCase
 */
export function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Converts camelCase to snake_case
 */
export function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

/**
 * Recursively converts all keys in object from snake_case to camelCase
 */
export function keysToCamel(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(keysToCamel);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((result, key) => {
      const camelKey = snakeToCamel(key);
      result[camelKey] = keysToCamel(obj[key]);
      return result;
    }, {} as any);
  }
  return obj;
}

/**
 * Recursively converts all keys in object from camelCase to snake_case
 */
export function keysToSnake(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(keysToSnake);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((result, key) => {
      const snakeKey = camelToSnake(key);
      result[snakeKey] = keysToSnake(obj[key]);
      return result;
    }, {} as any);
  }
  return obj;
}
