
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScale from "../../src/components/MdiScale.vue";

test("MdiScale snapshot", () => {
  const wrapper = mount(MdiScale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
