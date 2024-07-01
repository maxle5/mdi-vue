
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoonFull from "../../src/components/MdiMoonFull.vue";

test("MdiMoonFull snapshot", () => {
  const wrapper = mount(MdiMoonFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
