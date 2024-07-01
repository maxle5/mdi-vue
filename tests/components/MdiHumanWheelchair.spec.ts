
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanWheelchair from "../../src/components/MdiHumanWheelchair.vue";

test("MdiHumanWheelchair snapshot", () => {
  const wrapper = mount(MdiHumanWheelchair, {});
  expect(wrapper.html()).toMatchSnapshot();
});
