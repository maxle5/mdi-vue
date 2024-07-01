
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaJBox from "../../src/components/MdiAlphaJBox.vue";

test("MdiAlphaJBox snapshot", () => {
  const wrapper = mount(MdiAlphaJBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
