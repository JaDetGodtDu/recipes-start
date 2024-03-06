import "./RecipeForm.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { addCategory } from "../services/apiFacade";

const EMPTY_CATEGORY = {
    id: null,
    name: "",
    };
export default function CategoryForm() {
    const categoryToEdit = useLocation().state || null;
    const [formData, setFormData] = useState(categoryToEdit || EMPTY_CATEGORY);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newCategory = await addCategory(formData);
        alert(`${newCategory}Category added successfully!`);
        setFormData({ ...EMPTY_CATEGORY });
    };

    return (
        <>
            <h2>Category Add</h2>
            <form id="categoryForm">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>Add Category</button> 
                </form>                                                                   
        </>
    );
}