import React, { PureComponent, Fragment } from 'react'
import propTypes from 'prop-types'
import { Input, Button } from 'antd'
import { CellContainer, Buttons } from './CellStyles'
import OutsideClickHandler from 'react-outside-click-handler'

class Cell extends PureComponent {
  state = {
    newValue: null,
    selected: false
  }
  saveHandler = e => {
    const { index, onSave, value } = this.props
    const { newValue } = this.state
    onSave(index, newValue || value)
  }
  changeHanler = e => this.setState({ newValue: e.target.value })
  cancelHandler = () => this.setState({ newValue: null })
  unselect = () => this.setState({ selected: false })
  select = () => this.setState({ selected: true })

  render() {
    const { value, index } = this.props
    const { newValue, selected } = this.state
    return (
      <OutsideClickHandler onOutsideClick={this.unselect}>
        <CellContainer
          onClick={this.select}
          selected={selected}
          odd={index % 2 !== 0}
        >
          {selected ? (
            <Fragment>
              <Input
                autoFocus
                value={newValue || value}
                onChange={this.changeHanler}
              />
              {newValue && (
                <Buttons>
                  <Button
                    type="primary"
                    size="small"
                    icon="save"
                    onClick={this.saveHandler}
                  >
                    Save
                  </Button>
                  <Button size="small" onClick={this.cancelHandler}>
                    Cancel
                  </Button>
                </Buttons>
              )}
            </Fragment>
          ) : (
            value
          )}
        </CellContainer>
      </OutsideClickHandler>
    )
  }
}

Cell.propTypes = {
  index: propTypes.number.isRequired,
  onSave: propTypes.func.isRequired,
  value: propTypes.string.isRequired
}

export default Cell
