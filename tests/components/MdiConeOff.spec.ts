
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiConeOff from "../../src/components/MdiConeOff.vue";

test("MdiConeOff snapshot", () => {
  const wrapper = mount(MdiConeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
