
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElevator from "../../src/components/MdiElevator.vue";

test("MdiElevator snapshot", () => {
  const wrapper = mount(MdiElevator, {});
  expect(wrapper.html()).toMatchSnapshot();
});
