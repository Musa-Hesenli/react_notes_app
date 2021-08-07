import React from 'react'

export const withHoc = RenderedComponent => {
    class ComponentWithHoc extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                sidebarStatus : true,
                updateWanted : false,
                updatedNoteId : null
            }
            this.sidebarStatusChanger = this.sidebarStatusChanger.bind(this);
            this.sidebarUpdateWanted = this.sidebarUpdateWanted.bind(this);
        }

        sidebarStatusChanger(status) {
            this.setState({
                sidebarStatus : status
            })
        }

        sidebarUpdateWanted(note_id) {
            this.setState({
                updateWanted : true,
                updatedNoteId : note_id
            });
        }

        render() {
            console.log(this.state);
            return <RenderedComponent {...this.state} sidebarStatusChanger={this.sidebarStatusChanger} sidebarUpdateWanted={this.sidebarStatusChanger}/>;
        }
    }
    return ComponentWithHoc;
}
