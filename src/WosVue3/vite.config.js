// import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// // 自动导入图标
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'
// import ElementPlus from 'unplugin-element-plus/vite'

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
const pathSrc = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
    // 基本路径
    base: './',
    resolve: {
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url))
        "@": pathSrc,
      },
        // 使用路径别名时想要省略的后缀名，可以自己增减
        extensions: ['.js', '.json', '.ts'] 
    },
  plugins: [
    vue(),
     // 自动导入参考： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
     AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue", "@vueuse/core", "pinia", "vue-router"],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ElementPlusResolver(), IconsResolver({})],
      eslintrc: {
        enabled: false,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      vueTemplate: true,
      // 配置文件生成位置(false:关闭自动生成)
      dts: false,
      // dts: "src/typings/auto-imports.d.ts",
    }),

    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({ enabledCollections: ["ep"] }),
      ],
      // 指定自定义组件位置(默认:src/components)
      dirs: ["src/components", "src/**/components"],
      // 配置文件位置 (false:关闭自动生成)
      dts: false,
      // dts: "src/typings/components.d.ts",
    }),
    Icons({
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(pathSrc, "assets/icons/svgs")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  server: {
    // 端口号
    port: 8080,
    // 监听所有地址
    host: '0.0.0.0',
    // 服务启动时是否自动打开浏览器
    open: false,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {},
  },
  // 构建配置
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: false,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false,
      chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
      minify: "terser", // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true, // 生产环境去除 debugger
        },
        format: {
          comments: false, // 删除注释
        },
      },
      rollupOptions: {
        output: {
          // manualChunks: {
          //   "vue-i18n": ["vue-i18n"],
          // },
          // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: "js/[name].[hash].js",
          // 用于命名代码拆分时创建的共享块的输出命名
          chunkFileNames: "js/[name].[hash].js",
          // 用于输出静态资源的命名，[ext]表示文件扩展名
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split(".");
            let extType = info[info.length - 1];
            // console.log('文件信息', assetInfo.name)
            if (
              /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
            ) {
              extType = "media";
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = "img";
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "fonts";
            }
            return `${extType}/[name].[hash].[ext]`;
          },
          // strict:false,
        },
      },
    },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `
          @use "@/styles/variables.scss" as *;
        `,
      },
    }
  },
  optimizeDeps: {
    include: ['jquery']
  }
})