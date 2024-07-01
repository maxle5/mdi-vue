
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateNand from "../../src/components/MdiGateNand.vue";

test("MdiGateNand snapshot", () => {
  const wrapper = mount(MdiGateNand, {});
  expect(wrapper.html()).toMatchSnapshot();
});
