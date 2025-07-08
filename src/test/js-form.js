import React, {useEffect, useState, useRef} from "react";


export default function FormSection(){
    const getInitialValues = () => {
        const savedFields = localStorage.getItem("fields");
       return savedFields ? JSON.parse(savedFields) : { firstName: "", lastName: "", email: "", number: "" };
    }

    const [fields, setFields] = useState(getInitialValues());
    const debounceTimer = useRef(null);


    const handleChange = (e, fieldName) => {
        const value = e.target.value;
        setFields((prev) => (
            {
                ...prev,
                [fieldName]: value
            }
        ))
    }

    const resetFields = () => {
        const defaultValues = {
            firstName: "",
            lastName: "",
            email: "",
            number: ""
        };
        setFields(defaultValues)
        localStorage.setItem("fields", JSON.stringify(defaultValues));
    }

    useEffect(() => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
      
        debounceTimer.current = setTimeout(() => {
            localStorage.setItem("fields", JSON.stringify(fields));
            console.log("Auto-saved to localStorage");
        }, 5000);

        return () => clearTimeout(debounceTimer.current);
        
    }, [fields])

    return (
        <div>
            <form style={{display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px"}} onSubmit={(e) => e.preventDefault()}>
                <label>First Name<input type="text" placeholder="Enter your first name" value={fields.firstName} onChange={(e) => handleChange(e, "firstName")}/></label>
                <label>Last Name<input type="text" placeholder="Enter your Last name" value={fields.lastName} onChange={(e) => handleChange(e, "lastName")}/></label>
                <label>Email<input type="email" placeholder="Enter your email" value={fields.email} onChange={(e) => handleChange(e, "email")}/></label>
                <label>Phone number<input type="number" placeholder="Enter your phone number" value={fields.number} onChange={(e) => handleChange(e, "number")}/></label>
            </form>
            <button style={{width: "300px", margin: "auto"}} onClick={resetFields}>Reset fields</button>
        </div>
    )
}