
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompassOff from "../../src/components/MdiCompassOff.vue";

test("MdiCompassOff snapshot", () => {
  const wrapper = mount(MdiCompassOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
