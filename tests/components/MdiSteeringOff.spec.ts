
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSteeringOff from "../../src/components/MdiSteeringOff.vue";

test("MdiSteeringOff snapshot", () => {
  const wrapper = mount(MdiSteeringOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
