// Copyright 2020 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from "react"
import Layout from "@/components/Layout"
import Home from "@/components/Home"

const IndexPage = ({ location: { pathname } }) => (
  <Layout
    title="ابزار تجزیه و تحلیل سایت | سامانه راسخ"
    pathname={pathname}
    description="با استفاده از سامانه راسخ و ابزار تحلیل آن، به تمامی داده‌های مربوط به سایت خودتان دسترسی داشته باشید و آن‌ها را راحت و سریع آنالیز کنید."
  >
    <Home />
  </Layout>
)

export default IndexPage
