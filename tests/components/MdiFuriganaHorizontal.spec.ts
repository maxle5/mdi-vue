
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFuriganaHorizontal from "../../src/components/MdiFuriganaHorizontal.vue";

test("MdiFuriganaHorizontal snapshot", () => {
  const wrapper = mount(MdiFuriganaHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
