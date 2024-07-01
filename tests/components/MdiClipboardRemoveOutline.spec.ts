
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardRemoveOutline from "../../src/components/MdiClipboardRemoveOutline.vue";

test("MdiClipboardRemoveOutline snapshot", () => {
  const wrapper = mount(MdiClipboardRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
