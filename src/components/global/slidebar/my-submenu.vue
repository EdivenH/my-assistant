<template>
<div>
  <li class="treeview" @click="toggleShowMenu">
      <a href="#" data-show=false style="color: white">
          <slot name="icon"></slot>
          <span class="menutilte"><slot name="submenu-title"></slot></span>
          <span class="targetIcon">
          <i class='iconfont icon-xiala1' style='color:white'></i></span>
      </a>
      </li>
      <ul class="treeview-menu" style="display: none">
          <slot></slot>
      </ul>
</div>

</template>
<script>
export default {
  name: 'my-submenu',
  methods: {
      toggleShowMenu (e) {
      let setTarget = e.currentTarget.nextElementSibling;
      if (setTarget !== null) {
        let showCon = setTarget.classList.contains('openMenu');
        let childLi = setTarget.children;
        var totalHeight = 0;
        let h = e.currentTarget;
        var targetIcon = h.querySelectorAll('.targetIcon')[0]; // todo: h是当前的元素
        let nodeListArr = Array.prototype.slice.call(childLi)
        if (!showCon) {
          setTarget.style.height = 0;
          setTarget.classList.add('openMenu');
          targetIcon.classList.add('openIcon');
          // targetIcon.classList.add('icon-shouqi');
          // targetIcon.classList.remove('icon-xiala1');
          setTarget.style.overflow = 'hidden';
          setTarget.style.display = 'block';
          for (let i = 0; i < nodeListArr.length; i++) {
            totalHeight = totalHeight + nodeListArr[i].offsetHeight;
          }
          setTimeout(() => {
            setTarget.style.height = totalHeight + 'px';
            setTimeout(() => {
              setTarget.removeAttribute('style');
              setTarget.style.display = 'block';
            }, 300)
          }, 40)
        } else {
          targetIcon.classList.remove('openIcon')
          // targetIcon.classList.add('icon-xiala1');
          // targetIcon.classList.remove('icon-shouqi');
          setTarget.style.height = setTarget.offsetHeight + 'px'
          setTarget.style.overflow = 'hidden'
          setTarget.classList.remove('openMenu')
          setTimeout(() => {
            setTarget.style.height = 0 + 'px'
            setTimeout(() => {
              setTarget.removeAttribute('style')
              setTarget.style.display = 'none'
            }, 300)
          }, 40)
        }
      }
    }
  }
}
</script>

