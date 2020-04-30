import React from  'react';
import { Card , CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from 'reactstrap'
class MenuBar extends React.Component{

    constructor(props)
    {
        super(props);
        this.state= {
            selectedDishes:null,
        }
        
    }
    onSelectedDish(dish)
    {
        this.setState({selectedDishes:dish})
    }

    renderDish(dish){
        if (dish != null)
        {
            return(
                <Card>
                    <CardImg width="100%" obj src={dish.image} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>

                </Card>
            )
        }
        else 
        {
            return (
                <div></div>
            )
        }
    }

    render() 
        {
            const menu=this.props.dishes.map((dish) =>{
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick={()=>{this.onSelectedDish(dish)}}>
                                <CardImg width="100%" obj src={dish.image} alt={dish.name} />
                                <CardImgOverlay >
                                        <CardTitle> {dish.name} </CardTitle>
                                  </CardImgOverlay>
                        </Card>

                    </div>
                )
            })
            return (
                <div className="container">
                    <div className="row">
                            {menu}
                    </div>

                    <div className="row">
                        {this.renderDish(this.state.selectedDishes)}
                    </div>
                </div>

            )
        }



        
    }



export default MenuBar;