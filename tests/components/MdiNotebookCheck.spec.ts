
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookCheck from "../../src/components/MdiNotebookCheck.vue";

test("MdiNotebookCheck snapshot", () => {
  const wrapper = mount(MdiNotebookCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
