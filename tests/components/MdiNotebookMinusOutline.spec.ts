
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookMinusOutline from "../../src/components/MdiNotebookMinusOutline.vue";

test("MdiNotebookMinusOutline snapshot", () => {
  const wrapper = mount(MdiNotebookMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
