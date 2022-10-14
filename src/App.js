import './App.css';

/* components */
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';

function App() {
    return (
        <TodoTemplate>
            <TodoInsert></TodoInsert>
        </TodoTemplate>
    );
}

export default App;
