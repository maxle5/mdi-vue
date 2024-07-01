
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDns from "../../src/components/MdiDns.vue";

test("MdiDns snapshot", () => {
  const wrapper = mount(MdiDns, {});
  expect(wrapper.html()).toMatchSnapshot();
});
