import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo="Página Inicial"
      barraDeFerramentas={(
        <FerramentasDeDetalhe mostrarBotaoSalvarEFechar />
      )}
    >
      <h2>Alguns elementos da página Inicial</h2>
    </LayoutBaseDePagina>
  );
};
