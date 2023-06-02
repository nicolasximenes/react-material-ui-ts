import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo="Página Inicial"
      barraDeFerramentas={(
        <FerramentasDaListagem
          mostrarInputBusca
          textoBotaoNovo='Nova'
        />
      )}
    >
      <h2>Alguns elementos da página Inicial</h2>
    </LayoutBaseDePagina>
  );
};
