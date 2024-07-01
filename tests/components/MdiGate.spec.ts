
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGate from "../../src/components/MdiGate.vue";

test("MdiGate snapshot", () => {
  const wrapper = mount(MdiGate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
