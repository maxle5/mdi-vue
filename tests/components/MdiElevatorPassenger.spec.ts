
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElevatorPassenger from "../../src/components/MdiElevatorPassenger.vue";

test("MdiElevatorPassenger snapshot", () => {
  const wrapper = mount(MdiElevatorPassenger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
