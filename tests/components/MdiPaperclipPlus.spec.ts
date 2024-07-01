
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperclipPlus from "../../src/components/MdiPaperclipPlus.vue";

test("MdiPaperclipPlus snapshot", () => {
  const wrapper = mount(MdiPaperclipPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
