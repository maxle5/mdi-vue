
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlurLinear from "../../src/components/MdiBlurLinear.vue";

test("MdiBlurLinear snapshot", () => {
  const wrapper = mount(MdiBlurLinear, {});
  expect(wrapper.html()).toMatchSnapshot();
});
