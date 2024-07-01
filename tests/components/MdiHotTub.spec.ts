
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHotTub from "../../src/components/MdiHotTub.vue";

test("MdiHotTub snapshot", () => {
  const wrapper = mount(MdiHotTub, {});
  expect(wrapper.html()).toMatchSnapshot();
});
