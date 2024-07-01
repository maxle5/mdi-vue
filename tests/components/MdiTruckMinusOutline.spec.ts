
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckMinusOutline from "../../src/components/MdiTruckMinusOutline.vue";

test("MdiTruckMinusOutline snapshot", () => {
  const wrapper = mount(MdiTruckMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
