
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookPlusOutline from "../../src/components/MdiNotebookPlusOutline.vue";

test("MdiNotebookPlusOutline snapshot", () => {
  const wrapper = mount(MdiNotebookPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
