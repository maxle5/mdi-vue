
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleTonicOutline from "../../src/components/MdiBottleTonicOutline.vue";

test("MdiBottleTonicOutline snapshot", () => {
  const wrapper = mount(MdiBottleTonicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
