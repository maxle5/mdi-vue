
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkOff from "../../src/components/MdiLinkOff.vue";

test("MdiLinkOff snapshot", () => {
  const wrapper = mount(MdiLinkOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
