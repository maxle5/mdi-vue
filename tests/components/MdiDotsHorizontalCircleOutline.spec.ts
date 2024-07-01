
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsHorizontalCircleOutline from "../../src/components/MdiDotsHorizontalCircleOutline.vue";

test("MdiDotsHorizontalCircleOutline snapshot", () => {
  const wrapper = mount(MdiDotsHorizontalCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
