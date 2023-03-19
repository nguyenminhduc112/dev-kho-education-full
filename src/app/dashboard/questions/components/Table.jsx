import React from 'react'
// Material UI
import { Button } from '@material-ui/core'
import Link from 'next/link'
import { Pagination } from '@mui/material'
function Table() {
    return (
        <div className='mainTable'>
            <h2 className='captionTable'>List Questions</h2>
            <table className='table' >

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Actor</th>
                        <th>Catergory</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td><span>1</span></td>
                        <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
                        <td>So sánh giữa funtion component và class component</td>
                        <td>Nguyễn Minh Đức</td>
                        <td>Question</td>
                        <td>Inactive</td>
                        <td>
                            <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/questions/detail`}>Detail</Link></Button>
                            <Button variant='contained' className='btn btn-confirm'>Confirm</Button>
                            <Button variant='contained' className='btn btn-delete'>Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination count={10}  variant="outlined" shape="rounded" color="secondary" className='pagination' style={{ marginTop: 50, float: 'right', color: 'white' }} />
        </div>
    )
}

export default Table