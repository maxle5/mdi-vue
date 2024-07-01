
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardListOutline from "../../src/components/MdiClipboardListOutline.vue";

test("MdiClipboardListOutline snapshot", () => {
  const wrapper = mount(MdiClipboardListOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
