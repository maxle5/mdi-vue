
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookOutline from "../../src/components/MdiNotebookOutline.vue";

test("MdiNotebookOutline snapshot", () => {
  const wrapper = mount(MdiNotebookOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
