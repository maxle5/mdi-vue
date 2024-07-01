
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardSearchOutline from "../../src/components/MdiClipboardSearchOutline.vue";

test("MdiClipboardSearchOutline snapshot", () => {
  const wrapper = mount(MdiClipboardSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
