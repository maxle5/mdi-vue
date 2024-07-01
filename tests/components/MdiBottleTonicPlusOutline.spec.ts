
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBottleTonicPlusOutline from "../../src/components/MdiBottleTonicPlusOutline.vue";

test("MdiBottleTonicPlusOutline snapshot", () => {
  const wrapper = mount(MdiBottleTonicPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
