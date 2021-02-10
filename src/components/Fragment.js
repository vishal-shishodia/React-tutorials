import React ,{Component} from 'react'
import Columns from './Columns'

function FragmentDemo(){
    // return(
    //     <React.Fragment>
    //         <h1>Fragment</h1>
    //         <p>This is Fragment.</p>
    //     </React.Fragment>
    // )

    return(
        <table>
            <tbody>
                <tr>
                    <Columns/>
                </tr>
            </tbody>
        </table>
    )
}
export default FragmentDemo