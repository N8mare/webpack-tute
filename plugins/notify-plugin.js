const pluginName = "NotifyPlugin";

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.initialize.tap(pluginName, (compilation) => {
      console.log("The webpack build process is Initialised!");
    });
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log("The webpack build process is Starting!");
    });
    compiler.hooks.done.tap(pluginName, (compilation) => {
      console.log("The webpack build process is Done!");
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
