import { initialState } from '../state';
import WeatherReducer from './WeatherReducer';

describe('weather reducer', () => {
    it('should have empty initial state', () => {
        const state = WeatherReducer(initialState, { type: "SET_WEATHER_START" });
        expect(state).toEqual({
            ...initialState,
            forecast: [],
            isLoading: false,
            isError: false,
            location: [],
        });
    });

    it('should successfully fetch forecast data', () => {
        const weatherObject = {
            id: "test",
            date: "01.01.2021",
        };

        const state = WeatherReducer(initialState, {
            type: "SET_WEATHER_SUCCESS",
            payload: {forecast: [weatherObject]}
        });
        expect(state).toEqual({
            ...initialState,
            forecast: [weatherObject],
            isLoading: false,
            isError: false,
            location: [],
        });
    });

    it('should fetch location data', () => {
        const locationData = {
            city: "Los Angeles",
            country: "US",
        }
        const state = WeatherReducer(initialState, {
            type: "SET_LOCATION",
            payload: {location: [locationData]}
        });
        expect(state).toEqual({
            ...initialState,
            isLoading: false,
            isError: false,
            forecast: [],
            location: [locationData],
        });
    });

    it('should set loading state', () => {
        const state = WeatherReducer(initialState, {
            type: "SET_IS_LOADING",
            payload: {isLoading: true}
        });
        expect(state).toEqual({
            ...initialState,
            isLoading: true,
            isError: false,
            forecast: [],
            location: [],
        });
    });
    
    it('handle failure while fetching weather data', () => {
        const state = WeatherReducer(initialState, {
            type: "SET_WEATHER_ERROR",
            payload: {error: []}
        });
        expect(state).toEqual({
            ...initialState,
            isLoading: false,
            isError: true,
            forecast: [],
            location: [],
        });
    });


})