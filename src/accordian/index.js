import React, {useState} from "react";

const accordionData = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
];

export default function Accordian(){
    const [open, setOpen] = useState();
   
    const handleClick = (index) => {
        setOpen(index);
    }

    return(
        <div>
          {accordionData.map((user, index) => (
            <div>
                <button onClick={() => handleClick(index)}>{user.title}</button>
                {open === index && <p>{user.content}</p>}
            </div>
          ))}
        </div>
    )
}