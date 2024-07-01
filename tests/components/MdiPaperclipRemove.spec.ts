
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperclipRemove from "../../src/components/MdiPaperclipRemove.vue";

test("MdiPaperclipRemove snapshot", () => {
  const wrapper = mount(MdiPaperclipRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
