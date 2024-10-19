"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[3694],{1615:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(4848),i=s(8453);const o={slug:"long-blog-post",title:"Long Blog Post",authors:"yangshun",tags:["hello","docusaurus"]},r="Create & Deploy Static Website Using Docusaurus & GitHub Pages, Customize Using Markdown",a={permalink:"/tech-with-devops/blog/long-blog-post",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md",source:"@site/blog/2019-05-29-long-blog-post.md",title:"Long Blog Post",description:"In this tutorial, we will walk through the process of creating and deploying a static website using Docusaurus and GitHub Pages, with the ability to customize the site using Markdown files.",date:"2019-05-29T00:00:00.000Z",tags:[{inline:!1,label:"Hello",permalink:"/tech-with-devops/blog/tags/hello",description:"Hello tag description"},{inline:!1,label:"Docusaurus",permalink:"/tech-with-devops/blog/tags/docusaurus",description:"Docusaurus tag description"}],readingTime:3.495,hasTruncateMarker:!1,authors:[{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",page:{permalink:"/tech-with-devops/blog/authors/yangshun"},socials:{x:"https://x.com/yangshunz",github:"https://github.com/yangshun"},imageURL:"https://github.com/yangshun.png",key:"yangshun"}],frontMatter:{slug:"long-blog-post",title:"Long Blog Post",authors:"yangshun",tags:["hello","docusaurus"]},unlisted:!1,prevItem:{title:"MDX Blog Post",permalink:"/tech-with-devops/blog/mdx-blog-post"},nextItem:{title:"First Blog Post",permalink:"/tech-with-devops/blog/first-blog-post"}},l={authorsImageUrls:[void 0]},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up SSH with GitHub",id:"step-1-set-up-ssh-with-github",level:3},{value:"Step 2: Install Node.js and Yarn on local pc",id:"step-2-install-nodejs-and-yarn-on-local-pc",level:3},{value:"Step 3: Create a GitHub Repository",id:"step-3-create-a-github-repository",level:3},{value:"Step 4: Initialize Docusaurus Project on pc",id:"step-4-initialize-docusaurus-project-on-pc",level:3},{value:"Step 5: Start Docusaurus Local Development Server",id:"step-5-start-docusaurus-local-development-server",level:3},{value:"Step 6: Set up Git and Push to GitHub",id:"step-6-set-up-git-and-push-to-github",level:3},{value:"Step 7: Configure <code>docusaurus.config.js</code> for GitHub Pages Deployment",id:"step-7-configure-docusaurusconfigjs-for-github-pages-deployment",level:3},{value:"Step 8: Deploy to GitHub Pages",id:"step-8-deploy-to-github-pages",level:3},{value:"Step 9: Customize Your Website Using Markdown",id:"step-9-customize-your-website-using-markdown",level:3},{value:"Step 10: Keep Your Site Updated",id:"step-10-keep-your-site-updated",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this tutorial, we will walk through the process of creating and deploying a static website using Docusaurus and GitHub Pages, with the ability to customize the site using Markdown files."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before we begin, ensure you have the following prerequisites:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Set up SSH with GitHub account."})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Install Node.js and Yarn"})," using the instructions below."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create a repository on GitHub"})," to host your website."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-1-set-up-ssh-with-github",children:"Step 1: Set up SSH with GitHub"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Generate a new SSH key"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'ssh-keygen -t ed25519 -C "your_email@example.com"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Copy the SSH key"})," to your clipboard:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat ~/.ssh/id_ed25519.pub\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Add the SSH key"})," to your GitHub account by navigating to ",(0,t.jsx)(n.a,{href:"https://github.com/settings/keys",children:"GitHub SSH settings"})," and pasting the key there."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-2-install-nodejs-and-yarn-on-local-pc",children:"Step 2: Install Node.js and Yarn on local pc"}),"\n",(0,t.jsxs)(n.p,{children:["To install ",(0,t.jsx)(n.strong,{children:"Node.js"})," and ",(0,t.jsx)(n.strong,{children:"Yarn"}),", we will use ",(0,t.jsx)(n.strong,{children:"nvm"})," (Node Version Manager)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# installs nvm (Node Version Manager)\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n\n# Close the terminal and again open terminal\n\n# download and install Node.js (you may need to restart the terminal)\nnvm install 20\nor\nnvm install node\n\n# verifies the right Node.js version is in the environment\nnode -v # should print `v20.14.0`\n\n# verifies the right NPM version is in the environment\nnpm -v # should print `10.7.0`\n\n# Yarn install via npm\nnpm install --global yarn\nyarn --version\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-3-create-a-github-repository",children:"Step 3: Create a GitHub Repository"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new repository on GitHub named ",(0,t.jsx)(n.code,{children:"tech-with-mir"})," (or any name you prefer)."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-4-initialize-docusaurus-project-on-pc",children:"Step 4: Initialize Docusaurus Project on pc"}),"\n",(0,t.jsxs)(n.p,{children:["To create a Docusaurus site, use the ",(0,t.jsx)(n.code,{children:"npx"})," command. You can choose between ",(0,t.jsx)(n.strong,{children:"JavaScript"})," or ",(0,t.jsx)(n.strong,{children:"TypeScript"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"For JavaScript:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic --javascript\n"})}),"\n",(0,t.jsx)(n.p,{children:"Navigate into the project folder:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my-website\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-5-start-docusaurus-local-development-server",children:"Step 5: Start Docusaurus Local Development Server"}),"\n",(0,t.jsx)(n.p,{children:"To start the local development server, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx docusaurus start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Visit ",(0,t.jsx)(n.code,{children:"http://localhost:3000"})," to view your website. You can start customizing it with Markdown files in the ",(0,t.jsx)(n.code,{children:"docs/"})," or ",(0,t.jsx)(n.code,{children:"src/pages/"})," directories."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-6-set-up-git-and-push-to-github",children:"Step 6: Set up Git and Push to GitHub"}),"\n",(0,t.jsx)(n.p,{children:"Once you're happy with your local setup, initialize the Git repository and push your changes to GitHub:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Initialize Git:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git init\ngit status\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add all files and commit:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "Initial commit for Docusaurus site"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the default branch and push to GitHub:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git branch -M main\ngit remote add origin git@github.com:your-username/tech-with-mir.git\ngit push -u origin main\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"step-7-configure-docusaurusconfigjs-for-github-pages-deployment",children:["Step 7: Configure ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"})," for GitHub Pages Deployment"]}),"\n",(0,t.jsxs)(n.p,{children:["To deploy the site to GitHub Pages, you need to update the ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  url: 'https://your-username.github.io', // Your GitHub Pages URL\n  baseUrl: '/tech-with-mir/', // The repository name, preceded by a slash\n  organizationName: 'your-username', // Your GitHub username\n  projectName: 'tech-with-mir', // Your repository name\n  deploymentBranch: \"gh-pages\", // Deployment branch for GitHub Pages\n  onBrokenLinks: 'throw',\n  onBrokenMarkdownLinks: 'warn',\n};\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-8-deploy-to-github-pages",children:"Step 8: Deploy to GitHub Pages"}),"\n",(0,t.jsx)(n.p,{children:"Docusaurus provides a simple way to deploy your website to GitHub Pages with a single command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn\nyarn start\nyarn build\nUSE_SSH=true yarn deploy\nUSE_SSH=true yarn deploy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will build and deploy your website to the ",(0,t.jsx)(n.code,{children:"gh-pages"})," branch. The site will be live at ",(0,t.jsx)(n.code,{children:"https://your-username.github.io/tech-with-mir/"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-9-customize-your-website-using-markdown",children:"Step 9: Customize Your Website Using Markdown"}),"\n",(0,t.jsx)(n.p,{children:"Docusaurus makes it easy to add new content using Markdown files. You can:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Edit pages under ",(0,t.jsx)(n.code,{children:"src/pages/"})," for static content."]}),"\n",(0,t.jsxs)(n.li,{children:["Add new documentation under the ",(0,t.jsx)(n.code,{children:"docs/"})," directory."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, create a new page by adding a Markdown file to ",(0,t.jsx)(n.code,{children:"src/pages/"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"# Welcome to Tech with Mir\n\nThis is a custom page created using Markdown!\n\n- Easy to write\n- Fully customizable\n- Deployed with GitHub Pages\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"step-10-keep-your-site-updated",children:"Step 10: Keep Your Site Updated"}),"\n",(0,t.jsx)(n.p,{children:"Every time you make updates to your site, follow these steps to push and deploy:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Commit your changes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'git add .\ngit commit -m "Updated site content"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Push to GitHub:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git push -u origin main\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deploy again:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn build\nUSE_SSH=true yarn deploy\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"By following this guide, you\u2019ve successfully created, customized, and deployed a static website using Docusaurus and GitHub Pages."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);