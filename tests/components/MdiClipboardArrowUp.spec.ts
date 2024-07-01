
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardArrowUp from "../../src/components/MdiClipboardArrowUp.vue";

test("MdiClipboardArrowUp snapshot", () => {
  const wrapper = mount(MdiClipboardArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
