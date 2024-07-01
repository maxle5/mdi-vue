
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaO from "../../src/components/MdiAlphaO.vue";

test("MdiAlphaO snapshot", () => {
  const wrapper = mount(MdiAlphaO, {});
  expect(wrapper.html()).toMatchSnapshot();
});
