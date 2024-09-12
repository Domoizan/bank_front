import { features } from "../../common/features";

const FeatItem=()=>{



    const content = features.map((item) => {
        return(
        <div className="feature-item" key={item.itemId}>
            <img 
            src={item.picture} 
            alt="Chat Icon" 
            className="feature-icon" />
            <h3 className="feature-item-title">{item.title}</h3>
            <p>
            {item.content}
            </p>
        </div>)
    }
    )

    return content
}

export default FeatItem