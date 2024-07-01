
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwim from "../../src/components/MdiSwim.vue";

test("MdiSwim snapshot", () => {
  const wrapper = mount(MdiSwim, {});
  expect(wrapper.html()).toMatchSnapshot();
});
