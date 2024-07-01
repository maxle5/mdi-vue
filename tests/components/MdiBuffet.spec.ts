
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBuffet from "../../src/components/MdiBuffet.vue";

test("MdiBuffet snapshot", () => {
  const wrapper = mount(MdiBuffet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
