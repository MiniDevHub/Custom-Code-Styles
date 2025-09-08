# Complete Java & HTML Snippets Implementation Guide

## 📋 Table of Contents

1. [Java Snippets - Complete Reference](#1-java-snippets---complete-reference)
2. [HTML Snippets - Complete Reference](#2-html-snippets---complete-reference)
3. [Installation Guide](#3-installation-guide)
4. [Usage Examples](#4-usage-examples)

---

# 1. Java Snippets - Complete Reference

## 🎯 Critical Method Snippets (The Power Tools)

### Typed Static Methods - Your Most Used Arsenal

| Prefix    | Expands To                                 | Return Type   | Use Case                           |
| --------- | ------------------------------------------ | ------------- | ---------------------------------- |
| `psint`   | `public static int methodName(params)`     | `int`         | Utility methods returning integers |
| `psbool`  | `public static boolean methodName(params)` | `boolean`     | Validation/check methods           |
| `psstr`   | `public static String methodName(params)`  | `String`      | String manipulation utilities      |
| `psdbl`   | `public static double methodName(params)`  | `double`      | Mathematical calculations          |
| `pslong`  | `public static long methodName(params)`    | `long`        | ID generators, timestamps          |
| `psfloat` | `public static float methodName(params)`   | `float`       | Graphics, physics calculations     |
| `pschar`  | `public static char methodName(params)`    | `char`        | Character processing               |
| `psbyte`  | `public static byte methodName(params)`    | `byte`        | Binary operations                  |
| `psshort` | `public static short methodName(params)`   | `short`       | Memory-constrained operations      |
| `psg`     | `public static <T> T methodName(T param)`  | Generic `<T>` | Generic utility methods            |

### Access Modifier Methods

| Prefix  | Expands To                                 | When to Use              |
| ------- | ------------------------------------------ | ------------------------ |
| `pm`    | `public void methodName(params)`           | Public API methods       |
| `prm`   | `private void methodName(params)`          | Internal helper methods  |
| `prom`  | `protected void methodName(params)`        | Inheritable methods      |
| `psm`   | `public static void methodName(params)`    | Static utility methods   |
| `prsm`  | `private static void methodName(params)`   | Private static helpers   |
| `prosm` | `protected static void methodName(params)` | Protected static methods |

### Special Method Types

| Prefix | Expands To                              | Purpose                              |
| ------ | --------------------------------------- | ------------------------------------ |
| `sync` | `public synchronized void methodName()` | Thread-safe methods                  |
| `abm`  | `public abstract void methodName()`     | Abstract methods in abstract classes |
| `finm` | `public final void methodName()`        | Non-overridable methods              |
| `natm` | `public native void methodName()`       | JNI native methods                   |

## 🏗️ Class Structure Snippets

### Essential Class Builders

| Prefix | Creates                            | Best For                       |
| ------ | ---------------------------------- | ------------------------------ |
| `psvm` | Main method only                   | Entry point                    |
| `pc`   | Class with main method             | Executable classes             |
| `cl`   | Basic public class                 | Standard classes               |
| `pcc`  | Class with constructor             | Classes needing initialization |
| `pcf`  | Class with field + getters/setters | Data holding classes           |
| `pojo` | Complete POJO with 2 fields        | Data transfer objects          |
| `acl`  | Abstract class                     | Base classes                   |
| `int`  | Interface                          | Contract definitions           |
| `en`   | Enum                               | Fixed set of constants         |

### Constructor Variants

| Prefix | Creates             | Use Case                |
| ------ | ------------------- | ----------------------- |
| `con`  | Public constructor  | Standard initialization |
| `dcon` | Default constructor | No-arg constructor      |
| `ccon` | Copy constructor    | Object cloning          |
| `pcon` | Private constructor | Singleton pattern       |

## 🔄 Control Flow Snippets

### Loops

| Prefix | Creates              | Performance            | Use Case             |
| ------ | -------------------- | ---------------------- | -------------------- |
| `fori` | Index-based for loop | Fastest for arrays     | Array iteration      |
| `fore` | Enhanced for loop    | Cleaner syntax         | Collection iteration |
| `whil` | While loop           | Condition-based        | Unknown iterations   |
| `dow`  | Do-while loop        | Executes at least once | Menu systems         |

### Conditionals

| Prefix | Creates                      | Complexity             |
| ------ | ---------------------------- | ---------------------- |
| `if`   | Simple if                    | Single condition       |
| `ife`  | If-else                      | Binary choice          |
| `ifei` | If-else-if-else              | Multiple conditions    |
| `sw`   | Switch statement             | Multiple exact matches |
| `swe`  | Switch expression (Java 14+) | Functional switch      |

### Exception Handling

| Prefix | Creates            | When to Use              |
| ------ | ------------------ | ------------------------ |
| `try`  | Try-catch          | Basic error handling     |
| `tryf` | Try-catch-finally  | Cleanup required         |
| `twr`  | Try-with-resources | Auto-closeable resources |

## 📦 Collections & Data Structures

### Lists

| Prefix  | Creates              | Time Complexity | Use Case            |
| ------- | -------------------- | --------------- | ------------------- |
| `list`  | ArrayList            | O(1) access     | General purpose     |
| `llist` | LinkedList           | O(1) add/remove | Frequent insertions |
| `cowal` | CopyOnWriteArrayList | Thread-safe     | Concurrent reads    |

### Maps

| Prefix | Creates           | Features     | Use Case          |
| ------ | ----------------- | ------------ | ----------------- |
| `map`  | HashMap           | O(1) average | General key-value |
| `tmap` | TreeMap           | Sorted       | Ordered keys      |
| `cmap` | ConcurrentHashMap | Thread-safe  | Concurrent access |

### Sets & Queues

| Prefix   | Creates       | Characteristics       |
| -------- | ------------- | --------------------- |
| `set`    | HashSet       | No duplicates         |
| `tset`   | TreeSet       | Sorted, no duplicates |
| `queue`  | Queue         | FIFO                  |
| `pqueue` | PriorityQueue | Heap-based priority   |
| `deque`  | Deque         | Double-ended queue    |
| `stack`  | Stack         | LIFO                  |
| `bqueue` | BlockingQueue | Thread-safe queue     |

### Arrays

| Prefix    | Creates                   | Use Case              |
| --------- | ------------------------- | --------------------- |
| `arr`     | 1D array                  | Fixed size collection |
| `arr2d`   | 2D array                  | Matrix operations     |
| `arrinit` | Array with initialization | Pre-populated array   |

## 🏢 Enterprise/Spring Patterns

### Core Spring Components

| Prefix       | Creates              | Layer         | Purpose             |
| ------------ | -------------------- | ------------- | ------------------- |
| `entity`     | JPA Entity           | Data          | Database model      |
| `repository` | Repository pattern   | Data Access   | CRUD operations     |
| `service`    | Service class        | Business      | Business logic      |
| `controller` | REST Controller      | Presentation  | API endpoints       |
| `dto`        | Data Transfer Object | Transport     | API contracts       |
| `config`     | Configuration class  | Configuration | Bean definitions    |
| `component`  | Component class      | Utility       | Reusable components |

### Advanced Spring

| Prefix        | Creates                  | Purpose                    |
| ------------- | ------------------------ | -------------------------- |
| `exhandler`   | Global exception handler | Centralized error handling |
| `aspect`      | AOP Aspect               | Cross-cutting concerns     |
| `filter`      | Servlet filter           | Request/response filtering |
| `interceptor` | Spring interceptor       | Pre/post processing        |
| `customex`    | Custom exception         | Domain-specific errors     |

### Annotations & Validation

| Prefix       | Creates               | Use Case                 |
| ------------ | --------------------- | ------------------------ |
| `annotation` | Custom annotation     | Metadata marking         |
| `validanno`  | Validation annotation | Field validation         |
| `validator`  | Custom validator      | Complex validation logic |

## 🧪 Testing Snippets

| Prefix    | Creates                | Testing Framework |
| --------- | ---------------------- | ----------------- |
| `test`    | Test method            | JUnit 5           |
| `testd`   | Test with display name | JUnit 5           |
| `testp`   | Parameterized test     | JUnit 5           |
| `testc`   | Complete test class    | JUnit 5           |
| `mock`    | Mock setup             | Mockito           |
| `when`    | When-then statement    | Mockito           |
| `verify`  | Verify mock            | Mockito           |
| `athrows` | Assert throws          | JUnit 5           |
| `aall`    | Assert all             | JUnit 5           |

## 🎨 Design Patterns

### Creational Patterns

| Prefix          | Pattern                    | Thread-Safe? |
| --------------- | -------------------------- | ------------ |
| `singleton`     | Singleton (double-checked) | Yes          |
| `enumsingleton` | Enum singleton             | Yes          |
| `builder`       | Builder pattern            | Depends      |
| `factory`       | Factory method             | Depends      |

### Behavioral Patterns

| Prefix      | Pattern         | Use Case              |
| ----------- | --------------- | --------------------- |
| `observer`  | Observer        | Event handling        |
| `strategy`  | Strategy        | Algorithm selection   |
| `template`  | Template method | Algorithm skeleton    |
| `command`   | Command         | Request encapsulation |
| `decorator` | Decorator       | Dynamic behavior      |

---

# 2. HTML Snippets - Complete Reference

## 🚀 Document Structure

### Boilerplates - Start Here!

| Prefix     | Creates            | Features                     | When to Use        |
| ---------- | ------------------ | ---------------------------- | ------------------ |
| `!!`       | Basic HTML5        | Minimal setup                | Quick prototypes   |
| `!!!`      | Complete HTML5     | SEO, social meta, favicon    | Production sites   |
| `semantic` | Semantic structure | header/nav/main/aside/footer | Content-rich sites |

## 🔗 External Resources

### CSS Loading

| Prefix        | Creates        | Performance | Use Case     |
| ------------- | -------------- | ----------- | ------------ |
| `link`        | Basic CSS link | Standard    | General CSS  |
| `linkpreload` | Preload + link | Optimized   | Critical CSS |

### JavaScript Loading

| Prefix         | Creates     | Loading Strategy | Use Case          |
| -------------- | ----------- | ---------------- | ----------------- |
| `script`       | External JS | Defer optional   | General scripts   |
| `scriptinline` | Inline JS   | Immediate        | Small scripts     |
| `scriptmodule` | ES6 module  | Modern           | Module-based apps |

### Framework CDNs

| Prefix        | Loads              | Version | Features                  |
| ------------- | ------------------ | ------- | ------------------------- |
| `bootstrap5`  | Bootstrap 5.3.3    | Latest  | CSS + JS bundle           |
| `tailwind`    | Tailwind CSS       | Latest  | Utility-first CSS         |
| `jquery`      | jQuery 3.7.1       | Latest  | DOM manipulation          |
| `fontawesome` | Font Awesome 6.5.1 | Latest  | Icon library              |
| `googlefont`  | Google Fonts       | Custom  | Web fonts with preconnect |

## 📋 Forms & Inputs

### Form Structures

| Prefix           | Creates           | Includes                   | Best For          |
| ---------------- | ----------------- | -------------------------- | ----------------- |
| `form`           | Basic form        | Label + input + button     | Simple forms      |
| `formgroup`      | Input group       | Label + input + help text  | Bootstrap forms   |
| `formlogin`      | Login form        | Username/password/remember | Authentication    |
| `formregister`   | Registration form | All signup fields          | User registration |
| `formcontact`    | Contact form      | Name/email/subject/message | Contact pages     |
| `formnewsletter` | Newsletter signup | Email + subscribe          | Email capture     |

### Input Types

| Prefix       | Type                               | Attributes       | Use Case        |
| ------------ | ---------------------------------- | ---------------- | --------------- |
| `input`      | text/email/password/tel/url/search | Multiple types   | Text input      |
| `inputnum`   | number                             | min/max/step     | Numeric input   |
| `inputdate`  | date/datetime-local/time           | Date selection   | Date/time input |
| `inputfile`  | file                               | accept/multiple  | File upload     |
| `inputrange` | range                              | min/max/step     | Slider input    |
| `checkbox`   | checkbox                           | With label       | Multiple choice |
| `radio`      | radio                              | With label       | Single choice   |
| `select`     | dropdown                           | Multiple options | Selection list  |
| `textarea`   | textarea                           | rows/cols        | Multi-line text |

### Buttons

| Prefix | Creates        | Type Options        | Use Case           |
| ------ | -------------- | ------------------- | ------------------ |
| `btn`  | Button element | button/submit/reset | Form actions       |
| `btna` | Link as button | Styled anchor       | Navigation buttons |

## 🎨 UI Components

### Bootstrap Components

| Prefix       | Component       | Complexity            | Use Case          |
| ------------ | --------------- | --------------------- | ----------------- |
| `card`       | Card            | Image + content       | Content cards     |
| `modal`      | Modal dialog    | Full structure        | Popups            |
| `accordion`  | Accordion       | Collapsible panels    | FAQs              |
| `breadcrumb` | Breadcrumb      | Navigation trail      | Site navigation   |
| `alert`      | Alert box       | 8 color variants      | Notifications     |
| `badge`      | Badge/label     | 8 color variants      | Status indicators |
| `spinner`    | Loading spinner | Animated              | Loading states    |
| `pagination` | Page navigation | Previous/next/numbers | List pagination   |

### Layout Components

| Prefix      | Creates           | Framework           | Use Case          |
| ----------- | ----------------- | ------------------- | ----------------- |
| `grid`      | Grid container    | Bootstrap           | Responsive layout |
| `flex`      | Flexbox container | Bootstrap utilities | Flexible layout   |
| `navbar`    | Navigation bar    | Generic/Bootstrap   | Site navigation   |
| `searchbar` | Search form       | With button         | Site search       |

## 📱 Media Elements

### Images

| Prefix    | Creates             | Features         | Performance      |
| --------- | ------------------- | ---------------- | ---------------- |
| `img`     | Basic image         | Standard         | Basic            |
| `imgr`    | Responsive image    | img-fluid + lazy | Optimized        |
| `imglazy` | Lazy loading        | data-src         | Deferred         |
| `picture` | Picture element     | Art direction    | Responsive       |
| `webp`    | WebP with fallback  | Modern format    | Best compression |
| `figure`  | Figure with caption | Semantic         | Captioned images |

### Video & Audio

| Prefix    | Creates        | Controls       | Use Case         |
| --------- | -------------- | -------------- | ---------------- |
| `video`   | Video player   | Full controls  | Video content    |
| `audio`   | Audio player   | Basic controls | Audio content    |
| `youtube` | YouTube embed  | YouTube player | Embedded videos  |
| `iframe`  | Generic iframe | Customizable   | External content |

## 🏗️ Semantic HTML5

### Page Sections

| Prefix    | Element     | Purpose                | SEO Impact |
| --------- | ----------- | ---------------------- | ---------- |
| `header`  | `<header>`  | Page/section header    | High       |
| `footer`  | `<footer>`  | Page/section footer    | High       |
| `main`    | `<main>`    | Primary content        | Critical   |
| `section` | `<section>` | Thematic grouping      | Medium     |
| `article` | `<article>` | Self-contained content | High       |
| `aside`   | `<aside>`   | Sidebar content        | Low        |
| `nav`     | Navigation  | In header/footer       | High       |

### Interactive Elements

| Prefix     | Creates      | Browser Support | Use Case             |
| ---------- | ------------ | --------------- | -------------------- |
| `details`  | Collapsible  | Good            | Accordion without JS |
| `dialog`   | Native modal | Modern browsers | Popups               |
| `progress` | Progress bar | Good            | Loading/completion   |
| `meter`    | Gauge        | Good            | Measurements         |

## 🔤 Text Elements

### Text Formatting

| Prefix       | Element        | Purpose      | Example        |
| ------------ | -------------- | ------------ | -------------- |
| `mark`       | `<mark>`       | Highlight    | Search results |
| `abbr`       | `<abbr>`       | Abbreviation | NASA, HTML     |
| `time`       | `<time>`       | Date/time    | Event dates    |
| `blockquote` | `<blockquote>` | Quotation    | Citations      |

### Code Elements

| Prefix       | Creates        | Use Case              |
| ------------ | -------------- | --------------------- |
| `code`       | Code block     | Multi-line code       |
| `codeinline` | Inline code    | Single expressions    |
| `kbd`        | Keyboard input | Keyboard shortcuts    |
| `samp`       | Sample output  | Terminal output       |
| `var`        | Variable       | Math/programming vars |

## 🎯 SEO & Meta Tags

### Essential Meta

| Prefix       | Purpose               | SEO Impact       |
| ------------ | --------------------- | ---------------- |
| `viewport`   | Mobile responsiveness | Critical         |
| `metadesc`   | Page description      | High             |
| `metakey`    | Keywords              | Low (deprecated) |
| `metaauthor` | Author info           | Low              |
| `metarobots` | Crawler instructions  | Critical         |
| `canonical`  | Canonical URL         | High             |

### Social Media

| Prefix        | Platform            | Required Fields           |
| ------------- | ------------------- | ------------------------- |
| `metaog`      | Facebook/Open Graph | title, description, image |
| `metatwitter` | Twitter Cards       | card, title, description  |
| `ogp`         | Complete OGP        | All OG properties         |

### Structured Data

| Prefix   | Type      | SEO Benefit        |
| -------- | --------- | ------------------ |
| `ldjson` | JSON-LD   | Rich snippets      |
| `schema` | Microdata | Search enhancement |

## ♿ Accessibility

| Prefix | Creates         | WCAG Level |
| ------ | --------------- | ---------- |
| `aria` | ARIA attributes | A/AA       |
| `role` | ARIA roles      | A/AA       |
| `data` | Data attributes | N/A        |

## 🌐 Progressive Web App

| Prefix          | Creates         | PWA Feature      |
| --------------- | --------------- | ---------------- |
| `manifest`      | Manifest link   | App installation |
| `serviceworker` | SW registration | Offline support  |
| `cookieconsent` | Cookie banner   | GDPR compliance  |

## 🐍 Django Templates

| Prefix    | Django Tag         | Purpose              |
| --------- | ------------------ | -------------------- |
| `extends` | `{% extends %}`    | Template inheritance |
| `block`   | `{% block %}`      | Content blocks       |
| `include` | `{% include %}`    | Partial templates    |
| `for`     | `{% for %}`        | Iteration            |
| `if`      | `{% if %}`         | Conditionals         |
| `var`     | `{{ }}`            | Variable output      |
| `url`     | `{% url %}`        | URL reversal         |
| `static`  | `{% static %}`     | Static files         |
| `csrf`    | `{% csrf_token %}` | CSRF protection      |

---

# 3. Installation Guide

## Step 1: Locate Snippets Folder

**Windows:**

```
%APPDATA%\Code\User\snippets\
```

**macOS:**

```
~/Library/Application Support/Code/User/snippets/
```

**Linux:**

```
~/.config/Code/User/snippets/
```

## Step 2: Install Snippets

1. Create/edit `java.json` for Java snippets
2. Create/edit `html.json` for HTML snippets
3. Save both files in the snippets folder
4. Restart VS Code

## Step 3: Verify

- Type any prefix (e.g., `psint` in Java or `!!!` in HTML)
- Press `Tab` or `Enter` to expand

---

# 4. Usage Examples

## Java Quick Workflows

### Building a REST API (5 snippets):

```
entity → repository → service → controller → exhandler
```

### Creating Utility Class:

```
cl → psint → psbool → psstr → psdbl
```

### Test Suite:

```
testc → test → mock → when → verify
```

## HTML Quick Workflows

### Complete Website:

```
!!! → bootstrap5 → navbar → grid → footer
```

### Form Page:

```
!! → formlogin → or → formregister → cookieconsent
```

### Landing Page:

```
!!! → semantic → card → modal → searchbar
```

## Pro Tips

1. **Chain snippets** for rapid development
2. **Use Tab** to navigate placeholders
3. **Combine frameworks** (Bootstrap + Font Awesome)
4. **Layer meta tags** for better SEO
5. **Test responsive** snippets on multiple devices

---

## 📊 Statistics

- **Java Snippets**: 200+ total

  - 10 typed return methods (`psint`, `psbool`, etc.)
  - 25+ class structures
  - 35+ method generators
  - 20+ Spring/Enterprise patterns

- **HTML Snippets**: 120+ total
  - 3 boilerplate levels
  - 15+ form types
  - 20+ Bootstrap components
  - 9 Django template tags

---

_Happy coding with lightning speed! ⚡_

---
