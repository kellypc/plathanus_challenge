import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["image", "indicator"]
  static values = { index: Number }

  connect() {
    const images = this.imageTargets
    if (images.length === 0) return

    // Usar a terceira foto como cover se existir
    this.indexValue = Math.min(2, images.length - 1)

    let loadedCount = 0
    images.forEach(img => {
      if (img.complete) {
        loadedCount++
      } else {
        img.addEventListener('load', () => {
          loadedCount++
          if (loadedCount === images.length) this.show()
        })
      }
    })

    if (loadedCount === images.length) this.show()
  }

  next() {
    if (this.imageTargets.length === 0) return
    this.indexValue = (this.indexValue + 1) % this.imageTargets.length
    this.show()
  }

  prev() {
    if (this.imageTargets.length === 0) return
    this.indexValue = (this.indexValue - 1 + this.imageTargets.length) % this.imageTargets.length
    this.show()
  }

  show() {
    this.imageTargets.forEach((el, i) => {
      if (i === this.indexValue) {
        el.style.opacity = '1'
        el.style.zIndex = '10'
        el.style.pointerEvents = 'auto'
      } else {
        el.style.opacity = '0'
        el.style.zIndex = '0'
        el.style.pointerEvents = 'none'
      }
    })

    if (this.hasIndicatorTargets) {
      this.indicatorTargets.forEach((dot, i) => {
        dot.classList.toggle('bg-white', i === this.indexValue)
        dot.classList.toggle('bg-gray-300', i !== this.indexValue)
      })
    }
  }
}
