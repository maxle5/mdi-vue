
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardEditOutline from "../../src/components/MdiClipboardEditOutline.vue";

test("MdiClipboardEditOutline snapshot", () => {
  const wrapper = mount(MdiClipboardEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
