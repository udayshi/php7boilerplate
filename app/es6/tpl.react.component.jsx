import React, { Component } from "react";
import ReactDOM from "react-dom";
class DumbComp extends React.Component {
    reportParent(e){
        this.props.cb(this.props.data.name);
    }

    render=()=> <li onClick={this.reportParent.bind(this)}>{this.props.data.name} - {this.props.data.age} </li>
}

class HelloWorld extends React.Component {
    constructor(props){
        super(props);
        this.state={child_v:'',total_clicked:0,data:[]};
    }

    getName(){
        return 'Uday Shiwakoti';
    }

    componentDidMount() {

        fetch('https://reqres.in/api/users')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                this.setState({data:myJson.data});

            }.bind(this));


        console.log('hook runs after the component output has been rendered to the DOM');

    }

    componentWillReceiveProps(nextProps){
        console.log('When date is loaded on parent and passed it again after mounted.')
    }

    componentWillUnmount() {
        console.log('Will do the cleanup when this component is unmounted.')
    }

    handleClick(e){
        e.preventDefault();
        //pass the object only
        this.setState({'total_clicked':this.state.total_clicked+1});

    }

    childRead(v){
        this.setState({child_v:'Clicked Value:'+v})
    }

    render() {
        let data=[]
        data.push({name:'uday',age:40});
        data.push({name:'Sabi',age:30});
        data.push({name:'Anu',age:12});
        data.push({name:'Aru',age:12});

        const fm=data.map((r,i)=><DumbComp key={'fm_'+i} data={r} cb={this.childRead.bind(this)}/>)

        const json_out=this.state.data.map((r,i)=><li key={'json_out_'+i} >{r.first_name} - {r.last_name}</li>)
        return (
            <div>
                Hello, <i>{this.getName()}</i>!<br/>
                and you have passed property value <i>{this.props.whoami}</i><br/>
                and clicked <i>{this.state.total_clicked}</i><br/>
                <ul>{fm}</ul>
                <br/>
                {this.state.child_v}<br/>

                {json_out}

                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        );
    }
}
HelloWorld.defaultProps={
    whoami:'Family Man'
}

ReactDOM.render(
    <HelloWorld whoami="Programmer"/>,
    document.getElementById('applet_content')
);
