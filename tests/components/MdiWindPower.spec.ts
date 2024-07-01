
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindPower from "../../src/components/MdiWindPower.vue";

test("MdiWindPower snapshot", () => {
  const wrapper = mount(MdiWindPower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
