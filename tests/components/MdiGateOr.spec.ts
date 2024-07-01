
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGateOr from "../../src/components/MdiGateOr.vue";

test("MdiGateOr snapshot", () => {
  const wrapper = mount(MdiGateOr, {});
  expect(wrapper.html()).toMatchSnapshot();
});
