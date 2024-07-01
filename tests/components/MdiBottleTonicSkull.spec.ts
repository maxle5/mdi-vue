
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleTonicSkull from "../../src/components/MdiBottleTonicSkull.vue";

test("MdiBottleTonicSkull snapshot", () => {
  const wrapper = mount(MdiBottleTonicSkull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
