
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignalVariant from "../../src/components/MdiSignalVariant.vue";

test("MdiSignalVariant snapshot", () => {
  const wrapper = mount(MdiSignalVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
