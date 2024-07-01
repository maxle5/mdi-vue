
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneOff from "../../src/components/MdiAirplaneOff.vue";

test("MdiAirplaneOff snapshot", () => {
  const wrapper = mount(MdiAirplaneOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
