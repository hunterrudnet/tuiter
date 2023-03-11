import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
  'tuits/findTuits', async () =>
    await service.findTuits()
)


export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId
  })

// Created this myself -- was not in the instruction set
export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (tuit) => {
        const response = await service.createTuit(tuit)
        return response
    })

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
        await service.updateTuit(tuit)
)

  
  
