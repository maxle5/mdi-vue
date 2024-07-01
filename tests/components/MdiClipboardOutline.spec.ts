
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardOutline from "../../src/components/MdiClipboardOutline.vue";

test("MdiClipboardOutline snapshot", () => {
  const wrapper = mount(MdiClipboardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
