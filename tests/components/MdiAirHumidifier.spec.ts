
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirHumidifier from "../../src/components/MdiAirHumidifier.vue";

test("MdiAirHumidifier snapshot", () => {
  const wrapper = mount(MdiAirHumidifier, {});
  expect(wrapper.html()).toMatchSnapshot();
});
