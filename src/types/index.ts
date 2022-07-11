import React from 'react';
import { SearchActions,SearchStates } from './Search';

export type RootActions = SearchActions;
export type RootStates = { search: SearchStates };
