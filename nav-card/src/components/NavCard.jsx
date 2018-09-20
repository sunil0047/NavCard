import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import Loader from './Loader';
class NavCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[],
        isLoading:true,
    };
  }

  componentDidMount(){
      fetch('https://jsonblob.com/api/4040612b-bcdf-11e8-9ff5-cb37d8ec6690')
      .then(response=>response.json())
      .then(result=>this.setState({data:result,isLoading:false}));
  }

  handleClick=()=>{
    console.log("Hello");


  }
  render() {
      console.log(this.state.data);
      const {src,title,desp,mrsp}=this.state.data;
      if(this.state.isLoading){
          return(
              <Loader/>
          )
      }
      else{
        return (
            <div>
              <Card>
                <CardImg
                  top
                  width="10%"
                  src={this.state.data[0].src}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{this.state.data[0].title}</CardTitle>
                  <CardSubtitle>{this.state.data[0].mrsp}</CardSubtitle>
                  <CardText>
                    Some quick example.
                  </CardText>
                  <Button onClick={this.handleClick}>Add to Card</Button>
                </CardBody>
              </Card>
            </div>
        );
      }
    }
}
export default NavCard;
