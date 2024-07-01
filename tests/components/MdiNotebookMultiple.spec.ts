
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookMultiple from "../../src/components/MdiNotebookMultiple.vue";

test("MdiNotebookMultiple snapshot", () => {
  const wrapper = mount(MdiNotebookMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
