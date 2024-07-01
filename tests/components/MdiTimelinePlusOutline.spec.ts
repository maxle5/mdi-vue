
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelinePlusOutline from "../../src/components/MdiTimelinePlusOutline.vue";

test("MdiTimelinePlusOutline snapshot", () => {
  const wrapper = mount(MdiTimelinePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
