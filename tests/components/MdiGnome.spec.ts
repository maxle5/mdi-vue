
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGnome from "../../src/components/MdiGnome.vue";

test("MdiGnome snapshot", () => {
  const wrapper = mount(MdiGnome, {});
  expect(wrapper.html()).toMatchSnapshot();
});
