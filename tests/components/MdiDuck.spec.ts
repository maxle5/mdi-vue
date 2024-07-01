
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDuck from "../../src/components/MdiDuck.vue";

test("MdiDuck snapshot", () => {
  const wrapper = mount(MdiDuck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
