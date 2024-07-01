
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOutdoorLamp from "../../src/components/MdiOutdoorLamp.vue";

test("MdiOutdoorLamp snapshot", () => {
  const wrapper = mount(MdiOutdoorLamp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
