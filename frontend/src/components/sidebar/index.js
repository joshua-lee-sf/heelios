import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './sidebar.css'

const SideBar = ({ setCategoryFilter, setProductTypeFilter, setColorFilter, colorFilter }) => {

    const [categoryCollapsed, setCategoryCollapsed] = useState(false);
    const [colorCollapsed, setColorCollapsed] = useState(false);
    const [productTypeCollapsed, setProductTypeCollapsed] = useState(false);
    const history = useHistory();
    const colorsArr = ["black", "grey", "white", "brown", "red", "pink", "orange", "yellow", "green", "blue", "purple", "multi-color"];
    const productTypesArr = ["shoes", "clothing"];
    const categoryArr = ['men', 'women', 'kids'];

    const handleCategoryClick = (e) => {
        if (e){
            history.push(`/products/category/${e}`)
        } else {
            history.push(`/products`);
        }
        setCategoryFilter(e);
    }

    // onChange={(e) => setCategoryFilter(e.target.value)}

    return(
        <div className="sidebar-container">
            <div className="sidebar-item">
                <div className="sidebar-heading" onClick={() => setCategoryCollapsed(!categoryCollapsed)}>
                    <h1>Category </h1>
                    {categoryCollapsed ? <GoChevronDown className="arrow"/> : <GoChevronUp className="arrow"/>}
                </div>
                <div className={categoryCollapsed ? "inputs-container collapsed" :"inputs-container"} onChange={(e) => handleCategoryClick(e.target.value)}>
                    <div className="inputs-label-container">
                        <label className="sidebar-label"> 
                            <input type='radio' name='category-picker' value="" className="sidebar-radio-button"/>
                            <span>All</span>
                        </label>
                    </div>
                    {categoryArr.map((category, i) => {
                        return(
                            <div className="inputs-label-container" key={`category-${i}`}>
                                <label className="sidebar-label"> 
                                    <input type='radio' name='category-picker' value={category} className="sidebar-radio-button"/>
                                    <span>{category[0].toUpperCase() + category.slice(1)}</span>
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="sidebar-item" onChange={(e) => setColorFilter(e.target.value)}>
                <div className="sidebar-heading" onClick={() => setColorCollapsed(!colorCollapsed)}>
                    <h1>Color</h1>
                    {colorCollapsed ? <GoChevronDown className="arrow"/> : <GoChevronUp className="arrow"/>}
                </div>
                <div className={colorCollapsed ? "color-selector-container collapsed" : "color-selector-container"}>
                    <div className={colorFilter === "" ? "color-selector-item selected" : "color-selector-item"}>
                        <label>
                            <input type="radio" value="" name="color-selector" />
                            <div className="all-circle"></div>
                            All
                        </label>
                    </div>
                    {colorsArr.map((color, i) => {
                        return(
                            <div className={colorFilter === `${color}` ? "color-selector-item selected" : "color-selector-item"} key={`color-${i}`}>
                                <label>
                                    <input type="radio" value={`${color}`} name="color-selector" />
                                <div className={`${color}-circle`}></div>
                                {color[0].toUpperCase().concat(color.slice(1))}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-heading" onClick={() => setProductTypeCollapsed(!productTypeCollapsed)}>
                    <h1>Product Type</h1>
                    {productTypeCollapsed ? <GoChevronDown className="arrow"/> : <GoChevronUp className="arrow"/>}
                </div>
                <div className={productTypeCollapsed ? "inputs-container collapsed" :"inputs-container"} onChange={(e) => setProductTypeFilter(e.target.value)}>
                    <div className="inputs-label-container">
                        <label className="sidebar-label">
                            <input type='radio' name='product-type-picker' value=""  className="sidebar-radio-button"/>
                            <span>All</span>
                        </label>
                    </div>
                    {productTypesArr.map((productType, i) => {
                        return(
                            <div className="inputs-label-container" key={`product-type-${i}`}>
                                <label className="sidebar-label">
                                    <input type='radio' name='product-type-picker' value={productType}  className="sidebar-radio-button"/>
                                    <span>{productType[0].toUpperCase() + productType.slice(1)}</span>
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SideBar;