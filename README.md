# 🔗 Match Replacer

**Professional URL Segment Replacement Tool**

A modern, enterprise-grade web application designed for bulk URL processing and segment replacement using advanced pattern matching technology.

## ✨ Features

- 🚀 **Bulk URL Processing** - Process hundreds of URLs simultaneously
- 🎯 **Pattern Matching** - Advanced RegEx-based `/id/` segment replacement
- 📁 **Multiple Input Methods** - File upload, manual input, or sample data
- 💾 **Export Functionality** - Download processed results as .txt files
- 📊 **Real-time Analytics** - Live processing statistics and metrics
- 🎨 **Professional UI** - Modern, responsive design with glass-morphism effects
- ⚡ **Instant Processing** - Real-time URL transformation
- 📱 **Mobile Responsive** - Works seamlessly on all devices

## 🛠️ How It Works

Match Replacer uses JavaScript RegEx pattern matching to find and replace URL segments that come after `/id/` in any URL structure.

**Pattern Logic:**
```javascript
// Finds: /id/[anything]
// Replaces with: /id/[your-new-segment]
url.replace(/\/id\/.*/, '/id/' + newSegment)
```

**Example:**
```
Input:  https://example.com/en/id/basketball/game456.html?data=a
Pattern: football/match123.html
Output: https://example.com/en/id/football/match123.html?data=a
```

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in any modern web browser
2. Choose your input method:
   - **File Upload**: Drag & drop a .txt file with URLs (one per line)
   - **Manual Input**: Paste URLs directly into the text area
   - **Sample Data**: Use built-in demo URLs for testing
3. Enter your new URL segment (e.g., `football/match123.html`)
4. Click "Process URLs" to transform your Link
5. Export results or copy individual URLs

### Input Formats

**File Upload (.txt):**
```
https://example.com/id/old-segment1
https://another.com/id/old-segment2
https://site.com/id/old-segment3
```

**Manual Input:**
Simply paste URLs in the textarea, one per line.

## 🎯 Use Cases

- **Content Management** - Update URL structures across multiple pages
- **SEO Optimization** - Standardize URL patterns for better SEO
- **Site Migration** - Bulk update Link during website migrations
- **Development** - Generate test URLs with consistent patterns
- **Marketing** - Create campaign-specific URL variations

## 📋 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No server-side dependencies required

## 🏗️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Fonts**: Inter, JetBrains Mono
- **Icons**: Heroicons
- **Features**: 
  - Drag & Drop API
  - Clipboard API
  - File API
  - RegEx Processing

## 📸 Screenshots

### Main Interface
Professional dashboard with glass-morphism design and intuitive workflow.

### File Upload
Drag & drop interface with visual feedback and file validation.

### Results View
Clean results display with copy-to-clipboard and export functionality.

## 🎨 Design Features

- **Glass-morphism UI** - Modern translucent design elements
- **Gradient Backgrounds** - Professional color schemes
- **Smooth Animations** - Engaging micro-interactions
- **Responsive Layout** - Mobile-first design approach
- **Professional Typography** - Clean, readable font combinations
- **Status Indicators** - Real-time system status and metrics

## 🔧 Advanced Usage

### Pattern Customization
The current version focuses on `/id/` pattern replacement. The RegEx can be modified for other patterns:

```javascript
// Current pattern: /id/
url.replace(/\/id\/.*/, '/id/' + newSegment)

// Custom pattern examples:
url.replace(/\/category\/.*/, '/category/' + newSegment)  // /category/
url.replace(/\/product\/.*/, '/product/' + newSegment)   // /product/
```

### Batch Processing Tips
- **File Size**: Recommended maximum of 10,000 URLs per batch
- **Format**: Ensure one URL per line in input files
- **Validation**: URLs are automatically validated during processing
- **Performance**: Processing is done client-side for instant results

## 📊 Analytics Dashboard

The built-in analytics provide:
- **Total URLs**: Number of URLs loaded for processing
- **Processed Count**: Successfully transformed URLs
- **Last Updated**: Timestamp of last processing operation
- **System Status**: Real-time indicators for system health

## 🚀 Performance

- **Client-side Processing**: No server requests needed
- **Instant Results**: Real-time URL transformation
- **Memory Efficient**: Optimized for large URL datasets
- **Cross-browser Compatible**: Works on all modern browsers

## 🔐 Privacy & Security

- **Local Processing**: All operations performed in browser
- **No Data Transmission**: URLs never leave your device
- **No Server Dependencies**: Completely client-side application
- **Secure by Design**: No external API calls or data storage

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Development Setup
```bash
git clone https://github.com/diazrahman21/matchreplace.git
cd matchreplace
# Open index.html in your browser
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆔 Version

**Current Version**: 1.0.0
- Initial release with core functionality
- Professional UI implementation
- Full pattern matching support
- Export and analytics features

## 🙋‍♂️ Support

Need help? Here are your options:

- 📧 **Email Support**: Create an issue in the repository
- 📖 **Documentation**: Check this README for detailed information
- 💬 **Community**: Start a discussion in the repository
- 🐛 **Bug Reports**: Use the issue tracker for bug reports

## 🎯 Roadmap

### Version 1.1 (Coming Soon)
- [ ] Custom pattern support
- [ ] Undo/Redo functionality
- [ ] URL validation with visual feedback
- [ ] Batch processing progress bar

### Version 1.2 (Future)
- [ ] CSV export support
- [ ] URL preview before processing
- [ ] Advanced RegEx editor
- [ ] Processing history

## 🏆 Acknowledgments

- **Tailwind CSS** - For the beautiful styling framework
- **Heroicons** - For the professional icon set
- **Google Fonts** - For the typography (Inter & JetBrains Mono)
- **Modern Web APIs** - For file handling and clipboard functionality

---

**Match Replacer** - Making URL management professional and efficient.

---

### 📱 Connect

- **Repository**: https://github.com/diazrahman21/matchreplace
- **Issues**: https://github.com/diazrahman21/matchreplace/issues
- **Discussions**: https://github.com/diazrahman21/matchreplace/discussions

---

*Last updated: September 26, 2025*