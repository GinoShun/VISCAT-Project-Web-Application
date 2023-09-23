import React from 'react'
import BasicTable from './test'
export function RawData () {
  return (
    <div className="preview-window">
      <div className="preview-window-content">
        <h3 className="contextData">Raw Data</h3>
        <div className="rawDataArea">
          <BasicTable />
        </div>
      </div>
    </div>
  )
}
