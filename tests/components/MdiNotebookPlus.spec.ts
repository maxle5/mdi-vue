
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookPlus from "../../src/components/MdiNotebookPlus.vue";

test("MdiNotebookPlus snapshot", () => {
  const wrapper = mount(MdiNotebookPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
