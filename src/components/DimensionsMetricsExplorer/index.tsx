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
import Explorer from "./Explorer"

export const DimensionsMetricsExplorer = () => {
  return (
    <>
      <Typography variant="body1">
        در این بخش تمامی ابعاد و معیارهای قابل سنجش برای شما لیست شده‌اند تا بتوانید به راحتی فرآیند ارزیابی را انجام دهید.
      </Typography>

      <Typography variant="body1">
        در دید کلی اطلاعات زیر در این صفحه ارائه می‌گردد:
      </Typography>

      <Typography variant="body1">
        <strong>همه ابعاد و معیارها را کاوش کنید</strong> –  شناسایی معیارهای مورد نظر و جستجو بر اساس گروه
      </Typography>

      <Typography variant="body1">
        <strong>ترکیبات معتبر را شناسایی کنید</strong> – همه ابعاد و معیارها را نمی توان با هم جستجو کرد. فقط از ابعاد و معیارهای خاصی می توان با هم برای ایجاد ترکیبات معتبر استفاده کرد. برای مشاهده تمام مقادیر دیگری که می‌توانند در همان جستار ترکیب شوند، یک کادر بررسی ابعاد یا معیار خاصی را انتخاب کنید.
      </Typography>

      <Explorer />
    </>
  )
}

export default DimensionsMetricsExplorer
