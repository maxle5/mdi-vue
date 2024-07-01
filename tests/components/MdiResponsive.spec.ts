
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiResponsive from "../../src/components/MdiResponsive.vue";

test("MdiResponsive snapshot", () => {
  const wrapper = mount(MdiResponsive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
