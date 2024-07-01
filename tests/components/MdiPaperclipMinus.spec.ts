
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperclipMinus from "../../src/components/MdiPaperclipMinus.vue";

test("MdiPaperclipMinus snapshot", () => {
  const wrapper = mount(MdiPaperclipMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
