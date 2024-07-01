
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthBoxOff from "../../src/components/MdiEarthBoxOff.vue";

test("MdiEarthBoxOff snapshot", () => {
  const wrapper = mount(MdiEarthBoxOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
