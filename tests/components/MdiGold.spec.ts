
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGold from "../../src/components/MdiGold.vue";

test("MdiGold snapshot", () => {
  const wrapper = mount(MdiGold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
