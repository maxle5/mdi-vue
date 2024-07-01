
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleTonicSkullOutline from "../../src/components/MdiBottleTonicSkullOutline.vue";

test("MdiBottleTonicSkullOutline snapshot", () => {
  const wrapper = mount(MdiBottleTonicSkullOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
