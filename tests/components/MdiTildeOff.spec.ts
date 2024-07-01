
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTildeOff from "../../src/components/MdiTildeOff.vue";

test("MdiTildeOff snapshot", () => {
  const wrapper = mount(MdiTildeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
