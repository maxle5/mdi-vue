
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBicyclePennyFarthing from "../../src/components/MdiBicyclePennyFarthing.vue";

test("MdiBicyclePennyFarthing snapshot", () => {
  const wrapper = mount(MdiBicyclePennyFarthing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
