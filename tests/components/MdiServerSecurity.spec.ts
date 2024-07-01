
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerSecurity from "../../src/components/MdiServerSecurity.vue";

test("MdiServerSecurity snapshot", () => {
  const wrapper = mount(MdiServerSecurity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
