
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaTCircleOutline from "../../src/components/MdiAlphaTCircleOutline.vue";

test("MdiAlphaTCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaTCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
