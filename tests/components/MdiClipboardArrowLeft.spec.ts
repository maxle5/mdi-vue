
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardArrowLeft from "../../src/components/MdiClipboardArrowLeft.vue";

test("MdiClipboardArrowLeft snapshot", () => {
  const wrapper = mount(MdiClipboardArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
