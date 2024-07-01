
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountWrench from "../../src/components/MdiAccountWrench.vue";

test("MdiAccountWrench snapshot", () => {
  const wrapper = mount(MdiAccountWrench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
