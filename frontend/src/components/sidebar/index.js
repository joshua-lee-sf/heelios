import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import { useState } from 'react';
import './sidebar.css'

const SideBar = ({ setCategoryFilter, setProductTypeFilter, setColorFilter }) => {

    const [categoryCollapsed, setCategoryCollapsed] = useState(false);
    const [colorCollapsed, setColorCollapsed] = useState(false);
    const [productTypeCollapsed, setProductTypeCollapsed] = useState(false);


    return(
        <div className="sidebar-container">
            <div className="sidebar-item">
                <div className="sidebar-heading" onClick={() => setCategoryCollapsed(!categoryCollapsed)}>
                    <h1>Category </h1>
                    {categoryCollapsed ? <GoChevronDown className="arrow" /> : <GoChevronUp className="arrow"/>}
                </div>
                <div className={categoryCollapsed ? "inputs-container collapsed" :"inputs-container"} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <div className="inputs-label-container">
                        <label className="sidebar-label"> 
                            <input type='radio' name='category-picker' value={null} className="sidebar-radio-button"/>
                            <span>All</span>
                        </label>
                    </div>
                    <div className="inputs-label-container">
                        <label className="sidebar-label"> 
                            <input type='radio' name='category-picker' value='men'  className="sidebar-radio-button"/>
                            <span>Men</span> 
                        </label>
                    </div>
                    <div className="inputs-label-container">
                        <label className="sidebar-label"> 
                            <input type='radio' name='category-picker' value='women'  className="sidebar-radio-button"/>
                            <span>Women</span> 
                        </label>
                    </div>
                    <div className="inputs-label-container">
                        <label className="sidebar-label"> 
                            <input type='radio' name='category-picker' value='kids'  className="sidebar-radio-button"/>
                            <span>Kids</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="sidebar-item" onChange={(e) => setColorFilter(e.target.value)}>
                <div className="sidebar-heading" onClick={() => setColorCollapsed(!colorCollapsed)}>
                    <h1>Color</h1>
                    {colorCollapsed ? <GoChevronDown className="arrow"/> : <GoChevronUp className="arrow"/>}
                </div>
                <div className={colorCollapsed ? "color-selector-container collapsed" : "color-selector-container"}>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="black" name="color-selector"/>
                            <div className="black-circle"></div>
                            Black
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="grey" name="color-selector"/>
                            <div className="grey-circle"></div>
                            Grey
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="white" name="color-selector"/>
                            <div className="white-circle"></div>
                            White
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="brown" name="color-selector"/>
                            <div className="brown-circle"></div>
                            Brown
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="red" name="color-selector"/>
                            <div className="red-circle"></div>
                            Red
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="pink" name="color-selector"/>
                            <div className="pink-circle"></div>
                            Pink
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="orange" name="color-selector"/>
                            <div className="orange-circle"></div>
                            Orange
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="yellow" name="color-selector"/>
                            <div className="yellow-circle"></div>
                            Yellow
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="green" name="color-selector"/>
                            <div className="green-circle"></div>
                            Green
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="blue" name="color-selector"/>
                            <div className="blue-circle"></div>
                            Blue
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="purple" name="color-selector"/>
                            <div className="purple-circle"></div>
                            Purple
                        </label>
                    </div>
                    <div className="color-selector-item">
                        <label>
                            <input type="radio" value="multi-color" name="color-selector"/>
                            <div className="multicolor-circle"></div>
                            Multi-Color
                        </label>
                    </div>
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
                            <input type='radio' name='product-type-picker' value={null}  className="sidebar-radio-button"/>
                            <span>All</span>
                        </label>
                    </div>
                    <div className="inputs-label-container">
                        <label className="sidebar-label"> 
                            <input type='radio' name='product-type-picker' value='shoes' className="sidebar-radio-button"/>
                            <span>Shoes</span> 
                        </label>
                    </div>
                    <div className="inputs-label-container">
                        <label className="sidebar-label"> 
                            <input type='radio' name='product-type-picker' value='clothing' className="sidebar-radio-button"/>
                            <span>Clothing</span> 
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;