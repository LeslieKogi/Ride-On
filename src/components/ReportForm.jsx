import React from 'react'

function ReportForm() {
  return (
    <form className="max-w-sm mx-auto bg-red-300 p-5 border border-rounded mt-12">
      <div>
        <label>Report</label>
        <input type="checkbox" />
      </div>
      <label>Comment on report</label>
      <input type="text" />
    </form>
  );
}
export default ReportForm