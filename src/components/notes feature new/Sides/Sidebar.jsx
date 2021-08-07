import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ColorFilterSelector from "../../notes/ColorSelector";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../../../redux with toolkit/filterSlice";
import { createNote, updateNote } from "../../../redux with toolkit/notesSlice";

const Sidebar = ({ menuStatus, setMenuStatus, updateWanted, setUpdateWanted }) => {
  const tags = useSelector(state => getTags(state));
  const [tag, setTag] = useState('');
  const [tagError, showTagError] = useState(false);
  const [addedTags, setAddedTags] = useState([]);
  const [text, setText] = useState();
  const [color, setColor] = useState(updateWanted ? updateWanted.bg : 'green');
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(updateWanted) {
      const {text} = updateWanted;
      setText(text);
      setAddedTags([]);
    }
  }, [updateWanted])

  if (!menuStatus) {
    return "";
  }

  const handleAddTag = (e) => {
    if(e.keyCode === 13) {
      for (let tag of tags) {
        if(tag.title === e.target.value) {
          setTag('')
          console.log(tag)
          console.log(addedTags);
          if(!addedTags.includes(tag)) {
            addedTags.push(tag);
          }
          setAddedTags(addedTags);
          showTagError(false);
          break;
        } else {
          showTagError(true);
        }
      }
    }
  }
  
  const handleSaveNote = () => {
    if(updateWanted) {
      const obj = {
        id : updateWanted.id,
        bg : color,
        text : text,
        tags : addedTags
      }
      dispatch(updateNote(obj));
      setText('');
      setAddedTags([]);
      setColor('green');
      setUpdateWanted(null);
      setMenuStatus(false);
    }
    else if(color && text) {
      dispatch(createNote(text, color, addedTags));
      setMenuStatus(false);
      setTag('')
      setAddedTags([]);
      setText('')
    }
  }

  return (
    <div className="sidebar">
      
        <div className="sidebar-content">
          <div className="col-12">
            <div className="card rounded-0 border-0">
              <div className="card-header d-flex align-items-center justify-content-between">
                Add new note
                <div
                  className="close-button"
                  onClick={() => setMenuStatus(false)}
                >
                  <FontAwesomeIcon icon={faTimes} size={"2x"} />
                </div>
              </div>
              <div className="card-body border-0">
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <textarea
                      type="text"
                      rows="8"
                      className="form-control mt-2"
                      id="title"
                      placeholder="Note text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="">Event color</label>
                    <div className="mt-2">
                      <ColorFilterSelector selectedColor={color} setSelectedColor={setColor}/>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="tags">Tags</label>
                    <div className='form-control d-flex align-items-center'>
                      {
                        addedTags.map(item => {
                          return <div key={item.id} className='badge badge-pill' style={{ backgroundColor : item.color, marginRight : '5px' }}>{item.title}</div>
                        })
                      }
                      <input type="text" value={tag} className='border-0 form-control' placeholder='Add New Tag' onChange={(e) => setTag(e.target.value)} onKeyDown={(e) => handleAddTag(e)}/>
                    </div>
                      { tagError ? (<span className='' >Tag must be one of the &nbsp;
                       {Array.from({ length : tags.length }).map((_, idx) => {
                        return (<React.Fragment key={idx}><code>{tags[idx].title}</code>, </React.Fragment>)
                      })}</span>) : '' }
                      
                  </div>
                  <div className="form-group mt-4">
                    <button className="btn btn-primary" onClick={() => handleSaveNote()}>Save</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-outline-danger ml-2">
                      Reset
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}


export default Sidebar;