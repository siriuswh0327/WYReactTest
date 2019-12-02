import React,{Component} from 'react';

class InputNumber extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || this.props.defaultValue
        }    
    }

    handleInput =  (e) => {
        console.log(e.target.value)
        this.setState({value: e.target.value})
    }

    render () {
        //根据value属性判断当前组件是受控组件还是非受控组件
        const inputValue = !!this.props.value;
        let inputDom = inputValue 
                            ? (<input type="text" value={this.state.value} onChange={this.handleInput} />)
                            : (<input type="text" defaultValue={this.state.value} ref={ x => (this.value = x)} onChange={this.handleInput}/>)

        return (
            <div>
                {inputDom}
            </div>
        )
    }
}
  
export default InputNumber;