
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBrakeParking from "../../src/components/MdiCarBrakeParking.vue";

test("MdiCarBrakeParking snapshot", () => {
  const wrapper = mount(MdiCarBrakeParking, {});
  expect(wrapper.html()).toMatchSnapshot();
});
