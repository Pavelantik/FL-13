import React from 'react';


// function HeaderSection(props){
//     return (
//     <div>
//         <input type='text' onChange={this.handleChange} />
//         <button>add new</button>
//     </div>)
//     };


class HeaderSection extends React.Component {
    constructor (props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.switchAddFormVisibility = this.switchAddFormVisibility.bind(this);
        this.state = {
            isAddFormDisplayed: false
        }
    }

    handleChange(e) {
        this.props.onFilterChange(e.target.value);
      }
      switchAddFormVisibility(){
          this.setState({isAddFormDisplayed: !this.state.isAddFormDisplayed});
      }
      render() {
        return (
        <div>
            <input type='text' onChange={this.handleChange} />
            <button type='button' onClick={this.switchAddFormVisibility}>add new</button>
        </div>
        );
      }

}


export default  HeaderSection;