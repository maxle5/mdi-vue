
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeg from "../../src/components/MdiKeg.vue";

test("MdiKeg snapshot", () => {
  const wrapper = mount(MdiKeg, {});
  expect(wrapper.html()).toMatchSnapshot();
});
