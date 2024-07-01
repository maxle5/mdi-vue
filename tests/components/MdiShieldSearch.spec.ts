
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldSearch from "../../src/components/MdiShieldSearch.vue";

test("MdiShieldSearch snapshot", () => {
  const wrapper = mount(MdiShieldSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
