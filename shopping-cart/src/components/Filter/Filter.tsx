import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { ProductContext } from "../../context/ProductContext";
import style from '../../styles/filter.module.css'

export function Filter() {
  const { filter, handleFilter } = useContext(FilterContext)
  const { products: { maxPrice }, categories } = useContext(ProductContext)

  return (
    <section className={style.filter}>
      <label>
        desde:
        <input
        className={style.input}
          type="range"
          min={0}
          max={maxPrice}
          onChange={handleFilter.minPrice}
          value={filter.price.min}
        />
        <p>{filter.price.min}</p>
      </label>

      <label>
        hasta:
        <input
        className={style.input}
          type="range"
          min={0}
          max={maxPrice}
          onChange={handleFilter.maxPrice}
          value={filter.price.max}
        />
        <p>{filter.price.max > maxPrice ? maxPrice : filter.price.max}</p>
      </label>
      <select onChange={handleFilter.categories} className={style.categories}>
        {categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
    </section>
  )
}