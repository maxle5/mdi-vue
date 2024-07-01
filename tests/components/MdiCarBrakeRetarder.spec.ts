
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBrakeRetarder from "../../src/components/MdiCarBrakeRetarder.vue";

test("MdiCarBrakeRetarder snapshot", () => {
  const wrapper = mount(MdiCarBrakeRetarder, {});
  expect(wrapper.html()).toMatchSnapshot();
});
