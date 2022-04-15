import { ThemeProvider } from 'styled-components';
import { Box } from './components/Box';
import { customTheme } from './constants/theme';
import { SoundGallery } from './components/SoundGallery';
import { Article } from './components/Article';
import soundsMock from './__mock__/sounds.json';
import articlesMock from './__mock__/articles.json';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        as="main"
        minHeight={['auto', 'auto', '100vh']}
        minWidth="320px"
        display="flex"
        flexWrap="wrap"
      >
        <Box width={[1, 1 / 2]}>
          <SoundGallery items={soundsMock} />
        </Box>
        <Box
          display="flex"
          alignItems={['flex-start', 'center']}
          width={[1, 1 / 2]}
          paddingX={[5, 8, 8]}
          paddingY={[5, 7, 7]}
        >
          <Article
            title={articlesMock[0].title}
            text={articlesMock[0].content}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
