
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHvac from "../../src/components/MdiHvac.vue";

test("MdiHvac snapshot", () => {
  const wrapper = mount(MdiHvac, {});
  expect(wrapper.html()).toMatchSnapshot();
});
