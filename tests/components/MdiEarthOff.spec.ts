
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthOff from "../../src/components/MdiEarthOff.vue";

test("MdiEarthOff snapshot", () => {
  const wrapper = mount(MdiEarthOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
