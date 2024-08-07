import TicTacToe from '../components/TicTacToe';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Tic-Tac-Toe Game</h1>
      <TicTacToe />
    </div>
  );
};

export default Index;
