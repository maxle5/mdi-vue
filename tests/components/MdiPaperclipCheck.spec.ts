
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperclipCheck from "../../src/components/MdiPaperclipCheck.vue";

test("MdiPaperclipCheck snapshot", () => {
  const wrapper = mount(MdiPaperclipCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
