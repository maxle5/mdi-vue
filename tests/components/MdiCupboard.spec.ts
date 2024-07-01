
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCupboard from "../../src/components/MdiCupboard.vue";

test("MdiCupboard snapshot", () => {
  const wrapper = mount(MdiCupboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
