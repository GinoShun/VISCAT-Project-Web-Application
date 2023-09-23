import BasicTable from "./test"
import FigureOne from "./FigureOne"

export function DataVisualization () {
    return (
        <div className="preview-window">
            <div className="preview-window-content">
                <h3 className='contextData'>Data Visualization</h3>
                <div className="graphBoard">
                    <div className="graphArea1">
                        <div className="graphType1">
                            
                        </div>
                        <div className="graphSelection">
                        </div>
                    </div>
                    <div className="graphType2">
                        <h2 className='contextData'></h2>
                        <BasicTable />
                    </div>
                </div>
            </div>
        </div>
    )
}