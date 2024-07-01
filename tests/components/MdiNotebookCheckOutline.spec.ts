
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookCheckOutline from "../../src/components/MdiNotebookCheckOutline.vue";

test("MdiNotebookCheckOutline snapshot", () => {
  const wrapper = mount(MdiNotebookCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
