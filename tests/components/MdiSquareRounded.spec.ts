
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareRounded from "../../src/components/MdiSquareRounded.vue";

test("MdiSquareRounded snapshot", () => {
  const wrapper = mount(MdiSquareRounded, {});
  expect(wrapper.html()).toMatchSnapshot();
});
