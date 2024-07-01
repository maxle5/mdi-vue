
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLaptop from "../../src/components/MdiLaptop.vue";

test("MdiLaptop snapshot", () => {
  const wrapper = mount(MdiLaptop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
