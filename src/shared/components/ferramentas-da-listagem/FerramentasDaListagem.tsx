import { Box, Button, Icon, InputAdornment, Paper, TextField, useTheme } from '@mui/material';

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;

  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
}) => {

  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      paddingX={2}
      padding={1}
      display="flex"
      alignItems="center"
      gap={1}
      component={Paper}
    >
      {mostrarInputBusca && (
        <TextField
          size="small"
          value={textoDaBusca}
          placeholder="Pesquisar..."
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            endIcon={<Icon>add</Icon>}
            onClick={aoClicarEmNovo}
          >{textoBotaoNovo}</Button>
        )}
      </Box>
    </Box>
  );
};
