
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabetTengwar from "../../src/components/MdiAlphabetTengwar.vue";

test("MdiAlphabetTengwar snapshot", () => {
  const wrapper = mount(MdiAlphabetTengwar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
