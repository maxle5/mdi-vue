
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoped from "../../src/components/MdiMoped.vue";

test("MdiMoped snapshot", () => {
  const wrapper = mount(MdiMoped, {});
  expect(wrapper.html()).toMatchSnapshot();
});
