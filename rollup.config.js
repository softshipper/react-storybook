// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import setting from "./package.json";
import babel from '@rollup/plugin-babel';

export default {
    input: "./src/index.tsx",
    output: {
        file: setting.main,
        format: "es",
    },
    plugins: [typescript(), peerDepsExternal(), nodeResolve(),babel({ presets: ['@babel/preset-react'] })]
};