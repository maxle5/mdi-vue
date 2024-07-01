
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateNor from "../../src/components/MdiGateNor.vue";

test("MdiGateNor snapshot", () => {
  const wrapper = mount(MdiGateNor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
