import React from 'react'

function Table() {
    return (
        <div className='mainTable'>
            <h2 className='captionTable'>Top Courses</h2>
            <table className='table' >

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Categorie</th>
                        <th>Student</th>
                        <th>Chapter</th>
                        <th>Video</th>
                        <th>Actor</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{borderRadius:'5px'}} /></td>
                        <td>ReactJs Nâng Cao</td>
                        <td>FrontEnd</td>
                        <td>650</td>
                        <td>10</td>
                        <td>30</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Public</td>
                    </tr>
                    <tr>
                        <td><span>2</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{borderRadius:'5px'}} /></td>
                        <td>ReactJs Nâng Cao</td>
                        <td>FrontEnd</td>
                        <td>650</td>
                        <td>10</td>
                        <td>30</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Public</td>
                    </tr>
                    <tr>
                        <td><span>3</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{borderRadius:'5px'}} /></td>
                        <td>ReactJs Nâng Cao</td>
                        <td>FrontEnd</td>
                        <td>650</td>
                        <td>10</td>
                        <td>30</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Public</td>
                    </tr>
                    <tr>
                        <td><span>4</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{borderRadius:'5px'}} /></td>
                        <td>ReactJs Nâng Cao</td>
                        <td>FrontEnd</td>
                        <td>650</td>
                        <td>10</td>
                        <td>30</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Public</td>
                    </tr>
                    <tr>
                        <td><span>5</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{borderRadius:'5px'}} /></td>
                        <td>ReactJs Nâng Cao</td>
                        <td>FrontEnd</td>
                        <td>650</td>
                        <td>10</td>
                        <td>30</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Public</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Table