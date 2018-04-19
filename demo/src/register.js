import Vue from 'vue'
import {
  ActionSheet,
  Alert,
  App,
  Avatar,
  Backdrop,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Column,
  Content,
  Datetime,
  Fab,
  FabButton,
  FabList,
  Footer,
  Grid,
  Header,
  Icon,
  Img,
  InfiniteScroll,
  InfiniteScrollContent,
  Input,
  Item,
  ItemDivider,
  ItemGroup,
  ItemSliding,
  ItemSlidingOptions,
  Label,
  List,
  ListHeader,
  Loading,
  Menu,
  Modal,
  Nav,
  Navbar,
  Note,
  Page,
  Picker,
  Popover,
  Radio,
  Range,
  Refresher,
  RefresherContent,
  Row,
  Searchbar,
  Segment,
  SegmentButton,
  Select,
  SelectOption,
  Spinner,
  Tab,
  Tabs,
  Textarea,
  Thumbnail,
  Toast,
  Toggle,
  Toolbar,
  ToolbarButtons,
  ToolbarTitle
} from 'vimo'

export default function () {
  Vue.prototype.$actionSheet = ActionSheet
  Vue.prototype.$loading = Loading
  Vue.prototype.$alert = Alert
  Vue.prototype.$toast = Toast
  // Vue.prototype.$toastState = ToastState
  Vue.prototype.$modal = Modal
  // Vue.prototype.$indicator = Indicator
  // Vue.prototype.$chooseCity = ChooseCity
  // Vue.prototype.$cityPicker = CityPicker
  Vue.prototype.$picker = Picker
  Vue.prototype.$popover = Popover
  // Vue.prototype.$previewImage = PreviewImage

  Vue.component(App.name, App)
  Vue.component(Nav.name, Nav)
  Vue.component(Navbar.name, Navbar)
  Vue.component(Page.name, Page)
  Vue.component(Header.name, Header)
  Vue.component(Content.name, Content)
  Vue.component(Footer.name, Footer)

  Vue.component(Avatar.name, Avatar)
  Vue.component(Backdrop.name, Backdrop)
  Vue.component(Badge.name, Badge)
  Vue.component(Button.name, Button)
  Vue.component(Card.name, Card)
  Vue.component(CardContent.name, CardContent)
  Vue.component(CardHeader.name, CardHeader)
  Vue.component(CardTitle.name, CardTitle)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(Datetime.name, Datetime)
  Vue.component(Fab.name, Fab)
  Vue.component(FabButton.name, FabButton)
  Vue.component(FabList.name, FabList)
  // Vue.component(Feedback.name, Feedback)
  Vue.component(Column.name, Column)
  Vue.component(Grid.name, Grid)
  Vue.component(Row.name, Row)
  Vue.component(Icon.name, Icon)
  Vue.component(Img.name, Img)
  Vue.component(InfiniteScroll.name, InfiniteScroll)
  Vue.component(InfiniteScrollContent.name, InfiniteScrollContent)
  Vue.component(Input.name, Input)
  Vue.component(Textarea.name, Textarea)
  Vue.component(Item.name, Item)
  Vue.component(ListHeader.name, ListHeader)
  Vue.component(ItemDivider.name, ItemDivider)
  Vue.component(ItemGroup.name, ItemGroup)
  // Vue.component(ItemCollapse.name, ItemCollapse)
  // Vue.component(ItemCollapseGroup.name, ItemCollapseGroup)
  Vue.component(ItemSliding.name, ItemSliding)
  Vue.component(ItemSlidingOptions.name, ItemSlidingOptions)
  Vue.component(Label.name, Label)
  Vue.component(List.name, List)
  Vue.component(Menu.name, Menu)
  Vue.component(Note.name, Note)
  // Vue.component(Noticebar.name, Noticebar)
  Vue.component(Radio.name, Radio)
  Vue.component(Range.name, Range)
  Vue.component(Refresher.name, Refresher)
  Vue.component(RefresherContent.name, RefresherContent)
  // Vue.component(Scroll.name, Scroll)
  // Vue.component(ScrollSegment.name, ScrollSegment)
  // Vue.component(ScrollSegmentButton.name, ScrollSegmentButton)
  Vue.component(Searchbar.name, Searchbar)
  Vue.component(Segment.name, Segment)
  Vue.component(SegmentButton.name, SegmentButton)
  Vue.component(Select.name, Select)
  Vue.component(SelectOption.name, SelectOption)
  // Vue.component(Separation.name, Separation)
  // Vue.component(Sheet.name, Sheet)
  // Vue.component(PopSheet.name, PopSheet)
  // Vue.component(SlideBox.name, SlideBox)
  // Vue.component(Slides.name, Slides)
  // Vue.component(Slide.name, Slide)
  // Vue.component(SlidesLite.name, SlidesLite)
  // Vue.component(SlideLite.name, SlideLite)
  Vue.component(Spinner.name, Spinner)
  Vue.component(Tabs.name, Tabs)
  Vue.component(Tab.name, Tab)
  Vue.component(Thumbnail.name, Thumbnail)
  Vue.component('Buttons', ToolbarButtons)
  Vue.component('Title', ToolbarTitle)
  Vue.component(Toolbar.name, Toolbar)
  Vue.component(Toggle.name, Toggle)
}