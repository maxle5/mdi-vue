
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateXnor from "../../src/components/MdiGateXnor.vue";

test("MdiGateXnor snapshot", () => {
  const wrapper = mount(MdiGateXnor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
