
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVanishQuarter from "../../src/components/MdiVanishQuarter.vue";

test("MdiVanishQuarter snapshot", () => {
  const wrapper = mount(MdiVanishQuarter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
