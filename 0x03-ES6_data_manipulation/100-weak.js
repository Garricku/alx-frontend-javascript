export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  const { protocol, name } = endpoint;
  const key = `${protocol}-${name}`;

  const count = weakMap.get(key) || 0;
  weakMap.set(key, count + 1);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
