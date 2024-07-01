
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHops from "../../src/components/MdiHops.vue";

test("MdiHops snapshot", () => {
  const wrapper = mount(MdiHops, {});
  expect(wrapper.html()).toMatchSnapshot();
});
