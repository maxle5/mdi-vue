
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEgg from "../../src/components/MdiEgg.vue";

test("MdiEgg snapshot", () => {
  const wrapper = mount(MdiEgg, {});
  expect(wrapper.html()).toMatchSnapshot();
});
