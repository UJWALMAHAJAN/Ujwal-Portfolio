export class CustomSplitText {
  elements: HTMLElement[];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];

  constructor(target: string | HTMLElement | HTMLElement[], options: { type?: string; linesClass?: string }) {
    const targets = typeof target === 'string' ? Array.from(document.querySelectorAll(target)) : Array.isArray(target) ? target : [target];
    this.elements = targets as HTMLElement[];
    
    this.elements.forEach(el => {
      const text = el.innerText;
      el.innerHTML = '';
      
      const words = text.split(' ');
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.className = 'split-word';
        
        const chars = word.split('');
        chars.forEach(char => {
          const charSpan = document.createElement('span');
          charSpan.innerText = char;
          charSpan.style.display = 'inline-block';
          charSpan.className = 'split-char';
          wordSpan.appendChild(charSpan);
          this.chars.push(charSpan);
        });
        
        el.appendChild(wordSpan);
        this.words.push(wordSpan);
        
        if (wordIndex < words.length - 1) {
          el.appendChild(document.createTextNode(' '));
        }
      });
      
      if (options.linesClass) {
        // Simple line splitting approach: wrap each word in a line-span if needed
        // For this portfolio, we can mostly get away with word/char splitting
        el.classList.add(options.linesClass);
      }
    });
  }

  revert() {
    this.elements.forEach(el => {
      el.innerHTML = el.innerText;
    });
  }
}
