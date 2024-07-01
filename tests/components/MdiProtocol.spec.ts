
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProtocol from "../../src/components/MdiProtocol.vue";

test("MdiProtocol snapshot", () => {
  const wrapper = mount(MdiProtocol, {});
  expect(wrapper.html()).toMatchSnapshot();
});
