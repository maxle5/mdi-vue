
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaZ from "../../src/components/MdiAlphaZ.vue";

test("MdiAlphaZ snapshot", () => {
  const wrapper = mount(MdiAlphaZ, {});
  expect(wrapper.html()).toMatchSnapshot();
});
