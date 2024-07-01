
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardArrowRight from "../../src/components/MdiClipboardArrowRight.vue";

test("MdiClipboardArrowRight snapshot", () => {
  const wrapper = mount(MdiClipboardArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
