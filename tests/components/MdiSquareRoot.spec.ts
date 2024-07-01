
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareRoot from "../../src/components/MdiSquareRoot.vue";

test("MdiSquareRoot snapshot", () => {
  const wrapper = mount(MdiSquareRoot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
