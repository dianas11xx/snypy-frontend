import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormArray } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsModule } from '@ngxs/store';
import { NgxResourceFactoryModule } from 'ngx-resource-factory';
import { ToastrModule } from 'ngx-toastr';
import { SnippetResource } from '../../services/resources/snippet.resource';
import { SnippetModalComponent } from './snippet-modal.component';

describe('SnippetModalComponent', () => {
  let component: SnippetModalComponent;
  let fixture: ComponentFixture<SnippetModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SnippetModalComponent],
      imports: [
        NgxsModule.forRoot(),
        NgxResourceFactoryModule.forRoot(),
        HttpClientModule,
        ToastrModule.forRoot({}),
        NgxsSelectSnapshotModule.forRoot(),
      ],
      providers: [NgbActiveModal, SnippetResource],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetModalComponent);
    component = fixture.componentInstance;
    Object.defineProperty(component, 'scope', { writable: true });
    component.scope = { area: 'team', value: {} as any };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.snippetForm.controls['title'].setValue('');
    expect(component.snippetForm.valid).toBe(false);
  });

  it('form should be valid', () => {
    component.snippetForm.controls['title'].setValue('title');
    component.snippetForm.controls['description'].setValue('description');
    expect(component.snippetForm.valid).toBe(true);
  });

  it('should add file', () => {
    component.addFile();
    const files = component.snippetForm.controls['files'] as FormArray;
    expect(files.length).toBe(1);
    component.addFile();
    expect(files.length).toBe(2);
  });

  it('should remove file', () => {
    component.addFile();
    const files = component.snippetForm.controls['files'] as FormArray;
    expect(files.length).toBe(1);
    component.removeFile(0);
    expect(files.length).toBe(0);
  });

  it('should call confirmAction()', () => {
    const spy = spyOn(component, 'confirmAction');
    component.confirmAction(true);
    expect(spy).toHaveBeenCalled();
  });

  it('should call closeAction()', () => {
    const spy = spyOn(component, 'closeAction');
    component.closeAction('test');
    expect(spy).toHaveBeenCalled();
  });
});
