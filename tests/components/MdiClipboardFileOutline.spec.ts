
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardFileOutline from "../../src/components/MdiClipboardFileOutline.vue";

test("MdiClipboardFileOutline snapshot", () => {
  const wrapper = mount(MdiClipboardFileOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
