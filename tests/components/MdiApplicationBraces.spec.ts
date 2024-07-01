
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationBraces from "../../src/components/MdiApplicationBraces.vue";

test("MdiApplicationBraces snapshot", () => {
  const wrapper = mount(MdiApplicationBraces, {});
  expect(wrapper.html()).toMatchSnapshot();
});
