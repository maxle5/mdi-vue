
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardArrowLeftOutline from "../../src/components/MdiClipboardArrowLeftOutline.vue";

test("MdiClipboardArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiClipboardArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
