import { ITable } from "../../../types"
import "./Table.css"

const Table = ({ head, body }: ITable) => {
  return (
    <table>
      <thead>
        <tr>
          {head.map((item, index) => {
            return <th key={index}>{item}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {body}
      </tbody>
      <tfoot>
        <tr>
          <td>
            Admin: {body?.toString().length}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Table
