import { defineConfig,UserConfigExport,ConfigEnv,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import {viteMockServe} from "vite-plugin-mock";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default ({command}: ConfigEnv): UserConfigExport => {
  const  prodMock = false;
  return  {
    plugins: [
        vue(),
        Components({
          resolvers: [VantResolver()]
        }),
        viteMockServe({
          mockPath: './src/mock',
          localEnabled:  command === 'serve',
          prodEnabled: command !== 'serve' && prodMock,
          supportTs: true,
          injectCode:
              ` import { setupProdMockServer } from './src/mock/index';
                setupProdMockServer(); 
              `,
          watchFiles: true, // 监听文件内容变更
          injectFile: resolve("src/main.ts"), // 在main.ts注册后需要在此处注入，否则可能报找不到setupProdMockServer的错误
        })
    ],
    resolve: {
      //文件系统路径的别名, 绝对路径
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    define: {
      'process.env': {}
    },//解决vite下没有process.env的问题
    base: './',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/scss/var.scss'
        }
      }
    },
    server: {
      port: 3000,
      open: true,
      cors: true,
      proxy: {

      }
    },
    //可强制预构建链接的包。
    optimizeDeps: {
      include: ['axios']
    },
    build: {
      target: 'modules',
      outDir: 'dist',//输出路径
      assetsDir:"static", //静态资源文件夹，和outDir同级 默认assets
      sourcemap: false, // map文件
      minify: 'terser', //混淆器，terser构建后文件体积更小
      brotliSize: false,//实际不提供压缩功能，关掉提高打包速度
      terserOptions: {
        compress: {
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js', 　// 用于命名代码拆分时创建的共享块的输出命名
          entryFileNames: 'static/js/[name]-[hash].js',　// 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          assetFileNames: 'static/js/[ext]/[name]-[hash].[ext]'　// 用于输出静态资源的命名，[ext]表示文件扩展名
        }
      }
    }
  }
}

