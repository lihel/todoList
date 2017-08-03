/**
 * Created by lmy on 17-8-1.
 */
class Head extends React.Component {
    render() {
        return (<div className="head">todos</div> );
    }
}

function loadHead() {
    ReactDOM.render(
        <Head/>,
        document.getElementById('head')
    );
}

function loadBtn() {
    const btn = (
        <div className="btn">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
    ReactDOM.render(btn,
        document.getElementById('footer')
    );
}


class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            work_list: []
        }

        this.Enter = this.Enter.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" ref="myWork" placeholder="What need to be done?" onKeyUp={this.Enter}/>

                <ul>
                    {
                        this.state.work_list.map(function (textValue) {
                            return <li key={textValue}>{textValue}</li>;
                        })
                    }
                </ul>

            </div>
        );
    }

    Enter(event) {
        var works = this.state.work_list;
        var work = this.refs.myWork.value;
        if (event.keyCode == 13) {
            works.push(work);
            this.setState({work_list: works});
            this.refs.myWork.value = "";
        }


    }
}

let main = ()=> {
    loadHead();
    ReactDOM.render(
        <Greeting/>,
        document.getElementById('list')
    );
    loadBtn();

}

main();
