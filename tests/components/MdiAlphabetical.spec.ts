
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabetical from "../../src/components/MdiAlphabetical.vue";

test("MdiAlphabetical snapshot", () => {
  const wrapper = mount(MdiAlphabetical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
