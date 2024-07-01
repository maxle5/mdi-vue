
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadDotsHorizontalOutline from "../../src/components/MdiHeadDotsHorizontalOutline.vue";

test("MdiHeadDotsHorizontalOutline snapshot", () => {
  const wrapper = mount(MdiHeadDotsHorizontalOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
