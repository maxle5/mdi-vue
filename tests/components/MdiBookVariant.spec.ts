
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookVariant from "../../src/components/MdiBookVariant.vue";

test("MdiBookVariant snapshot", () => {
  const wrapper = mount(MdiBookVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
