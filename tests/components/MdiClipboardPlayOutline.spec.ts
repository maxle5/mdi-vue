
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardPlayOutline from "../../src/components/MdiClipboardPlayOutline.vue";

test("MdiClipboardPlayOutline snapshot", () => {
  const wrapper = mount(MdiClipboardPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
