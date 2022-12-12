import React, { Component } from 'react'
import axios from 'axios'

export default class PostLists extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todo: [],
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(respons => {
                this.setState({todo: respons.data})
            })
            .catch(error => {
                this.setState({ todo: error })
            })
        
   }
    render() {
        const { todo } = this.state;
    return (
        <div>
            {
                todo.length? todo.map(post=><div key = {post.id}> {post.title} </div>):null
            }
        </div>
    )
  }
}
