import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
      <br>
      </br>
      <TextField label='Genere' name='Genere' variant='outlined'
        value={input.name} onChange={inputHandler} />
      <br>
      </br>
      <TextField label='Book Title' name='Book' variant='outlined'
        value={input.grade} onChange={inputHandler} />
      <br>
      </br>
      <br>
      </br>
      <TextField label='Author' name='Author' variant='outlined'
        value={input.grade} onChange={inputHandler} />
        <br>
        </br>
        <TextField label='published' name='pub' variant='outlined'
        value={input.grade} onChange={inputHandler} />
        <br>
        </br>
        <TextField label='published by' name='publishes' variant='outlined'
        value={input.grade} onChange={inputHandler} />
        <br>
        </br>
      <Button variant='contained' onClick={readValues}
        color='success'>submt</Button>
    </div>
  )
}

export default Add
