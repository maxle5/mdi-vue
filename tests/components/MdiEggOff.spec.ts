
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEggOff from "../../src/components/MdiEggOff.vue";

test("MdiEggOff snapshot", () => {
  const wrapper = mount(MdiEggOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
