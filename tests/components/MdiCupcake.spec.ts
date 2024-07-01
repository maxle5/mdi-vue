
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCupcake from "../../src/components/MdiCupcake.vue";

test("MdiCupcake snapshot", () => {
  const wrapper = mount(MdiCupcake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
