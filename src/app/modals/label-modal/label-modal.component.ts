import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';
import { mapFormErrors } from 'ngx-anx-forms';
import { ResourceModel } from 'ngx-resource-factory/resource/resource-model';
import { ToastrService } from 'ngx-toastr';
import { Label, LabelResource } from '../../services/resources/label.resource';
import { Team } from '../../services/resources/team.resource';
import { ScopeModel } from '../../state/scope/scope.model';
import { ScopeState } from '../../state/scope/scope.state';

@Component({
  selector: 'app-label-modal',
  templateUrl: './label-modal.component.html',
  styleUrls: ['./label-modal.component.scss'],
})
export class LabelModalComponent implements OnInit {
  @Input() label: ResourceModel<Label> = null;

  labelForm: FormGroup;

  @SelectSnapshot(ScopeState)
  public scope: ScopeModel;

  constructor(private activeModal: NgbActiveModal, private labelResource: LabelResource, private toastr: ToastrService) {}

  ngOnInit(): void {
    const scope = this.scope;

    /**
     * Label form
     *
     * @type {FormGroup}
     */
    this.labelForm = new FormGroup({
      pk: new FormControl(null, null),
      name: new FormControl('', Validators.required),
      team: new FormControl(null, null),
    });

    /**
     * Set team value from scope
     */
    if (scope.area == 'team') {
      const team = scope.value as ResourceModel<Team>;
      this.labelForm.get('team').setValue(team.pk);
    }

    /**
     * Load data from given label
     */
    if (this.label) {
      this.labelForm.get('pk').setValue(this.label.pk);
      this.labelForm.get('name').setValue(this.label.name);
    }
  }

  confirmAction(): void {
    let promise, message, errorMessage;

    if (this.label) {
      promise = this.labelResource.update({}, this.labelForm.value).$promise;
      message = 'Label updated!';
      errorMessage = 'Cannot update label!';
    } else {
      promise = this.labelResource.save({}, this.labelForm.value).$promise;
      message = 'Label added!';
      errorMessage = 'Cannot add label!';
    }

    promise
      .then(data => {
        this.toastr.success(message);
        this.activeModal.close(data);
      })
      .catch(error => {
        console.log(error);
        this.toastr.error(errorMessage);
        mapFormErrors(this.labelForm, error.error);
      });
  }

  closeAction(reason: string): void {
    this.activeModal.dismiss(reason);
  }
}
