
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaJ from "../../src/components/MdiAlphaJ.vue";

test("MdiAlphaJ snapshot", () => {
  const wrapper = mount(MdiAlphaJ, {});
  expect(wrapper.html()).toMatchSnapshot();
});
