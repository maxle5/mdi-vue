
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSilo from "../../src/components/MdiSilo.vue";

test("MdiSilo snapshot", () => {
  const wrapper = mount(MdiSilo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
