
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleTonicPlus from "../../src/components/MdiBottleTonicPlus.vue";

test("MdiBottleTonicPlus snapshot", () => {
  const wrapper = mount(MdiBottleTonicPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
