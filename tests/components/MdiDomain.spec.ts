
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDomain from "../../src/components/MdiDomain.vue";

test("MdiDomain snapshot", () => {
  const wrapper = mount(MdiDomain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
