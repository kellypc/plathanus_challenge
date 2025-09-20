import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["image", "indicator"]
  static values = { index: Number, interval: Number }

  connect() {
    if (this.indexValue == null) this.indexValue = 2
    if (this.intervalValue == null) this.intervalValue = 5000

    if (this.imageTargets.length === 0) return

    // Garantir que todas as imagens carregaram
    const promises = this.imageTargets.map(img => 
      img.complete ? Promise.resolve() : new Promise(resolve => img.addEventListener('load', resolve))
    )

    Promise.all(promises).then(() => {
      this.indexValue = Math.min(this.indexValue, this.imageTargets.length - 1)
      this.show()
      this.startAutoplay()
    })

    // Pausar autoplay quando o mouse estiver sobre o carrossel
    this.element.addEventListener('mouseenter', () => this.stopAutoplay())
    this.element.addEventListener('mouseleave', () => this.startAutoplay())
  }

  disconnect() {
    this.stopAutoplay()
  }

  startAutoplay() {
    this.stopAutoplay()
    this.autoplayTimer = setInterval(() => this.next(), this.intervalValue)
  }

  stopAutoplay() {
    if (this.autoplayTimer) clearInterval(this.autoplayTimer)
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
      el.style.opacity = i === this.indexValue ? '1' : '0'
      el.style.zIndex = i === this.indexValue ? '10' : '0'
      el.style.pointerEvents = i === this.indexValue ? 'auto' : 'none'
    })

    if (this.hasIndicatorTargets) {
      this.indicatorTargets.forEach((dot, i) => {
        dot.classList.toggle('bg-white', i === this.indexValue)
        dot.classList.toggle('bg-gray-300', i !== this.indexValue)
        dot.style.opacity = '1'
      })
    }
  }
}
