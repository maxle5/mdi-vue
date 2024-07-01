
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthPlus from "../../src/components/MdiEarthPlus.vue";

test("MdiEarthPlus snapshot", () => {
  const wrapper = mount(MdiEarthPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
