
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellCogOutline from "../../src/components/MdiBellCogOutline.vue";

test("MdiBellCogOutline snapshot", () => {
  const wrapper = mount(MdiBellCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
