import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: ['src/fen.fuzz.ts', 'src/san.fuzz.ts', 'src/uci.fuzz.ts', 'src/pgn.fuzz.ts', 'src/pgn-comment.fuzz.ts'],
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [resolve(), typescript()],
};
