
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirConditioner from "../../src/components/MdiAirConditioner.vue";

test("MdiAirConditioner snapshot", () => {
  const wrapper = mount(MdiAirConditioner, {});
  expect(wrapper.html()).toMatchSnapshot();
});
