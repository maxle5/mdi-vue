
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrain from "../../src/components/MdiBrain.vue";

test("MdiBrain snapshot", () => {
  const wrapper = mount(MdiBrain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
