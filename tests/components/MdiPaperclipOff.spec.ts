
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperclipOff from "../../src/components/MdiPaperclipOff.vue";

test("MdiPaperclipOff snapshot", () => {
  const wrapper = mount(MdiPaperclipOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
