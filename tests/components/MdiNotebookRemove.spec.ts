
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookRemove from "../../src/components/MdiNotebookRemove.vue";

test("MdiNotebookRemove snapshot", () => {
  const wrapper = mount(MdiNotebookRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
