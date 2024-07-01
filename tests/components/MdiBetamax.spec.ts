
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBetamax from "../../src/components/MdiBetamax.vue";

test("MdiBetamax snapshot", () => {
  const wrapper = mount(MdiBetamax, {});
  expect(wrapper.html()).toMatchSnapshot();
});
