
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountHardHat from "../../src/components/MdiAccountHardHat.vue";

test("MdiAccountHardHat snapshot", () => {
  const wrapper = mount(MdiAccountHardHat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
