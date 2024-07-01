
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYurt from "../../src/components/MdiYurt.vue";

test("MdiYurt snapshot", () => {
  const wrapper = mount(MdiYurt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
