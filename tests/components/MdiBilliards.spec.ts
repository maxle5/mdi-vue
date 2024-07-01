
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBilliards from "../../src/components/MdiBilliards.vue";

test("MdiBilliards snapshot", () => {
  const wrapper = mount(MdiBilliards, {});
  expect(wrapper.html()).toMatchSnapshot();
});
