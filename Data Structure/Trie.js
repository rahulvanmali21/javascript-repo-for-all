class TrieNode {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!(char in current.children)) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isWordEnd = true;
  }
  prefix(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!(char in current.children)) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }
}
