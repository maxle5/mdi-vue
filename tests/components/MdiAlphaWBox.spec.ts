
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaWBox from "../../src/components/MdiAlphaWBox.vue";

test("MdiAlphaWBox snapshot", () => {
  const wrapper = mount(MdiAlphaWBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
