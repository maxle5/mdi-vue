
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamma from "../../src/components/MdiGamma.vue";

test("MdiGamma snapshot", () => {
  const wrapper = mount(MdiGamma, {});
  expect(wrapper.html()).toMatchSnapshot();
});
