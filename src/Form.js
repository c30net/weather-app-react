function Form(){
    return(
        <div className="Form">
               <form id="formSearch">
        <div class="row mb-3">
          <div class="col-7">
            <div class="input-group">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                id="searchContent"
              />
            </div>
          </div>
          <div class="col-2">
            <input
              type="submit"
              class="btn btn-primary"
              value="Search"
              id="submitSearch"
            />
          </div>
          <div class="col-2">
            <input
              type="button"
              class="btn btn-success"
              value="Current"
              id="currentButton"
            />
          </div>
        </div>
      </form>
        </div>
    );
}



export default Form;