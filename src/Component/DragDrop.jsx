import React, {useState} from 'react';
import "../App.css"
import horse from "../Assets/horse.png"
import cat from  "../Assets/cat.png"
import elephant from "../Assets/elephant.png"
import lion from "../Assets/lion.png"
import bear from "../Assets/bear.png"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
const animalCharacters = [
    {
      id: "horse",
      name: "George",
      thumb: horse
    },
    {
      id: "cat",
      name: "Garfield",
      thumb: cat
    },
    {
      id: "elephant",
      name: "Gerry",
      thumb: elephant
    },
    {
      id: "lion",
      name: "Gio",
      thumb: lion
    },
    {
      id: "bear",
      name: "Glico",
      thumb: bear
    }
  ]
function DragDrop(){
    const [characters, updateCharacters] = useState(animalCharacters);

    function handleOnDragEnd(result) {
      if (!result.destination) return;
  
      const items = Array.from(characters);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateCharacters(items);
    }
    return(
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                    {(provided) => {
                        return(
                            <ul {...provided.droppableProps} ref={provided.innerRef} >
                            {characters.map((item, index) => {
                                return(
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => {
                                        return(
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                        <div className="cardList">
                                            <img src={item.thumb} alt="" style={{width: "50px", margin: "0 19px"}}/>
                                            <p>{item.name}</p>
                                        </div>
                                        </li>
                                        )
                                    }
                                    }
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </ul>
                        )
                    }}
                </Droppable>
            </DragDropContext>
            
    )
}

export default DragDrop;
