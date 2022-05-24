
import React from "react";

// class ChildComponent extends React.Component {

//     render() {
//         console.log('>>>>>check props : ', this.props);

//         let { name, age, school, arrJobs } = this.props;
//         let arr = '';
//         return (
//             <>
//                 <div>
//                     ChildComponent: {name} -  {age} - {school}
//                 </div>

//                 <div className="job-lists">
//                     {
//                         arr = arrJobs.map((item, index) => {
//                             return (
//                                 // use 'key' avoid error when sorting or filtering,...
//                                 <div key={item.id}>
//                                     {item.id} - {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }

//                     {console.log('>>check map array : ', arr)}
//                     {/* use arr to get return method map, map will render new array type:  Symbol(react.element)  */}
//                 </div>
//             </>
//         )

//     }
// }
// // - khi mà có component k dùng state( k quan tâm dữ liệu có thay đổi hay không- nhận dữ liệu (props) như nào thì render như vậy) thi khi đó sử dụng function component
//     - bản chất của function thì vẫn phải trả về : return
//     - khi dùng arrow function thay cho class function thì không dùng được this(ex: this.props)
//     - chú ý: chỉ dùng function component khi sử dụng reatc hook( chia cắt logic, ngắn gọn hơn)
//         - còn nếu không thì cứ dùng class component< bởi sau này có thể sẽ render dữ liệu,...
const ChildComponent = (props) => {
    console.log('>>>>>check child props', props);

    let { name, age, school, arrJobs } = props;
    let arr = '';
    return (
        <>
            <div>
                ChildComponent: {name} -  {age} - {school}
            </div>

            <div className="job-lists">
                {
                    arr = arrJobs.map((item, index) => {
                        return (
                            // use 'key' avoid error when sorting or filtering,...
                            <div key={item.id}>
                                {item.id} - {item.title} - {item.salary}
                            </div>
                        )
                    })
                }

                {console.log('>>check map array : ', arr)}
                {/* use arr to get return method map, map will render new array type:  Symbol(react.element)  */}
            </div>
        </>
    )
}


export default ChildComponent;