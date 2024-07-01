
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseCircleMultipleOutline from "../../src/components/MdiCloseCircleMultipleOutline.vue";

test("MdiCloseCircleMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCloseCircleMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
