```html
<div class="notify-wrap-inner ellipsis">
    <li class="notify-scroll" style="padding: 0 10px">공지사항1</li>
</div>
```

```css

.notify-wrap-inner {
  height: 40px;
  line-height: 40px;
  width: 100px;
  background: red;
  margin-right: 40px;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.notify-wrap-inner:hover .notify-scroll {
  animation: text-scroll 2s linear infinite;
}
@keyframes text-scroll {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-120%);
  }
  50.01% {
    transform: translateX(90%);
  }
  100% {
    transform: translateX(0%);
    /* -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    -ms-transform: translateX(-100%); */
  }
}
```

