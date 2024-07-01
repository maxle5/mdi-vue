
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellCog from "../../src/components/MdiBellCog.vue";

test("MdiBellCog snapshot", () => {
  const wrapper = mount(MdiBellCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
