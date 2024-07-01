
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarShooting from "../../src/components/MdiStarShooting.vue";

test("MdiStarShooting snapshot", () => {
  const wrapper = mount(MdiStarShooting, {});
  expect(wrapper.html()).toMatchSnapshot();
});
