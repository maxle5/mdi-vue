
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandCycle from "../../src/components/MdiHandCycle.vue";

test("MdiHandCycle snapshot", () => {
  const wrapper = mount(MdiHandCycle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
