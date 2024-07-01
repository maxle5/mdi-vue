
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoomerang from "../../src/components/MdiBoomerang.vue";

test("MdiBoomerang snapshot", () => {
  const wrapper = mount(MdiBoomerang, {});
  expect(wrapper.html()).toMatchSnapshot();
});
