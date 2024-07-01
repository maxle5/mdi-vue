
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHanger from "../../src/components/MdiHanger.vue";

test("MdiHanger snapshot", () => {
  const wrapper = mount(MdiHanger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
