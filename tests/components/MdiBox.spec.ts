
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBox from "../../src/components/MdiBox.vue";

test("MdiBox snapshot", () => {
  const wrapper = mount(MdiBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
