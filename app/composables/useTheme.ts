import { ref, watch, onMounted } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  // Apply and persist theme
  function applyTheme(dark: boolean) {
    const theme = dark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
  }

  onMounted(() => {
    // 1. Try to read saved theme
    let saved: string | null = null
    try {
      saved = localStorage.getItem('theme')
    } catch {
      /* ignore */
    }

    // 2. If found, use saved theme
    if (saved === 'dark' || saved === 'light') {
      isDark.value = saved === 'dark'
    }
    // 3. Else, use system preference
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark.value = true
    }

    // 4. Apply chosen theme
    applyTheme(isDark.value)
  })

  // Watch for user toggles
  watch(isDark, (val) => applyTheme(val))

  return {
    isDark,
    toggleTheme: () => (isDark.value = !isDark.value),
  }
}