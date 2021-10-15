import React, { useState, useEffect } from "react";
import "./global.css";
import Dropdown from "react-multilevel-dropdown";
import JSONCategories from "./assets/categories.json";

const MenuInmmerce = () => {
  const [categories, setCategories] = useState(null);
  const [menuHover, setMenuHover] = useState(false);
  const [submenuHover, setSubmenuHover] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  useEffect(async () => {
    const { CategoriesTrees } = JSONCategories;

    CategoriesTrees.sort(function (a, b) {
      if (a.Name === b.Name) {
        return 0;
      }
      return a.Name > b.Name ? 1 : -1;
    });

    setCategories(CategoriesTrees);
  }, [JSONCategories]);

  return (
    <nav className="nav-chilemat-menu">
      <Dropdown
        title=" Todas las categorias"
        buttonClassName="button-white"
        menuClassName="menu-inner"
      >
        <ul>
          {categories &&
            categories.map((department) => {
              return (
                <Dropdown.Item key={department.Id} className="department-menu">
                  <a href={`${department.LinkEncoded}`}>{department.Name}</a>
                  {department.Children.length !== 0 && (
                    <Dropdown.Submenu className="category-menu">
                      {department.Children.map((category) => {
                        return (
                          <Dropdown.Item
                            key={category.Id}
                            className="subcategory-menu"
                          >
                            <a href={category.LinkEncoded}>{category.Name}</a>
                            {/* {category.Children.length !== 0 && (
                              <Dropdown.Submenu className="sub-subcategory-menu">
                                {category.Children.map((subcategory) => {
                                  return (
                                    <Dropdown.Item
                                      key={subcategory.Id}
                                      className="subsubcategory-menu"
                                    >
                                      <a href={subcategory.LinkEncoded}>
                                        {subcategory.Name}
                                      </a>
                                    </Dropdown.Item>
                                  );
                                })}
                              </Dropdown.Submenu>
                            )} */}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Submenu>
                  )}
                </Dropdown.Item>
              );
            })}
        </ul>
      </Dropdown>
      <a
        href="/construccion?map=category-1"
        className="no-underline lh-copy black-90 t-small b link"
      >
        Construcción
      </a>
      <a
        href="/herramientas?map=category-1"
        className="no-underline lh-copy black-90 t-small b link"
      >
        Herramientas
      </a>
      <a
        href="/maquinarias?map=category-1"
        className="no-underline lh-copy black-90 t-small b link"
      >
        Maquinarias
      </a>
      <a
        href="/climatizacion?map=category-1"
        className="no-underline lh-copy black-90 t-small b link"
      >
        Climatización
      </a>
      <a
        href="/ofertas"
        className="no-underline ph3 flex items-center lh-copy c-emphasis link t-small b compra-premiada-link"
        style={{ height: "100%" }}
      >
         Ofertas
      </a>
    </nav>
  );
};

export default MenuInmmerce;
