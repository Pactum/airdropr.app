import React from 'react';

const FileButton = (props) => {
  return (
    <div>
      <input
        type="file"
        name="file"
        id="csv-file"
        className="csv-input"
        data-multiple-caption="{count} files selected"
        multiple
        onChange={e => props.setCsvFile(e.target.value)}/>
      <label htmlFor="csv-file" className="input-label">
        <span><i className="fas fa-upload" /> Choose a file...</span>
      </label>
    </div>
  )
}

export default FileButton;
