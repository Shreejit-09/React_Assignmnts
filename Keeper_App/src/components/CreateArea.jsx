import React , {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note,setNote] = useState({
    title:"" ,
    content:""
  })

  const [isExpanded , setIsExpanded] = useState(false)

  const handleChange=(event)=>{
    const {name ,value} =event.target;
    setNote((prevValue)=>{
      return {...prevValue , 
        [name]:value
      }
    })
  }

  const expand=()=>{
    setIsExpanded(true)
  }

  const handleClick=(event)=>{

    props.onAdd(note)
    event.preventDefault()
    return setNote({
      title:"" ,
      content:""
    })
  }


  return (
    <div>
      <form>

      {isExpanded &&  <input name="title" onChange= {handleChange} value={note.title} placeholder="Title" />}
       
        <textarea 
        name="content" 
        onClick ={expand}
        onChange= {handleChange} 
        value={note.content} 
        placeholder="Take a note..." 
        rows={isExpanded ? "3":"1"} />
        
  

        <Zoom in ={isExpanded} >
          
          <button onClick = {handleClick}>
          <AddIcon />
          </button>

        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;