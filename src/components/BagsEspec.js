
function BagsEspec (props) {
        return(
            <div  className="bg-light border p-5 m-2">
                <h4>{props.bagsss.name}</h4>
                <p>{props.bagsss.category}</p>
                <p>{props.bagsss.rating}</p>
            </div>
        );
    }
export default BagsEspec;