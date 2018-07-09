/*Type definitions for Surveyjs Builder(Editor) JavaScript library v1.0.30
(c) Devsoft Baltic O� - http://surveyjs.io/
Github: https://github.com/surveyjs/editor
License: https://surveyjs.io/Licenses#BuildSurvey
*/
// Dependencies for this module:
//   ../../../survey-knockout

import * as Survey from "survey-knockout";

import "../utils/custom-checkbox.scss";
import "../utils/custom-select.scss";
import "../utils/ddmenu.scss";
import "../main.scss";

import "../localization/french";
import "../localization/german";
import "../localization/italian";
import "../localization/korean";
import "../localization/persian";
import "../localization/polish";
import "../localization/portuguese";
import "../localization/simplified-chinese";
import "../localization/spanish";

export declare var enStrings: {
    survey: {
        edit: string;
        dropQuestion: string;
        copy: string;
        addToToolbox: string;
        deletePanel: string;
        deleteQuestion: string;
        convertTo: string;
        drag: string;
    };
    qt: {
        default: string;
        checkbox: string;
        comment: string;
        imagepicker: string;
        dropdown: string;
        file: string;
        html: string;
        matrix: string;
        matrixdropdown: string;
        matrixdynamic: string;
        multipletext: string;
        panel: string;
        paneldynamic: string;
        radiogroup: string;
        rating: string;
        text: string;
        boolean: string;
        expression: string;
    };
    ed: {
        survey: string;
        settings: string;
        editSurvey: string;
        addNewPage: string;
        moveRight: string;
        moveLeft: string;
        deletePage: string;
        editPage: string;
        edit: string;
        newPageName: string;
        newQuestionName: string;
        newPanelName: string;
        testSurvey: string;
        testSurveyAgain: string;
        testSurveyWidth: string;
        embedSurvey: string;
        saveSurvey: string;
        designer: string;
        jsonEditor: string;
        undo: string;
        redo: string;
        options: string;
        generateValidJSON: string;
        generateReadableJSON: string;
        toolbox: string;
        toolboxGeneralCategory: string;
        delSelObject: string;
        editSelObject: string;
        correctJSON: string;
        surveyResults: string;
        modified: string;
        saving: string;
        saved: string;
    };
    pel: {
        isRequired: string;
    };
    pe: {
        apply: string;
        ok: string;
        cancel: string;
        reset: string;
        close: string;
        delete: string;
        addNew: string;
        addItem: string;
        removeAll: string;
        edit: string;
        itemValueEdit: string;
        editChoices: string;
        move: string;
        empty: string;
        notEmpty: string;
        fastEntry: string;
        formEntry: string;
        testService: string;
        conditionSelectQuestion: string;
        conditionValueQuestionTitle: string;
        conditionButtonAdd: string;
        conditionButtonReplace: string;
        conditionHelp: string;
        expressionHelp: string;
        aceEditorHelp: string;
        aceEditorRowTitle: string;
        aceEditorPanelTitle: string;
        showMore: string;
        conditionShowMoreUrl: string;
        assistantTitle: string;
        cellsEmptyRowsColumns: string;
        propertyIsEmpty: string;
        value: string;
        text: string;
        rowid: string;
        imageLink: string;
        columnEdit: string;
        itemEdit: string;
        url: string;
        path: string;
        valueName: string;
        titleName: string;
        hasOther: string;
        otherText: string;
        name: string;
        title: string;
        cellType: string;
        colCount: string;
        choicesOrder: string;
        visible: string;
        isRequired: string;
        startWithNewLine: string;
        rows: string;
        placeHolder: string;
        showPreview: string;
        storeDataAsText: string;
        maxSize: string;
        imageHeight: string;
        imageWidth: string;
        rowCount: string;
        columnLayout: string;
        addRowLocation: string;
        addRowText: string;
        removeRowText: string;
        minRateDescription: string;
        maxRateDescription: string;
        inputType: string;
        optionsCaption: string;
        defaultValue: string;
        cellsDefaultRow: string;
        surveyEditorTitle: string;
        qEditorTitle: string;
        maxLength: string;
        showTitle: string;
        locale: string;
        mode: string;
        clearInvisibleValues: string;
        cookieName: string;
        sendResultOnPageNext: string;
        storeOthersAsComment: string;
        showPageTitles: string;
        showPageNumbers: string;
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        startSurveyText: string;
        showNavigationButtons: string;
        showPrevButton: string;
        firstPageIsStarted: string;
        showCompletedPage: string;
        goNextPageAutomatic: string;
        showProgressBar: string;
        questionTitleLocation: string;
        requiredText: string;
        questionStartIndex: string;
        showQuestionNumbers: string;
        questionTitleTemplate: string;
        questionErrorLocation: string;
        focusFirstQuestionAutomatic: string;
        questionsOrder: string;
        maxTimeToFinish: string;
        maxTimeToFinishPage: string;
        showTimerPanel: string;
        showTimerPanelMode: string;
        renderMode: string;
        allowAddPanel: string;
        allowRemovePanel: string;
        panelAddText: string;
        panelRemoveText: string;
        isSinglePage: string;
        tabs: {
            general: string;
            fileOptions: string;
            html: string;
            columns: string;
            rows: string;
            choices: string;
            items: string;
            visibleIf: string;
            enableIf: string;
            rateValues: string;
            choicesByUrl: string;
            matrixChoices: string;
            multipleTextItems: string;
            validators: string;
            navigation: string;
            question: string;
            completedHtml: string;
            loadingHtml: string;
            timer: string;
            triggers: string;
            templateTitle: string;
        };
        editProperty: string;
        items: string;
        enterNewValue: string;
        noquestions: string;
        createtrigger: string;
        triggerOn: string;
        triggerMakePagesVisible: string;
        triggerMakeQuestionsVisible: string;
        triggerCompleteText: string;
        triggerNotSet: string;
        triggerRunIf: string;
        triggerSetToName: string;
        triggerSetValue: string;
        triggerIsVariable: string;
    };
    pv: {
        true: string;
        false: string;
        inherit: string;
        show: string;
        hide: string;
        default: string;
        initial: string;
        random: string;
        collapsed: string;
        expanded: string;
        none: string;
        asc: string;
        desc: string;
        indeterminate: string;
        decimal: string;
        currency: string;
        percent: string;
        firstExpanded: string;
        off: string;
        onPanel: string;
        onSurvey: string;
        list: string;
        progressTop: string;
        progressBottom: string;
        progressTopBottom: string;
        horizontal: string;
        vertical: string;
        top: string;
        bottom: string;
        topBottom: string;
        left: string;
        color: string;
        date: string;
        datetime: string;
        "datetime-local": string;
        email: string;
        month: string;
        number: string;
        password: string;
        range: string;
        tel: string;
        text: string;
        time: string;
        url: string;
        week: string;
        hidden: string;
        on: string;
        onPage: string;
        edit: string;
        display: string;
        onComplete: string;
        onHidden: string;
        all: string;
        page: string;
        survey: string;
        onNextPage: string;
        onValueChanged: string;
    };
    op: {
        empty: string;
        notempty: string;
        equal: string;
        notequal: string;
        contains: string;
        notcontains: string;
        greater: string;
        less: string;
        greaterorequal: string;
        lessorequal: string;
    };
    ew: {
        angular: string;
        jquery: string;
        knockout: string;
        react: string;
        vue: string;
        bootstrap: string;
        standard: string;
        showOnPage: string;
        showInWindow: string;
        loadFromServer: string;
        titleScript: string;
        titleHtml: string;
        titleJavaScript: string;
    };
    ts: {
        selectPage: string;
    };
    validators: {
        answercountvalidator: string;
        emailvalidator: string;
        expressionvalidator: string;
        numericvalidator: string;
        regexvalidator: string;
        textvalidator: string;
    };
    triggers: {
        completetrigger: string;
        setvaluetrigger: string;
        visibletrigger: string;
    };
    p: {
        name: string;
        title: {
            name: string;
            title: string;
        };
        navigationButtonsVisibility: string;
        questionsOrder: string;
        maxTimeToFinish: string;
        visible: string;
        visibleIf: string;
        questionTitleLocation: string;
        description: string;
        state: string;
        isRequired: string;
        indent: string;
        requiredErrorText: string;
        startWithNewLine: string;
        innerIndent: string;
        page: string;
        width: string;
        commentText: string;
        valueName: string;
        enableIf: string;
        defaultValue: string;
        correctAnswer: string;
        readOnly: string;
        validators: string;
        titleLocation: string;
        hasComment: string;
        hasOther: string;
        choices: string;
        choicesOrder: string;
        choicesByUrl: string;
        otherText: string;
        otherErrorText: string;
        storeOthersAsComment: string;
        label: string;
        showTitle: string;
        valueTrue: string;
        valueFalse: string;
        cols: string;
        rows: string;
        placeHolder: string;
        optionsCaption: string;
        expression: string;
        format: string;
        displayStyle: string;
        currency: string;
        useGrouping: string;
        showPreview: string;
        allowMultiple: string;
        imageHeight: string;
        imageWidth: string;
        storeDataAsText: string;
        maxSize: string;
        html: string;
        columns: string;
        cells: string;
        isAllRowRequired: string;
        horizontalScroll: string;
        cellType: string;
        columnsLayout: string;
        columnColCount: string;
        columnMinWidth: string;
        rowCount: string;
        minRowCount: string;
        maxRowCount: string;
        keyName: string;
        keyDuplicationError: string;
        confirmDelete: string;
        confirmDeleteText: string;
        addRowLocation: string;
        addRowText: string;
        removeRowText: string;
        items: string;
        itemSize: string;
        colCount: string;
        templateTitle: string;
        templateDescription: string;
        allowAddPanel: string;
        allowRemovePanel: string;
        panelCount: string;
        minPanelCount: string;
        maxPanelCount: string;
        panelsState: string;
        panelAddText: string;
        panelRemoveText: string;
        panelPrevText: string;
        panelNextText: string;
        showQuestionNumbers: string;
        showRangeInProgress: string;
        renderMode: string;
        templateTitleLocation: string;
        rateValues: string;
        rateMin: string;
        rateMax: string;
        rateStep: string;
        minRateDescription: string;
        maxRateDescription: string;
        inputType: string;
        size: string;
        locale: string;
        focusFirstQuestionAutomatic: string;
        completedHtml: string;
        completedBeforeHtml: string;
        loadingHtml: string;
        triggers: string;
        cookieName: string;
        sendResultOnPageNext: string;
        showNavigationButtons: string;
        showPrevButton: string;
        showPageTitles: string;
        showCompletedPage: string;
        showPageNumbers: string;
        questionErrorLocation: string;
        showProgressBar: string;
        mode: string;
        goNextPageAutomatic: string;
        checkErrorsMode: string;
        clearInvisibleValues: string;
        startSurveyText: string;
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        requiredText: string;
        questionStartIndex: string;
        questionTitleTemplate: string;
        firstPageIsStarted: string;
        isSinglePage: string;
        maxTimeToFinishPage: string;
        showTimerPanel: string;
        showTimerPanelMode: string;
        defaultPanelValue: string;
        defaultRowValue: string;
        hasNone: string;
        noneText: string;
        text: string;
        minValue: string;
        maxValue: string;
        minLength: string;
        maxLength: string;
        allowDigits: string;
        minCount: string;
        maxCount: string;
        regex: string;
    };
};

export declare var editorLocalization: {
    currentLocale: string;
    locales: {};
    getString: (strName: string, locale?: string) => any;
    hasString: (strName: string, locale?: string) => boolean;
    getPropertyName: (strName: string, locale?: string) => any;
    getPropertyTitle: (strName: string, locale?: string) => any;
    getProperty: (strName: string, locale?: string) => any;
    getPropertyValue: (value: any, locale?: string) => any;
    getValidatorName: (name: string, locale?: string) => any;
    getTriggerName: (name: string, locale?: string) => any;
    getLocale(locale: string): any;
    getValueInternal(value: any, prefix: string, locale?: string): any;
    getLocales: () => string[];
};
export declare var defaultStrings: {
    survey: {
        edit: string;
        dropQuestion: string;
        copy: string;
        addToToolbox: string;
        deletePanel: string;
        deleteQuestion: string;
        convertTo: string;
        drag: string;
    };
    qt: {
        default: string;
        checkbox: string;
        comment: string;
        imagepicker: string;
        dropdown: string;
        file: string;
        html: string;
        matrix: string;
        matrixdropdown: string;
        matrixdynamic: string;
        multipletext: string;
        panel: string;
        paneldynamic: string;
        radiogroup: string;
        rating: string;
        text: string;
        boolean: string;
        expression: string;
    };
    ed: {
        survey: string;
        settings: string;
        editSurvey: string;
        addNewPage: string;
        moveRight: string;
        moveLeft: string;
        deletePage: string;
        editPage: string;
        edit: string;
        newPageName: string;
        newQuestionName: string;
        newPanelName: string;
        testSurvey: string;
        testSurveyAgain: string;
        testSurveyWidth: string;
        embedSurvey: string;
        saveSurvey: string;
        designer: string;
        jsonEditor: string;
        undo: string;
        redo: string;
        options: string;
        generateValidJSON: string;
        generateReadableJSON: string;
        toolbox: string;
        toolboxGeneralCategory: string;
        delSelObject: string;
        editSelObject: string;
        correctJSON: string;
        surveyResults: string;
        modified: string;
        saving: string;
        saved: string;
    };
    pel: {
        isRequired: string;
    };
    pe: {
        apply: string;
        ok: string;
        cancel: string;
        reset: string;
        close: string;
        delete: string;
        addNew: string;
        addItem: string;
        removeAll: string;
        edit: string;
        itemValueEdit: string;
        editChoices: string;
        move: string;
        empty: string;
        notEmpty: string;
        fastEntry: string;
        formEntry: string;
        testService: string;
        conditionSelectQuestion: string;
        conditionValueQuestionTitle: string;
        conditionButtonAdd: string;
        conditionButtonReplace: string;
        conditionHelp: string;
        expressionHelp: string;
        aceEditorHelp: string;
        aceEditorRowTitle: string;
        aceEditorPanelTitle: string;
        showMore: string;
        conditionShowMoreUrl: string;
        assistantTitle: string;
        cellsEmptyRowsColumns: string;
        propertyIsEmpty: string;
        value: string;
        text: string;
        rowid: string;
        imageLink: string;
        columnEdit: string;
        itemEdit: string;
        url: string;
        path: string;
        valueName: string;
        titleName: string;
        hasOther: string;
        otherText: string;
        name: string;
        title: string;
        cellType: string;
        colCount: string;
        choicesOrder: string;
        visible: string;
        isRequired: string;
        startWithNewLine: string;
        rows: string;
        placeHolder: string;
        showPreview: string;
        storeDataAsText: string;
        maxSize: string;
        imageHeight: string;
        imageWidth: string;
        rowCount: string;
        columnLayout: string;
        addRowLocation: string;
        addRowText: string;
        removeRowText: string;
        minRateDescription: string;
        maxRateDescription: string;
        inputType: string;
        optionsCaption: string;
        defaultValue: string;
        cellsDefaultRow: string;
        surveyEditorTitle: string;
        qEditorTitle: string;
        maxLength: string;
        showTitle: string;
        locale: string;
        mode: string;
        clearInvisibleValues: string;
        cookieName: string;
        sendResultOnPageNext: string;
        storeOthersAsComment: string;
        showPageTitles: string;
        showPageNumbers: string;
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        startSurveyText: string;
        showNavigationButtons: string;
        showPrevButton: string;
        firstPageIsStarted: string;
        showCompletedPage: string;
        goNextPageAutomatic: string;
        showProgressBar: string;
        questionTitleLocation: string;
        requiredText: string;
        questionStartIndex: string;
        showQuestionNumbers: string;
        questionTitleTemplate: string;
        questionErrorLocation: string;
        focusFirstQuestionAutomatic: string;
        questionsOrder: string;
        maxTimeToFinish: string;
        maxTimeToFinishPage: string;
        showTimerPanel: string;
        showTimerPanelMode: string;
        renderMode: string;
        allowAddPanel: string;
        allowRemovePanel: string;
        panelAddText: string;
        panelRemoveText: string;
        isSinglePage: string;
        tabs: {
            general: string;
            fileOptions: string;
            html: string;
            columns: string;
            rows: string;
            choices: string;
            items: string;
            visibleIf: string;
            enableIf: string;
            rateValues: string;
            choicesByUrl: string;
            matrixChoices: string;
            multipleTextItems: string;
            validators: string;
            navigation: string;
            question: string;
            completedHtml: string;
            loadingHtml: string;
            timer: string;
            triggers: string;
            templateTitle: string;
        };
        editProperty: string;
        items: string;
        enterNewValue: string;
        noquestions: string;
        createtrigger: string;
        triggerOn: string;
        triggerMakePagesVisible: string;
        triggerMakeQuestionsVisible: string;
        triggerCompleteText: string;
        triggerNotSet: string;
        triggerRunIf: string;
        triggerSetToName: string;
        triggerSetValue: string;
        triggerIsVariable: string;
    };
    pv: {
        true: string;
        false: string;
        inherit: string;
        show: string;
        hide: string;
        default: string;
        initial: string;
        random: string;
        collapsed: string;
        expanded: string;
        none: string;
        asc: string;
        desc: string;
        indeterminate: string;
        decimal: string;
        currency: string;
        percent: string;
        firstExpanded: string;
        off: string;
        onPanel: string;
        onSurvey: string;
        list: string;
        progressTop: string;
        progressBottom: string;
        progressTopBottom: string;
        horizontal: string;
        vertical: string;
        top: string;
        bottom: string;
        topBottom: string;
        left: string;
        color: string;
        date: string;
        datetime: string;
        "datetime-local": string;
        email: string;
        month: string;
        number: string;
        password: string;
        range: string;
        tel: string;
        text: string;
        time: string;
        url: string;
        week: string;
        hidden: string;
        on: string;
        onPage: string;
        edit: string;
        display: string;
        onComplete: string;
        onHidden: string;
        all: string;
        page: string;
        survey: string;
        onNextPage: string;
        onValueChanged: string;
    };
    op: {
        empty: string;
        notempty: string;
        equal: string;
        notequal: string;
        contains: string;
        notcontains: string;
        greater: string;
        less: string;
        greaterorequal: string;
        lessorequal: string;
    };
    ew: {
        angular: string;
        jquery: string;
        knockout: string;
        react: string;
        vue: string;
        bootstrap: string;
        standard: string;
        showOnPage: string;
        showInWindow: string;
        loadFromServer: string;
        titleScript: string;
        titleHtml: string;
        titleJavaScript: string;
    };
    ts: {
        selectPage: string;
    };
    validators: {
        answercountvalidator: string;
        emailvalidator: string;
        expressionvalidator: string;
        numericvalidator: string;
        regexvalidator: string;
        textvalidator: string;
    };
    triggers: {
        completetrigger: string;
        setvaluetrigger: string;
        visibletrigger: string;
    };
    p: {
        name: string;
        title: {
            name: string;
            title: string;
        };
        navigationButtonsVisibility: string;
        questionsOrder: string;
        maxTimeToFinish: string;
        visible: string;
        visibleIf: string;
        questionTitleLocation: string;
        description: string;
        state: string;
        isRequired: string;
        indent: string;
        requiredErrorText: string;
        startWithNewLine: string;
        innerIndent: string;
        page: string;
        width: string;
        commentText: string;
        valueName: string;
        enableIf: string;
        defaultValue: string;
        correctAnswer: string;
        readOnly: string;
        validators: string;
        titleLocation: string;
        hasComment: string;
        hasOther: string;
        choices: string;
        choicesOrder: string;
        choicesByUrl: string;
        otherText: string;
        otherErrorText: string;
        storeOthersAsComment: string;
        label: string;
        showTitle: string;
        valueTrue: string;
        valueFalse: string;
        cols: string;
        rows: string;
        placeHolder: string;
        optionsCaption: string;
        expression: string;
        format: string;
        displayStyle: string;
        currency: string;
        useGrouping: string;
        showPreview: string;
        allowMultiple: string;
        imageHeight: string;
        imageWidth: string;
        storeDataAsText: string;
        maxSize: string;
        html: string;
        columns: string;
        cells: string;
        isAllRowRequired: string;
        horizontalScroll: string;
        cellType: string;
        columnsLayout: string;
        columnColCount: string;
        columnMinWidth: string;
        rowCount: string;
        minRowCount: string;
        maxRowCount: string;
        keyName: string;
        keyDuplicationError: string;
        confirmDelete: string;
        confirmDeleteText: string;
        addRowLocation: string;
        addRowText: string;
        removeRowText: string;
        items: string;
        itemSize: string;
        colCount: string;
        templateTitle: string;
        templateDescription: string;
        allowAddPanel: string;
        allowRemovePanel: string;
        panelCount: string;
        minPanelCount: string;
        maxPanelCount: string;
        panelsState: string;
        panelAddText: string;
        panelRemoveText: string;
        panelPrevText: string;
        panelNextText: string;
        showQuestionNumbers: string;
        showRangeInProgress: string;
        renderMode: string;
        templateTitleLocation: string;
        rateValues: string;
        rateMin: string;
        rateMax: string;
        rateStep: string;
        minRateDescription: string;
        maxRateDescription: string;
        inputType: string;
        size: string;
        locale: string;
        focusFirstQuestionAutomatic: string;
        completedHtml: string;
        completedBeforeHtml: string;
        loadingHtml: string;
        triggers: string;
        cookieName: string;
        sendResultOnPageNext: string;
        showNavigationButtons: string;
        showPrevButton: string;
        showPageTitles: string;
        showCompletedPage: string;
        showPageNumbers: string;
        questionErrorLocation: string;
        showProgressBar: string;
        mode: string;
        goNextPageAutomatic: string;
        checkErrorsMode: string;
        clearInvisibleValues: string;
        startSurveyText: string;
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        requiredText: string;
        questionStartIndex: string;
        questionTitleTemplate: string;
        firstPageIsStarted: string;
        isSinglePage: string;
        maxTimeToFinishPage: string;
        showTimerPanel: string;
        showTimerPanelMode: string;
        defaultPanelValue: string;
        defaultRowValue: string;
        hasNone: string;
        noneText: string;
        text: string;
        minValue: string;
        maxValue: string;
        minLength: string;
        maxLength: string;
        allowDigits: string;
        minCount: string;
        maxCount: string;
        regex: string;
    };
};

export declare class DragDropTargetElement {
    page: Survey.Page;
    target: any;
    source: any;
    moveToParent: any;
    moveToIndex: number;
    nestedPanelDepth: number;
    constructor(page: Survey.Page, target: any, source: any);
    moveTo(destination: any, isBottom: boolean, isEdge?: boolean): boolean;
    doDrop(): any;
    clear(): void;
}
export declare class DragDropHelper {
    data: Survey.ISurvey;
    static edgeHeight: number;
    static nestedPanelDepth: number;
    static dataStart: string;
    static dragData: any;
    static prevEvent: {
        element: any;
        x: number;
        y: number;
    };
    static counter: number;
    constructor(data: Survey.ISurvey, onModifiedCallback: (options?: any) => any, parent?: HTMLElement);
    attachToElement(domElement: any, surveyElement: any): void;
    readonly survey: Survey.Survey;
    startDragQuestion(event: DragEvent, element: any): void;
    startDragToolboxItem(event: DragEvent, elementName: string, elementJson: any): void;
    isSurveyDragging(event: DragEvent): boolean;
    doDragDropOver(event: DragEvent, element: any, isEdge?: boolean): void;
    replaceTargetElement(element: any): any;
    end(): void;
    readonly isMoving: boolean;
    doDrop(event: DragEvent): void;
    doLeavePage(event: DragEvent): void;
    scrollToElement(el: HTMLElement): void;
}

export interface ISurveyObjectEditorOptions {
    alwaySaveTextInPropertyEditors: boolean;
    showApplyButtonInEditors: boolean;
    useTabsInElementEditor: boolean;
    onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue): any;
    onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn): any;
    onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any): any;
    onGetErrorTextOnValidationCallback(propertyName: string, obj: Survey.Base, value: any): string;
    onValueChangingCallback(options: any): any;
    onPropertyEditorObjectSetCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase): any;
    onPropertyEditorModalShowDescriptionCallback(propertyName: string, obj: Survey.Base): any;
    onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string;
}
export declare class SurveyPropertyEditorBase implements Survey.ILocalizableOwner {
    koValue: any;
    koText: any;
    koIsDefault: any;
    koHasError: any;
    koErrorText: any;
    isTabProperty: boolean;
    isInplaceProperty: boolean;
    onChanged: (newValue: any) => any;
    onGetLocale: () => string;
    onValueUpdated: (newValue: any) => any;
    setup(): void;
    beforeShow(): void;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly editorTypeTemplate: string;
    readonly property: Survey.JsonObjectProperty;
    readonly defaultValue: any;
    readonly editablePropertyName: string;
    readonly readOnly: boolean;
    readonly alwaysShowEditor: boolean;
    readonly title: string;
    readonly isDiplayNameVisible: boolean;
    displayName: string;
    readonly showDisplayNameOnTop: boolean;
    readonly canShowDisplayNameOnTop: boolean;
    readonly contentTemplateName: string;
    readonly isModal: boolean;
    object: any;
    getValueText(value: any): string;
    editingValue: any;
    hasError(): boolean;
    getLocString(name: string): any;
    hasLocString(name: string): boolean;
    protected checkForErrors(): boolean;
    readonly isRequired: boolean;
    protected setIsRequired(): void;
    protected setTitleAndDisplayName(): void;
    protected onBeforeApply(): void;
    apply(): void;
    readonly locale: string;
    getLocale(): string;
    getMarkdownHtml(text: string): string;
    getProcessedText(text: string): string;
    options: ISurveyObjectEditorOptions;
    protected onOptionsChanged(): void;
    protected setValueCore(value: any): void;
    setObject(value: any): void;
    activate(): void;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    protected onValueChanged(): void;
    protected getCorrectedValue(value: any): any;
    protected beginValueUpdating(): void;
    protected endValueUpdating(): void;
    protected updateValue(): void;
    protected getValue(): any;
}

export declare class SurveyPropertyCustomEditor extends SurveyPropertyEditorBase {
    onValueChangedCallback: (newValue: any) => void;
    constructor(property: Survey.JsonObjectProperty, widgetJSON?: any);
    readonly editorType: string;
    readonly widgetJSON: any;
    protected onValueChanged(): void;
    protected readonly widgetRender: any;
    protected doAfterRender(elements: any, con: any): void;
}

export declare class SurveyPropertyEditorFactory {
    static defaultEditor: string;
    static getOperators(): Array<any>;
    static registerEditor(name: string, creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase, editableClassName?: string): void;
    static registerCustomEditor(name: string, widgetJSON: any): void;
    static createEditor(property: Survey.JsonObjectProperty, func: (newValue: any) => any): SurveyPropertyEditorBase;
}
export declare class SurveyStringPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
}
export declare class SurveyDropdownPropertyEditor extends SurveyPropertyEditorBase {
    koChoices: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    getValueText(value: any): string;
    setObject(value: any): void;
}
export declare class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly alwaysShowEditor: boolean;
    readonly canShowDisplayNameOnTop: boolean;
    getValueText(value: any): string;
}
export declare class SurveyNumberPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected getCorrectedValue(value: any): any;
}

export declare class SurveyPropertyTextItemsEditor extends SurveyNestedPropertyEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected getEditorName(): string;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): SurveyPropertyTextItemsItem;
    protected createItemFromEditorItem(editorItem: any): any;
    protected getProperties(): Array<Survey.JsonObjectProperty>;
}
export declare class SurveyPropertyTextItemsItem extends SurveyNestedPropertyEditorItem {
    item: Survey.MultipleTextItem;
    columns: Array<SurveyNestedPropertyEditorColumn>;
    constructor(item: Survey.MultipleTextItem, columns: Array<SurveyNestedPropertyEditorColumn>, options: ISurveyObjectEditorOptions);
    protected createSurveyQuestionEditor(): SurveyQuestionEditor;
}

export declare class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
    koItems: any;
    onDeleteClick: any;
    onAddClick: any;
    onClearClick: any;
    koAllowAddRemoveItems: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    protected getCorrectedValue(value: any): any;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    sortableOptions: {
        handle: string;
        animation: number;
    };
    protected AddItem(): void;
    protected setupItems(): void;
    protected onValueChanged(): void;
    setup(): void;
    protected getItemsFromValue(value?: any): Array<any>;
    protected onBeforeApply(): void;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): any;
    protected createItemFromEditorItem(editorItem: any): any;
}

export declare class SurveyPropertyItemValuesEditor extends SurveyNestedPropertyEditor {
    koItemsText: any;
    koShowTextView: any;
    changeToTextViewClick: any;
    changeToFormViewClick: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly hasDetailButton: boolean;
    protected getItemValueClassName(): string;
    protected getEditorName(): string;
    protected checkForErrors(): boolean;
    beforeShow(): void;
    protected getProperties(): Array<Survey.JsonObjectProperty>;
    protected readonly itemValueClasseName: string;
    protected getDefinedProperties(): Array<any>;
    protected getDefaultProperties(): Array<Survey.JsonObjectProperty>;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): any;
    protected createItemFromEditorItem(editorItem: any): Survey.ItemValue;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
    protected onListDetailViewChanged(): void;
    protected updateItems(text: string): void;
    protected getItemsText(): string;
}
export declare class SurveyPropertyItemValuesEditorItem extends SurveyNestedPropertyEditorItem {
    item: Survey.ItemValue;
    columns: Array<SurveyNestedPropertyEditorColumn>;
    constructor(item: Survey.ItemValue, columns: Array<SurveyNestedPropertyEditorColumn>, options: ISurveyObjectEditorOptions, className?: string);
    protected createSurveyQuestionEditor(): SurveyQuestionEditor;
}

export declare class SurveyPropertyMultipleValuesEditor extends SurveyPropertyModalEditor {
    koItems: any;
    koEditingValue: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    setObject(value: any): void;
    protected updateValue(): void;
    protected onBeforeApply(): void;
    readonly editorType: string;
}

export declare class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
    koEditItem: any;
    koIsList: any;
    koActiveView: any;
    onEditItemClick: any;
    onCancelEditItemClick: any;
    koEditorName: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly columns: Array<SurveyNestedPropertyEditorColumn>;
    beforeShow(): void;
    protected createColumns(): void;
    protected getProperties(): Array<Survey.JsonObjectProperty>;
    protected getPropertiesNames(definitionName: string, defaultNames: Array<string>): Array<string>;
    protected getPropertiesByNames(className: string, names: Array<any>): Array<Survey.JsonObjectProperty>;
    protected getEditorName(): string;
    protected onListDetailViewChanged(): void;
    protected checkForErrors(): boolean;
    protected onBeforeApply(): void;
}
export declare class SurveyNestedPropertyEditorItem {
    obj: any;
    columns: Array<SurveyNestedPropertyEditorColumn>;
    protected options: ISurveyObjectEditorOptions;
    constructor(obj: any, columns: Array<SurveyNestedPropertyEditorColumn>, options: ISurveyObjectEditorOptions);
    readonly itemEditor: SurveyQuestionEditor;
    readonly cells: Array<SurveyNestedPropertyEditorEditorCell>;
    hasError(): boolean;
    protected resetSurveyQuestionEditor(): void;
    protected createSurveyQuestionEditor(): any;
    apply(): void;
}
export declare class SurveyNestedPropertyEditorColumn {
    property: Survey.JsonObjectProperty;
    constructor(property: Survey.JsonObjectProperty);
    readonly text: string;
}
export declare class SurveyNestedPropertyEditorEditorCell {
    obj: any;
    property: Survey.JsonObjectProperty;
    constructor(obj: any, property: Survey.JsonObjectProperty, options?: ISurveyObjectEditorOptions);
    readonly objectProperty: SurveyObjectProperty;
    readonly editor: SurveyPropertyEditorBase;
    readonly koValue: any;
    value: any;
    readonly hasError: boolean;
}

export declare class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected getEditorName(): string;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): SurveyPropertyMatrixDropdownColumnsItem;
    protected createItemFromEditorItem(editorItem: any): any;
    protected createEditorItemCore(item: any): Survey.MatrixDropdownColumn;
    protected getProperties(): Array<Survey.JsonObjectProperty>;
}
export declare class SurveyPropertyMatrixDropdownColumnsItem extends SurveyNestedPropertyEditorItem {
    column: Survey.MatrixDropdownColumn;
    columns: Array<SurveyNestedPropertyEditorColumn>;
    constructor(column: Survey.MatrixDropdownColumn, columns: Array<SurveyNestedPropertyEditorColumn>, options?: ISurveyObjectEditorOptions);
    protected createSurveyQuestionEditor(): SurveyQuestionEditor;
}

export declare class SurveyPropertyModalEditorCustomWidget {
    json: any;
    constructor(json: any);
    afterRender(editor: SurveyPropertyModalEditor, el: HTMLElement): void;
    destroy(editor: SurveyPropertyModalEditor, el: HTMLElement): void;
}
export declare class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
    static registerCustomWidget(editorType: string, json: any): void;
    static getCustomWidget(editorType: string): SurveyPropertyModalEditorCustomWidget;
    editingObject: any;
    onApplyClick: any;
    onOkClick: any;
    onResetClick: any;
    onShowModal: any;
    onHideModal: any;
    modalName: string;
    modalNameTarget: string;
    koShowApplyButton: any;
    koTitleCaption: any;
    koAfterRender: any;
    koHtmlTop: any;
    koHtmlBottom: any;
    constructor(property: Survey.JsonObjectProperty);
    setup(): void;
    readonly isModal: boolean;
    readonly isShowingModal: boolean;
    beforeShow(): void;
    beforeCloseModal(): void;
    protected onOptionsChanged(): void;
    setObject(value: any): void;
    readonly isEditable: boolean;
    protected afterRender(elements: any, con: any): void;
}
export declare class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
    koTextValue: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly isEditable: boolean;
    getValueText(value: any): string;
    protected onkoTextValueChanged(newValue: any): void;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
}
export declare class SurveyPropertyHtmlEditor extends SurveyPropertyTextEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
}

export declare class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor {
    syntaxCheckMethodName: string;
    availableOperators: any[];
    showHelpText: boolean;
    koIsValid: any;
    koCanAddCondition: any;
    koAddConditionQuestions: any;
    koAddConditionQuestion: any;
    koAddConditionOperator: any;
    koAddConditionValue: any;
    koAddConditionType: any;
    koShowAddConditionType: any;
    koAddConditionButtonText: any;
    koAddContionValueEnabled: any;
    koHasValueSurvey: any;
    onConditionAddClick: any;
    koValueSurvey: any;
    constructor(property: Survey.JsonObjectProperty, _type?: string, syntaxCheckMethodName?: string);
    setObject(value: any): void;
    readonly editorType: string;
    readonly availableQuestions: any[];
    readonly allConditionQuestions: any[];
    readonly hasAceEditor: boolean;
    readonly addConditionQuestionOptions: string;
    addCondition(): void;
    protected onBeforeApply(): void;
    protected onkoTextValueChanged(newValue: any): void;
}
export declare function doGetCompletions(prevIdentifier: string, prefix: string, config: {
    question: Survey.QuestionBase;
    questions: Survey.Question[];
}, completer?: any): any[];
export declare function insertMatch(editor: any, data: any): void;

export declare class SurveyPropertyResultfullEditor extends SurveyPropertyModalEditor {
    koItems: any;
    survey: Survey.Survey;
    question: Survey.QuestionDropdown;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly restfullValue: any;
    getValueText(value: any): string;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
}
export declare class SurveyPropertyResultfullEditorItem {
    name: string;
    onValueChanged: (item: SurveyPropertyResultfullEditorItem) => any;
    koValue: any;
    constructor(name: string, val: string, onValueChanged: (item: SurveyPropertyResultfullEditorItem) => any);
    setValue(val: string): void;
}

export declare class SurveyPropertyDefaultValueEditor extends SurveyPropertyModalEditor {
    survey: Survey.Survey;
    question: Survey.Question;
    koSurvey: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    beforeShow(): void;
    protected onBeforeApply(): void;
    readonly editorType: string;
    protected buildQuestionJson(): any;
    protected getSurveyInitialValue(): any;
    protected getSurveyResult(): any;
}
export declare class SurveyPropertyDefaultRowValueEditorBase extends SurveyPropertyDefaultValueEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorTypeTemplate: string;
    protected getSurveyInitialValue(): any;
    protected getSurveyResult(): any;
}
export declare class SurveyPropertyDefaultRowValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    protected buildQuestionJson(): any;
    readonly editorType: string;
}
export declare class SurveyPropertyDefaultPanelValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    protected buildQuestionJson(): any;
    readonly editorType: string;
}

export declare class SurveyPropertyTriggersEditor extends SurveyPropertyItemsEditor {
    koElements: any;
    koQuestions: any;
    koPages: any;
    koQuestionNames: any;
    koSelected: any;
    koTriggers: any;
    availableTriggers: Array<string>;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected onValueChanged(): void;
    protected createEditorItem(item: any): SurveyPropertyTrigger;
    protected createItemFromEditorItem(editorItem: any): Survey.SurveyTrigger;
}
export declare class SurveyPropertyTrigger {
    trigger: Survey.SurveyTrigger;
    availableOperators: any[];
    koName: any;
    koOperator: any;
    koValue: any;
    koType: any;
    koText: any;
    koIsValid: any;
    koRequireValue: any;
    conditionEditor: SurveyPropertyConditionEditor;
    constructor(trigger: Survey.SurveyTrigger);
    createTrigger(): Survey.SurveyTrigger;
}
export declare class SurveyPropertyVisibleTrigger extends SurveyPropertyTrigger {
    trigger: Survey.SurveyTriggerVisible;
    pages: SurveyPropertyTriggerObjects;
    questions: SurveyPropertyTriggerObjects;
    constructor(trigger: Survey.SurveyTriggerVisible, koPages: any, koQuestions: any);
    createTrigger(): Survey.SurveyTrigger;
}
export declare class SurveyPropertySetValueTrigger extends SurveyPropertyTrigger {
    trigger: Survey.SurveyTriggerSetValue;
    koQuestions: any;
    kosetToName: any;
    kosetValue: any;
    koisVariable: any;
    constructor(trigger: Survey.SurveyTriggerSetValue, koQuestions: any);
    createTrigger(): Survey.SurveyTrigger;
}
export declare class SurveyPropertyTriggerObjects {
    title: string;
    koObjects: any;
    koChoosen: any;
    koSelected: any;
    koChoosenSelected: any;
    onDeleteClick: any;
    onAddClick: any;
    constructor(title: string, allObjects: Array<string>, choosenObjects: Array<string>);
}

export declare class SurveyPropertyValidatorsEditor extends SurveyPropertyItemsEditor {
    koSelected: any;
    koValidators: any;
    availableValidators: Array<string>;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected onValueChanged(): void;
    protected createEditorItem(item: any): SurveyPropertyValidatorItem;
    protected createItemFromEditorItem(editorItem: any): Survey.SurveyValidator;
}
export declare class SurveyPropertyValidatorItem {
    validator: Survey.SurveyValidator;
    text: string;
    constructor(validator: Survey.SurveyValidator);
}

export declare class SurveyPropertyCellsEditor extends SurveyPropertyModalEditor {
    koRows: any;
    koColumns: any;
    koCanEdit: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    beforeShow(): void;
    protected onBeforeApply(): void;
    readonly editorType: string;
    protected onValueChanged(): void;
    readonly canEdit: boolean;
    readonly rows: Array<any>;
    readonly columns: Array<any>;
    protected getCellText(rowIndex: number, columnIndex: number): string;
    protected setupCells(): void;
    protected createRow(rowIndex: number, rowText: string): any;
}

export declare class SurveyObjectItem {
    value: Survey.Base;
    text: any;
    level: number;
}
export declare class SurveyObjects {
    koObjects: any;
    koSelected: any;
    static intend: string;
    surveyValue: Survey.Survey;
    getItemTextCallback: (obj: Survey.Base, text: string) => string;
    constructor(koObjects: any, koSelected: any);
    survey: Survey.Survey;
    addPage(page: Survey.PageModel): void;
    addElement(element: any, parent: any): void;
    selectObject(obj: Survey.Base): void;
    getSelectedObjectPage(obj?: Survey.Base): Survey.Page;
    removeObject(obj: Survey.Base): void;
    nameChanged(obj: Survey.Base): void;
    selectNextQuestion(isUp: boolean): Survey.QuestionBase;
}

export declare class SurveyQuestionEditorProperty {
    obj: Survey.Base;
    property: Survey.JsonObjectProperty;
    koValue: any;
    constructor(obj: Survey.Base, property: Survey.JsonObjectProperty, displayName: string, options?: ISurveyObjectEditorOptions, isTabProperty?: boolean);
    readonly objectProperty: SurveyObjectProperty;
    readonly editor: SurveyPropertyEditorBase;
    hasError(): boolean;
    apply(): void;
    reset(): void;
    beforeShow(): void;
}
export declare class SurveyQuestionEditorRow {
    obj: Survey.Base;
    category: string;
    properties: Array<SurveyQuestionEditorProperty>;
    constructor(obj: Survey.Base);
    addProperty(property: any, displayName: string, options: ISurveyObjectEditorOptions, isTabProperty: boolean): void;
    hasError(): boolean;
}
export declare class SurveyQuestionEditorProperties {
    obj: Survey.Base;
    options: ISurveyObjectEditorOptions;
    isTabProperty: boolean;
    rows: Array<SurveyQuestionEditorRow>;
    constructor(obj: Survey.Base, properties: Array<any>, onCanShowPropertyCallback?: (object: any, property: Survey.JsonObjectProperty) => boolean, options?: ISurveyObjectEditorOptions, tab?: any);
    apply(): void;
    reset(): void;
    beforeShow(): void;
    hasError(): boolean;
    protected buildRows(properties: any): void;
}

export interface ISurveyQuestionEditorDefinition {
    title?: string;
    properties?: Array<string | {
        name: string;
        category?: string;
        tab?: string;
    }>;
    tabs?: Array<{
        name: string;
        index?: number;
        title?: string;
        visible?: boolean;
    }>;
}
export declare class SurveyQuestionEditorDefinition {
    static definition: {
        [key: string]: ISurveyQuestionEditorDefinition;
    };
    static getProperties(className: string): Array<any>;
    static isGeneralTabVisible(className: string): boolean;
    static getTabs(className: string): Array<any>;
    static getAllDefinitionsByClass(className: string): Array<ISurveyQuestionEditorDefinition>;
}

export declare class SurveyPropertyEditorShowWindow {
    koVisible: any;
    koEditor: any;
    onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    constructor();
    show(questionBase: Survey.Base, elWindow: HTMLElement, onChanged: (question: Survey.QuestionBase) => any, options?: ISurveyObjectEditorOptions, onClosed?: () => any): void;
}
export declare class SurveyQuestionProperties {
    obj: any;
    onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    constructor(obj: any, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean);
    getProperty(propertyName: string): Survey.JsonObjectProperty;
    getProperties(tab: any): Array<Survey.JsonObjectProperty>;
}
export declare class SurveyQuestionEditor {
    obj: any;
    onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    className: string;
    options: ISurveyObjectEditorOptions;
    protected properties: SurveyQuestionProperties;
    onChanged: (obj: Survey.Base) => any;
    onHideWindow: () => any;
    onOkClick: any;
    onApplyClick: any;
    onResetClick: any;
    koTabs: KnockoutObservableArray<SurveyQuestionEditorTab>;
    koActiveTab: KnockoutObservable<string>;
    koTitle: KnockoutObservable<string>;
    koShowApplyButton: any;
    onTabClick: any;
    constructor(obj: any, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean, className?: string, options?: ISurveyObjectEditorOptions);
    protected doCloseWindow(isCancel: boolean): void;
    hasError(): boolean;
    reset(): void;
    apply(): void;
    readonly useTabsInElementEditor: boolean;
}
export declare class SurveyQuestionEditorTab {
    obj: any;
    properties: SurveyQuestionEditorProperties;
    constructor(obj: any, properties: SurveyQuestionEditorProperties, _name: any);
    koAfterRender(elements: HTMLElement[], context: any): void;
    readonly name: string;
    title: string;
    readonly htmlTemplate: string;
    readonly templateObject: any;
    hasError(): boolean;
    beforeShow(): void;
    reset(): void;
    apply(): void;
    doCloseWindow(): void;
    protected getValue(property: Survey.JsonObjectProperty): any;
}

/**
    * The Toolbox item description
    */
export interface IQuestionToolboxItem {
        /**
            * An unique name
            */
        name: string;
        /**
            * Icon name
            */
        iconName: string;
        /**
            * The JSON that used to create a new question/panel. The 'type' attribute is requried.
            */
        json: any;
        /**
            * Toolbox item title
            */
        title: string;
        /**
            * True, if an end user added this item into Toolbox from the survey
            */
        isCopied: boolean;
        /**
            * Toolbox item category. If it is empty, it goes to 'General' category.
            */
        category: string;
}
/**
    * The list of Toolbox items.
    */
export declare class QuestionToolbox {
        /**
            * Modify this array to change the toolbox items order.
            */
        orderedQuestions: string[];
        /**
            * The maximum number of copied toolbox items. If an user adding copiedItemMaxCount + 1 item, the first added item will be removed.
            */
        copiedItemMaxCount: number;
        koItems: KnockoutObservableArray<{}>;
        koCategories: KnockoutObservableArray<{}>;
        koActiveCategory: KnockoutObservable<string>;
        koHasCategories: KnockoutObservable<boolean>;
        constructor(supportedQuestions?: Array<string>);
        /**
            * The Array of Toolbox items as Text JSON.
            */
        jsonText: string;
        /**
            * The Array of copied Toolbox items as Text JSON.
            */
        copiedJsonText: string;
        /**
            * The Array of Toolbox items
            */
        readonly items: Array<IQuestionToolboxItem>;
        /**
            * The Array of copied Toolbox items
            */
        readonly copiedItems: Array<IQuestionToolboxItem>;
        /**
            * Add toolbox items into the Toolbox
            * @param items the list of new items
            * @param clearAll set it to true to clear all previous items.
            */
        addItems(items: Array<IQuestionToolboxItem>, clearAll?: boolean): void;
        /**
            * Add a copied Question into Toolbox
            * @param question a copied Survey.Question
            */
        addCopiedItem(question: Survey.QuestionBase): void;
        /**
            * Add a toolbox item
            * @param item the toolbox item description
            * @see IQuestionToolboxItem
            */
        addItem(item: IQuestionToolboxItem): void;
        /**
            * Add a new toolbox item, add delete the old item with the same name
            * @param item the toolbox item description
            * @see IQuestionToolboxItem
            */
        replaceItem(item: IQuestionToolboxItem): boolean;
        /**
            * Remove a toolbox item by it's name
            * @param name toolbox item name
            * @see IQuestionToolboxItem
            */
        removeItem(name: string): boolean;
        /**
            * Remove all toolbox items.
            */
        clearItems(): void;
        /**
            * Remove all copied toolbox items.
            */
        clearCopiedItems(): void;
        /**
            * Returns toolbox item by its name. Returns null if there is no toolbox item with this name
            * @param name
            */
        getItemByName(name: string): IQuestionToolboxItem;
        /**
            * Set it to true, to allow end-user to expand more than one category. There will no active category in this case
            * @see activeCategory
            */
        allowExpandMultipleCategories: boolean;
        /**
            * Change the category of the toolbox item
            * @param name the toolbox item name
            * @param category new category name
            */
        changeCategory(name: string, category: string): void;
        /**
            * Change categories for several toolbox items.
            * @param changedItems the array of objects {name: "your toolbox item name", category: "new category name"}
            */
        changeCategories(changedItems: Array<any>): void;
        /**
            * Set and get and active category. This property doesn't work if allowExpandMultipleCategories is true. Its default value is empty.
            * @see allowExpandMultipleCategories
            * @see expandCategory
            * @see collapseCategory
            */
        activeCategory: string;
        /**
            * Expand a category by its name. If allowExpandMultipleCategories is false (default value), all other categories become collapsed
            * @param categoryName the category name
            * @see allowExpandMultipleCategories
            * @see collapseCategory
            */
        expandCategory(categoryName: string): void;
        /**
            * Collapse a category by its name. If allowExpandMultipleCategories is false (default value) this function does nothing
            * @param categoryName the category name
            * @see allowExpandMultipleCategories
            */
        collapseCategory(categoryName: string): void;
        /**
            * Expand all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
            * @see allowExpandMultipleCategories
            */
        expandAllCategories(): void;
        /**
            * Collapse all categories. If allowExpandMultipleCategories is false (default value) this function does nothing
            * @see allowExpandMultipleCategories
            */
        collapseAllCategories(): void;
        protected onItemsChanged(): void;
}

export declare type SurveyOnPropertyChangedCallback = (property: SurveyObjectProperty, newValue: any) => void;
export declare class SurveyObjectProperty {
    property: Survey.JsonObjectProperty;
    name: string;
    disabled: boolean;
    editor: SurveyPropertyEditorBase;
    editorType: string;
    editorTypeTemplate: string;
    baseEditorType: string;
    koIsShowEditor: KnockoutObservable<boolean>;
    constructor(property: Survey.JsonObjectProperty, onPropertyChanged?: SurveyOnPropertyChangedCallback, propertyEditorOptions?: ISurveyObjectEditorOptions);
    readonly displayName: string;
    readonly title: string;
    isActive: boolean;
    readonly koValue: any;
    readonly koText: any;
    readonly koIsDefault: any;
    object: any;
    protected onEditorValueChanged(newValue: any): void;
}

export declare class SurveyObjectEditor {
    propertyEditorOptions: ISurveyObjectEditorOptions;
    koAfterRender: any;
    koProperties: KnockoutObservableArray<SurveyObjectProperty>;
    koActiveProperty: KnockoutObservable<SurveyObjectProperty>;
    koHasObject: KnockoutObservable<boolean>;
    onPropertyValueChanged: Survey.Event<(sender: SurveyObjectEditor, options: any) => any, any>;
    onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    onSortPropertyCallback: (object: any, property1: Survey.JsonObjectProperty, property2: Survey.JsonObjectProperty) => number;
    onAfterRenderCallback: (object: any, htmlElement: HTMLElement, property: SurveyObjectProperty) => any;
    constructor(propertyEditorOptions?: ISurveyObjectEditorOptions);
    selectedObject: any;
    getPropertyEditor(name: string): SurveyObjectProperty;
    changeActiveProperty(property: SurveyObjectProperty): void;
    objectChanged(): void;
    protected afterRender(elements: any, prop: any): void;
    protected updateProperties(): void;
    protected canShowProperty(property: Survey.JsonObjectProperty): boolean;
    protected updatePropertiesObject(): void;
}

import "../vendor/knockout-sortable.js";
export declare class PagesEditor {
    pagesSelection: KnockoutComputed<Survey.PageModel[]>;
    constructor(editor: SurveyEditor, element: any);
    pageSelection: KnockoutComputed<Survey.PageModel>;
    addPage(): void;
    copyPage(page: Survey.PageModel): void;
    deletePage(): void;
    showPageSettings(page: Survey.PageModel): void;
    onPageClick: (model: any, event: any) => void;
    readonly sortableOptions: {
        onEnd: (evt: any) => void;
        handle: string;
        animation: number;
    };
    selectedPage: Survey.PageModel;
    getPageClass: (page: any) => string;
    getPageMenuIconClass: (page: any) => "icon-gearactive" | "icon-gear";
    showActions: (page: any) => boolean;
    isLastPage(): boolean;
    moveLeft(model: any, event: any): void;
    moveRight(model: any, event: any): void;
    scrollToSelectedPage(): void;
    onWheel(model: any, event: any): void;
    updateMenuPosition(): void;
    getLocString(str: string): any;
    isActive(): boolean;
}

export declare class SurveyTextWorker {
    text: string;
    static newLineChar: string;
    errors: Array<any>;
    constructor(text: string);
    readonly survey: Survey.Survey;
    readonly isJsonCorrect: boolean;
    protected process(): void;
}

export declare enum ObjType {
    Unknown = 0,
    Survey = 1,
    Page = 2,
    Panel = 3,
    Question = 4
}
export declare class SurveyHelper {
    static getNewPageName(objs: Array<any>): string;
    static getNewQuestionName(objs: Array<any>): string;
    static getNewPanelName(objs: Array<any>): string;
    static getNewName(objs: Array<any>, baseName: string): string;
    static getObjectType(obj: any): ObjType;
    static getObjectTypeStr(obj: any): string;
    static getObjectName(obj: any): string;
    static getElements(element: any, includeHidden?: boolean): Array<any>;
    static isPropertyVisible(obj: any, property: Survey.JsonObjectProperty, onCanShowPropertyCallback?: (object: any, property: Survey.JsonObjectProperty) => boolean): boolean;
    static scrollIntoViewIfNeeded(el: HTMLElement, pageEl: HTMLElement): void;
}

export declare class SurveyLiveTester {
    koIsRunning: any;
    selectTestClick: any;
    selectPageClick: any;
    koResultText: any;
    survey: Survey.Survey;
    koSurvey: any;
    koPages: any;
    koActivePage: any;
    setPageDisable: any;
    onSurveyCreatedCallback: (survey: Survey.Survey) => any;
    constructor();
    setJSON(json: any): void;
    show(): void;
    readonly testSurveyAgainText: any;
    readonly surveyResultsText: any;
    readonly selectPageText: any;
}

export declare class SurveyEmbedingWindow {
    koHeadText: any;
    koBodyText: any;
    koJavaText: any;
    surveyId: string;
    surveyPostId: string;
    generateValidJSON: boolean;
    surveyJSVersion: string;
    surveyCDNPath: string;
    koShowAsWindow: any;
    koScriptUsing: any;
    koHasIds: any;
    koLoadSurvey: any;
    koLibraryVersion: any;
    koVisibleHtml: any;
    constructor();
    json: any;
    readonly hasAceEditor: boolean;
    show(): void;
}

export declare class QuestionConverter {
    static convertInfo: {};
    static addConvertInfo(className: string, convertToClassName: string): void;
    static getConvertToClasses(className: string): Array<string>;
    static convertObject(obj: Survey.QuestionBase, convertToClass: string): Survey.QuestionBase;
}

export declare class SurveyUndoRedo {
    koCanUndo: any;
    koCanRedo: any;
    maximumCount: number;
    constructor();
    clear(): void;
    setCurrent(survey: Survey.Survey, selectedObjName: string): void;
    undo(): UndoRedoItem;
    redo(): UndoRedoItem;
    protected readonly canUndo: boolean;
    protected readonly canRedo: boolean;
}
export declare class UndoRedoItem {
    surveyJSON: any;
    selectedObjName: string;
}

export interface ISurveyObjectMenuItem {
    name: string;
    text: string;
    onClick: (obj: Survey.Base) => any;
    icon?: string | (() => string);
    hasTitle?: boolean;
    template?: string;
}
export declare class SurveyForDesigner extends Survey.Survey {
    editQuestionClick: any;
    onSelectedElementChanged: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onEditButtonClick: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onGetMenuItems: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onElementDoubleClick: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onUpdateElementAllowingOptions: (options: any) => any;
    constructor(jsonObj?: any, renderedElement?: any, css?: any);
    updateElementAllowingOptions(obj: Survey.Base): void;
    getMenuItems(obj: Survey.Base): Array<ISurveyObjectMenuItem>;
    selectedElement: any;
    doElementDoubleClick(obj: Survey.Base): void;
    getEditorLocString(value: string): string;
}
export declare function registerAdorner(name: any, adorner: any): void;
export declare function removeAdorners(names?: string[]): void;
export declare function applyAdornerClass(classes: any, adornerClass: any): any;

export declare class Extentions {
    static registerCustomPropertyEditor(name: string, widgetJSON: any): void;
    static registerPropertyEditor(name: string, creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase): void;
}

/**
    * The toolbar item description
    */
export interface IToolbarItem {
        /**
            * Unique string id
            */
        id: string;
        /**
            * Set this property to false to make the toolbar item invisible.
            */
        visible: KnockoutObservable<boolean> | boolean;
        /**
            * Toolbar item title
            */
        title: KnockoutObservable<string> | string;
        /**
            * Set this property to false to disable the toolbar item.
            */
        enabled?: KnockoutObservable<boolean> | boolean;
        /**
            * A callback that calls on toolbar item click.
            */
        action?: () => void;
        /**
            * css class
            */
        css?: KnockoutObservable<string> | string;
        innerCss?: KnockoutObservable<string> | string;
        data?: any;
        template?: string;
        items?: KnockoutObservableArray<IToolbarItem>;
}
/**
    * Survey Editor is WYSIWYG editor.
    */
export declare class SurveyEditor implements ISurveyObjectEditorOptions {
        static defaultNewSurveyText: string;
        selectedObjectEditorValue: SurveyObjectEditor;
        pages: KnockoutObservableArray<Survey.PageModel>;
        selectPage: Function;
        /**
            * If set to true (default value) the Editor scrolls to a new element. A new element can be added from Toolbox or by copying.
            */
        scrollToNewElement: boolean;
        /**
            * You have right to set this property to true if you have bought the commercial licence only.
            * It will remove the text about non-commerical usage on the top of the widget.
            * Setting this property true without having a commercial licence is illegal.
            * @see haveCommercialLicense
            */
        haveCommercialLicense: boolean;
        /**
            * You need to set this property to true if you want to inplace edit item values instead of texts.
            * @see inplaceEditForValues
            */
        inplaceEditForValues: boolean;
        /**
            * You need to set this property to true if you want to use tabs instead of accordion in the popup element's editor.
            * @see useTabsInElementEditor
            */
        useTabsInElementEditor: boolean;
        /**
            * This property is assign to the survey.surveyId property on showing in the "Embed Survey" tab.
            * @see showEmbededSurveyTab
            */
        surveyId: string;
        /**
            * This property is assign to the survey.surveyPostId property on showing in the "Embed Survey" tab.
            * @see showEmbededSurveyTab
            */
        surveyPostId: string;
        /**
            * This callback is called on changing "Generate Valid JSON" option.
            */
        generateValidJSONChangedCallback: (generateValidJSON: boolean) => void;
        /**
            * The event is called before showing a property in the Property Grid or in Question Editor.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
            * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Property Grid or in Question Editor
            */
        onCanShowProperty: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event allows you to custom sort properties in the Property Grid. It is a compare function. You should set options.result to -1 or 1 by comparing options.property1 and options.property2.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.property1 the left object property (Survey.JsonObjectProperty object).
            * <br/> options.property2 the right object property (Survey.JsonObjectProperty object).
            * <br/> options.result the result of comparing. It can be 0 (use default behavior),  -1 options.property1 is less than options.property2 or 1 options.property1 is more than options.property2
            */
        onCustomSortProperty: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event allows you modify DOM element for a property in the Property Grid. For example, you may change it's styles.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.htmlElement the html element (html table row in our case) that renders the property display name and it's editor.
            * <br/> options.property object property (Survey.JsonObjectProperty object).
            * <br/> options.propertyEditor the property Editor.
            */
        onPropertyAfterRender: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called on deleting an element (question/panel/page) from the survey. Typically, when a user click the delete from the element menu.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.element an instance of the deleting element
            * <br/> options.elementType the type of the element: 'question', 'panel' or 'page'.
            * <br/> options.allowing set it to false to cancel the element deleting
            */
        onElementDeleting: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called on adding a new question into the survey. Typically, when a user dropped a Question from the Question Toolbox into designer Survey area.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.question a new added survey question. Survey.QuestionBase object
            * <br/> options.page the survey Page object where question has been added.
            */
        onQuestionAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called when an end-user double click on an element (question/panel).
            * <br/> sender the survey editor object that fires the event
            * <br/> options.element an instance of the element
            */
        onElementDoubleClick: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
            * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.property  the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
            * <br/> options.newItem a new created Survey.ItemValue object.
            */
        onItemValueAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.newColumn a new created Survey.MatrixDropdownColumn object.
            */
        onMatrixColumnAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called on adding a new panel into the survey.  Typically, when a user dropped a Panel from the Question Toolbox into designer Survey area.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.panel a new added survey panel. Survey.Panel object
            * <br/> options.page the survey Page object where question has been added.
            */
        onPanelAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called on adding a new page into the survey.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.page the new survey Page object.
            */
        onPageAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called when a survey is changed in the designer. A new page/question/page is added or existing is removed, a property is changed and so on.
            * <br/> sender the survey editor object that fires the event
            * <br/> options object contains the information about certain modifications
            * <br/> options.type contains string constant describing certain modification
            * <br/> Available values:
            * <br/>
            * <br/> options.type: "ADDED_FROM_TOOLBOX"
            * <br/> options.question: newly added question
            * <br/>
            * <br/> options.type: "PAGE_ADDED"
            * <br/> options.newValue: newly created page
            * <br/>
            * <br/> options.type: "PAGE_MOVED"
            * <br/> options.page: page has been moved
            * <br/> options.indexFrom: pevious index
            * <br/> options.indexTo: new index
            * <br/>
            * <br/> options.type: "QUESTION_CONVERTED"
            * <br/> options.className: the converted class name
            * <br/> options.oldValue: pevious object
            * <br/> options.newValue: the new object, converted from oldVale to the given class name
            * <br/>
            * <br/> options.type: "QUESTION_CHANGED_BY_EDITOR"
            * <br/> options.question: question has been edited in the popup question editor
            * <br/>
            * <br/> options.type: "PROPERTY_CHANGED"
            * <br/> options.name: the name of the property has been changed
            * <br/> options.target: the object containing the changed property
            * <br/> options.oldValue: the previous value of the changed property
            * <br/> options.newValue: the new value of the changed property
            * <br/>
            * <br/> options.type: "OBJECT_DELETED"
            * <br/> options.target: deleted object
            * <br/>
            * <br/> options.type: "VIEW_TYPE_CHANGED"
            * <br/> options.newType: new type of the editor view: editor or designer
            * <br/>
            * <br/> options.type: "DO_DROP"
            * <br/> options.page: the page of the drap/drop operation
            * <br/> options.source: the source dragged object
            * <br/> options.target: the drop target
            * <br/> options.newElement: a new element. It is defined if a user drops question or panel from the toolbox
            */
        onModified: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is fired when the Survey Editor is initialized and a survey object (Survey.Survey) is created.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.survey  the survey object showing in the editor.
            */
        onDesignerSurveyCreated: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is fired when the Survey Editor runs the survey in the test mode.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.survey  the survey object showing in the "Test survey" tab.
            */
        onTestSurveyCreated: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to control Property Editors UI.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.editorOptions  options that can be changed.
            * <br/> options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
            * <br/> options.editorOptions.showTextView a boolean property, true by default. Set it false to disable "Fast Entry" tab for "choices" property.
            * <br/> options.editorOptions.itemsEntryType a string property, 'form' by default. Set it 'fast' to show "Fast Entry" tab for "choices" property by default.
            */
        onSetPropertyEditorOptions: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to show a custom error in the Question Editor on pressing Apply or OK buttons, if the values are not set correctly. The error will be displayed under the property editor.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.value the property value.
            * <br/> options.error the error you want to display. Set the empty string (the default value) or null if there is no errors.
            * @see onPropertyValueChanging
            */
        onPropertyValidationCustomError: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.value the property value.
            * <br/> options.newValue set the corrected value into this property. Leave it null if you are ok with the entered value.
            * <br/> options.doValidation set the value to true to call the property validation. If there is an error, the user sees it immediately.
            * @see onPropertyValidationCustomError
            */
        onPropertyValueChanging: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.editor the instance of Property Editor.
            * @see onPropertyValueChanging
            */
        onPropertyEditorObjectAssign: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to disable some operations for an element (question/panel).
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object question/panel
            * <br/> options.allowDelete set it to false to disable deleting the object
            * <br/> options.allowEdit set it to false to disable calling the modal Editor
            * <br/> options.allowCopy set it to false to disable copying the object
            * <br/> options.allowAddToToolbox set it to false to disable adding element to Toolbox
            * <br/> options.allowDragging set it to false to disable adding element to Toolbox
            * <br/> options.allowChangeType set it to false to disable changing element type
            */
        onElementAllowOperations: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to add/remove/modify the element (question/panel) menu items.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.items the list of menu items. It has two requried fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
            * @see onElementAllowOperations
            */
        onDefineElementMenuItems: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to show the description on the top or/and bottom of the property modal editor.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName the property name
            * <br/> options.htmlTop the html  that you want to see on the top of the modal window
            * <br/> options.htmlBottom the html that you want to see on the bottom of the modal window
            */
        onShowPropertyModalEditorDescription: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to change the text showing in the dropdown of the property grid.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object.
            * <br/> options.text the current object text, commonly it is a name. You must change this attribute
            */
        onGetObjectTextInPropertyGrid: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        koAutoSave: KnockoutObservable<boolean>;
        /**
            * The event is called when end-user addes new element (question or panel) into the survey toolbox.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.element is a new added element
            */
        onCustomElementAddedIntoToolbox: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * A boolean property, false by default. Set it to true to call protected doSave method automatically on survey changing.
            */
        isAutoSave: boolean;
        koShowState: KnockoutObservable<boolean>;
        /**
            * A boolean property, false by default. Set it to true to show the state in the toolbar (saving/saved).
            */
        showState: boolean;
        koIsShowDesigner: any;
        koViewType: any;
        koCanDeleteObject: any;
        koObjects: any;
        koSelectedObject: KnockoutObservable<any>;
        koShowSaveButton: any;
        koGenerateValidJSON: any;
        koShowOptions: any;
        koShowPropertyGrid: any;
        koTestSurveyWidth: any;
        koDesignerHeight: any;
        koShowPagesToolbox: any;
        selectDesignerClick: any;
        selectEditorClick: any;
        selectTestClick: any;
        selectEmbedClick: any;
        generateValidJSONClick: any;
        generateReadableJSONClick: any;
        doUndoClick: any;
        doRedoClick: any;
        deleteObjectClick: any;
        koState: KnockoutObservable<string>;
        runSurveyClick: any;
        embedingSurveyClick: any;
        saveButtonClick: any;
        draggingToolboxItem: any;
        clickToolboxItem: any;
        dragEnd: any;
        /**
            * The Survey Editor constructor.
            * @param renderedElement HtmlElement or html element id where Survey Editor will be rendered
            * @param options Survey Editor options. The following options are available: showJSONEditorTab, showTestSurveyTab, showEmbededSurveyTab, inplaceEditForValues, useTabsInElementEditor, showPropertyGrid, questionTypes, showOptions, generateValidJSON, isAutoSave, designerHeight.
            */
        constructor(renderedElement?: any, options?: any);
        themeCss: KnockoutComputed<string>;
        protected addToolbarItems(): void;
        protected setOptions(options: any): void;
        /**
            * The editing survey object (Survey.Survey)
            */
        readonly survey: SurveyForDesigner;
        readonly selectedObjectEditor: SurveyObjectEditor;
        /**
            * Call this method to render the survey editor.
            * @param element HtmlElement or html element id where Survey Editor will be rendered
            * @param options Survey Editor options. The following options are available: showJSONEditorTab, showTestSurveyTab, showEmbededSurveyTab, showOptions, generateValidJSON, isAutoSave, designerHeight.
            */
        render(element?: any, options?: any): void;
        loadSurvey(surveyId: string): void;
        /**
            * The Survey JSON as a text. Use it to get Survey JSON or change it.
            */
        text: string;
        /**
            * Set JSON as text  into survey. Clear undo/redo states optionally.
            * @param value JSON as text
            * @param clearState default false. Set this parameter to true to clear undo/redo states.
            */
        changeText(value: string, clearState?: boolean): void;
        /**
            * Toolbox object. Contains information about Question toolbox items.
            * @see QuestionToolbox
            */
        readonly toolbox: QuestionToolbox;
        /**
            * The list of toolbar items. You may add/remove/replace them.
            * @see IToolbarItem
            */
        toolbarItems: KnockoutObservableArray<IToolbarItem>;
        /**
            * Get and set the maximum of copied questions/panels in the toolbox. The default value is 3
            */
        customToolboxQuestionMaxCount: number;
        /**
            * Returns the Editor state. It may return empty string or "saving" and "saved".
            */
        readonly state: string;
        protected setState(value: string): void;
        saveNo: number;
        protected doSave(): void;
        setModified(options?: any): void;
        /**
            * Assign to this property a function that will be called on clicking the 'Save' button or on any change if isAutoSave equals true.
            * @see isAutoSave
            */
        saveSurveyFunc: any;
        /**
            * Set it to true to show "Options" menu and to false to hide the menu
            */
        showOptions: boolean;
        /**
            * Set it to false to hide the Property Grid on the right. It allows to edit the properties of the selected object (question/panel/page/survey).
            */
        showPropertyGrid: boolean;
        /**
            * Set it to true to show "JSON Editor" tab and to false to hide the tab
            */
        showJSONEditorTab: boolean;
        /**
            * Set it to true to show "Test Survey" tab and to false to hide the tab
            */
        showTestSurveyTab: boolean;
        /**
            * Set it to true to show "Embed Survey" tab and to false to hide the tab
            */
        showEmbededSurveyTab: boolean;
        /**
            * Set it to true to activate RTL support
            */
        isRTL: boolean;
        protected onCanShowObjectProperty(object: any, property: Survey.JsonObjectProperty): boolean;
        protected onCustomSortPropertyObjectProperty(object: any, property1: Survey.JsonObjectProperty, property2: Survey.JsonObjectProperty): number;
        /**
            * Add a new page into the editing survey.
            */
        addPage: () => void;
        deletePage: () => void;
        /**
            * Returns the localized string by it's id
            * @param str the string id.
            */
        getLocString(str: string): any;
        movePage: (indexFrom: number, indexTo: number) => void;
        addPageToUI(page: Survey.Page): void;
        onPropertyValueChanged(property: Survey.JsonObjectProperty, obj: any, newValue: any): void;
        /**
            * Make a "Survey Designer" tab active.
            */
        showDesigner(): void;
        /**
            * Make a "JSON Editor" tab active.
            */
        showJsonEditor(): void;
        /**
            * Make a "Test Survey" tab active.
            */
        showTestSurvey(): void;
        /**
            * Make a Embed Survey" tab active.
            */
        showEmbedEditor(): void;
        copyElement(element: Survey.Base): Survey.IElement;
        isCurrentPageEmpty: KnockoutComputed<boolean>;
        dragOverQuestionsEditor(data: any, e: any): boolean;
        dropOnQuestionsEditor(data: any, e: any): void;
        deleteCurrentObject(): void;
        /**
            * Show the Editor dialog. The element can be a question, panel, page or survey
            * @param element The survey element
            */
        showElementEditor(element: Survey.Base, onClose: (isCanceled: boolean) => any): void;
        showQuestionEditor: (element: Survey.Base, onClose?: (isCanceled: boolean) => any) => void;
        onQuestionEditorChanged(question: Survey.QuestionBase): void;
        /**
            * Add a question into Toolbox object
            * @param question an added Survey.Question
            * @see toolbox
            */
        addCustomToolboxQuestion(question: Survey.QuestionBase): void;
        /**
            * Copy a question to the active page
            * @param question A copied Survey.Question
            */
        fastCopyQuestion(question: Survey.Base): void;
        /**
            * Create a new page with the same elements and place it next to the current one. It returns the new created Survey.Page
            * @param page A copied Survey.Page
            */
        copyPage: (page: Survey.PageModel) => Survey.PageModel;
        /**
            * Delete an element in the survey. It can be a question, a panel or a page.
            * @param element a survey element.
            */
        deleteElement(element: Survey.Base): void;
        alwaySaveTextInPropertyEditors: boolean;
        showApplyButtonInEditors: boolean;
        onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue): void;
        onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn): void;
        onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any): void;
        onGetErrorTextOnValidationCallback(propertyName: string, obj: Survey.Base, value: any): string;
        onValueChangingCallback(options: any): void;
        onPropertyEditorObjectSetCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase): void;
        onPropertyEditorModalShowDescriptionCallback(propertyName: string, obj: Survey.Base): any;
        onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string;
}

export interface ISurveyInfo {
    name: KnockoutObservable<string>;
    id: string;
    postId: string;
}
export declare class SurveyDescription implements ISurveyInfo {
    name: KnockoutObservable<string>;
    createdAt: string;
    id: string;
    resultId: string;
    postId: string;
    constructor(name?: KnockoutObservable<string>, createdAt?: string, id?: string, resultId?: string, postId?: string);
}
export declare class SurveysManager {
    static serviceUrlPath: string;
    static StorageKey: string;
    getSurveys(): Array<SurveyDescription>;
    setSurveys(surveys: Array<ISurveyInfo>): void;
    constructor(baseUrl: string, accessKey: string, editor: SurveyEditor);
    toolbarItem: any;
    isEditMode: KnockoutObservable<boolean>;
    edit(model: any, event: any): void;
    addHandler(onAdd?: (success: boolean, result: string, response: any) => void): void;
    add(): void;
    remove(): void;
    surveyId: KnockoutObservable<string>;
    surveys: KnockoutObservableArray<ISurveyInfo>;
    currentSurvey: KnockoutObservable<ISurveyInfo>;
    currentSurveyName: KnockoutObservable<string>;
    isLoading: KnockoutObservable<boolean>;
    readonly cssEdit: "icon-saved" | "icon-edit";
    readonly cssAdd: "icon-new" | "icon-fork";
    readonly titleEdit: "Save survey name" | "Edit survey name";
    readonly titleAdd: "Add new survey" | "Fork this survey";
    nameEditorKeypress: (model: any, event: any) => void;
}

export declare class StylesManager {
    static Styles: {
        [key: string]: string;
    };
    static ThemeColors: {
        [key: string]: {
            [key: string]: string;
        };
    };
    static ThemeCss: {
        [key: string]: string;
    };
    static BootstrapMaterialThemeCss: {
        [key: string]: string;
    };
    static addThemeColors(themeName: string, themeColors: Object): void;
    static findSheet(styleSheetId: string): CSSStyleSheet;
    static createSheet(styleSheetId: string): CSSStyleSheet;
    static currentTheme: KnockoutObservable<string>;
    static applyTheme(themeName?: string, themeSelector?: string): void;
    static applySurveyTheme(themeName: any): void;
    constructor();
    initializeStyles(sheet: CSSStyleSheet): void;
}

import "./title-editor.scss";
export declare class TitleInplaceEditor {
    protected rootElement: any;
    editingName: KnockoutObservable<string>;
    prevName: KnockoutObservable<string>;
    isEditing: KnockoutObservable<boolean>;
    protected forNeibours(func: (el: HTMLElement) => void): void;
    constructor(name: string, rootElement: any);
    valueChanged: (newVal: any) => void;
    getLocString(str: string): any;
    hideEditor: () => void;
    startEdit: (model: any, event: any) => void;
    postEdit: () => void;
    cancelEdit: () => void;
    nameEditorKeypress: (model: any, event: any) => void;
}
export declare var titleAdorner: {
    getMarkerClass: (model: any) => string;
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};
export declare var itemTitleAdorner: {
    getMarkerClass: (model: any) => "" | "item_title_editable title_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionMultipleText, editor: any) => void;
};

import "./item-editor.scss";
export declare var itemAdorner: {
    inplaceEditForValues: boolean;
    getMarkerClass: (model: any) => "" | "item_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionSelectBase, editor: any) => void;
};
export declare var createAddItemHandler: (question: Survey.QuestionSelectBase, onItemAdded: (itemValue: Survey.ItemValue) => void) => () => void;
export declare var itemDraggableAdorner: {
    getMarkerClass: (model: any) => "" | "item_draggable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionSelectBase, editor: SurveyEditor) => void;
};

import "./label-editor.scss";
export declare var labelAdorner: {
    getMarkerClass: (model: any) => "" | "label_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};

import "./question-actions.scss";
export declare class QuestionActionsAdorner {
    question: any;
    constructor(question: any, editor: any);
    actions: KnockoutObservableArray<ISurveyObjectMenuItem>;
    getStyle(model: ISurveyObjectMenuItem): string | (() => string);
    localize(entryString: any): any;
}
export declare var questionActionsAdorner: {
    getMarkerClass: (model: any) => "" | "question_actions";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};
export declare var panelActionsAdorner: {
    getMarkerClass: (model: any) => "" | "panel_actions";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: any, editor: any) => void;
};

import "./select-items-editor.scss";
export declare var selectItemsEditorAdorner: {
    getMarkerClass: (model: any) => "" | "select_items_editor";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionSelectBase, editor: any) => void;
};

import "./rating-item-editor.scss";
export declare var ratingItemAdorner: {
    getMarkerClass: (model: any) => "" | "item_editable";
    getElementName: (model: any) => string;
    afterRender: (elements: HTMLElement[], model: Survey.QuestionRating, editor: any) => void;
};

import "./accordion.scss";
export interface IAccordionItemData {
    title: string | KnockoutObservable<string>;
}
export declare class AccordionItemModel {
    data: IAccordionItemData;
    template: string;
    constructor(data: IAccordionItemData, template: string);
    collapsed: KnockoutObservable<boolean>;
    toggle: () => void;
    readonly title: string | KnockoutObservable<string>;
}
export declare class AccordionModel {
    constructor(params: any);
    tabs: KnockoutObservable<AccordionItemModel>;
}

import "../utils/custom-checkbox.scss";
import "../utils/custom-select.scss";
import "../utils/ddmenu.scss";
import "../main.scss";
export let Version: string;
import "../localization/french";
import "../localization/german";
import "../localization/italian";
import "../localization/korean";
import "../localization/persian";
import "../localization/polish";
import "../localization/portuguese";
import "../localization/simplified-chinese";
import "../localization/spanish";

