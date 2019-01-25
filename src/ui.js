'use strict'
const { h, Text } = require('ink')
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/tomoki_sun',
  },
  {
    label: 'Qiita',
    url: 'https://github.com/tomoki69386',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/tomoki69386',
  },
  {
    label: 'Site',
    url: 'http://tomoki69386.github.io/',
  },
  {
    label: 'Quit',
    action() {
      process.exit()
    },
  },
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>デザインできないiOSエンジニア</Text>
      <br />
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
