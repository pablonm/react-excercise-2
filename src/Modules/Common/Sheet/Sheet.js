import React, { memo } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import * as selectors from './selectors'
import * as actions from './actions'
import Cell from './Cell/Cell'

const Sheet = ({ cells, selected, selectCell, editCell }) => {
  const selectCellHandler = index => {
    selectCell(index)
  }

  const editCellHandler = (index, value) => {
    editCell(index, value)
  }

  const Row = ({ index, style }) => (
    <div style={style}>
      <Cell
        onClick={selectCellHandler}
        selected={selected === index}
        value={cells.get(index)}
        index={index}
        onSave={editCellHandler}
      />
    </div>
  )

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={cells.size}
          itemSize={30}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  )
}

const mapStateToProps = state => ({
  cells: selectors.getCells(state)
})

const mapDispatchToProps = dispatch => ({
  editCell: (index, value) => dispatch(actions.editCell(index, value))
})

Cell.propTypes = {
  cells: propTypes.arrayOf(propTypes.string).isRequired,
  selected: propTypes.number.isRequired,
  selectCell: propTypes.func.isRequired,
  editCell: propTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Sheet))
