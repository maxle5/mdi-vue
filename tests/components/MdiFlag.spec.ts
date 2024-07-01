
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlag from "../../src/components/MdiFlag.vue";

test("MdiFlag snapshot", () => {
  const wrapper = mount(MdiFlag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
