// Copyright 2023 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Component for editing a user's question contribution rights.
 */

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface QuestionRights {
    isQuestionSubmitter: boolean;
    isQuestionReviewer: boolean;
}

@Component({
  selector: 'cd-admin-question-role-editor-modal',
  templateUrl: './cd-admin-question-role-editor-modal.component.html',
})
export class CdAdminQuestionRoleEditorModal implements OnInit {
// These properties are initialized using Angular lifecycle hooks
// and we need to do non-null assertion. For more information, see
// https://github.com/oppia/oppia/wiki/Guide-on-defining-types#ts-7-1
  @Input() username!: string;
  @Input() rights!: QuestionRights;

  constructor(
    private activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {}

  toggleQuestionSubmitter(): void {
    this.rights.isQuestionSubmitter = !this.rights.isQuestionSubmitter;
  }

  toggleQuestionReviewer(): void {
    this.rights.isQuestionReviewer = !this.rights.isQuestionReviewer;
  }

  saveAndClose(): void {
    this.activeModal.close(this.rights);
  }

  close(): void {
    this.activeModal.dismiss();
  }
}
