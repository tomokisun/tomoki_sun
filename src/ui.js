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
    label: 'GitHub',
    url: 'https://github.com/tomoki69386',
  },
  {
    label: 'tomokisun.eth',
    url: 'https://opensea.io/tomokisun.eth',
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
      <Text>Software Engineer</Text>
      <br />
      <Text>Co-founder and COO of ONE, inc.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
