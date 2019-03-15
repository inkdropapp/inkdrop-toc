import * as React from 'react'

export default function createRemarkAnchor(OrigA) {
  return class RemarkAnchor extends React.Component {
    render() {
      const { props } = this
      if (props.href && props.href.startsWith('#')) {
        return (
          <a {...props} onClick={this.handleClickLink}>
            {props.children}
          </a>
        )
      } else if (OrigA) {
        return <OrigA {...props}>{props.children}</OrigA>
      } else {
        return <a {...props}>{props.children}</a>
      }
    }

    handleClickLink = e => {
      const { props } = this
      const mdePreview = document.querySelector('.mde-preview')
      const sectionId = decodeURIComponent(props.href)
      const section = document.querySelector(sectionId)
      mdePreview.scrollTop = section.offsetTop - mdePreview.offsetTop
      e.preventDefault()
    }
  }
}
