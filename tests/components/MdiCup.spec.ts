
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCup from "../../src/components/MdiCup.vue";

test("MdiCup snapshot", () => {
  const wrapper = mount(MdiCup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
