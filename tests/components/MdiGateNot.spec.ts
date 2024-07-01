
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateNot from "../../src/components/MdiGateNot.vue";

test("MdiGateNot snapshot", () => {
  const wrapper = mount(MdiGateNot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
