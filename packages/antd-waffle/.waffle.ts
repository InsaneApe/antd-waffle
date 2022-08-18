module.exports = {
  autoEntryConfig: {
    autoEntry: true,
    autoEntryFilter: ['index.tsx','ui','stories','theme','constants'],
  },
  generatorEntryConfig:{
    generator: true,
    generatorFile: {
      tsx: ['index', 'component', 'stories'],
      style:['index.less', 'index.tx']
    }
  }
}