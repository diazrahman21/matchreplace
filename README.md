# 🔗 Match Replacer

**Professional Dual-Site URL Segment Replacement Tool**

A modern, enterprise-grade web application designed for bulk URL processing and segment replacement across multiple streaming sites using advanced pattern matching technology.

## ✨ Features

- 🚀 **Dual-Site Processing** - Supports both Super Rabbit and Tigagoals URLs
- 🎯 **Advanced Pattern Matching** - Site-specific RegEx patterns for precise replacement
- 📁 **Multiple Input Methods** - File upload, manual input, or sample data
- 💾 **Export Functionality** - Download processed results as .txt files
- 📊 **Real-time Analytics** - Live processing statistics and site-type counters
- 🎨 **Professional UI** - Modern glassmorphism design with soft color palette
- ⚡ **Instant Processing** - Real-time URL transformation with visual feedback
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- 🏷️ **Site Detection** - Automatic site type identification and labeling
- 🔧 **Dual Input System** - Separate input fields for each site type

## 🛠️ How It Works

Match Replacer uses JavaScript RegEx pattern matching with site-specific logic to replace URL segments based on the detected streaming site.

**Super Rabbit Pattern Logic:**
```javascript
// Finds: /id/[anything]
// Replaces with: /id/[your-new-segment]
url.replace(/\/id\/.*/, '/id/' + newSegment)
```

**Tigagoals Pattern Logic:**
```javascript
// Finds: /football/[anything]
// Replaces with: /football/[your-new-segment]
url.replace(/\/football\/.*/, '/football/' + newSegment)
```

**Examples:**
```
Super Rabbit:
Input:  https://example.com/en/id/basketball/game456.html?data=a
Pattern: football/match123.html
Output: https://example.com/en/id/football/match123.html?data=a

Tigagoals:
Input:  https://idn00041.tigoals215.com/football/2800065-lille-vs-lyon.html
Pattern: 2800070-rennes-vs-lens.html
Output: https://idn00041.tigoals215.com/football/2800070-rennes-vs-lens.html
```

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in any modern web browser
2. Choose your input method:
   - **File Upload**: Drag & drop a .txt file with URLs (one per line)
   - **Manual Input**: Paste URLs directly into the text area
   - **Sample Data**: Use built-in demo URLs for testing (includes both site types)
3. Enter your new URL segments:
   - **Super Rabbit Input**: For sites with `/id/` patterns (e.g., `football/match123.html`)
   - **Tigagoals Input**: For sites with `/football/` patterns (e.g., `2800070-rennes-vs-lens.html`)
4. Click "Ganti dan Tampilkan Link Baru" to transform your URLs
5. Export results or copy individual URLs

### Supported Sites

**Super Rabbit Sites:**
- Any URL containing `/id/` pattern
- Examples: example.com, superrabbit.com, anothersite.net

**Tigagoals Sites:**
- URLs containing "tigoals" or "tigagoals" in domain
- Uses `/football/` pattern matching
- Examples: tigoals215.com, tigagoals.net

### Input Formats

**File Upload (.txt):**
```
https://example.com/id/old-segment1
https://another.com/id/old-segment2
https://idn00041.tigoals215.com/football/2800065-old-match.html
```

**Manual Input:**
Simply paste URLs in the textarea, one per line. Mix both site types freely.

## 🎯 Use Cases

- **Multi-Site Content Management** - Update URL structures across different streaming platforms
- **SEO Optimization** - Standardize URL patterns for better SEO across multiple sites
- **Site Migration** - Bulk update links during website migrations for both platforms
- **Development Testing** - Generate test URLs with consistent patterns for different sites
- **Campaign Management** - Create site-specific URL variations for marketing campaigns
- **Content Syndication** - Manage URLs across multiple streaming platforms simultaneously

## 📋 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No server-side dependencies required

## 🏗️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Fonts**: Inter (UI), JetBrains Mono (code)
- **Color Palette**: Professional soft theme (slate, blue, amber, violet)
- **Features**: 
  - Drag & Drop API
  - Clipboard API
  - File API
  - Dual RegEx Processing
  - Site Type Detection
  - Real-time URL Counting

## 📸 Screenshots

### Main Interface
Professional dashboard with glassmorphism design and dual-input workflow for both site types.

### Dual Input System
Separate input fields for Super Rabbit and Tigagoals with visual site type indicators.

### Results View
Clean results display with site type labels, copy-to-clipboard, and export functionality.

## 🎨 Design Features

- **Glassmorphism UI** - Modern translucent design with backdrop blur
- **Soft Color Palette** - Professional theme with slate, blue, amber, and violet accents
- **Site Type Indicators** - Visual labels distinguishing Super Rabbit and Tigagoals URLs
- **Smooth Animations** - Engaging micro-interactions and fade-in effects
- **Responsive Layout** - Mobile-first design approach with flexible grid system
- **Professional Typography** - Inter font family for clean, readable interface
- **Real-time Counters** - Live statistics showing site-specific URL counts

## 🔧 Advanced Usage

### Pattern Customization
The application supports two distinct patterns for different streaming sites:

```javascript
// Super Rabbit pattern: /id/
url.replace(/\/id\/.*/, '/id/' + newSegment)

// Tigagoals pattern: /football/
url.replace(/\/football\/.*/, '/football/' + newSegment)

// Site detection logic
function isTigaoalsUrl(url) {
    return url.includes('tigoals') || url.includes('tigagoals');
}
```

### Dual Input Processing
- **Flexible Input**: Fill one or both input fields based on your URL types
- **Smart Processing**: URLs are automatically routed to the correct processor
- **Mixed Batches**: Process Super Rabbit and Tigagoals URLs in the same batch
- **Validation**: Automatic path validation prevents common input errors

### Batch Processing Tips
- **File Size**: Recommended maximum of 10,000 URLs per batch
- **Format**: Ensure one URL per line in input files
- **Mixed Sites**: Freely mix Super Rabbit and Tigagoals URLs in the same file
- **Validation**: URLs are automatically validated and categorized during processing
- **Performance**: Processing is done client-side for instant results

## 📊 Analytics Dashboard

The built-in analytics provide comprehensive insights:
- **Total URLs**: Number of URLs loaded for processing
- **Site Type Breakdown**: Separate counters for Super Rabbit (SR) and Tigagoals (TG)
- **Processed Count**: Successfully transformed URLs with site-specific breakdown
- **Last Updated**: Timestamp of last processing operation
- **Real-time Indicators**: Visual feedback showing which input fields will be processed

## 🚀 Performance

- **Client-side Processing**: No server requests needed
- **Instant Results**: Real-time URL transformation
- **Memory Efficient**: Optimized for large URL datasets
- **Cross-browser Compatible**: Works on all modern browsers

## 🔐 Privacy & Security

- **Local Processing**: All operations performed in browser - no server communication
- **No Data Transmission**: URLs never leave your device or sent to external services
- **No Server Dependencies**: Completely client-side application
- **Secure by Design**: No external API calls, data storage, or third-party services
- **Site-Agnostic**: Works with any URLs matching the supported patterns

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

**Current Version**: 2.0.0
- Dual-site support (Super Rabbit + Tigagoals)
- Professional glassmorphism UI redesign
- Separate input system for each site type
- Site detection and automatic routing
- Enhanced analytics with site-type breakdown
- Improved visual feedback and notifications
- Mobile-responsive design optimization

**Previous Version**: 1.0.0
- Initial release with Super Rabbit support only
- Basic UI implementation
- Single pattern matching support

## 🙋‍♂️ Support

Need help? Here are your options:

- 📧 **Email Support**: Create an issue in the repository
- 📖 **Documentation**: Check this README for detailed information
- 💬 **Community**: Start a discussion in the repository
- 🐛 **Bug Reports**: Use the issue tracker for bug reports

## 🎯 Roadmap

### Version 2.1 (Coming Soon)
- [ ] Additional streaming site support
- [ ] Custom pattern editor for advanced users
- [ ] URL preview with before/after comparison
- [ ] Batch processing progress indicator
- [ ] Enhanced site detection algorithms

### Version 2.2 (Future)
- [ ] CSV export support with site type columns
- [ ] Processing history and session management
- [ ] Advanced RegEx editor with syntax highlighting
- [ ] Bulk operations (delete, filter, sort)
- [ ] URL validation with detailed error reporting
- [ ] Custom site pattern definitions

## 🏆 Acknowledgments

- **Tailwind CSS** - For the beautiful styling framework and utility classes
- **Inter Font Family** - For the clean, professional typography
- **JavaScript Web APIs** - For file handling, clipboard, and drag-drop functionality
- **Glassmorphism Design** - For the modern visual aesthetic inspiration
- **Community Feedback** - For driving the dual-site feature development

---

**Match Replacer v2.0** - Professional dual-site URL management made efficient.

---

### 📱 Connect

- **Repository**: https://github.com/diazrahman21/matchreplace
- **Issues**: https://github.com/diazrahman21/matchreplace/issues
- **Discussions**: https://github.com/diazrahman21/matchreplace/discussions

---

*Last updated: September 30, 2025*