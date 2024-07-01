
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlur from "../../src/components/MdiBlur.vue";

test("MdiBlur snapshot", () => {
  const wrapper = mount(MdiBlur, {});
  expect(wrapper.html()).toMatchSnapshot();
});
