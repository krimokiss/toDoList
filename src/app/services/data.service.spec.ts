import { Tasks } from './../models/tasks';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';



import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// ON TEST ICI LA METHODE DE RECUPERATION DES TACHES
describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DataService ]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get all tasks', () => {
    const tasks = [
      new Tasks
    ];
    service.getAllTask().subscribe((response: Tasks[]) => {
      expect(response).toEqual(tasks);
    });
    const req = httpMock.expectOne('http://localhost:5000/todos');
    expect(req.request.method).toEqual('GET');
    req.flush(tasks);
  });
});

// ON TEST ICI LA METHODE D'AJOUT DE TACHES
describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DataService ]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add a task', () => {
    const task = new Tasks;
    service.addTask(task).subscribe((response: Tasks) => {
      expect(response).toEqual(task);
    });
    const req = httpMock.expectOne('http://localhost:5000/todos');
    expect(req.request.method).toEqual('POST');
    req.flush(task);
  });
});

// ON TEST ICI LA METHODE DE SUPPRESSION DES TACHES
describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DataService ]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should delete a task', () => {
    const task = new Tasks;
    service.deleteTask(task).subscribe((response: Tasks) => {
      expect(response).toEqual(task);
    });
    const req = httpMock.expectOne('http://localhost:5000/todos/0');
    expect(req.request.method).toEqual('DELETE');
    req.flush(task);
  });
});


// ON TEST ICI LA METHODE D'EDITION DES TACHES
describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DataService ]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should edit a task', () => {
    const task = new Tasks;
    service.editTask(task).subscribe((response: Tasks) => {
      expect(response).toEqual(task);
    });
    const req = httpMock.expectOne('http://localhost:5000/todos/0');
    expect(req.request.method).toEqual('PUT');
    req.flush(task);
  });
});
