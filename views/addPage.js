const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
  
  <div>
    AUTHOR NAME<input name="name" type="string"/>
  </div>
  <div>
    EMAIL<input name="email" type="string"/>
  </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

  <div>
    CONTENT<input name="content" type="string"/>
  </div>
  <div>
    STATUS<input name="status" type="string"/>
  </div>
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);