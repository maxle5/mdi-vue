
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookEditOutline from "../../src/components/MdiNotebookEditOutline.vue";

test("MdiNotebookEditOutline snapshot", () => {
  const wrapper = mount(MdiNotebookEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
