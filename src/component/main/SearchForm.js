// import "../../sass/sass_component/_searchForm.scss"
import "../../sass/sass_component/_searchForm--dark.scss"
import Import from '../../assets/Import'
import SearchFormModal from "./SearchFormModal"

const SearchForm = () => {
    return (
        <aside className="search">
            <form className="form">
                <input type="text" className="form__input" placeholder="Filter by title..." />
                <div className="buttons">
                    <img src={Import("icon-filter.svg", "mobile/")} alt="filter icon" className="buttons__filter" />
                    <svg className="buttons__loupe" width="24" height="24"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="currentColor" /></svg>
                </div>
            </form>
            <SearchFormModal />
        </aside>
    );
}

export default SearchForm;