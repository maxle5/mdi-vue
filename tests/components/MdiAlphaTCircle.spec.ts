
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaTCircle from "../../src/components/MdiAlphaTCircle.vue";

test("MdiAlphaTCircle snapshot", () => {
  const wrapper = mount(MdiAlphaTCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
