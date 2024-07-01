
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaB from "../../src/components/MdiAlphaB.vue";

test("MdiAlphaB snapshot", () => {
  const wrapper = mount(MdiAlphaB, {});
  expect(wrapper.html()).toMatchSnapshot();
});
