
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressWrench from "../../src/components/MdiProgressWrench.vue";

test("MdiProgressWrench snapshot", () => {
  const wrapper = mount(MdiProgressWrench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
