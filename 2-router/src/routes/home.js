/**
 * Created by miyaye on 18/2/6.
 */
import React from 'react';

// export default (props)=> {
//     console.log(props);
//     return <div>home</div>
// }
export default class Home extends React.Component{
    componentWillMount(){
        console.log('hi');
        this.props.history.push('/home?justgopushed=true');
    }
    render(){
        return <div>Hi</div>;
    }
}
