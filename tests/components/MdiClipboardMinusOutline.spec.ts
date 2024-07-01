
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardMinusOutline from "../../src/components/MdiClipboardMinusOutline.vue";

test("MdiClipboardMinusOutline snapshot", () => {
  const wrapper = mount(MdiClipboardMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
