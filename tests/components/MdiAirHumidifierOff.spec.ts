
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirHumidifierOff from "../../src/components/MdiAirHumidifierOff.vue";

test("MdiAirHumidifierOff snapshot", () => {
  const wrapper = mount(MdiAirHumidifierOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
