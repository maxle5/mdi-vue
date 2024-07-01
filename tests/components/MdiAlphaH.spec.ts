
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaH from "../../src/components/MdiAlphaH.vue";

test("MdiAlphaH snapshot", () => {
  const wrapper = mount(MdiAlphaH, {});
  expect(wrapper.html()).toMatchSnapshot();
});
