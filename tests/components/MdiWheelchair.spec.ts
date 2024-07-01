
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWheelchair from "../../src/components/MdiWheelchair.vue";

test("MdiWheelchair snapshot", () => {
  const wrapper = mount(MdiWheelchair, {});
  expect(wrapper.html()).toMatchSnapshot();
});
