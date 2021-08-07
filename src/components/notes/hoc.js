import React from 'react'

const HOC = Component => {
    class Container extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isUpdate : false,
                updatedNote : null
            }
            this.makeUpdate = this.makeUpdate.bind(this);
        }

        makeUpdate(note) {
            this.setState({
                isUpdate : true,
                updatedNote : note
            })
        }

        render() {
            return <Component {...this.state} makeUpdate={this.makeUpdate}/>
        }
    }
    return Container;
}

export default HOC;