
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStretchToPageOutline from "../../src/components/MdiStretchToPageOutline.vue";

test("MdiStretchToPageOutline snapshot", () => {
  const wrapper = mount(MdiStretchToPageOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
