
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMargin from "../../src/components/MdiMargin.vue";

test("MdiMargin snapshot", () => {
  const wrapper = mount(MdiMargin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
