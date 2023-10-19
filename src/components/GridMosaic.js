/**
 * @param elements {Array<Element>}
 * @constructor
 */
export default function GridMosaic({ elements }) {
  return <div className="w-screen grid grid-cols-3">{elements}</div>
}
