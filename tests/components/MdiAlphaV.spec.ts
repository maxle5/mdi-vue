
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaV from "../../src/components/MdiAlphaV.vue";

test("MdiAlphaV snapshot", () => {
  const wrapper = mount(MdiAlphaV, {});
  expect(wrapper.html()).toMatchSnapshot();
});
