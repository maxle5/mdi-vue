
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCannabisOff from "../../src/components/MdiCannabisOff.vue";

test("MdiCannabisOff snapshot", () => {
  const wrapper = mount(MdiCannabisOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
