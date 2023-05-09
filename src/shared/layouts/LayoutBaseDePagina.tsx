import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useAppDrawerContext } from '../contexts';


interface ILayoutBaseDePaginalProps {
  titulo: string;
  barraDeFerramentas?: React.ReactNode;

  children: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginalProps> = ({ children, titulo, barraDeFerramentas }) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { toggleDrawerOpen } = useAppDrawerContext();

  return (
    <Box display="flex" flexDirection="column" gap={1} height="100%">
      <Box display="flex" alignItems="center" gap={1} padding={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>

        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="elipsis"
          component="h2"
        >
          {titulo}
        </Typography>

      </Box>

      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>
      )}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
