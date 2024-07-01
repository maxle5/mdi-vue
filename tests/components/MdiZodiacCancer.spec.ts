
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacCancer from "../../src/components/MdiZodiacCancer.vue";

test("MdiZodiacCancer snapshot", () => {
  const wrapper = mount(MdiZodiacCancer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
