
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardFlowOutline from "../../src/components/MdiClipboardFlowOutline.vue";

test("MdiClipboardFlowOutline snapshot", () => {
  const wrapper = mount(MdiClipboardFlowOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
