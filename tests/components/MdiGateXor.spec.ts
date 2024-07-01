
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateXor from "../../src/components/MdiGateXor.vue";

test("MdiGateXor snapshot", () => {
  const wrapper = mount(MdiGateXor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
