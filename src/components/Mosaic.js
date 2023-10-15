/**
 * @param elements {Array<Element>}
 * @constructor
 */
export default function Mosaic({ elements }) {
  const rowSize = 4

  /**
   * @type {Array<Array<Element>>}
   */
  const rows = []

  for (let i = 0; i < elements.length; i += rowSize) {
    rows.push(elements.slice(i, i + rowSize))
  }

  return (
    <div className="w-screen">
      {rows.map((row, index) => {
        return (
          <div key={index} className="w-full max-h-fit flex">
            {row.map((element, index) => {
              return (
                <div key={index} className="flex-auto">
                  {element}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
