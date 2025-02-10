import { IoSearchSharp } from "react-icons/io5";
import styles from './SearchBox.module.css'
function SearchBox({search,setSearch,searchHandler}) {
  return (
    <div className={styles.search}>
        <input type="text" name="" value={search} placeholder="Search title" onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
        <button onClick={searchHandler}><IoSearchSharp/></button>
    </div>
  )
}

export default SearchBox