
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookEdit from "../../src/components/MdiNotebookEdit.vue";

test("MdiNotebookEdit snapshot", () => {
  const wrapper = mount(MdiNotebookEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
