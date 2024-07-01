
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaY from "../../src/components/MdiAlphaY.vue";

test("MdiAlphaY snapshot", () => {
  const wrapper = mount(MdiAlphaY, {});
  expect(wrapper.html()).toMatchSnapshot();
});
