
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookMinus from "../../src/components/MdiNotebookMinus.vue";

test("MdiNotebookMinus snapshot", () => {
  const wrapper = mount(MdiNotebookMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
