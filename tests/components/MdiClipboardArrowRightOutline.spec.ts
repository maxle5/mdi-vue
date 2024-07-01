
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardArrowRightOutline from "../../src/components/MdiClipboardArrowRightOutline.vue";

test("MdiClipboardArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiClipboardArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
