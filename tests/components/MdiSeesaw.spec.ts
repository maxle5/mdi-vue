
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeesaw from "../../src/components/MdiSeesaw.vue";

test("MdiSeesaw snapshot", () => {
  const wrapper = mount(MdiSeesaw, {});
  expect(wrapper.html()).toMatchSnapshot();
});
