
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppleIcloud from "../../src/components/MdiAppleIcloud.vue";

test("MdiAppleIcloud snapshot", () => {
  const wrapper = mount(MdiAppleIcloud, {});
  expect(wrapper.html()).toMatchSnapshot();
});
