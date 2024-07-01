
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookRemoveOutline from "../../src/components/MdiNotebookRemoveOutline.vue";

test("MdiNotebookRemoveOutline snapshot", () => {
  const wrapper = mount(MdiNotebookRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
