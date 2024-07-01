
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckOutline from "../../src/components/MdiTruckOutline.vue";

test("MdiTruckOutline snapshot", () => {
  const wrapper = mount(MdiTruckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
