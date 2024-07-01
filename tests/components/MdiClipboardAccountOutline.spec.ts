
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardAccountOutline from "../../src/components/MdiClipboardAccountOutline.vue";

test("MdiClipboardAccountOutline snapshot", () => {
  const wrapper = mount(MdiClipboardAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
