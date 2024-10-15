
import { useNavigate } from 'react-router-dom';
import './Error.css'; 

const Error = () => {
  const navigate = useNavigate();

  const voltar = () => {
    navigate('/'); 
  };

  return (
    <div className="error-container">
      <div className="error-overlay"></div>
      <div className="error-content">
        <h1 className="error-messagee">Opps! Não encontramos essa página</h1>
        <button className="error-button" onClick={voltar}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Error;
