
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateAnd from "../../src/components/MdiGateAnd.vue";

test("MdiGateAnd snapshot", () => {
  const wrapper = mount(MdiGateAnd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
