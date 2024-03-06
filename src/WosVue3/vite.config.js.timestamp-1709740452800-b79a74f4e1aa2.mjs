// vite.config.js
import { defineConfig } from "file:///F:/project/%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%912/WosVue3/node_modules/.pnpm/vite@5.1.5_sass@1.71.1/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/project/%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%912/WosVue3/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.5_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import AutoImport from "file:///F:/project/%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%912/WosVue3/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///F:/project/%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%912/WosVue3/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///F:/project/%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%912/WosVue3/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
import Icons from "file:///F:/project/%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%912/WosVue3/node_modules/.pnpm/unplugin-icons@0.18.5/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///F:/project/%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%912/WosVue3/node_modules/.pnpm/unplugin-icons@0.18.5/node_modules/unplugin-icons/dist/resolver.js";
import { createSvgIconsPlugin } from "file:///F:/project/%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%912/WosVue3/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.1.5/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\project\\\u9879\u76EE\u5F00\u53D12\\WosVue3";
var pathSrc = resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig({
  // 基本路径
  lintOnSave: false,
  base: "./",
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      "@": pathSrc
    },
    // 使用路径别名时想要省略的后缀名，可以自己增减
    extensions: [".js", ".json", ".ts"]
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
        globalsPropValue: true
      },
      vueTemplate: true,
      // 配置文件生成位置(false:关闭自动生成)
      dts: false
      // dts: "src/typings/auto-imports.d.ts",
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({ enabledCollections: ["ep"] })
      ],
      // 指定自定义组件位置(默认:src/components)
      dirs: ["src/components", "src/**/components"],
      // 配置文件位置 (false:关闭自动生成)
      dts: false
      // dts: "src/typings/components.d.ts",
    }),
    Icons({
      autoInstall: true
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(pathSrc, "assets/icons/svgs")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]"
    })
  ],
  server: {
    // 端口号
    port: 8080,
    // 监听所有地址
    host: "0.0.0.0",
    // 服务启动时是否自动打开浏览器
    open: false,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {}
  },
  // 构建配置
  build: {
    // 设置最终构建的浏览器兼容目标
    target: "es2015",
    // 构建后是否生成 source map 文件
    sourcemap: false,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2e3,
    // 消除打包大小超过500kb警告
    minify: "terser",
    // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
    terserOptions: {
      compress: {
        keep_infinity: true,
        // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true,
        // 生产环境去除 console
        drop_debugger: true
        // 生产环境去除 debugger
      },
      format: {
        comments: false
        // 删除注释
      }
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
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            extType = "media";
          } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
            extType = "img";
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = "fonts";
          }
          return `${extType}/[name].[hash].[ext]`;
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `
          @use "@/styles/variables.scss" as *;
        `
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxwcm9qZWN0XFxcXFx1OTg3OVx1NzZFRVx1NUYwMFx1NTNEMTJcXFxcV29zVnVlM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxccHJvamVjdFxcXFxcdTk4NzlcdTc2RUVcdTVGMDBcdTUzRDEyXFxcXFdvc1Z1ZTNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3Byb2plY3QvJUU5JUExJUI5JUU3JTlCJUFFJUU1JUJDJTgwJUU1JThGJTkxMi9Xb3NWdWUzL3ZpdGUuY29uZmlnLmpzXCI7Ly8gaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcblxuLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5cbi8vIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NTZGRVx1NjgwN1xuLy8gaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXG4vLyBpbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcbi8vIGltcG9ydCBFbGVtZW50UGx1cyBmcm9tICd1bnBsdWdpbi1lbGVtZW50LXBsdXMvdml0ZSdcblxuaW1wb3J0IEljb25zIGZyb20gXCJ1bnBsdWdpbi1pY29ucy92aXRlXCI7XG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tIFwidW5wbHVnaW4taWNvbnMvcmVzb2x2ZXJcIjtcblxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XG5jb25zdCBwYXRoU3JjID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICAvLyBcdTU3RkFcdTY3MkNcdThERUZcdTVGODRcbiAgICBsaW50T25TYXZlOiBmYWxzZSxcbiAgICBiYXNlOiAnLi8nLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIC8vICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICAgIFwiQFwiOiBwYXRoU3JjLFxuICAgICAgfSxcbiAgICAgICAgLy8gXHU0RjdGXHU3NTI4XHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXHU2NUY2XHU2MEYzXHU4OTgxXHU3NzAxXHU3NTY1XHU3Njg0XHU1NDBFXHU3RjAwXHU1NDBEXHVGRjBDXHU1M0VGXHU0RUU1XHU4MUVBXHU1REYxXHU1ODlFXHU1MUNGXG4gICAgICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy5qc29uJywgJy50cyddIFxuICAgIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU1M0MyXHU4MDAzXHVGRjFBIGh0dHBzOi8vZ2l0aHViLmNvbS9zeHp6L2VsZW1lbnQtcGx1cy1iZXN0LXByYWN0aWNlcy9ibG9iL21haW4vdml0ZS5jb25maWcudHNcbiAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgVnVlIFx1NzZGOFx1NTE3M1x1NTFGRFx1NjU3MFx1RkYwQ1x1NTk4Mlx1RkYxQXJlZiwgcmVhY3RpdmUsIHRvUmVmIFx1N0I0OVxuICAgICAgaW1wb3J0czogW1widnVlXCIsIFwiQHZ1ZXVzZS9jb3JlXCIsIFwicGluaWFcIiwgXCJ2dWUtcm91dGVyXCJdLFxuICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IEVsZW1lbnQgUGx1cyBcdTc2RjhcdTUxNzNcdTUxRkRcdTY1NzBcdUZGMENcdTU5ODJcdUZGMUFFbE1lc3NhZ2UsIEVsTWVzc2FnZUJveC4uLiAoXHU1RTI2XHU2ODM3XHU1RjBGKVxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpLCBJY29uc1Jlc29sdmVyKHt9KV0sXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgZmlsZXBhdGg6IFwiLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvblwiLFxuICAgICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgLy8gXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU3NTFGXHU2MjEwXHU0RjREXHU3RjZFKGZhbHNlOlx1NTE3M1x1OTVFRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMClcbiAgICAgIGR0czogZmFsc2UsXG4gICAgICAvLyBkdHM6IFwic3JjL3R5cGluZ3MvYXV0by1pbXBvcnRzLmQudHNcIixcbiAgICB9KSxcblxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBFbGVtZW50IFBsdXMgXHU3RUM0XHU0RUY2XG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU2Q0U4XHU1MThDXHU1NkZFXHU2ODA3XHU3RUM0XHU0RUY2XG4gICAgICAgIEljb25zUmVzb2x2ZXIoeyBlbmFibGVkQ29sbGVjdGlvbnM6IFtcImVwXCJdIH0pLFxuICAgICAgXSxcbiAgICAgIC8vIFx1NjMwN1x1NUI5QVx1ODFFQVx1NUI5QVx1NEU0OVx1N0VDNFx1NEVGNlx1NEY0RFx1N0Y2RShcdTlFRDhcdThCQTQ6c3JjL2NvbXBvbmVudHMpXG4gICAgICBkaXJzOiBbXCJzcmMvY29tcG9uZW50c1wiLCBcInNyYy8qKi9jb21wb25lbnRzXCJdLFxuICAgICAgLy8gXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU0RjREXHU3RjZFIChmYWxzZTpcdTUxNzNcdTk1RURcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTApXG4gICAgICBkdHM6IGZhbHNlLFxuICAgICAgLy8gZHRzOiBcInNyYy90eXBpbmdzL2NvbXBvbmVudHMuZC50c1wiLFxuICAgIH0pLFxuICAgIEljb25zKHtcbiAgICAgIGF1dG9JbnN0YWxsOiB0cnVlLFxuICAgIH0pLFxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxuICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHBhdGhTcmMsIFwiYXNzZXRzL2ljb25zL3N2Z3NcIildLFxuICAgICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcbiAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCIsXG4gICAgfSksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIC8vIFx1N0FFRlx1NTNFM1x1NTNGN1xuICAgIHBvcnQ6IDgwODAsXG4gICAgLy8gXHU3NkQxXHU1NDJDXHU2MjQwXHU2NzA5XHU1NzMwXHU1NzQwXG4gICAgaG9zdDogJzAuMC4wLjAnLFxuICAgIC8vIFx1NjcwRFx1NTJBMVx1NTQyRlx1NTJBOFx1NjVGNlx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OFxuICAgIG9wZW46IGZhbHNlLFxuICAgIC8vIFx1NTE0MVx1OEJCOFx1OERFOFx1NTdERlxuICAgIGNvcnM6IHRydWUsXG4gICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RUUzXHU3NDA2XHU4OUM0XHU1MjE5XG4gICAgcHJveHk6IHt9LFxuICB9LFxuICAvLyBcdTY3ODRcdTVFRkFcdTkxNERcdTdGNkVcbiAgYnVpbGQ6IHtcbiAgICAvLyBcdThCQkVcdTdGNkVcdTY3MDBcdTdFQzhcdTY3ODRcdTVFRkFcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTUxN0NcdTVCQjlcdTc2RUVcdTY4MDdcbiAgICB0YXJnZXQ6ICdlczIwMTUnLFxuICAgIC8vIFx1Njc4NFx1NUVGQVx1NTQwRVx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMCBzb3VyY2UgbWFwIFx1NjU4N1x1NEVGNlxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgLy8gXHU1NDJGXHU3NTI4L1x1Nzk4MVx1NzUyOCBnemlwIFx1NTM4Qlx1N0YyOVx1NTkyN1x1NUMwRlx1NjJBNVx1NTQ0QVxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCwgLy8gXHU2RDg4XHU5NjY0XHU2MjUzXHU1MzA1XHU1OTI3XHU1QzBGXHU4RDg1XHU4RkM3NTAwa2JcdThCNjZcdTU0NEFcbiAgICAgIG1pbmlmeTogXCJ0ZXJzZXJcIiwgLy8gVml0ZSAyLjYueCBcdTRFRTVcdTRFMEFcdTk3MDBcdTg5ODFcdTkxNERcdTdGNkUgbWluaWZ5OiBcInRlcnNlclwiLCB0ZXJzZXJPcHRpb25zIFx1NjI0RFx1ODBGRFx1NzUxRlx1NjU0OFxuICAgICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIGtlZXBfaW5maW5pdHk6IHRydWUsIC8vIFx1OTYzMlx1NkI2MiBJbmZpbml0eSBcdTg4QUJcdTUzOEJcdTdGMjlcdTYyMTAgMS8wXHVGRjBDXHU4RkQ5XHU1M0VGXHU4MEZEXHU0RjFBXHU1QkZDXHU4MUY0IENocm9tZSBcdTRFMEFcdTc2ODRcdTYwMjdcdTgwRkRcdTk1RUVcdTk4OThcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NTNCQlx1OTY2NCBjb25zb2xlXG4gICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSwgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1M0JCXHU5NjY0IGRlYnVnZ2VyXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZSwgLy8gXHU1MjIwXHU5NjY0XHU2Q0U4XHU5MUNBXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAvLyBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAvLyAgIFwidnVlLWkxOG5cIjogW1widnVlLWkxOG5cIl0sXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICAvLyBcdTc1MjhcdTRFOEVcdTRFQ0VcdTUxNjVcdTUzRTNcdTcwQjlcdTUyMUJcdTVFRkFcdTc2ODRcdTU3NTdcdTc2ODRcdTYyNTNcdTUzMDVcdThGOTNcdTUxRkFcdTY4M0NcdTVGMEZbbmFtZV1cdTg4NjhcdTc5M0FcdTY1ODdcdTRFRjZcdTU0MEQsW2hhc2hdXHU4ODY4XHU3OTNBXHU4QkU1XHU2NTg3XHU0RUY2XHU1MTg1XHU1QkI5aGFzaFx1NTAzQ1xuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImpzL1tuYW1lXS5baGFzaF0uanNcIixcbiAgICAgICAgICAvLyBcdTc1MjhcdTRFOEVcdTU0N0RcdTU0MERcdTRFRTNcdTc4MDFcdTYyQzZcdTUyMDZcdTY1RjZcdTUyMUJcdTVFRkFcdTc2ODRcdTUxNzFcdTRFQUJcdTU3NTdcdTc2ODRcdThGOTNcdTUxRkFcdTU0N0RcdTU0MERcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJqcy9bbmFtZV0uW2hhc2hdLmpzXCIsXG4gICAgICAgICAgLy8gXHU3NTI4XHU0RThFXHU4RjkzXHU1MUZBXHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU3Njg0XHU1NDdEXHU1NDBEXHVGRjBDW2V4dF1cdTg4NjhcdTc5M0FcdTY1ODdcdTRFRjZcdTYyNjlcdTVDNTVcdTU0MERcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGFzc2V0SW5mby5uYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgIGxldCBleHRUeXBlID0gaW5mb1tpbmZvLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1x1NjU4N1x1NEVGNlx1NEZFMVx1NjA2RicsIGFzc2V0SW5mby5uYW1lKVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAvXFwuKG1wNHx3ZWJtfG9nZ3xtcDN8d2F2fGZsYWN8YWFjKShcXD8uKik/JC9pLnRlc3QoYXNzZXRJbmZvLm5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZXh0VHlwZSA9IFwibWVkaWFcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoL1xcLihwbmd8anBlP2d8Z2lmfHN2ZykoXFw/LiopPyQvLnRlc3QoYXNzZXRJbmZvLm5hbWUpKSB7XG4gICAgICAgICAgICAgIGV4dFR5cGUgPSBcImltZ1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXFwuKHdvZmYyP3xlb3R8dHRmfG90ZikoXFw/LiopPyQvaS50ZXN0KGFzc2V0SW5mby5uYW1lKSkge1xuICAgICAgICAgICAgICBleHRUeXBlID0gXCJmb250c1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke2V4dFR5cGV9L1tuYW1lXS5baGFzaF0uW2V4dF1gO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXG4gICAgICAgICAgQHVzZSBcIkAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIgYXMgKjtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfVxuICB9XG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBR3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBT3BDLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUUxQixTQUFTLDRCQUE0QjtBQWxCckMsSUFBTSxtQ0FBbUM7QUFtQnpDLElBQU0sVUFBVSxRQUFRLGtDQUFXLEtBQUs7QUFHeEMsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQSxFQUV4QixZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUs7QUFBQSxJQUNQO0FBQUE7QUFBQSxJQUVFLFlBQVksQ0FBQyxPQUFPLFNBQVMsS0FBSztBQUFBLEVBQ3RDO0FBQUEsRUFDRixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUE7QUFBQSxJQUVILFdBQVc7QUFBQTtBQUFBLE1BRVYsU0FBUyxDQUFDLE9BQU8sZ0JBQWdCLFNBQVMsWUFBWTtBQUFBO0FBQUEsTUFFdEQsV0FBVyxDQUFDLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFBQSxNQUNwRCxVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixrQkFBa0I7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsYUFBYTtBQUFBO0FBQUEsTUFFYixLQUFLO0FBQUE7QUFBQSxJQUVQLENBQUM7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULFdBQVc7QUFBQTtBQUFBLFFBRVQsb0JBQW9CO0FBQUE7QUFBQSxRQUVwQixjQUFjLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7QUFBQSxNQUM5QztBQUFBO0FBQUEsTUFFQSxNQUFNLENBQUMsa0JBQWtCLG1CQUFtQjtBQUFBO0FBQUEsTUFFNUMsS0FBSztBQUFBO0FBQUEsSUFFUCxDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRCxxQkFBcUI7QUFBQTtBQUFBLE1BRW5CLFVBQVUsQ0FBQyxRQUFRLFNBQVMsbUJBQW1CLENBQUM7QUFBQTtBQUFBLE1BRWhELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBO0FBQUEsSUFFTixNQUFNO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQTtBQUFBLElBRU4sT0FBTyxDQUFDO0FBQUEsRUFDVjtBQUFBO0FBQUEsRUFFQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQTtBQUFBLElBRVIsV0FBVztBQUFBO0FBQUEsSUFFWCxzQkFBc0I7QUFBQSxJQUNwQix1QkFBdUI7QUFBQTtBQUFBLElBQ3ZCLFFBQVE7QUFBQTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsZUFBZTtBQUFBO0FBQUEsUUFDZixjQUFjO0FBQUE7QUFBQSxRQUNkLGVBQWU7QUFBQTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUE7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLTixnQkFBZ0I7QUFBQTtBQUFBLFFBRWhCLGdCQUFnQjtBQUFBO0FBQUEsUUFFaEIsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixnQkFBTSxPQUFPLFVBQVUsS0FBSyxNQUFNLEdBQUc7QUFDckMsY0FBSSxVQUFVLEtBQUssS0FBSyxTQUFTLENBQUM7QUFFbEMsY0FDRSw2Q0FBNkMsS0FBSyxVQUFVLElBQUksR0FDaEU7QUFDQSxzQkFBVTtBQUFBLFVBQ1osV0FBVyxnQ0FBZ0MsS0FBSyxVQUFVLElBQUksR0FBRztBQUMvRCxzQkFBVTtBQUFBLFVBQ1osV0FBVyxrQ0FBa0MsS0FBSyxVQUFVLElBQUksR0FBRztBQUNqRSxzQkFBVTtBQUFBLFVBQ1o7QUFDQSxpQkFBTyxHQUFHLE9BQU87QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0YsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsUUFDbkIsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLE1BR2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
