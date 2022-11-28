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

import Typography from "@material-ui/core/Typography"
import { StaticImage } from "gatsby-plugin-image"

import { Url } from "@/constants"
import Layout from "@/components/Layout"
import ExternalLink from "@/components/ExternalLink"

const SpreadsheetAddOn = ({ location: { pathname } }) => {
  return (
    <Layout
      title=" افزونه Spreadsheet"
      pathname={pathname}
      description=""
    >
      <Typography variant="h2">معرفی کلی افزونه</Typography>

      <Typography variant="body1">
        {/* The{" "}
        <ExternalLink href={Url.spreadsheetAddOn}>
          Google Analytics Spreadsheet Add-on
        </ExternalLink>{" "} */}
        افزونه‌های  گوگل شیت اساساً برنامه‌های واسطی هستند که می‌توانید آنها را نصب کنید تا برخی عملکردهای اضافی را به برنامه صفحه گسترده خود وارد کنید. برای مثال، می‌توانید از افزونه‌ها برای ارسال ایمیل‌های جیمیل خود بر اساس برنامه زمان‌بندی استفاده کنید.

        افزونه مورد نظر دسترسی، ترسیم نمودار، اشتراک‌گذاری و دستکاری داده‌های خود را در صفحات گسترده گوگل برای کاربران سامانه راسخ آسان‌تر می‌کند. این افزونه بدون نیاز به دانستن یا نوشتن کد، قدرت کامل تحلیل داده‌ها را برای شما فراهم می‌کند.
        {/* {" "}
        <ExternalLink href={Url.reportingApis}>
          Core and Multi-Channel Funnels Reporting APIs
        </ExternalLink>{" "}
        without requiring you to know or write any code. */}
      </Typography>

      <a href={Url.spreadsheetAddOnExternal}>
        <StaticImage
          alt="screenshot of the add-on"
          src="../images/screenshots/spreadsheet-add-on-2x.png"
        />
      </a>

      <Typography variant="caption" paragraph>
        افزونه Spreadsheet Add-on 
      </Typography>

      <Typography variant="body1">با استفاده از این ابزار شما می‌توانید:</Typography>

      <Typography variant="body1" component="ul">
        <li>داده‌ها را از چند دیدگاه جستجو کنید.</li>
        <li>محاسبات سفارشی را از داده‌های گزارش خود ایجاد کنید.</li>
        <li>
          با استفاده از ابزارهای بصری سازی، نمودارهای مختلفی ترسیم کنید و سپس از آن‌ها برای ارائه اطلاعات در گزارش‌ها و وب‌سایت دیگر استفاده کنید.
        </li>
        <li>گزارش های خود را برای به‌روز رسانی خودکار برنامه‌ریزی کنید.</li>
        <li>
        با استفاده از ویژگی‌های اشتراک‌گذاری و حریم خصوصی موجود این افزونه، به راحتی کنترل کنید چه کسی می‌تواند داده‌ها و تصاویر شما را ببیند.
        </li>
      </Typography>

      <Typography variant="h2">آموزش بیشتر</Typography>

      <Typography variant="body1">
        برای استفاده از این افزونه کافیست با {" "}
        <ExternalLink href={Url.spreadsheetAddOnExternal}>
          کلیک بر روی این لینک
        </ExternalLink>{" "}
        آن را دانلود و نصب کنید.
      </Typography>

      <Typography variant="body1">
        سپس اگر با چالش و سوالی رو‌به‌رو شدید از {" "}
        <ExternalLink href={Url.spreadsheetAddOn}>راهنمای مرجع</ExternalLink>{" "}
        که توسط سازندگان این افزونه آماده شده است استفاده کنید.
      </Typography>
    </Layout>
  )
}
export default SpreadsheetAddOn
