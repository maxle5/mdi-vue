
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGolf from "../../src/components/MdiGolf.vue";

test("MdiGolf snapshot", () => {
  const wrapper = mount(MdiGolf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
