import { createStore } from 'redux';

const INITAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "Iniciando com React",
            lessons: [
                { id: 1, title: "Primeira aula" },
                { id: 2, title: "Segunda aula" }
            ],
        },
        {
            id: 2,
            title: "Aprendendo com React",
            lessons: [
                { id: 3, title: "Terceira aula" },
                { id: 3, title: "Quarta aula" }
            ],
        },
    ]
};

function reducer(state = INITAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return { 
            ...state, 
            activeLesson: action.lesson, 
            activeModule: action.module 
        };
    }

    return state;
}
const store = createStore(reducer);

export default store;
