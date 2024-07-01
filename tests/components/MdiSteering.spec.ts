
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSteering from "../../src/components/MdiSteering.vue";

test("MdiSteering snapshot", () => {
  const wrapper = mount(MdiSteering, {});
  expect(wrapper.html()).toMatchSnapshot();
});
