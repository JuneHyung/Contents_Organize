# Component

## Form

* Input
  * allowClear
  * defaultValue
  * disabled
  * maxLength
  * perfix
  * suffix
  * value(v-model)

* Number Input
  * allowClear
  * defaultValue
  * disabled
  * formatter
  * max : maxValue,
  * min : minValue
  * parser
  * prefix
  * suffix
  * step
  * value

* selectBox
  * allowClear
  * showSearch : 검색할지 안할지
  * disabled
  * filterOptions
  * mode : single, multiple
  * maxTagCount
  * maxTagTextLength
  * min (tag)
  * notFounddContent : search못했을때
  * value

* checkBox
  * value
  * disabled
  * trueValue
  * falseValue
  * leftLabel
  * rightLabel

* radioButton
  * value
  * disabled
  * trueValue
  * falseValue
  * leftLabel
  * rightLabel

* textArea
* datePicker
  * allowClear
  * disabled
  * open: open state
  * value
  * format : 입력시 format
  * valueFormat : 나올때 format
  * showToday : today로 이동하는 버튼
  * today
  * ~~calendarButton(?) : true면 달력여는 버튼이 따로~~

* rangePicker
  * allowEmpty
  * allowClear
  * disabled
  * open
  * value
  * format
  * valueFormat
  * showToday
  * today


## Layout

* header
* content
* row
* column
* cell
* footer
* Divider(seperator)
* space



## ETC

* Modal
* Tab
* Notify
* image
* icon
* button
* colorPicker



## Style

| Window size | Prefix | pixel            |
| ----------- | ------ | ---------------- |
| Extra Small | xs     | Up to 599px      |
| Small       | sm     | 600px to 1023px  |
| Medium      | md     | 1024px to 1439px |
| Large       | lg     | 1440px to 1919px |
| Extra Large | xl     | 1920px and up    |

### margin

ma - left, right, top, bottom

mx - left, right

my - top, bottom

ml-left | mr-right | mt-top | mb-bottom

* xs - 4px
* sm - 8px
* md - 12px
* lg  - 16px
* xl - 20px



### padding

pa - left, right, top, bottom

px - left, right

py - top, bottom

pl-left | pr-right | pt-top | pb-bottom

* xs - 4px
* sm - 8px
* md - 12px
* lg  - 16px
* xl - 20px



## Color

* red
* pink
* purple
* deep-purple
* indigo
* blue
* light-blue
* cyan
* teal
* green
* light-green
* lime
* yellow
* amber
* orange
* deep-orange
* brown
* grey
* blue-grey
* black
* white

[ColorCode](./Color.xlsx)

## 참고

[quasar.dev](quasar.dev)

https://antdv.com/components/overview

https://vuetifyjs.com/en/
